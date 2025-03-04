require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema (Renamed from studentSchema)
const userSchema = new mongoose.Schema({
  registerNo: String,
  name: String,
  email: String,
  password: String,
  photo: String,
  semesterResults: [String], // GPA List
  assignmentsCompleted: Number,
  totalAssignments: Number,
  achievements: [String],
});

const User = mongoose.model("User", userSchema);

// **1. User Login API**
app.post("/login", async (req, res) => {
  const { registerNo, password } = req.body;

  try {
    const user = await User.findOne({ registerNo });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

    const token = jwt.sign({ registerNo: user.registerNo }, "secretKey", { expiresIn: "1h" });
    res.json({ token, registerNo: user.registerNo });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
});

// **2. Fetch User Data for Dashboard**
app.get("/panel", async (req, res) => {
  const { registerNo } = req.query;

  try {
    const user = await User.findOne({ registerNo });
    if (!user) return res.status(404).json({ message: "User data not found!" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
