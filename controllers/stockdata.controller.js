const Stockdata = require("../models/stockdata.model");

exports.createRecord = async (req, res) => {
  try {
    await new Stockdata(req.body).save();
    return res.status(201).json({ message: "Stock data saved to DB!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

exports.getRecord = async (req, res) => {
  try {
    const { stockSymbol } = req.params;
    const stockdata = await Stockdata.findOne({ stockSymbol }).lean();
    return res.status(200).json(stockdata);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    await Stockdata.findByIdAndDelete(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error!" });
  }
};
