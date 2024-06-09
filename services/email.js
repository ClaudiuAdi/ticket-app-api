const handlebars = require('handlebars');
const postmark = require('postmark');

module.exports = async ({ recipients, htmlBody, subject, variables, attachment }) => {
  const emailTemplate = handlebars.compile(htmlBody);
  const emailBody = emailTemplate(variables);

  const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

  const message = {
    From: process.env.POSTMARK_FROM,
    To: recipients,
    Subject: subject,
    HtmlBody: emailBody,
  };
  if (attachment) {
    message.attachment = attachment;
  }
  client
    .sendEmail(message)
    .then(() => {
      return;
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};
