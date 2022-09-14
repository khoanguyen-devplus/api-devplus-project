const { userModel } = require("../models/");
const bcrypt = require("bcrypt");

const getUser = async () => {
  const user = await userModel.find();
  return user;
};

const getUserById = async (id) => {
  const user = await userModel.findById(id);
  return user;
};

const postUser = async (body) => {
  bcrypt
    .hash(body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const newUser = new userModel({
        email: body.email,
        password: hashedPassword,
        avatar: "",
      });

      // save the new user
      const saveduser = newUser.save();
      return saveduser;
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      return e;
    });
};

const putUser = async (id, body) => {
  const updatedUser = await userModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedUser;
};

const deleteUser = async (id) => {
	await userModel.findByIdAndDelete(id);
	return 'This user has been deleted!';
};

const putPass = async (id, body) => {
  bcrypt
    .hash(body.password, 10)
    .then( async (hashedPassword) => {
      // create a new user instance and collect the data
      const updatedUser = await userModel.findByIdAndUpdate(
        id,
        {
          password: hashedPassword,
        },
        { new: true }
      );
      return updatedUser;
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      return e;
    });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
  putPass,
  getUserById,
};
