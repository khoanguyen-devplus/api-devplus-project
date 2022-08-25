const mongoose = require("mongoose");

const concernSchema = new mongoose.Schema(
  {
    concerns: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    img: { type: String, required: true },
    video: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Concern", concernSchema);
