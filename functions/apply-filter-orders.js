module.exports = (query) => {
  let { status = '' } = query;
  let select = {};

  if (status) {
    select.status = status;
  }

  return {
    ...select,
  };
};
