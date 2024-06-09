const { Router } = require('express');
const { Visitor } = require('../controllers');

const router = Router();
module.exports = router;

router.post('/visitor/contact', Visitor.contactCompany);
