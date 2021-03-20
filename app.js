require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./utils/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running on port", port);
  db.connectDB();
});
