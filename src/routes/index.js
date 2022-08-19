const express = require("express");
const sidebarRoute = require("./sidebar.route");
const bannerRoute = require("./banner.route");

const router = express.Router();

router.use("/sidebar", sidebarRoute);
router.use("/banner", bannerRoute);

module.exports = router;
