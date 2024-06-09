const { error } = require('../../functions');
const { Ticket } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw error(400, 'Missing required params');
  }

  const document = await Ticket.findById(id);

  if (!document || !document.response) {
    throw error(404, 'Error! Ticket was not closed');
  }

  await Ticket.findByIdAndUpdate(id, {
    assignedPerson: req.body,
    status: 'closed',
  });

  return res.status(200).json({
    message: 'Ticket was closed successfully',
  });
};
