const mongoose = require('mongoose');

// Define the schema for auction items
const auctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  reserve_price: Number,
});

// Create and export the model
const AuctionItem = mongoose.models.AuctionItem || mongoose.model('AuctionItem', auctionSchema);

module.exports = AuctionItem;
