const express = require("express");
const mongoose = require("mongoose");
const AuctionItem = require("./Models/auctionItem.cjs"); // Import the model

const app = express();
const port = process.env.PORT || 3000; // Use the port from environment or default to 3000
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost/auctionDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// API to search auction items
app.post("/search", async (req, res) => {
  try {
    const { query } = req.body; // Destructure query from req.body
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const results = await AuctionItem.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Error fetching auction items" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
