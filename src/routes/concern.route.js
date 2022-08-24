const router = require("express").Router();
const { concernController } = require("../controllers");

router
  .route("/")
  .get(concernController.getConcern)
  .post(concernController.createConcern);

router
  .route("/:id")
  .put(concernController.updateConcern)
  .delete(concernController.removeConcern);

module.exports = router;
