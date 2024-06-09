const { isEmail } = require('validator');

module.exports = {
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
  motivation: {
    type: String,
    required: true,
  },
  problemConfruntation: String,
  dateReceived: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['open', 'closed', 'in progress', 'unassigned'],
  },
  lifeWithoutProblems: String,
  message: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
};
