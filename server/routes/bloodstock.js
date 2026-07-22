// routes/bloodstock.js
import express from 'express';
import BloodStock from '../models/BloodStock.js';
import { body, validationResult } from 'express-validator';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Helper function to check for expired units
const updateExpiredStatus = async () => {
  const now = new Date();
  await BloodStock.updateMany(
    { expiryDate: { $lt: now }, status: "available" },
    { $set: { status: "expired" } }
  );
};

// @route   POST /api/bloodstock/add
// @desc    Add a new blood unit to the stock
// @access  Private (e.g., restricted to hospital/organization role)
router.post('/add', requireAuth, [
  body('bloodType').notEmpty().withMessage('Blood type is required.'),
  body('expiryDate').isISO8601().toDate().withMessage('Valid expiry date is required.')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { bloodType, expiryDate } = req.body;
  try {
    const newUnit = new BloodStock({
      bloodType,
      expiryDate,
    });
    const unit = await newUnit.save();
    res.status(201).json(unit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/bloodstock
// @desc    Get real-time stock count for all blood types
// @access  Public
router.get('/', async (req, res) => {
  try {
    await updateExpiredStatus();
    const stock = await BloodStock.aggregate([
      { $match: { status: 'available' } },
      { $group: {
        _id: '$bloodType',
        count: { $sum: 1 }
      }}
    ]);
    res.json(stock);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/bloodstock/:unitId
// @desc    "Remove" a blood unit by marking it as used
// @access  Private
router.delete('/:unitId', requireAuth, async (req, res) => {
  try {
    const unit = await BloodStock.findById(req.params.unitId);

    if (!unit) {
      return res.status(404).json({ msg: 'Blood unit not found' });
    }

    if (unit.status !== 'available') {
      return res.status(400).json({ msg: 'Blood unit is not available to be removed' });
    }

    unit.status = 'used';
    await unit.save();

    res.json({ msg: 'Blood unit marked as used successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
