const {program} = require('commander');
const {addItem, findItem} = require('./index');

program
.version('1.0.0')
.description('Auction CLI')

program
.command('add <title> <description> <start_price> <reserve_price>')
.description('Add a new item')
.alias('a')
.action((title, description, start_price, reserve_price) => {
    addItem({ title, description, start_price, reserve_price })
        .then(() => {
            console.log('Item added successfully!');
            process.exit(); // Stop the program after the command is executed
        })
        .catch((error) => {
            console.error('Error adding item:', error);
            process.exit(1); // Stop the program with an error code
        });
});


program
.command('find <name>')
.description('Find an item')
.alias('f')
.action((name) => {
    findItem(name)
        .then((items) => {
            if (items.length > 0) {
                console.log('Items found:', items);
            } else {
                console.log('No items found.');
            }
            process.exit(); // Stop the program after the command is executed
        })
        .catch((error) => {
            console.error('Error finding item:', error);
            process.exit(1); // Stop the program with an error code
        });
});

// A command to import initial items from a JSON file
program
    .command('import <file>')
    .description('Import items from a JSON file')
    .action((file) => {
        const fs = require('fs');
        const path = require('path');

        const filePath = path.resolve(file);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            }
            try {
                const items = JSON.parse(data);
                items.forEach(item => {
                    addItem(item);
                });
                console.info(`${items.length} items added successfully.`);
            } catch (parseError) {
                console.error(`Error parsing JSON: ${parseError.message}`);
            }
        });
    });
 
program.parse(process.argv);
