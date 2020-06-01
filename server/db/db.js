const Sequelize = require("sequelize");
const chalk = require("chalk");
const dbName = "findPow";

console.log(chalk.yellow(`opening ${dbName}`));

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false,
  }
);
module.exports = { db };
