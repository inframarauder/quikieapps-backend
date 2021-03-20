const router = require("express").Router();
const {
  createRecord,
  getRecord,
  deleteRecord,
} = require("../controllers/stockdata.controller");

router.get("/:stockSymbol", getRecord);
router.post("/", createRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
