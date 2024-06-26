const { error, applySortTickets } = require('../../functions');
const applyFiltersTickets = require('../../functions/apply-filters-tickets');
const { Ticket } = require('../../models');

module.exports = async (req, res) => {
  const filter = applyFiltersTickets(req.query);
  const sortOptions = applySortTickets();

  const documents = await Ticket.find(filter).sort(sortOptions).paginate(req.query);
  if (!documents) {
    throw error(404, 'No tickets found');
  }

  // add current index for every document
  documents.pages.forEach((document, i) => {
    const { page, perPage } = documents.pageParams;
    document.no = (page - 1) * perPage + i + 1;
  });

  return res.status(200).json(documents);
};
/* auto-generated by robocode v0.4.3 */
