const express = require("express");
const headerRoute = require("./header.route");

const router = express.Router();

router.use("/header", headerRoute);

module.exports = router;
