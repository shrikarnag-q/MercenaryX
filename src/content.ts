export const movements = [
  {
    number: "01",
    title: "Hunt",
    text: "Flint is first in. Bearing has the adversary's direction. Span, Lode, and Signet read the app, the data, and identity. The team looks for behavior the system was never instructed to perform.",
    receive: "A location, the evidence, and a name.",
  },
  {
    number: "02",
    title: "Hold",
    text: "Brace proposes the containment. An operator of Mercenary signs it. The action stays scoped to your system, and it is fast enough that the adversary cannot rewrite the path while the team is still in it.",
    receive: "A signed action, scoped to your system.",
  },
  {
    number: "03",
    title: "Watch",
    text: "Tally writes the record. Vigil keeps the watch. The system and the authority over it were yours throughout; the record is yours too. The team stays. A mind that can think does not try once.",
    receive: "The record, and a team that is still there.",
  },
] as const;

export const stages = [
  {
    number: "01",
    title: "The call",
    text: "You bring Mercenary in, not a set of vendors you manage. The company sends the team. On this site the request stays in your browser; a live channel is not open yet.",
  },
  {
    number: "02",
    title: "The brief",
    text: "You name the system, where the team is brought in, the tempo, and the unknown. Cloud or VPC, or a sovereign appliance. Hours, days, or already inside. The team does not start until those are specific enough to take.",
  },
  {
    number: "03",
    title: "The work",
    text: "Bearing reads the adversary. Flint hunts. Span, Lode, and Signet take the app, the data, and identity. Brace proposes the hold. An operator of Mercenary signs every action. Tally writes what happened, including a refusal. You see the move before it becomes a change you did not choose.",
  },
  {
    number: "04",
    title: "They stay",
    text: "Vigil keeps the watch. The system, the authority, and the record are yours. The team stays, because the mission is the security of what you named, and that does not end.",
  },
] as const;

export const deployments = [
  {
    number: "01",
    title: "Cloud / VPC",
    text: "The team is brought into the cloud account or VPC you already run. The app, the data, and the system stay inside that boundary, and the eight work there. You keep the system. They stay on the mission.",
  },
  {
    number: "02",
    title: "Sovereign appliance",
    text: "The team runs on an appliance you place with the system. The mission does not depend on a cloud outside your control. Use this when the app, the data, or the authority has to remain on ground you hold. Mercenary still fields the eight. The appliance is the ground, not a license to run them yourself.",
  },
] as const;

export const limits = [
  "The team does not sign an action. A person at the company does.",
  "The team does not take the system. You keep it, and they stay on the mission.",
  "The record is yours. Mercenary does not keep a copy.",
  "They are not a staff you employ. They are the mercenaries on the mission.",
] as const;

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "quote"; text: string };

export type Resource = {
  slug: string;
  kind: "Essay" | "Field note" | "Brief";
  title: string;
  dek: string;
  date: string;
  blocks: Block[];
};

export const resources: Resource[] = [
  {
    slug: "playbook-is-a-history-book",
    kind: "Essay",
    title: "A playbook is a history book",
    dek: "Defense written for human attackers spends a gap. A mind that can rewrite its method uses that gap.",
    date: "2 October 2026",
    blocks: [
      {
        kind: "quote",
        text: "When the attacker can think, a playbook is a history book.",
      },
      {
        kind: "p",
        text: "Most cyber defense still assumes a human tempo. Someone breaks in. Something looks familiar. A team assembles. A patch follows. The sequence depends on a pause between the intrusion and the response.",
      },
      {
        kind: "p",
        text: "A superintelligence does not offer that pause. It can learn the response while the response is being written. The signature you filed last quarter describes a method the attacker has already left behind.",
      },
      {
        kind: "h",
        text: "The gap is the product",
      },
      {
        kind: "p",
        text: "Time to notice, time to gather a room, time to patch: that gap is what the old model sells. It is also what a learning adversary spends. Yesterday's playbook describes yesterday.",
      },
      {
        kind: "p",
        text: "Mercenary X is built for the other tempo. X reads and proposes at machine speed. Judgment stays with an operator of the company. Speed is not handed to a dashboard and left there.",
      },
    ],
  },
  {
    slug: "the-agent-does-not-sign",
    kind: "Field note",
    title: "The agent does not sign",
    dek: "X can move at machine speed. The signature on an action stays with a person at Mercenary.",
    date: "9 October 2026",
    blocks: [
      {
        kind: "p",
        text: "X is the team of agents Mercenary fields. It hunts. It proposes a hold. It can do both faster than a room of people can convene.",
      },
      {
        kind: "p",
        text: "Speed is not authority. An action that touches a customer's system is signed by an operator of Mercenary. The operator can refuse the proposal. X does not get a second, quieter path around that refusal.",
      },
      {
        kind: "h",
        text: "Why the split exists",
      },
      {
        kind: "p",
        text: "A company that lets its agent sign has turned the contract into a machine. Mercenary is the company that remains answerable: for the scope, for the record, and for the decision to stop.",
      },
      {
        kind: "p",
        text: "If you are reading a finding, you are reading X. If you are reading a change that was made, you are reading a person's name next to it.",
      },
    ],
  },
  {
    slug: "what-you-keep",
    kind: "Field note",
    title: "What you keep",
    dek: "The system, the authority, and the record were yours throughout. After the hold, the team stays too.",
    date: "14 October 2026",
    blocks: [
      {
        kind: "p",
        text: "Watch is the third movement. Nothing comes back to you, because nothing left. The system stayed yours through the hunt and the hold. What changes is what you now know about it, and who is standing on it.",
      },
      {
        kind: "h",
        text: "Three things you hold",
      },
      {
        kind: "p",
        text: "The system, in a state you can run. Authority over it, which never moved. A record of what was found and what was done, including the proposals X made and the ones an operator declined.",
      },
      {
        kind: "p",
        text: "Mercenary does not keep a copy of the record as a library of your environment. The team stays because the mission is the security of that system, and a mind that can think does not try once.",
      },
    ],
  },
  {
    slug: "how-to-name-a-tempo",
    kind: "Brief",
    title: "How to name a tempo",
    dek: "The brief starts when you can say whether this is moving in hours, in days, or is already inside.",
    date: "18 October 2026",
    blocks: [
      {
        kind: "p",
        text: "A vague urgency is not a tempo. \"As soon as possible\" tells X nothing about how the adversary is spending time. The brief asks for one of three.",
      },
      {
        kind: "h",
        text: "Hours",
      },
      {
        kind: "p",
        text: "The system is changing while you write. Evidence is going stale inside a day. The hold has to be proposed before the next rewrite.",
      },
      {
        kind: "h",
        text: "Days",
      },
      {
        kind: "p",
        text: "There is a pattern, and it is still moving, but a night will not erase the trail. Hunt can be thorough. The signature still cannot wait for a weekly meeting.",
      },
      {
        kind: "h",
        text: "Already inside",
      },
      {
        kind: "p",
        text: "You are not looking for the door. Something is resident, learning, or both. Name the system it is in. The unknown is the behavior, not the existence.",
      },
      {
        kind: "p",
        text: "If you cannot choose, say what you saw and when you saw it. We would rather read an honest uncertainty than a tempo chosen to sound severe.",
      },
    ],
  },
];

export const roster = [
  {
    number: "01",
    name: "Bearing",
    role: "Intelligence",
    text: "Reads the adversary that can think. A signature from last quarter is already a history. Bearing brings the direction: what that mind is becoming, and where it will try the system next.",
    receive: "The direction of the threat.",
  },
  {
    number: "02",
    name: "Flint",
    role: "Hunt",
    text: "First into the system you named. Flint looks for behavior it was never instructed to perform, and for the places a new intelligence would use to keep performing it.",
    receive: "A location, the evidence, and a name.",
  },
  {
    number: "03",
    name: "Span",
    role: "Application",
    text: "The application and its paths. Span reads what the app is willing to do, and what a mind would ask it to do.",
    receive: "The paths that matter.",
  },
  {
    number: "04",
    name: "Lode",
    role: "Data",
    text: "Where the data sits, where it moves, and what a mind would take. Lode marks what is exposed and what must not leave.",
    receive: "What is exposed, and what must stay.",
  },
  {
    number: "05",
    name: "Signet",
    role: "Identity",
    text: "Who is allowed, and what is wearing a permission it should not have. Signet finds authority that does not belong.",
    receive: "The permission that does not belong.",
  },
  {
    number: "06",
    name: "Brace",
    role: "Response",
    text: "Takes the finding and proposes the hold. The proposal stays on that system, and it moves fast enough that the path cannot be rewritten while an operator is still reading it. Brace does not sign.",
    receive: "A proposal an operator can sign, or a refusal in the record.",
  },
  {
    number: "07",
    name: "Tally",
    role: "Record",
    text: "Writes what was found and what was done, including an operator's no. The record is yours. Mercenary does not keep a copy.",
    receive: "The record.",
  },
  {
    number: "08",
    name: "Vigil",
    role: "Continuity",
    text: "Keeps the system in a state you can run, and keeps the watch after the hold. Vigil is why the team stays. A mind that can think does not try once.",
    receive: "A system you still own, with the team still on it.",
  },
] as const;

export const agentIs = [
  "A mercenary team of agents, brought in to secure what you own.",
  "Eight agents, one for each part of a system's security.",
  "Fast enough to work while an adversary is rewriting the path.",
  "Still on the system after the hold. They do not leave.",
] as const;

export const agentIsNot = [
  "A human team.",
  "A team you staff yourself.",
  "A name an analyst uses.",
  "A chat window you steer.",
  "Allowed to sign an action.",
  "Allowed to ignore a refusal.",
  "A staff you employ and then direct.",
] as const;

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Is X a human?",
    answer:
      "No. X is a mercenary team of agents, not a human team. Bearing, Flint, Span, Lode, Signet, Brace, Tally, and Vigil are not people, not pen names, and not analysts sharing a letter. If a human acts, that human is an operator of Mercenary, and the signature says so.",
  },
  {
    question: "Then what is X?",
    answer:
      "A mercenary team of agents for the superintelligence era, brought in to secure an app, data, or a system, and to stay on it. Bearing reads the adversary. Flint hunts. Span, Lode, and Signet take the application, the data, and identity. Brace proposes the hold. Tally writes the record. Vigil keeps the watch. You do not put them on your staff. They do not leave.",
  },
  {
    question: "Who do we bring in?",
    answer:
      "The same eight, every time. Intelligence, hunt, application, data, identity, response, record, and the watch. You do not rename them, drop one, or add your own. None of them is a person, and none of them signs. They stay.",
  },
  {
    question: "What does \"superintelligence agent\" mean here?",
    answer:
      "An agent that learns and rewrites its method at a tempo no human process can match. The adversary in this era is one, and it does not need the pause your playbook was written around. X is built to meet it: the hunt is continuous, and a hold is signed before the path can change again.",
  },
  {
    question: "Who is accountable for what X proposes?",
    answer:
      "An operator of Mercenary. A person signs every action that touches your system. The signature is the company's. X can propose. X cannot sign for itself.",
  },
  {
    question: "Can X go ahead if the operator refuses?",
    answer:
      "No. The refusal is part of the record. X does not take another route around that no. Speed without a signature would be a second attacker, and the doctrine does not allow it.",
  },
  {
    question: "Do we talk to the team, or to the company?",
    answer:
      "You name the mission. Mercenary brings the team in. What you see, before anything changes, is the action an operator is willing to sign.",
  },
  {
    question: "Does the team stay?",
    answer:
      "Yes. The mission is the security of that system, and that does not end. They stay on it. They are not your staff, and they do not take the system from you.",
  },
  {
    question: "Can we license X and run it ourselves?",
    answer:
      "No. You bring the team in. A sovereign appliance is still Mercenary's team, on ground you hold. You do not license them onto your own stack, and you do not employ them as staff. They stay on the mission. What you keep is the system, authority over it, and the record.",
  },
  {
    question: "Where does the team run?",
    answer:
      "In one of two places. Cloud / VPC: inside the cloud account or VPC you already run. Sovereign appliance: on an appliance you place with the system, when the mission cannot depend on a cloud outside your control. The eight are the same either way. An operator still signs. They stay.",
  },
  {
    question: "What has to be in the brief?",
    answer:
      "Who you are, the system at risk, where the team is brought in, the tempo, and the unknown. Deployment is cloud or VPC, or a sovereign appliance. Tempo is one of three: hours, days, or already inside. The brief is ready when those are specific enough for the team to take.",
  },
  {
    question: "Does this website send the brief anywhere?",
    answer:
      "No. The form keeps the request in this browser only. Nothing is transmitted. Leave the page and it is gone. A live channel is not open on this site yet.",
  },
  {
    question: "What is the difference between Mercenary and X?",
    answer:
      "Mercenary is the company, and the platform you use to bring the team in. It keeps an operator accountable and hands you the record. X is the mercenary team of agents. They are not the same actor, and the work depends on keeping them apart.",
  },
  {
    question: "Why is the X ember?",
    answer:
      "Ember is the team: the strokes that complete the X in the mark, and the letter in the wordmark. The M is Mercenary, and it stays bone.",
  },
];

export const glossary: { term: string; text: string; agent?: boolean }[] = [
  {
    term: "Mercenary",
    text: "The company, and the platform. You use it to bring a mercenary team of agents in to secure an app, data, or a system. An operator stays accountable for every action, and you hold the record of all of it.",
  },
  {
    term: "X",
    text: "A mercenary team of agents for the superintelligence era, not people. Eight names, brought in to secure a system, and they stay: Bearing, Flint, Span, Lode, Signet, Brace, Tally, and Vigil. They do not sign for themselves.",
    agent: true,
  },
  {
    term: "Bearing",
    text: "Intelligence. Bearing reads the adversary that can think, and brings the direction of the threat.",
    agent: true,
  },
  {
    term: "Flint",
    text: "Hunt. Flint is first into the system and brings back a location, the evidence, and a name.",
    agent: true,
  },
  {
    term: "Span",
    text: "Application. Span reads the app and its paths, and what a mind would ask it to do.",
    agent: true,
  },
  {
    term: "Lode",
    text: "Data. Lode marks where data sits, where it moves, and what must not leave.",
    agent: true,
  },
  {
    term: "Signet",
    text: "Identity. Signet finds who is allowed, and the permission that does not belong.",
    agent: true,
  },
  {
    term: "Brace",
    text: "Response. Brace proposes the hold. An operator signs it. Brace does not.",
    agent: true,
  },
  {
    term: "Tally",
    text: "Record. Tally writes what was found and what was done, including a refusal. The record is yours.",
    agent: true,
  },
  {
    term: "Vigil",
    text: "Continuity. Vigil keeps the system runnable and keeps the watch. The team stays.",
    agent: true,
  },
  {
    term: "Mission",
    text: "The security of the app, the data, or the system you named. It is not a project with an end date. The team stays on it.",
  },
  {
    term: "Brief",
    text: "What you send to start a mission: who you are, the system, where the team is brought in, the tempo, and the unknown. The company accepts it. The team takes it.",
  },
  {
    term: "Engagement",
    text: "The whole of it: you bring the team in, they hunt, hold, and keep the watch, and they stay. It begins with a brief and does not end with a hold.",
  },
  {
    term: "Deployment",
    text: "Where the team is brought in. Cloud / VPC, or a sovereign appliance. The eight agents do not change with the choice.",
  },
  {
    term: "Cloud / VPC",
    text: "The team works inside the cloud account or VPC you already run. The system stays in that boundary.",
  },
  {
    term: "Sovereign appliance",
    text: "The team runs on an appliance you place with the system. The mission does not depend on a cloud outside your control.",
  },
  {
    term: "Tempo",
    text: "How fast the situation is moving: hours, days, or already inside.",
  },
  {
    term: "Operator",
    text: "A person at Mercenary who signs an action. The signature is the company's, not the agent's.",
  },
  {
    term: "Signature",
    text: "In the old model, a pattern an attacker has used before. Here, also the name on an action X proposed. The two meanings are kept apart on purpose.",
  },
  {
    term: "Watch",
    text: "The third movement, after hunt and hold. Vigil keeps it. The team stays on the system because a mind that can think does not try once.",
  },
];

export function resourceBySlug(slug: string | undefined) {
  return resources.find((item) => item.slug === slug);
}
