const AsyncHandler = require("express-async-handler");
const Goals = require("../models/goalModel");
const errorHandling = require("../middleware/errorMiddleware");
const getData = AsyncHandler(async (req, res) => {
  const goals = await Goals.find();
  res.status(200).json({
    goals,
  });
});

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

const updateData = AsyncHandler(async (req, res) => {
  // check if the specific goal exists
  let goal = await Goals.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Cant find the goal");
  }

  let updateGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

const deleteData = AsyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("goal not found");
  }
  // if goal is found
  await goal.deleteOne();
  res.status(200).json({
    _id: goal.id,
  });
});

module.exports = {
  getData,
  postData,
  deleteData,
  updateData,
};
