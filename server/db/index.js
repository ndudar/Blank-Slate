const db = require("./db");

//require any models here
const Template = require("./models/Template");

//set up relationships between models here
//consider one-to-many, many-to-many, join tables, etc.

module.exports = {
  db,
  models: {
    //bring in models here
    Template,
  },
};
