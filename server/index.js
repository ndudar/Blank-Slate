const port = process.env.PORT || 8080;
const { db } = require('./db');
const app = require('./app');

//if seeding db:
const seed = require('../script/seed');

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync()
      .then(() => {
        console.log('db synced!');
      })
    }
    app.listen(port, () => console.log(`Mixing it up on port ${port}!`));
  } catch (err) {
    console.log('error connecting db:', err)
  }
}

//connect to database
init();
