import { connect } from 'mongoose';
import 'dotenv/config';

// conecting to local mongodb with two parameters to avoid warnings and error callback function
const mongoConnect = async () => {
    // var mongodbURI = "mongodb://127.0.0.1:27017/restaurantdb"
    await connect(process.env.mongodb_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Connected to succesfully to mongodb')
}

export default mongoConnect()
