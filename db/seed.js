const { runSeeds } = require('express-goodies/functions');
const seeds = require('./seeds');

const seed = async () => {
  // Add all collection seeds below
  await seeds.identities.seed();
  await seeds.tickets.seed();
};

const seedMongoDb = async () => {
  await runSeeds(seed);
};
// Execute the seeds
seedMongoDb();
