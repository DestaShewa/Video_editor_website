// This is the complete and final code for server/index.js

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Successfully connected to the MySQL database.");
});

// GET all portfolio videos
app.get("/api/portfolio", (req, res) => {
  const sql = "SELECT * FROM portfolio_videos ORDER BY id DESC";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ message: "DB Error" });
    return res.json(data);
  });
});

// POST a new portfolio video
app.post("/api/portfolio", (req, res) => {
  const { title, category, video_url, thumbnail_url } = req.body;
  const sql =
    "INSERT INTO portfolio_videos (title, category, video_url, thumbnail_url) VALUES (?, ?, ?, ?)";
  const values = [title, category, video_url, thumbnail_url];
  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error on insert" });
    return res
      .status(201)
      .json({ message: "Video added successfully", id: result.insertId });
  });
});

// DELETE a portfolio video
app.delete("/api/portfolio/:id", (req, res) => {
  const videoId = req.params.id;
  const sql = "DELETE FROM portfolio_videos WHERE id = ?";
  db.query(sql, [videoId], (err, result) => {
    if (err) return res.status(500).json({ message: "DB Error on delete" });
    return res.status(200).json({ message: "Video deleted successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
