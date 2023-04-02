const mongoose = require("mongoose");

const goalModel = mongoose.Schema(
  {
    goal: {
      type: String,
      required: [true, "please input all the fields"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalModel);
