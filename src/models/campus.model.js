const mongoose = require("mongoose");

const campusSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    items: [
      {
        img: { type: String, required: true },
        desc: { type: String, required: true },
      }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("campus", campusSchema);