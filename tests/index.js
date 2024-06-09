require('dotenv').config();

describe('Test AWS plugin', () => {
  require('./aws.test');
});

describe('Test Postmark plugin', () => {
  require('./postmark.test');
});

describe('Test Smartbill plugin', () => {
  require('./smartbill.test');
});
