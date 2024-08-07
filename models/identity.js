const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('express-goodies/mongoose');

/**
 * Identities manage login related operations
 */
const name = 'identity';
const schema = new Schema(
  {
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
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      select: true,
      enum: ['admin', 'user'],
      required: true,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    notifications: {
      type: Boolean,
      default: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirmedAt: {
      type: Date,
    },
    lastLoginAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

/**
 * Schema plugins
 */
schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = model(name, schema);
