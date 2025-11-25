// models/Appointment.js
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  donor: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "Confirmed", "Cancelled", "Completed"], 
    default: "Pending" 
  },
  scheduledBy: { type: String }, // Clerk ID of scheduler
  notes: { type: String },
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;