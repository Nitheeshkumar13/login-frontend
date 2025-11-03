import express from "express";
import User from "../models/user.js";

const router = express.Router();

// Register user (optional, for testing)
router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const existing = await User.findOne({ username });
    if (existing) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ username, password, role });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    res.json({ success: true, role: user.role });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
