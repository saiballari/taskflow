const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

console.log("URI =", process.env.MONGODB_URI);

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 TaskFlow Backend is Running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});