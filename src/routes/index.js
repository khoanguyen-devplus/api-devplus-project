const express = require("express");
const sidebarRoute = require("./sidebar.route");
const campusRoute = require("./campus.route");
const admissionRoute = require("./admission.route");

const router = express.Router();

router.use("/sidebar", sidebarRoute);
router.use("/campus", campusRoute);
router.use("/admission", admissionRoute);


module.exports = router;
