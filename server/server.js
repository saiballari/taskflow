const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/test", (req, res) => {
  res.send("Test route working");
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 TaskFlow Backend is Running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});