import mongoose from 'mongoose';

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

export default mongoose.model("users", userSchema); // Need to link the collection (table) to a specifc schema