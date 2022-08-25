const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  { 
    image: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admission", admissionSchema);
