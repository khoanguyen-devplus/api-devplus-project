const router = require("express").Router();
const {campusController } = require("../controllers");

router
  .route("/")
  .get(campusController.getCampus)
  .post(campusController.createCampus);

router
  .route("/:id")
  .put(campusController.updateCampus)
  .delete(campusController.removeCampus);

module.exports = router;
