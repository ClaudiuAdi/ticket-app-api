const { hashSync } = require('bcryptjs');

module.exports = async () => {
  return [
    {
      email: 'claudeady4579@gmail.com',
      name: 'Michael Scott',
      role: 'admin',
      password: hashSync('supersecretpassword'),
      active: true,
      confirmed: true,
    },
    {
      email: 'jim@email.com',
      name: 'Jim Halpert',
      role: 'admin',
      password: hashSync('supersecretpassword'),
      active: false,
      confirmed: true,
    },
    {
      email: 'pam@email.com',
      name: 'Pam Beesly',
      role: 'admin',
      password: hashSync('supersecretpassword'),
      active: true,
      confirmed: false,
    },
  ];
};
