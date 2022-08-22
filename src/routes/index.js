const express = require("express");
const sidebarRoute = require("./sidebar.route");
const bannerRoute = require("./banner.route");
const aboutRoute = require("./about.route");

const router = express.Router();

router.use("/sidebar", sidebarRoute);
router.use("/banner", bannerRoute);
router.use("/about", aboutRoute);

module.exports = router;
