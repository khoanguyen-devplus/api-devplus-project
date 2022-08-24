const { testimonialModel } = require("../models");

const getTestimonial = async () => {
  const testimonial = await testimonialModel.find();
  return testimonial;
};

const postTestimonial = async (body) => {
  const newTestimonial = new testimonialModel(body);
  const savedTestimonial = await newTestimonial.save();
  return savedTestimonial;
};

const putTestimonial = async (id, body) => {
  const updatedTestimonial = await testimonialModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedTestimonial;
};

const deleteTestimonial = async (id) => {
  await testimonialModel.findByIdAndDelete(id);
  return "This testimonial has been deleted!";
};

module.exports = {
  getTestimonial,
  postTestimonial,
  putTestimonial,
  deleteTestimonial,
};
