const COOKIE_NAME = 'draft';
const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 2 * 24 * 3600 * 1000,
  sameSite: 'lax',
  secure: true,
  signed: true,
};

module.exports = {
  COOKIE_NAME,
  COOKIE_OPTIONS,
};
