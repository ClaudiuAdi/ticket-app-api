const { error } = require('../../functions');
const { Ticket } = require('../../models');
const { email } = require('../../services');
const ticketResponse = require('../../templates/ticket-response');

module.exports = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw error(400, 'Missing required params');
  }

  const ticketDocument = await Ticket.findById(id);

  const document = await Ticket.findByIdAndUpdate(id, {
    ticketDocument,
    response: req.body.response,
    dateResponded: new Date(),
    status: 'closed',
  });

  if (!document) {
    throw error(404, 'Error! Answer was not sent');
  }

  const variables = {
    name: `${document.name}`,
    motivation: `${document.problem}`,
    response: `${req.body.response}`,
    year: new Date().getFullYear(),
  };

  await email({
    recipients: document.email,
    htmlBody: ticketResponse,
    subject: 'Raspunsul pe care îl căutai',
    variables: variables,
  });

  return res.status(200).json({
    message: 'Answer was sent successfully',
  });
};
