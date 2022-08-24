const router = require("express").Router();
const { bannerController } = require("../controllers");

router
  .route("/")
  .get(bannerController.getBanner)
  .post(bannerController.createBanner);

router
  .route("/:id")
  .put(bannerController.updateBanner)
  .delete(bannerController.removeBanner);

module.exports = router;
