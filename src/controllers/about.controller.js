const { aboutService } = require("../services");

const getAbout = async (req, res, next) => {
  try {
    res.status(200).json(await aboutService.getAbout());
  } catch (error) {
    res.status(404).json(error);
  }
};

const createAbout = async (req, res, next) => {
  const AboutBody = req.body;
  try {
    res.status(200).json(await aboutService.postAbout(AboutBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateAbout = async (req, res, next) => {
  const AboutId = req.params.id;
  const AboutBody = req.body;
  try {
    res
      .status(200)
      .json(await aboutService.putAbout(AboutId, AboutBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeAbout = async (req, res, next) => {
  const AboutId = req.params.id;
  try {
    res.status(204).json(await aboutService.deleteAbout(AboutId));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getAbout,
  createAbout,
  updateAbout,
  removeAbout,
};
