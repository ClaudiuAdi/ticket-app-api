const { Schema, model } = require('mongoose');
const { paginate } = require('express-goodies/mongoose');
const { orderTicket, invoiceData } = require('./schemas');

const name = 'order';
const schema = new Schema(
  {
    series: {
      type: String,
      default: 'SOU',
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['approved', 'pending', 'open', 'canceled', 'refunded', 'rejected'],
      default: 'pending',
    },
    invoiceData: invoiceData,
    orderTicket: orderTicket,
    processed: {
      type: Boolean,
      default: false,
    },
    reason: String,
    smartbill: {
      series: String,
      number: String,
    },
  },
  { timestamps: true }
);

/**
 * Schema plugins
 */
schema.plugin(paginate);

module.exports = model(name, schema);
