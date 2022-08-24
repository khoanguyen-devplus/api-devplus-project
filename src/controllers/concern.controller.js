const { concernService } = require("../services");

const getConcern = async (req, res, next) => {
  try {
    res.status(200).json(await concernService.getConcern());
  } catch (error) {
    res.status(500).json(error);
  }
};

const createConcern = async (req, res, next) => {
  const concernBody = req.body;
  try {
    res.status(200).json(await concernService.postConcern(concernBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateConcern = async (req, res, next) => {
  const concernId = req.params.id;
  const concernBody = req.body;
  try {
    res
      .status(200)
      .json(await concernService.putConcern(concernId, concernBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeConcern = async (req, res, next) => {
  const concernId = req.params.id;
  try {
    res.status(204).json(await concernService.deleteConcern(concernId));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getConcern,
  createConcern,
  updateConcern,
  removeConcern,
};
