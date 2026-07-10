const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Test Route
router.get("/check", (req, res) => {
  res.json({
    success: true,
    message: "Auth routes working",
  });
});

module.exports = router;