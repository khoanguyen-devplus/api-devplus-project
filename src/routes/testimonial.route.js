const router = require("express").Router();
const { testimonialController } = require("../controllers");

router
  .route("/")
  .get(testimonialController.getTestimonial)
  .post(testimonialController.createTestimonial);

router
  .route("/:id")
  .put(testimonialController.updateTestimonial)
  .delete(testimonialController.removeTestimonial);

module.exports = router;
