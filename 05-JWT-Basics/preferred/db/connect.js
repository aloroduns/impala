const mongoose = require('mongoose')

const connectDB = async(url) =>{
   try {
        await mongoose.connect(url, {
        useNewUrlParser: true,
        })
        console.log('MongoDB connected...');
    } catch(error) {
        console.error(error.message);
        process.exit(1)
    }
};

module.exports = connectDB;