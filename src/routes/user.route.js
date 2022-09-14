const router = require("express").Router();
const { userController } = require("../controllers");

router
  .route("/")
  .get(userController.getUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser);

  router
  .route("/changePass/:id")
  .put(userController.changePassword)

module.exports = router;
