import mongoose from 'mongoose';

// conecting to local mongodb with two parameters to avoid warnings and error callback function
export default  () => {
    var mongodbURI = "mongodb://127.0.0.1:27017/restaurantdb"
    mongoose.connect(mongodbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Connected to succesfully to mongodb')
    }).catch((err) => {
        console.log(err)
    })
}

