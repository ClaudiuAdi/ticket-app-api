const { format } = require('date-fns');
const sendEmail = require('../../plugins/postmark/src/send-email');
const logger = require('pino')();

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Te rugăm să completezi toate câmpurile.',
    });
  }

  const to = process.env.POSTMARK_FROM;
  const data = {
    data: {
      date: format(new Date(), 'h:m a - d MMM yyyy'),
      email: email,
      message: message,
      name: name,
      title: `Mesaj de la ${name}`,
    },
    message: message,
    name: `Mesaj de la ${name}`,
    to,
    type: 'contact',
    subject: 'Cerere suport',
  };

  await sendEmail(data);
  logger.info(`Contact email sent to ${to}`);

  res.status(200).json({
    message: 'Mesajul a fost trimis cu succes.',
    success: true,
  });
};
