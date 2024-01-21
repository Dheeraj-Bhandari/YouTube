const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


exports.DBconnection = () => {
    const MONGOURL = process.env.MONGODB;

    mongoose.connect(MONGOURL, { useNewUrlParser: true });

    mongoose.connection.on("connected", () => {
        console.log("Database Connected");
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Database Disconnected");
    })

    mongoose.connection.on("error", (error) => {
        console.log("Database Dis-Connected with Error", error)
    })
}
