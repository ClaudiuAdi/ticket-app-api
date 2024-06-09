/* eslint-disable no-console */
const Order = require('../../models/order');
const orders = require('../resources/orders');

exports.seed = async () => {
  try {
    console.log('Planting seeds for orders...');

    const seeds = await orders();
    await Order.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert orders');
    console.error(err);
  }
};
