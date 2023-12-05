require('dotenv').config();
const mongoose = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)

// mongoose.connect(mongoDbString, {
//     dbName: "UserData"
// })

const db = mongoose.connection

module.exports = db;

