const { Router } = require('express');
const { recaptcha } = require('express-goodies/middleware');
const { Identity } = require('../controllers');
const { Identity: IdentityModel } = require('../models');
const { userExists } = require('express-goodies/middleware');

const router = Router();
module.exports = router;

router.post('/confirm/:hash', recaptcha, Identity.confirm);
router.post('/forgot', recaptcha, Identity.forgot);
router.post('/login', recaptcha, Identity.login);
router.post('/reset/:hash', recaptcha, Identity.reset);

router.post('/logout', Identity.logout);
router.post('/refresh-token', Identity.refreshToken);

router.post('/admin/change-password', Identity.changePassword);
router.get('/admin/profile', Identity.profile);

router.post('/admin/identities', userExists(IdentityModel), Identity.create);
router.get('/admin/identities', Identity.readMany);
router.get('/admin/identities/:id', Identity.readOne);
router.put('/admin/identities/:id', userExists(IdentityModel), Identity.update);
