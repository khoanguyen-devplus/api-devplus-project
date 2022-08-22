const express = require('express');
const sidebarRoute = require('./sidebar.route');
const bannerRoute = require('./banner.route');
const aboutRoute = require('./about.route');
const concernRoute = require('./concern.route');
const testimonialRoute = require('./testimonial.route');
const skillRoute = require('./skill.route');
const footerRoute = require('./footer.route');

const router = express.Router();

router.use('/sidebar', sidebarRoute);
router.use('/banner', bannerRoute);
router.use('/about', aboutRoute);
router.use('/concern', concernRoute);
router.use('/testimonial', testimonialRoute);
router.use('/skill', skillRoute);
router.use('/footer', footerRoute);

module.exports = router;
