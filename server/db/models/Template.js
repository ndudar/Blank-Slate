const db = require('../db');
const Sequelize = require('sequelize');

//build out the model
//consider type, validation, defaultValue, etc.

const Template = db.define('template', {
  exampleCol: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Template;
