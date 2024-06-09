const { hashSync, compareSync } = require('bcryptjs');
const { Identity } = require('../../models');
const { error } = require('../../functions');

module.exports = async (req, res) => {
  if (!req.user?.me) {
    throw error(404, 'Missing required params');
  }

  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (!oldPassword || !newPassword || !confirmPassword) {
    throw error(400, 'Lipsește parola veche, nouă sau confirmarea parolei.');
  }

  const identity = await Identity.findById(req.user.me).select('+password');

  if (!compareSync(oldPassword, identity.password)) {
    throw error(400, 'Parola veche este incorectă.');
  }
  if (newPassword !== confirmPassword) {
    throw error(400, 'Parolele nu se potrivesc.');
  }

  if (newPassword === oldPassword) {
    throw error(400, 'Parola nouă trebuie să fie diferită de cea veche.');
  }

  const document = await Identity.findById(req.user.me);
  if (!document) {
    throw error(500, 'Contul nu a fost găsit.');
  }

  await document.updateOne({ password: hashSync(newPassword) });

  return res.status(200).json({
    data: document,
    message: 'Parola a fost schimbată cu succes.',
  });
};
