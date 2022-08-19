const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./src/configs/config");
const routes = require("./src/routes");

app.use(express.json());

mongoose
  .connect(config.databaseURL)
  .then(() => console.log("Database connection Successfully..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/", routes);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(config.port || 5000, () => {
  console.log(`Listening to ${config.port}...`);
});