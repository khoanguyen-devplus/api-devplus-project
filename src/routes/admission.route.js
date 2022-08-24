const router = require("express").Router();
const { admissionController } = require("../controllers");

router
  .route("/")
  .get(admissionController.getAdmission)
  .post(admissionController.createAdmission);

router
  .route("/:id")
  .put(admissionController.updateAdmission)
  .delete(admissionController.removeAdmission);

module.exports = router;
