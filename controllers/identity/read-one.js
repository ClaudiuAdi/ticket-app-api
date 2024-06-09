const { Identity } = require('../../models');
const { error } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw error(400, 'Adminul nu a fost găsit');
  }

  const document = await Identity.findById(id);

  if (!document) {
    throw error(404, 'Eroare! Adminul nu a putut fi găsit');
  }

  return res.status(200).json(document);
};
