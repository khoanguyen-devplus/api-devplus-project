const { userService } = require("../services");

const getUser = async (req, res, next) => {
  try {
    res.status(200).json(await userService.getUser());
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    res.status(200).json(await userService.getUserById(userId));
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res, next) => {
  const UserBody = req.body;
  try {
    res
      .status(200)
      .json(await userService.postUser(UserBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res, next) => {
  const updateUserId = req.params.id;
  const updateUserBody = req.body;
  try {
    res
      .status(200)
      .json(
        await userService.putUser(updateUserId, updateUserBody)
      );
  } catch (error) {
    res.status(500).json(error);
  }
};

const changePassword = async (req, res, next) => {
  const updateUserId = req.params.id;
  const updateUserBody = req.body;
  try {
    res
      .status(200)
      .json(
        await userService.putPass(updateUserId, updateUserBody)
      );
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeUser = async (req, res, next) => {
  const UserId = req.params.id;
  try {
    res
      .status(204)
      .json(await userService.deleteUser(UserId));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  removeUser,
  changePassword,
  getUserById,
};
