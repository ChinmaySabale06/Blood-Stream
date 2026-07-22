// routes/saveUser.js
import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// POST endpoint to save a new user
// This is called from the frontend after a successful Clerk sign-in/sign-up.
router.post(
  "/save-user",
  requireAuth,
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("role").isIn(["hospital", "organization"]).withMessage("Valid role is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      // clerkId comes from the verified session, never from the request body,
      // so a client can only ever create/find its own user record.
      const clerkId = req.auth().userId;
      const { email, role } = req.body;

      const existing = await User.findOne({ clerkId });
      if (existing) {
        return res.status(200).json({ message: "User already exists" });
      }

      await User.create({ clerkId, email, role });
      res.status(201).json({ message: "User saved successfully" });
    } catch (err) {
      console.error("Error saving user:", err);
      res.status(500).json({ error: "Server error" });
    }
  }
);

// GET endpoint to retrieve all users (paginated, requires auth)
router.get("/all-users", requireAuth, async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit, 10) || 50, 100);

    const [users, total] = await Promise.all([
      User.find().skip((page - 1) * limit).limit(limit),
      User.countDocuments(),
    ]);

    res.json({ users, total, page, limit });
  } catch (err) {
    console.error("Error fetching all users:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
