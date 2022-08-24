const { bannerModel } = require("../models/");

const getBanner = async () => {
  const Banner = await bannerModel.find();
  return Banner;
};

const postBanner = async (body) => {
  const newBanner = new bannerModel(body);
  const savedBanner = await newBanner.save();
  return savedBanner;
};

const putBanner = async (id, body) => {
  const updatedBanner = await bannerModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedBanner;
};

const deleteBanner = async (id) => {
  await bannerModel.findByIdAndDelete(id);
  return "This banner has been deleted!";
};

module.exports = {
  getBanner,
  postBanner,
  putBanner,
  deleteBanner,
};
