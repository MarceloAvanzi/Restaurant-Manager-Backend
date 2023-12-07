const mongoose = require('mongoose');
require('dotenv/config');

// conecting to local mongodb with two parameters to avoid warnings and error callback function
const mongoConnect = async () => {
    // var mongodbURI = "mongodb://127.0.0.1:27017/restaurantdb"
    await mongoose.connect(process.env.mongodbURI);
    console.log('Connected to succesfully to mongodb')
}

module.exports = mongoConnect()
