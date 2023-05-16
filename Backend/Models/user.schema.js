const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    birthday: {
        type: Date,
    },
    
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    
    updatedAt: {
        type: Date,
        default: () =>  Date.now()
    }
})

module.exports = mongoose.model("users", userSchema); // Need to link the schema to a specifc collection (table)