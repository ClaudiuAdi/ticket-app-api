const changePassword = require('./change-password');
const confirm = require('./confirm');
const forgot = require('./forgot');
const login = require('./login');
const logout = require('./logout');
const profile = require('./profile');
const readMany = require('./read-many');
const refreshToken = require('./refresh-token');
const reset = require('./reset');
const create = require('./create');
const readOne = require('./read-one');
const update = require('./update');

module.exports = {
  changePassword,
  confirm,
  create,
  forgot,
  login,
  logout,
  profile,
  readMany,
  readOne,
  refreshToken,
  reset,
  update,
};
