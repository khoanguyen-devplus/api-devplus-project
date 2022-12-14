const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    testimonials: [
      {
        content: { type: String, required: true },
        img: { type: String, required: true },
        name: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
