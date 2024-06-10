const { Order, Ticket } = require('../../models');

module.exports = async (req, res) => {
  try {
    const currentDate = new Date();
    const lastThreeMonthsData = Array.from({ length: 3 }, (_, i) => {
      const month = currentDate.getMonth() - i;
      const year = currentDate.getFullYear();
      const start = new Date(year, month, 1);
      const end = new Date(year, month + 1, 0, 23, 59, 59, 999);

      return Ticket.countDocuments({
        createdAt: { $gte: start, $lte: end },
      }).then((count) => ({
        month: start.toLocaleString('ro-RO', { month: 'long' }),
        count,
      }));
    });

    const monthlyOrdersData = await Promise.all(lastThreeMonthsData);

    monthlyOrdersData.reverse();

    return res.status(200).json({ monthlyOrders: monthlyOrdersData });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while counting orders.' });
  }
};
