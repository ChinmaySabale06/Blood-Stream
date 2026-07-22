// routes/appointments.js
import express from 'express';
import { body, validationResult } from 'express-validator';
import Appointment from '../models/Appointment.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// GET /api/appointments - list all appointments
router.get('/', async (req, res) => {
  try {
    const { status, scheduledBy } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (scheduledBy) filter.scheduledBy = scheduledBy;
    
    const appointments = await Appointment.find(filter).sort({ date: 1 });
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/appointments - create a new appointment
router.post('/', requireAuth, [
  body('donor').notEmpty().withMessage('Donor name is required'),
  body('date').isISO8601().toDate().withMessage('Valid date is required'),
  body('location').notEmpty().withMessage('Location is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const appointmentData = { ...req.body };
    const appointment = await Appointment.create(appointmentData);
    res.status(201).json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /api/appointments/:id/status - update appointment status
router.patch('/:id/status', requireAuth, [
  body('status').isIn(['Pending', 'Confirmed', 'Cancelled', 'Completed']).withMessage('Valid status required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) return res.status(404).json({ error: 'Appointment not found' });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/appointments/:id - delete an appointment
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Appointment.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Appointment not found' });
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;