const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const chalk = require('chalk');

const databaseName = pkg.name;

const config = {
  logging: false,
};

if (process.env.LOGGING === 'true') {
  delete config.logging;
};

console.log(chalk.yellow('calling up the database, hold pls...'));

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);

module.exports = db;
