const mongoose = require('mongoose');

module.exports = {
  _id: {
    type: mongoose.Types.ObjectId,
    get: (v) => v.toString(),
  },
  name: String,
};
