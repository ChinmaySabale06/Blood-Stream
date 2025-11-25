// models/BloodRequest.js
import mongoose from 'mongoose';

const bloodRequestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  bloodType: { type: String, required: true, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
  units: { type: Number, required: true, min: 1 },
  urgency: { type: String, required: true, enum: ["Normal", "High", "Critical"], default: "Normal" },
  hospitalName: { type: String, required: true },
  city: { type: String, required: true },
  contactNumber: { type: String, required: true },
  neededBy: { type: Date, required: true },
  reason: { type: String },
  status: { type: String, enum: ["Pending", "Fulfilled", "Cancelled"], default: "Pending" },
  requestedBy: { type: String }, // Clerk ID of requester
}, { timestamps: true });

const BloodRequest = mongoose.model('BloodRequest', bloodRequestSchema);
export default BloodRequest;