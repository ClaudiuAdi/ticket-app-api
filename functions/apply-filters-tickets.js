const mongoose = require('mongoose');

module.exports = (query) => {
  let { status = '', assignedPersonId = '', ticketEmail = '' } = query;
  let select = {};

  if (status) {
    select.status = status;
  }

  if (assignedPersonId) {
    select['assignedPerson._id'] = mongoose.Types.ObjectId(assignedPersonId);
  }

  if (ticketEmail) {
    select.email = { $regex: ticketEmail, $options: 'i' };
  }

  return {
    ...select,
  };
};
