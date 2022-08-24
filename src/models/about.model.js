const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    subTitleAbout: { type: String, required: true },
    titleAbout: { type: String, required: true },
    descAbout: { type: String, required: true },
    titleBoard: { type: String, required: true },
    itemsBoard: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
