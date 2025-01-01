const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

const issues = [
  { id: 1, image: "https://github.com/nadiashovkovy/totally-tech/blob/main/public/2024.png" },
  { id: 2, image: "https://example.com/newsletter2.png" },
  { id: 3, image: "https://example.com/newsletter3.png" },
];

// API route to fetch issues
app.get("/api/issues", (req, res) => {
  res.json(issues);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

