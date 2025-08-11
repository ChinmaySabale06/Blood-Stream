// const mongoose = require('mongoose');
import mongoose from "mongoose";

const BloodCampSchema = new mongoose.Schema({
  campName: {
    type: String,
    required: true,
  },
  organizerName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

const BloodCamp = mongoose.model('BloodCamp', BloodCampSchema);

export default BloodCamp