const mongoose = require("mongoose");

const sidebarSchema = new mongoose.Schema(
  {
    logoImg: { type: String, required: true },
    desc: { type: String, required: true },
    gallery: { type: Array, required: true },
    mapImg: { type: String, required: true },
    socialIcon: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sidebar", sidebarSchema);
