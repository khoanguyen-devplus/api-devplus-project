const express = require('express');
const sidebarRoute = require('./sidebar.route');
const bannerRoute = require('./banner.route');
const aboutRoute = require('./about.route');
const concernRoute = require('./concern.route');
const testimonialRoute = require('./testimonial.route');
const skillRoute = require('./skill.route');
const footerRoute = require('./footer.route');
const campusRoute = require("./campus.route");
const admissionRoute = require("./admission.route");
const userRoute = require("./user.route");

const router = express.Router();

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
router.use('/sidebar', sidebarRoute);
router.use('/banner', bannerRoute);
router.use('/about', aboutRoute);
router.use('/concern', concernRoute);
router.use('/testimonial', testimonialRoute);
router.use('/skill', skillRoute);
router.use('/footer', footerRoute);
router.use("/campus", campusRoute);
router.use("/admission", admissionRoute);
router.use("/user", userRoute);

module.exports = router;
