const port = process.env.PORT || 8080;
const { db } = require('./db');
const app = require('./app');
const chalk = require('chalk');

//if seeding db:
const seed = require('../script/seed');

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

//may need to alter start script to run node server?
//may want to build a .env file
