const { bannerService } = require("../services");

const getBanner = async (req, res, next) => {
  try {
    res.status(200).json(await bannerService.getBanner());
  } catch (error) {
    res.status(404).json(error);
  }
};

const createBanner = async (req, res, next) => {
  const BannerBody = req.body;
  try {
    res.status(200).json(await bannerService.postBanner(BannerBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBanner = async (req, res, next) => {
  const BannerId = req.params.id;
  const BannerBody = req.body;
  try {
    res
      .status(200)
      .json(await bannerService.putBanner(BannerId, BannerBody));
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeBanner = async (req, res, next) => {
  const BannerId = req.params.id;
  try {
    res.status(204).json(await bannerService.deleteBanner(BannerId));
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getBanner,
  createBanner,
  updateBanner,
  removeBanner,
};
