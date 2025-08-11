// routes/saveUser.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST endpoint to save a new user
// This is called from the frontend after a successful Clerk sign-in/sign-up.
router.post("/save-user", async (req, res) => {
  try {
    // Destructure the required user data from the request body.
    const { clerkId, email, role } = req.body;

    // Optional: Check if a user with the given clerkId already exists.
    // This prevents creating duplicate entries if the API is called multiple times.
    const existing = await User.findOne({ clerkId });
    if (existing) {
      console.log(`User with clerkId ${clerkId} already exists.`);
      return res.status(200).json({ message: "User already exists" });
    }

    // Create a new user document in the MongoDB database using the Mongoose model.
    await User.create({ clerkId, email, role });

    // Respond with a success message.
    res.status(201).json({ message: "User saved successfully" });
  } catch (err) {
    // If an error occurs, log it and send a 500 status code.
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET endpoint to retrieve all users
// This is an example endpoint for development/admin purposes.
router.get("/all-users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching all users:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
