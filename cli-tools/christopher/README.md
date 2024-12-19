# Christopher's CLI Tool

A Node.js command-line utility for adding and finding auction items data into a MongoDB collection.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Astrotope/mr-level-05-fsd-mission-05-phase-01-group-01.git
    ```

2. Navigate to the project directory:
    ```bash
    cd mr-level-05-fsd-mission-05-phase-01-group-01/cli-tools/christopher
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the MongoDB server:
2. Run the CLI tool:
    ```bash
    node commands.js
    ```
3. Follow the prompts to add or find auction items. Additionally, you can import initial items from a JSON file.

## Features

- **Add Auction Items**: Add new auction items to the database.
- **Find Auction Items**: Search for auction items based on title or description.
- **Import Initial Items**: Import initial data from a JSON file into the database.

## Examples

1. Add a new item:
    ```bash
    node commands.js add "Laptop" "A new laptop" 100 200
    ```

2. Find an item:
    ```bash
    node commands.js find "laptop"
    ```

3. Import initial items:
    ```bash
    node commands.js import items.json
    ```

## Author

- Christopher Ryan (christophermissionready)
   
