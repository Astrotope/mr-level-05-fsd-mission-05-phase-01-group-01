#!/usr/bin/env node

import { program } from "commander";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import AuctionItem from "./Models/auctionItem.cjs";  // Adjust path if necessary

// Handle __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MongoDB connection setup
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auctionDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.green("Connected to MongoDB"));
  } catch (err) {
    console.error(chalk.red("Error connecting to MongoDB:"), err);
    process.exit(1);
  }
};

// Seed the database
const seedDatabase = async () => {
  try {
    const filePath = path.join(__dirname, "datasets", "auction_items.json");
    const seedData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // Clear existing data and insert new data
    await AuctionItem.deleteMany();
    console.log(chalk.yellow("Existing data cleared."));
    await AuctionItem.insertMany(seedData);
    console.log(chalk.green("Database seeded successfully!"));
  } catch (err) {
    console.error(chalk.red("Error seeding database:"), err);
  } finally {
    mongoose.connection.close();
  }
};

// Search auction items
const searchAuctionItems = async (query) => {
  try {
    const results = await AuctionItem.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });

    if (results.length === 0) {
      console.log(chalk.yellow("No matching items found."));
    } else {
      console.log(chalk.green(`Found ${results.length} matching items:`));
      results.forEach((item, index) => {
        const price = item.start_price !== undefined && item.start_price !== null 
          ? `$${item.start_price}` 
          : "$N/A"; // Display $N/A if start_price is undefined or null
        
        // Display ID, title, description, and price
        console.log(`${index + 1}. ID: ${item._id} - ${item.title} - ${item.description} ${price}`);
      });
    }
  } catch (err) {
    console.error(chalk.red("Error searching database:"), err);
  } finally {
    mongoose.connection.close();
  }
};

// List all auction items
const listAuctionItems = async () => {
  try {
    const items = await AuctionItem.find();
    if (items.length === 0) {
      console.log(chalk.yellow("No auction items found."));
    } else {
      console.log(chalk.green(`Found ${items.length} auction items:`));
      items.forEach((item, index) => {
        const price = item.start_price !== undefined && item.start_price !== null 
          ? `$${item.start_price}` 
          : "$N/A"; // Display $N/A if start_price is undefined or null
        
        // Display ID, title, description, and price
        console.log(`${index + 1}. ID: ${item._id} - ${item.title} - ${item.description} ${price}`);
      });
    }
  } catch (err) {
    console.error(chalk.red("Error retrieving auction items:"), err);
  } finally {
    mongoose.connection.close();
  }
};

// Add a new auction item
const addAuctionItem = async (title, description, price) => {
  try {
    const newItem = new AuctionItem({ title, description, price: parseFloat(price) });
    await newItem.save();
    console.log(chalk.green(`Added new item: ${title}`));
  } catch (err) {
    console.error(chalk.red("Error adding item:"), err);
  } finally {
    mongoose.connection.close();
  }
};

// Delete an auction item by ID
const deleteAuctionItem = async (id) => {
  try {
    const result = await AuctionItem.findByIdAndDelete(id);
    if (result) {
      console.log(chalk.green(`Deleted item with ID: ${id}`));
    } else {
      console.log(chalk.yellow(`No item found with ID: ${id}`));
    }
  } catch (err) {
    console.error(chalk.red("Error deleting item:"), err);
  } finally {
    mongoose.connection.close();
  }
};

// Update an auction item by ID
const updateAuctionItem = async (id, title, description, price) => {
  try {
    const result = await AuctionItem.findByIdAndUpdate(
      id,
      { title, description, price: parseFloat(price) },
      { new: true }
    );
    if (result) {
      console.log(chalk.green(`Updated item: ${result.title}`));
    } else {
      console.log(chalk.yellow(`No item found with ID: ${id}`));
    }
  } catch (err) {
    console.error(chalk.red("Error updating item:"), err);
  } finally {
    mongoose.connection.close();
  }
};

// Define CLI commands
program.version("1.0.0").description("Auction CLI Tool");

program
  .command("seed")
  .description("Seed the database with auction items")
  .action(async () => {
    await connectToDB();
    await seedDatabase();
  });

program
  .command("search <query>")
  .description("Search auction items by query")
  .action(async (query) => {
    await connectToDB();
    await searchAuctionItems(query);
  });

program
  .command("list")
  .description("Display all auction items")
  .action(async () => {
    await connectToDB();
    await listAuctionItems();
  });

program
  .command("add <title> <description> <price>")
  .description("Add a new auction item")
  .action(async (title, description, price) => {
    await connectToDB();
    await addAuctionItem(title, description, price);
  });

program
  .command("delete <id>")
  .description("Delete an auction item by ID")
  .action(async (id) => {
    await connectToDB();
    await deleteAuctionItem(id);
  });

program
  .command("update <id> <title> <description> <price>")
  .description("Update an auction item by ID")
  .action(async (id, title, description, price) => {
    await connectToDB();
    await updateAuctionItem(id, title, description, price);
  });

program.parse(process.argv);
