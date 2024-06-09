const { hashSync } = require('bcryptjs');
const { error } = require('../../functions');
const { Identity } = require('../../models');

module.exports = async (req, res) => {
  const { name, email, password, notifications } = req.body;

  const { id } = req.params;
  if (!id) {
    throw error(400, 'You must provide an id');
  }
  const body = password
    ? { name, email, password: hashSync(password), notifications }
    : { name, email, notifications };

  const document = await Identity.findById(id);
  if (!document) {
    return error(400, 'Identity not found');
  }

  await document.updateOne(body);

  return res.status(200).json(document);
};
