const dotenv = require("dotenv");
const envFound = dotenv.config();

module.exports = {
  port: process.env.PORT,
  databaseURL: process.env.MONGO_URI,
};
