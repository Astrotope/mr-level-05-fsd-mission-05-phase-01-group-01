# Auction CLI Tool

A Node.js command-line utility for managing auction items in a MongoDB database. This tool allows you to list, add, update, delete, search, and seed auction items directly from the terminal.

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (running locally)

### Steps to Install

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Astrotope/mr-level-05-fsd-mission-05-phase-01-group-01.git
   cd mr-level-05-fsd-mission-05-phase-01-group-01/cli-tools/swaroop
   
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start MongoDB:**

   Make sure MongoDB is running locally. You can start it with:

   ```bash
   mongod
   ```

4. **Run the CLI Tool:**

   The CLI tool is located in the `cli.js` file, which you can use to interact with the auction database. Use the following command:

   ```bash
   npm run <command>
   ```

   The available commands are detailed below.

## Usage

### Commands

1. **Seed the database:**

   Populate the database with initial auction items from a sample JSON file.

   ```bash
   npm run seed
   ```

   This command will:

   - Clear any existing items in the `auctionDB` collection.
   - Insert new items from the `auction_items.json` file into the database.

2. **Search auction items:**

   Search for auction items by their title or description.

   ```bash
   auction-cli search <query>
   ```

   Example:

   ```bash
   auction-cli search "bike"
   ```

   This command will search the database for auction items matching the given search query and display the results.

3. **List all auction items:**

   List all auction items in the database.

   ```bash
   auction-cli list
   ```

   Example output:

   ```bash
   Found 3 auction items:
   1. ID: 123456 - Road Bike - Lightweight road bike with a comfortable design $200
   2. ID: 789101 - Antique Vase - A beautiful and rare antique vase from the 18th century $500
   ```

4. **Add a new auction item:**

   Add a new auction item to the database with the title, description, and price.

   ```bash
   auction-cli add <title> <description> <price>
   ```

   Example:

   ```bash
   auction-cli add "Laptop" "A brand new gaming laptop" 1200
   ```

   This command will add a new auction item with the given details to the database.

5. **Delete an auction item by ID:**

   Delete an auction item from the database by its unique ID.

   ```bash
   auction-cli delete <id>
   ```

   Example:

   ```bash
   auction-cli delete 1234567890abcdef12345678
   ```

   This command will delete the item with the specified ID.

6. **Update an auction item by ID:**

   Update the details (title, description, price) of an auction item using its unique ID.

   ```bash
   auction-cli update <id> <title> <description> <price>
   ```

   Example:

   ```bash
   auction-cli update 1234567890abcdef12345678 "Updated Laptop" "A newly updated gaming laptop" 1300
   ```

   This command will update the auction item with the given ID.

### Help Command

To display help information about the available commands and options:

```bash
auction-cli --help


### Key Updates:

- The command to **seed the database** is now referenced with `npm run seed` instead of directly running the `seed.cjs` file.
- **Running the application** is done with `npm start`, which will execute the `server.cjs` file.
- You can still use the `auction-cli` commands like `search`, `list`, `add`, `update`, and `delete` from the terminal.


```
