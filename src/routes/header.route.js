const router = require("express").Router();
// const Students = require("../models/Students");

router.get("/", (req, res, next) => {
  res.send("hello");
});

module.exports = router;
