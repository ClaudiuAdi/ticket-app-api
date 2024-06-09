const { Identity, Admin } = require('../../models');
const { error } = require('../../functions');

module.exports = async (req, res) => {
  const { email } = req.body;

  const exists = await Identity.findOne({ email });
  if (exists) {
    throw error(400, 'Email already exists');
  }

  const document = await Admin.create({
    ...req.body,
    role: 'admin',
    active: true,
    confirmed: true,
  });

  return res.status(200).json({ document, message: `Admin created succesfully` });
};
