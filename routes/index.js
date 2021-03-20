const router = require("express").Router();
const {
  createRecord,
  listRecords,
  deleteRecord,
} = require("../controllers/stockdata.controller");

router.get("/", listRecords);
router.post("/", createRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
