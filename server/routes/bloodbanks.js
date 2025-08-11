// routes/bloodbanks.js
import express from "express";
import fs from "fs";
import path from "path";
import parse from "csv-parser"; // Corrected import for csv-parser
import { fileURLToPath } from 'url';

const router = express.Router();

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Array to store parsed blood bank data
let bloodBanksData = [];

// Path to the CSV file
const csvFilePath = path.join(__dirname, '../bloodbanks.csv'); // Adjust path if your CSV is elsewhere

/**
 * Loads and parses the bloodbanks.csv file into memory.
 * This function is called once when the server starts.
 */
const loadBloodBanksData = () => {
  console.log(`Loading blood bank data from: ${csvFilePath}`);
  const results = [];
  fs.createReadStream(csvFilePath)
    .pipe(parse({ // Now 'parse' should be a function
      mapHeaders: ({ header }) => header.trim() // Trim headers to avoid whitespace issues
    }))
    .on('data', (data) => {
      // Clean and map data to a more usable format
      const latitude = parseFloat(data.Latitude);
      const longitude = parseFloat(data.Longitude);

      // Only add data if latitude and longitude are valid numbers
      if (!isNaN(latitude) && !isNaN(longitude)) {
        results.push({
          name: data['Blood Bank Name'] || 'N/A',
          vicinity: data.Address || 'N/A',
          latitude: latitude,
          longitude: longitude,
          contact: data['Contact No'] || data.Mobile || 'N/A',
          category: data.Category || 'N/A',
          serviceTime: data['Service Time'] || 'N/A',
          // Add other relevant fields if needed
        });
      }
    })
    .on('end', () => {
      bloodBanksData = results;
      console.log(`Loaded ${bloodBanksData.length} blood banks from CSV.`);
    })
    .on('error', (error) => {
      console.error("Error loading blood bank CSV data:", error);
    });
};

// Call the function to load data when the module is imported
loadBloodBanksData();

/**
 * Calculates the distance between two geographical points using the Haversine formula.
 * @param {number} lat1 - Latitude of point 1 in degrees.
 * @param {number} lon1 - Longitude of point 1 in degrees.
 * @param {number} lat2 - Latitude of point 2 in degrees.
 * @param {number} lon2 - Longitude of point 2 in degrees.
 * @returns {number} Distance in meters.
 */
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in meters
  return d;
};

/**
 * GET /api/bloodbanks/nearby
 * Fetches nearby blood banks from the loaded CSV data based on latitude and longitude.
 * Query parameters:
 * - lat: User's latitude (required)
 * - lng: User's longitude (required)
 * - radius: Search radius in meters (optional, default 50000m)
 */
router.get("/nearby", (req, res) => {
  const { lat, lng, radius } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ message: "Missing latitude or longitude" });
  }

  const userLat = parseFloat(lat);
  const userLng = parseFloat(lng);
  const searchRadius = parseFloat(radius) || 50000; // Default to 50 km

  if (isNaN(userLat) || isNaN(userLng)) {
    return res.status(400).json({ message: "Invalid latitude or longitude" });
  }

  const nearbyBanks = bloodBanksData.filter(bank => {
    // Ensure bank has valid lat/lng before calculating distance
    if (typeof bank.latitude !== 'number' || typeof bank.longitude !== 'number') {
      return false;
    }
    const distance = haversineDistance(userLat, userLng, bank.latitude, bank.longitude);
    return distance <= searchRadius;
  });

  if (nearbyBanks.length === 0) {
    console.log("No blood banks found within the specified radius.");
  }

  res.json(nearbyBanks);
});

export default router;