const { testimonialService } = require("../services");

const getTestimonial = async (req, res, next) => {
  try {
    res.status(200).json(await testimonialService.getTestimonial());
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTestimonial = async (req, res, next) => {
  const testimonialBody = req.body;
  try {
    res
      .status(200)
      .json(await testimonialService.postTestimonial(testimonialBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTestimonial = async (req, res, next) => {
  const testimonialId = req.params.id;
  const testimonialBody = req.body;
  try {
    res
      .status(200)
      .json(
        await testimonialService.putTestimonial(testimonialId, testimonialBody)
      );
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeTestimonial = async (req, res, next) => {
  const testimonialId = req.params.id;
  try {
    res
      .status(204)
      .json(await testimonialService.deleteTestimonial(testimonialId));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  removeTestimonial,
};
