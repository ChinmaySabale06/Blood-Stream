// routes/api/camps.js
import express from 'express';
const router = express.Router();
import BloodCamp from '../../models/BloodCamp.js';

// @route   GET api/camps
// @desc    Get all blood camps
// @access  Public
router.get('/', async (req, res) => {
  try {
    const camps = await BloodCamp.find().sort({ date: 1 });
    res.json(camps);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/camps
// @desc    Create a new blood camp
// @access  Public
router.post('/', async (req, res) => {
  const { campName, organizerName, contactNumber, date, location, description } = req.body;
  try {
    const newCamp = new BloodCamp({
      campName,
      organizerName,
      contactNumber,
      date,
      location,
      description,
    });

    const camp = await newCamp.save();
    res.json(camp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// module.exports = router;
export default router;