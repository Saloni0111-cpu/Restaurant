import mongoose from 'mongoose';



export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'RESTAURANT',})
        .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(`Some error occur ${err}`);
    })
}