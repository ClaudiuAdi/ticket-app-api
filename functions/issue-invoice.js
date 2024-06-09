const { default: axios } = require('axios');
const buildInvoiceBody = require('./build-invoice-body');
const { error } = require('express-goodies/functions');

module.exports = async (invoice) => {
  try {
    const body = buildInvoiceBody(invoice);

    const data = await axios.post('https://ws.smartbill.ro/SBORO/api/invoice', body, {
      auth: {
        username: process.env.SMARTBILL_USERNAME,
        password: process.env.SMARTBILL_TOKEN,
      },
    });

    return data;
  } catch (err) {
    error(500, `Smartbill request failed with err: ${err}`);
  }
};
