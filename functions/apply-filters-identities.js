module.exports = (query) => {
  let { role = '' } = query;
  let select = {};

  if (role) {
    select.role = role;
  }

  if (query && typeof query.active != 'undefined') {
    select.active = query.active;
  }

  return {
    ...select,
  };
};
