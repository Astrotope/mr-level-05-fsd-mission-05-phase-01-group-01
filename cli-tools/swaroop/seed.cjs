const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const AuctionItem = require("./Models/auctionItem.cjs"); // if it's defined in a separate file

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/auctionDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));

// Load seed data from JSON file
const filePath = path.join(__dirname, "datasets", "auction_items.json"); // Path to JSON file
const seedData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Function to insert data
const seedDatabase = async () => {
  try {
    // Clear existing data
    await AuctionItem.deleteMany();
    console.log("Existing data cleared.");

    // Insert new data
    await AuctionItem.insertMany(seedData);
    console.log("Data seeded successfully.");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedDatabase();
