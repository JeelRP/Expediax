const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB using the provided MONGO_URI
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error is ${err.message}`);
  }
};

module.exports = connectDB;
