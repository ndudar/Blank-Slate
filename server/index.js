const port = process.env.PORT || 8080;
const { db } = require('./db');
const app = require('./app');
const chalk = require('chalk');

//if seeding db:
//const seed = require('../script/seed');
//note: create a script directory with seed.js and data.js

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync()
      .then(() => {
        console.log(chalk.green('db synced!'));
      })
    }
    app.listen(port, () => console.log(`Mixing it up on port ${port}!`));
  } catch (err) {
    console.log(chalk.red('error connecting db:'), err)
  }
}

//connect to database
init();

//build out seed stuff
//may need to alter start script to run node server?
