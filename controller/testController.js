const AsyncHandler = require("express-async-handler");
const Goals = require("../models/goalModel");
const getData = (req, res) => {
  res.status(200).json({
    message: "this is a get request",
  });
};

const postData = AsyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("please fill out all the fields");
  }
  const data = await Goals.create({
    goal: req.body.name,
  });

  res.status(200).json({
    data,
  });
});

const updateData = (req, res) => {
  res.status(200).json({
    message: `id no:${req.params.id} updated`,
  });
};

const deleteData = (req, res) => {
  res.status(200).json({
    message: `id no:${req.params.id} deleted`,
  });
};

module.exports = {
  getData,
  postData,
  deleteData,
  updateData,
};
