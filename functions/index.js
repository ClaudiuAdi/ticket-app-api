const applyFiltersIdentities = require('./apply-filters-identities');
const applyFiltersOrders = require('./apply-filter-orders');
const applyFiltersTickets = require('./apply-filters-tickets');
const applySortOrders = require('./apply-sort-orders');
const applySortTickets = require('./apply-sort-tickets');
const approveOrder = require('./issue-invoice');
const buildInvoiceBody = require('./build-invoice-body');
const confirmOrder = require('./confirm-order');
const issueInvoice = require('./issue-invoice');
const randomHash = require('./random-hash');
const removeRefreshTokenCookie = require('./remove-refresh-token-cookie');

// Aliases for functions that are used in multiple places
const { coffee, error, falsy, safeNumber, safeString } = require('express-goodies/functions');

module.exports = {
  // Functions
  applyFiltersIdentities,
  applyFiltersOrders,
  applyFiltersTickets,
  applySortOrders,
  applySortTickets,
  approveOrder,
  buildInvoiceBody,
  confirmOrder,
  issueInvoice,
  randomHash,
  removeRefreshTokenCookie,

  // Aliases
  coffee,
  error,
  falsy,
  safeNumber,
  safeString,
};
