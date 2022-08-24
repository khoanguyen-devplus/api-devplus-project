const router = require("express").Router();
const { aboutController } = require("../controllers");

router
  .route("/")
  .get(aboutController.getAbout)
  .post(aboutController.createAbout);

router
  .route("/:id")
  .put(aboutController.updateAbout)
  .delete(aboutController.removeAbout);

module.exports = router;
