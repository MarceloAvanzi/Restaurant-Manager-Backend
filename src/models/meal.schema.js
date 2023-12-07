const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    
    portion: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("meals", mealSchema); // Need to link the collection (table) to a specifc schema