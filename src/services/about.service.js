const { aboutModel } = require("../models/");

const getAbout = async () => {
  const About = await aboutModel.find();
  return About;
};

const postAbout = async (body) => {
  const newAbout = new aboutModel(body);
  const savedAbout = await newAbout.save();
  return savedAbout;
};

const putAbout = async (id, body) => {
  const updatedAbout = await aboutModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedAbout;
};

const deleteAbout = async (id) => {
  await aboutModel.findByIdAndDelete(id);
  return "This About has been deleted!";
};

module.exports = {
  getAbout,
  postAbout,
  putAbout,
  deleteAbout,
};
