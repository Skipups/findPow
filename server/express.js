const express = require("express");
const chalk = require("chalk");
const axios = require("axios");
const PORT = process.env.PORT || 3000;
const path = require("path");
const PUBLIC_PATH = path.join(__dirname, "../dist");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`received ${req.method} @ ${req.url}`);
  next();
});
app.use(express.static(PUBLIC_PATH));

//app.use("/api", apiRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, "./index.html"));
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(chalk.greenBright(`App started on ${PORT}`));
  });
};

module.exports = startServer;
