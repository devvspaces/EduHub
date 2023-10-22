const mongoose = require("mongoose");
require("dotenv").config();
// Mongodb url from env
const DB_URL = process.env.MONGODB_URL;

async function connectToDatabase() {
    try {
        // Connect to the MongoDB database using Mongoose.
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

module.exports = connectToDatabase;
