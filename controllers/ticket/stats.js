const { error } = require('../../functions');
const { Ticket } = require('../../models');

module.exports = async (req, res) => {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  const [thirtyDaysAgoDocuments, sixtyDaysAgoDocuments] = await Promise.all([
    Ticket.find({ createdAt: { $gte: thirtyDaysAgo } }),
    Ticket.find({ createdAt: { $gte: sixtyDaysAgo, $lt: thirtyDaysAgo } }),
  ]);

  const statusCounts = {
    closed: {
      total: 0,
    },
    inProgress: {
      total: 0,
    },
    unassigned: {
      total: 0,
    },
  };

  // we have 'in progress' as value and 'inProgress' as key => we need to do explicit logic
  thirtyDaysAgoDocuments.forEach((item) => {
    switch (item.status) {
      case 'closed':
        statusCounts.closed.total++;
        break;
      case 'in progress':
        statusCounts.inProgress.total++;
        break;
      case 'unassigned':
        statusCounts.unassigned.total++;
        break;
      default:
        throw error(404, 'Unknown status');
    }
  });

  const statusCountsDiff = {
    closed:
      statusCounts.closed.total -
      sixtyDaysAgoDocuments.filter((document) => document.status === 'closed').length,
    inProgress:
      statusCounts.inProgress.total -
      sixtyDaysAgoDocuments.filter((document) => document.status === 'in progress').length,
    unassigned:
      statusCounts.unassigned.total -
      sixtyDaysAgoDocuments.filter((document) => document.status === 'unassigned').length,
  };

  Object.keys(statusCounts).forEach((status) => {
    statusCounts[status].change = statusCountsDiff[status];
  });

  return res.status(200).json(statusCounts);
};
