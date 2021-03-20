const { Schema, model } = require("mongoose");

const stockdataSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  stockSymbol: {
    type: String,
    required: true,
    unique: true,
  },
  marketCap: {
    type: String,
    required: true,
  },
  stockPrice: {
    type: Number,
    required: true,
  },
});

module.exports = model("Stockdata", stockdataSchema);
