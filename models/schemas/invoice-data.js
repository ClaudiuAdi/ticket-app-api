const mongoose = require('mongoose');
const { isEmail } = require('validator');

module.exports = {
  _id: {
    type: mongoose.Types.ObjectId,
    required: false,
    get: (invoice) => invoice.toString(),
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => isEmail(value),
    },
  },
  phone: String,
};
