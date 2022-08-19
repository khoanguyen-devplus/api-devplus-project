const express = require("express");
const sidebarRoute = require("./sidebar.route");

const router = express.Router();

router.use("/sidebar", sidebarRoute);

module.exports = router;
