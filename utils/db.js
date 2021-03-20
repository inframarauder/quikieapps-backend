const mongoose = require("mongoose");

async function connectDB() {
  try {
    const { DB_URI } = process.env;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    console.log("Database connected!");
  } catch (error) {
    console.error("Error in connecting to DB\n", error);
  }
}

module.exports = { connectDB };
