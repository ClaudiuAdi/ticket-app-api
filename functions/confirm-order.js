const { error } = require('express-goodies/functions');
const { Order, Ticket, Identity } = require('../models');
const issueInvoice = require('./issue-invoice');
const { email } = require('../services');
const newTicket = require('../templates/new-ticket');

const confirmOrder = async ({ order, payment }) => {
  const { orderID: orderId } = order;
  if (!orderId) {
    throw error(400, 'Error! Order Id not found');
  }

  const document = await Order.findOne({ _id: orderId });
  if (!document) {
    throw error(404, 'Error! Order not found');
  }

  // Do not process the same order twice
  if (document?.status === 'approved') {
    throw error(400, 'Error! Order was already approved');
  }

  // Mark order as processed
  await document.updateOne({ processed: true });

  const createTicketFunction = async () => {
    await document.updateOne({ status: 'approved' });

    const invoiceData = document.invoiceData;
    const invoice = {
      address: invoiceData.address,
      country: invoiceData.country,
      county: invoiceData.county,
      email: invoiceData.email,
      firstName: invoiceData.firstName,
      lastName: invoiceData.lastName,
      locality: invoiceData.locality,
      phone: invoiceData.phone,
      price: document.orderTicket?.price,
      quantity: document.orderTicket?.quantity,
      series: document.series,
    };

    await issueInvoice(invoice);

    let ticketNumber;
    const lastTicket = await Ticket.findOne().sort({ number: -1 });
    if (!lastTicket) {
      ticketNumber = 1;
    } else {
      ticketNumber = lastTicket.number + 1;
    }

    const alreadyExists = await Ticket.findOne({ _id: document.orderTicket?._id });

    if (alreadyExists) {
      await Ticket.findOneAndDelete({ _id: document.orderTicket?._id });
      throw error(400, 'Eroare! Tichetul nu a putut fi creat!');
    }

    const ticket = await Ticket.create({
      ...document.orderTicket,
      dateReceived: new Date(),
      number: ticketNumber,
      status: 'unassigned',
    });

    if (!ticket) {
      throw error(400, 'Eroare! Tichetul nu a putut fi creat!');
    }

    const admins = await Identity.find({ $and: [{ role: 'admin' }, { notifications: true }] });

    admins.forEach(async (admin) => {
      await email({
        htmlBody: newTicket,
        recipients: admin.email,
        subject: 'Un nou tichet a sosit',
        variables: {
          admin: admin.name,
          customer: ticket.name,
          message: ticket.message,
          ticket: ticket._id,
        },
      });
    });
  };

  switch (payment?.status) {
    case 3:
      await createTicketFunction();
      break;
    case 5:
      await document.updateOne({ status: 'open' });
      break;
    case 12:
      await document.updateOne({ status: 'rejected', reason: 'Invalid account' });
      break;
  }
};

module.exports = confirmOrder;
