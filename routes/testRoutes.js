const express = require("express");
const {
  getData,
  postData,
  updateData,
  deleteData,
} = require("../controller/testController");
const router = express.Router();
router.get("/", getData);
router.post("/", postData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

module.exports = router;
