/* eslint-disable no-console */
const Ticket = require('../../models/ticket');
const tickets = require('../resources/tickets');

exports.seed = async () => {
  try {
    console.log('Planting seeds for tickets...');

    const seeds = await tickets();
    await Ticket.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert tickets');
    console.error(err);
  }
};
