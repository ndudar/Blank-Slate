const {
  db,
  models: {
    //models here
    Template,
  },
} = require('../server/db');

//data using to seed:
const templateData = require('./data');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); //clears db and matches models to tables
  console.log('db synced!');

  //creating Templates
  const templates = await Promise.all(
    templateData.templateSeed.map((data) => {
      return Template.create(data);
    }
  )
  );

  //create other data sets as needed here

  console.log(`seeded ${templates.length} template data`);
  //log other data sets as needed here
  console.log('seeded successfully');
  return {
    templateData,
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// export the seed function for testing purposes
module.exports = seed;
