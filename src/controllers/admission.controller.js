const { admissionService } = require("../services");

const getAdmission = async (req, res, next) => {
  try {
    res.status(200).json(await admissionService.getAdmission());
  } catch (error) {
    res.status(404).json(error);
  }
};

const createAdmission = async (req, res, next) => {
  const admissionBody = req.body;
  try {
    res.status(200).json(await admissionService.postAdmission(admissionBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateAdmission = async (req, res, next) => {
  const admissionID = req.params.id;
  const admissionBody = req.body;
  try {
    res
      .status(200)
      .json(await admissionService.putAdmission(admissionID, admissionBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeAdmission = async (req, res, next) => {
  const admissionID = req.params.id;
  try {
    res.status(204).json(await admissionService.deleteAdmission(admissionID));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getAdmission,
  createAdmission,
  updateAdmission,
  removeAdmission,
};
