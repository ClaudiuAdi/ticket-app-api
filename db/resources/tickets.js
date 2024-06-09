const { Identity } = require('../../models');

module.exports = async () => {
  const admins = await Identity.find({ role: 'admin' }).select('_id name').limit(3).lean();

  return [
    {
      number: 1,
      name: 'Ana Popescu',
      problem: 'Să găsesc direcția potrivită în cariera mea și să ating succesul profesional.',
      time: 'Simt că am ajuns într-un punct mort în carieră și nu știu care este următorul pas de luat.',
      email: 'ana.popescu@example.com',
      dateReceived: new Date(),
      previousHelp:
        'Aș putea să-mi folosesc abilitățile la capacitate maximă și să mă simt împlinită profesional.',
      status: 'unassigned',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      number: 2,
      name: 'Andrei Ionescu',
      problem: 'Să scap de stresul și anxietatea constantă și să trăiesc în liniște interioară.',
      time: 'Presiunea la locul de muncă și problemele personale m-au copleșit, conducând la stres și neliniște.',
      email: 'andrei.ionescu@example.com',
      dateReceived: new Date(),
      previousHelp:
        'Aș putea să mă bucur mai mult de fiecare zi și să am relații mai sănătoase cu cei din jur.',
      status: 'unassigned',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      number: 3,
      name: 'Maria Grigorescu',
      problem: 'Experiențe trecute au subminat încrederea mea în abilitățile mele.',
      time: 'Să câștig încredere în mine și să mă simt puternică în orice situație.',
      email: 'maria.grigorescu@example.com',
      dateReceived: new Date(),
      previousHelp:
        'Aș putea să abordez provocările cu curaj și să-mi ating obiectivele fără teamă.',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: 'closed',
      assignedPerson: admins[1],
      dateResponded: new Date(),
      response:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      number: 4,
      name: 'Diana Stan',
      problem: 'Teamă de consecințele deciziilor greșite și îndoiala în propriile judecăți.',
      time: 'Să învăț să iau decizii înțelepte și să nu mai fiu blocată de incertitudine.',
      email: 'diana.stan@example.com',
      dateReceived: new Date(),
      previousHelp:
        'Aș putea să avansez în viață cu încredere și să profit de oportunități fără ezitare.',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: 'in progress',
      assignedPerson: admins[0],
    },
    {
      number: 5,
      name: 'Ionel Mihai',
      problem: 'Comunicarea dificilă și neînțelegerile constante au dus la tensiuni în familie.',
      time: 'Să restabilesc armonia și sănătatea relațiilor în familia mea.',
      email: 'ionel.mihai@example.com',
      dateReceived: new Date(),
      previousHelp:
        'Aș putea să petrec timp de calitate cu familia mea și să creez amintiri frumoase împreună.',
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: 'closed',
      assignedPerson: admins[0],
      dateResponded: new Date(),
      response:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
};
