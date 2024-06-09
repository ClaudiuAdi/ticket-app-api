module.exports = (invoice) => {
  const issueDate = new Date(); // Replace this with your actual issueDate
  const DUE_PERIOD = 15;
  // Calculate dueDate
  const dueDate = new Date(issueDate);
  dueDate.setDate(issueDate.getDate() + DUE_PERIOD);

  // Format both dates
  const formatDate = (date) => {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formattedIssueDate = formatDate(issueDate);
  const formattedDueDate = formatDate(dueDate);

  const body = {
    companyVatCode: process.env.SMARTBILL_CUI,
    client: {
      name: invoice.firstName + ' ' + invoice.lastName,
      address: invoice.address,
      phone: invoice.phone,
      email: invoice.email,
      country: 'Romania',
      isTaxPayer: false,
      saveToDb: false,
    },
    sendEmail: false,
    isDraft: process.env.NODE_ENV !== 'production',
    issueDate: formattedIssueDate,
    seriesName: process.env.NODE_ENV === 'development' ? 'TEST' : invoice.series,
    currency: 'RON',
    language: 'RO',
    precision: 2,
    dueDate: formattedDueDate,
    useEstimateDetails: false,

    products: [
      {
        name: 'Consultanta Mantra',
        code: 'cm',
        measuringUnitName: 'buc',
        currency: 'RON',
        isDiscount: false,
        quantity: invoice.quantity,
        price: invoice.price,
        isTaxIncluded: true,
        taxName: 'Normala',
        taxPercentage: 19,
        saveToDb: false,
        isService: false,
      },
    ],
  };

  return body;
};
