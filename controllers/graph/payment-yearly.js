const { Order } = require('../../models');

module.exports = async (req, res) => {
  const currentYear = new Date().getFullYear();

  try {
    const totalOrders = await Order.countDocuments();
    const paidInCurrentYear = await Order.countDocuments({
      status: 'approved',
      updatedAt: {
        $gte: new Date(currentYear, 0, 1),
        $lt: new Date(currentYear + 1, 0, 1),
      },
    });

    return res.status(200).json({ paid: paidInCurrentYear, total: totalOrders });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while counting orders.' });
  }
};
