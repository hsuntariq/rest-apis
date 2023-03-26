const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "This is a get request",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "this is a post request",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: `id no:${req.params.id} updated`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `id no:${req.params.id} deleted`,
  });
});

module.exports = router;
