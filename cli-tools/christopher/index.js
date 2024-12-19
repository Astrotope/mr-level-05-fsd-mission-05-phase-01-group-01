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
const addItem = (item) => {
    Item.create(item).then((item) => {    
        console.info(item);
        // db.close();
    })
}

// Find item
const findItem = async (name) => {
    // Make case insensitive
    const search = new RegExp(name, "i");
    Item.find({$or: [{title: search}, {description: search}]})
    .then((item)=>{
        console.info(item);
        console.info(`${item.length} matches found`);
        // db.close();
    })
}


// Export
module.exports = {addItem, findItem}