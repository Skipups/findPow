const express = require("express");
const chalk = require("chalk");
const axios = require("axios");
const PORT = process.env.PORT || 3000;

let morgan;
const app = express();

const startServer = () => {
  app.listen(PORT, () => {
    console.log(chalk.greenBright(`App started on ${PORT}`));
  });
};

module.exports = startServer;
