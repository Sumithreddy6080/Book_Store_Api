require('dotenv').config();
const mongoose =  require('mongoose');

const connectDB = async ()=>{
    try{
        const URI = process.env.MONGO_URI;
        await mongoose.connect(URI);
        console.log("MongoDB Connected Successfully");
    }catch(err){
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
}

module.exports = connectDB;
