const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/userController");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getuser", getMe);

module.exports = router;
