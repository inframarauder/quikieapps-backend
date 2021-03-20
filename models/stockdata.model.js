const { Schema, model } = require("mongoose");

const stockdataSchema = new Schema({
  company_name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  market_cap: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  saved: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Stockdata", stockdataSchema);
