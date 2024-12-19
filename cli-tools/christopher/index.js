const {mongoose} = require("mongoose");

// Map mongoose promise to global promise
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect("mongodb://localhost:27017/customercli",{
    // useMongoClient: true
})

// Import model
const Item = require("./models/item");

// Add item
const addItem = async (item) => {
    try {
        const createdItem = await Item.create(item);
        console.info(createdItem);
        return createdItem;
    } catch (error) {
        throw new Error(error.message); // Ensure the error is thrown
    }
}

// Find item
const findItem = async (name) => {
    // Make case insensitive
    const search = new RegExp(name, "i");
    try {
        const items = await Item.find({ $or: [{ title: search }, { description: search }] });
        console.info(items);
        console.info(`${items.length} matches found`);
        return items; // Ensure the results are returned
    } catch (error) {
        console.error('Error finding items:', error);
        throw new Error('Error finding items');
    }
}


// Export
module.exports = {addItem, findItem}