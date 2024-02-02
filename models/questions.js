const mongoose = require("mongoose");
const Options = require('./options');

const questionSchema = new mongoose.Schema(
  {
    question : {
      type: String,
      required: true,
    },
    options: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Options",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
