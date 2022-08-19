const { sidebarModel } = require("../models/");

const getSidebar = async () => {
  const sidebar = await sidebarModel.find();
  return sidebar;
};

const postSidebar = async (body) => {
  const newSidebar = new sidebarModel(body);
  const savedSidebar = await newSidebar.save();
  return savedSidebar;
};

const putSidebar = async (id, body) => {
  const updatedSidebar = await sidebarModel.findByIdAndUpdate(
    id,
    {
      $set: body,
    },
    { new: true }
  );
  return updatedSidebar;
};

const deleteSidebar = async (id) => {
  await sidebarModel.findByIdAndDelete(id);
  return "This sidebar has been deleted!";
};

module.exports = {
  getSidebar,
  postSidebar,
  putSidebar,
  deleteSidebar,
};
