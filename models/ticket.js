const { Schema, model } = require('mongoose');
const { reference } = require('./schemas');
const { isEmail } = require('validator');
const { paginate } = require('express-goodies/mongoose');

/*
 * Ticket details
 */

const name = 'ticket';
const schema = new Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => isEmail(value),
      },
    },
    problem: {
      type: String,
      required: true,
    },
    time: String,
    dateReceived: {
      type: Date,
      required: true,
    },
    assignedPerson: { type: reference, required: false },
    status: {
      type: String,
      required: true,
      enum: ['unassigned', 'in progress', 'closed'],
    },
    previousHelp: String,
    message: {
      type: String,
      required: true,
    },
    response: String,
    dateResponded: Date,
  },
  { timestamps: true }
);

/**
 * Schema plugins
 */
schema.plugin(paginate);

module.exports = model(name, schema);
