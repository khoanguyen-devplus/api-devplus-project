const router = require("express").Router();
const { sidebarController } = require("../controllers");

router
  .route("/")
  .get(sidebarController.getSidebar)
  .post(sidebarController.createSidebar);

router
  .route("/:id")
  .put(sidebarController.updateSidebar)
  .delete(sidebarController.removeSidebar);

module.exports = router;
