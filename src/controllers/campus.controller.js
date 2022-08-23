const { campusService } = require("../services");

const getCampus = async (req, res, next) => {
  try {
    res.status(200).json(await campusService.getCampus());
  } catch (error) {
    res.status(404).json(error);
  }
};

const createCampus = async (req, res, next) => {
  const campusBody = req.body;
  try {
    res.status(200).json(await campusService.postCampus(campusBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCampus = async (req, res, next) => {
  const campusID = req.params.id;
  const campusBody = req.body;
  try {
    res
      .status(200)
      .json(await campusService.putCampus(campusID, campusBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeCampus = async (req, res, next) => {
  const campusID = req.params.id;
  try {
    res.status(204).json(await campusService.deleteCampus(campusID));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getCampus,
  createCampus,
  updateCampus,
  removeCampus,
};
