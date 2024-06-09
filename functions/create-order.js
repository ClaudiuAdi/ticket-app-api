const { Netopia } = require('netopia-card');
const buildNetopiaDetails = require('./build-netopia-details');

const createOrderCard = async (document, req) => {
  const netopia = new Netopia();
  const { email, firstName, lastName, phone } = document.invoiceData;

  netopia.setPaymentData({
    account: req.body.account,
    expMonth: Number(req.body.expMonth),
    expYear: Number(req.body.expYear),
    secretCode: req.body.secretCode,
  });
  netopia.setBrowserData(req.body, req.ip);
  netopia.setOrderData({
    orderID: document._id?.toString(),
    amount: document.orderTicket?.price,
    description: buildNetopiaDetails(document),
    billing: {
      email: email,
      phone: phone,
      firstName: firstName,
      lastName: lastName,
    },
  });

  const response = await netopia.startPayment();

  return {
    ...response,
    orderId: document._id?.toString(),
  };
};

module.exports = {
  createOrderCard,
};
