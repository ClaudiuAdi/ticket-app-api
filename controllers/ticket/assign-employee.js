const { error } = require('../../functions');
const { Ticket } = require('../../models');
const { ObjectId } = require('mongodb');

module.exports = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw error(400, 'Missing required params');
  }
  const ticketDocument = await Ticket.findById(id);

  await Ticket.findByIdAndUpdate(id, {
    ticketDocument,
    assignedPerson: {
      _id: ObjectId(req.body._id),
      name: req.body.name,
    },
    status: ticketDocument.status !== 'closed' ? 'in progress' : 'closed',
  });

  if (!ticketDocument) {
    throw error(404, 'Error! Ticket was not found');
  }

  return res.status(200).json({
    message: 'Ticket was assigned successfully',
  });
};
/* auto-generated by robocode v0.4.3 */
