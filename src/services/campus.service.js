const { campusModel } = require("../models/");

const getCampus = async () => {
  try {
    const campus = await campusModel.find();
    return campus;
  } catch (error) {
    console.log(error)
    return {}
  }
};

const postCampus = async (body) => {
  const newCampus = new campusModel(body);
  const savedCampus = await newCampus.save();
  return savedCampus;
};

const putCampus= async (id, body) => {
  const updatedCampus= await campusModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedCampus;
};

const deleteCampus = async (id) => {
  await CampusModel.findByIdAndDelete(id);
  return "This student has been deleted!";
};

module.exports = {
  getCampus,
  postCampus,
  putCampus,
  deleteCampus,
};
