const { header, footer, contactFormBody } = require('./partials');

module.exports = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #fff;
      font-family: Arial, sans-serif;
      box-sizing: content-box;
      width: 100%;

    "
  >
  <table
  width="600px"
  padding="30px"
  border="0"
  cellspacing="0"
  cellpadding="0"
  align="center"
  style="border-collapse: collapse"
>
      <tbody>
        ${header}
        ${contactFormBody}
        ${footer}
      </tbody>
    </table>
  </body>
  </html>


`;
