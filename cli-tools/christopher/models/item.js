const mongoose = require('mongoose')

// Item Schema
const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_price: {
        type: String,
        required: true
    },
    reserve_price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', itemSchema)