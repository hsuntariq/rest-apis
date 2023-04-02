const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected on ${mongoose.connection.host.cyan}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
