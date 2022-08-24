const { admissionModel } = require("../models/");

const getAdmission = async () => {
  try {
    const admission = await admissionModel.find();
    return admission;
  } catch (error) {
    console.log(error)
    return {}
  }
};

const postAdmission = async (body) => {
  const newAdmission = new admissionModel(body);
  const savedAdmission = await newAdmission.save();
  return savedAdmission;
};

const putAdmission= async (id, body) => {
  const updatedAdmission= await admissionModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedAdmission;
};

const deleteAdmission = async (id) => {
  await admissionModel.findByIdAndDelete(id);
  return "This student has been deleted!";
};

module.exports = {
  getAdmission,
  postAdmission,
  putAdmission,
  deleteAdmission,
};
