const { concernModel } = require("../models");

const getConcern = async () => {
  const concern = await concernModel.find();
  return concern;
};

const postConcern = async (body) => {
  const newConcern = new concernModel(body);
  const savedConcern = await newConcern.save();
  return savedConcern;
};

const putConcern = async (id, body) => {
  const updatedConcern = await concernModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedConcern;
};

const deleteConcern = async (id) => {
  await concernModel.findByIdAndDelete(id);
  return "This concern has been deleted!";
};

module.exports = {
  getConcern,
  postConcern,
  putConcern,
  deleteConcern,
};
