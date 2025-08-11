// models/BloodStock.js
import mongoose from "mongoose";

const bloodStockSchema = new mongoose.Schema({
  bloodType: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  // Status to track if the unit is available, used, or expired.
  status: {
    type: String,
    enum: ["available", "used", "expired"],
    default: "available",
  },
  // A reference to the donation event or donor if you want to link it later.
  // donationId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'BloodDonation',
  // },
}, { timestamps: true });

const BloodStock = mongoose.model('BloodStock', bloodStockSchema);

export default BloodStock;
