const { sidebarService } = require("../services");

const getSidebar = async (req, res, next) => {
  try {
    res.status(200).json(await sidebarService.getSidebar());
  } catch (error) {
    res.status(404).json(error);
  }
};

const createSidebar = async (req, res, next) => {
  const sidebarBody = req.body;
  try {
    res.status(200).json(await sidebarService.postSidebar(sidebarBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateSidebar = async (req, res, next) => {
  const sidebarId = req.params.id;
  const sidebarBody = req.body;
  try {
    res
      .status(200)
      .json(await sidebarService.putSidebar(sidebarId, sidebarBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeSidebar = async (req, res, next) => {
  const sidebarId = req.params.id;
  try {
    res.status(204).json(await sidebarService.deleteSidebar(sidebarId));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getSidebar,
  createSidebar,
  updateSidebar,
  removeSidebar,
};
