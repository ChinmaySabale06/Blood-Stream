// routes/bloodrequests.js
import express from 'express';
import { body, validationResult } from 'express-validator';
import BloodRequest from '../models/BloodRequest.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// POST /api/bloodrequests - create a new blood request
router.post('/', requireAuth, [
  body('patientName').notEmpty().withMessage('Patient name is required'),
  body('bloodType').isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).withMessage('Valid blood type required'),
  body('units').isInt({ min: 1 }).withMessage('Units must be >= 1'),
  body('urgency').isIn(["Normal", "High", "Critical"]).withMessage('Valid urgency level required'),
  body('hospitalName').notEmpty().withMessage('Hospital name is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('contactNumber').notEmpty().withMessage('Contact number is required'),
  body('neededBy').isISO8601().toDate().withMessage('Valid needed by date is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const requestData = { ...req.body };
    const request = await BloodRequest.create(requestData);
    res.status(201).json(request);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/bloodrequests - list all blood requests (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { status, bloodType, urgency, city } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (bloodType) filter.bloodType = bloodType;
    if (urgency) filter.urgency = urgency;
    if (city) filter.city = { $regex: city, $options: 'i' };
    
    const requests = await BloodRequest.find(filter).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /api/bloodrequests/:id/status - update request status
router.patch('/:id/status', requireAuth, [
  body('status').isIn(['Pending', 'Fulfilled', 'Cancelled']).withMessage('Valid status required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await BloodRequest.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Request not found' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;