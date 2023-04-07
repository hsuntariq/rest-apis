const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const registerUser = AsyncHandler(async (req, res) => {
  // get data from the body
  const { name, email, password } = req.body;
  //   generate salt
  const salt = await bcrypt.genSalt(10);
  //   hash the passoword
  const hashedPassword = await bcrypt.hash(password, salt);
  //  check whether the user already exists
  const user = await User.findOne({
    email,
  });
  //   throw an error if user alreadyt exists
  if (user) {
    res.status(400);
    throw new Error("user already exists");
  }
  //   create new user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  //   send back created user
  res.status(200).json({
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token: generateToken(newUser._id),
  });
});

const loginUser = AsyncHandler(async (req, res) => {
  // get the data from the body
  const { email, password } = req.body;

  // check if user exists
  const user = await User.findOne({
    email,
  });
  if (!user) {
    res.status(404);
    throw new Error("Invalid credentials");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }
});
const getMe = (req, res) => {
  res.status(200).json({
    message: "user data display",
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.APP_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
