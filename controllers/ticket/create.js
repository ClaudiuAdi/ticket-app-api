const { error } = require('../../functions');
const { Ticket, Identity } = require('../../models');
const { email } = require('../../services');
const newTicket = require('../../templates/new-ticket');
const OpenAI = require('openai');

module.exports = async (req, res) => {
  // Configurare OpenAI

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  let number;
  const lastTicket = await Ticket.findOne().sort({ number: -1 });
  if (!lastTicket) {
    number = 1;
  } else {
    number = lastTicket.number + 1;
  }

  const document = await Ticket.create({
    ...req.body,
    status: 'unassigned',
    dateReceived: new Date(),
    number,
  });
  if (!document) {
    throw error(400, 'Error! Ticket was not created');
  }

  try {
    // Analiza textului cu GPT-3
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'Ești un psiholog bun și compătimitor.' },
        {
          role: 'user',
          content:
            'Îți voi trimite o problemă pe care o întâmpină o persoană, alaturi de timpul de cand se confrunta cu aceasta problema, daca a primit ajutor in trecuta pentru aceasta problema si mai multe detalii despre problema. După ce interpretezi textul, vreau ca răspunsul tău să înceapă cu unul din aceste două cuvinte: "grav" sau "redus". Structura raspunsului trebuie sa fie redus/grav : raspunsul tau. Problemele grave sunt cele care ar putea pune in pericol viata vizitatorului cum ar fi: gânduri suicidare, depresie severă, abuz domestic sau violență, criză de anxietate, comportament auto-vătămător, probleme de sănătate mintală acute sau abuz de substanțe. Restul pot sa fie categorizate ca probleme reduse. Acest cuvânt (grav sau redus) trebuie să fie urmat de ":" și de răspunsul tău detaliat.',
        },
        { role: 'assistant', content: 'Am înțeles, te rog să îmi trimiți problema.' },
        {
          role: 'user',
          content: `Problema mea este ca: ${document.problem}. Intampin aceasta problema de: ${document.time}. In ceea ce priveste primirea ajutorului anterior pentru a rezolva aceasta problema, pot sa spun ca: ${document.previousHelp}. Mai multe detaii despre problema: ${document.message} `,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    const analysis = response.choices[0].message.content.trim();
    const [gravity, ...messageParts] = analysis.split(':');
    const message = messageParts.join(':').trim();

    const analysisResult = {
      gravity: gravity.trim().toLowerCase(),
      message: message,
    };

    console.log(analysisResult.message);

    if (analysisResult.gravity === 'grav') {
      // Trimite notificare către admini
      const admins = await Identity.find({ $and: [{ role: 'admin' }, { notifications: true }] });

      admins.forEach(async (admin) => {
        await email({
          recipients: admin.email,
          htmlBody: newTicket,
          subject: 'Un nou tichet a sosit',
          variables: {
            ticket: document._id,
            admin: admin.name,
            customer: document.name,
            message: document.message,
          },
        });
      });
    } else if (analysisResult.gravity === 'redus') {
      await Ticket.findByIdAndUpdate(document._id, {
        document,
        assignedPerson: {
          name: 'PsyChat',
        },
        response: analysisResult.message,
        dateResponded: new Date(),
        status: 'closed',
      });

      // Trimite răspuns automat utilizatorului
      await email({
        recipients: document.email,
        htmlBody: `<p>${analysisResult.message}</p>`,
        subject: 'Răspuns automat la cererea dvs.',
      });
    }

    return res.status(200).json({
      message: 'Ticket was created successfully',
    });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    return res.status(500).json({
      message: 'There was an error processing your request.',
    });
  }
};
