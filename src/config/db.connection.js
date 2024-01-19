require('dotenv').config({ path: './env' });
const mongoose = require("mongoose");


const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.CONNECTION_STRING}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true

    });
    console.log("Connection to db is successful.");

  } catch (err) {
    console.error("Error while connecting to the DB:", err);
  }
};

module.exports = connectDb;