const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes"); // 👈 Add this

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); 

// Test Route
app.get("/test", (req, res) => {
  res.send("Test route working");
});

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 TaskFlow Backend is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});