export const movements = [
  {
    number: "01",
    title: "Hunt",
    text: "X reads the system you named: behavior it was never instructed to perform, and the places a new intelligence would use to keep performing it.",
    receive: "A location, the evidence, and a name.",
  },
  {
    number: "02",
    title: "Hold",
    text: "X proposes the containment. An operator of the company signs it. The action stays scoped to your system, and it is fast enough that the adversary cannot rewrite the path while we are still in it.",
    receive: "A signed action, scoped to your system.",
  },
  {
    number: "03",
    title: "Return",
    text: "The engagement closes when the work is done. We do not remain in the environment.",
    receive: "The system, the authority, and the record.",
  },
] as const;

export const stages = [
  {
    number: "01",
    title: "Introduction",
    text: "Access begins with a person, an organization, and a sentence about what changed. We read every brief. A live channel is not open yet. This site keeps a request in the browser only.",
  },
  {
    number: "02",
    title: "The brief",
    text: "You name the system, the tempo, and the unknown. Hours, days, or already inside. The brief is finished when those three are specific enough for X to read.",
  },
  {
    number: "03",
    title: "The work",
    text: "X hunts and proposes the hold. An operator of Mercenary signs every action that touches the business. You see the move before it becomes a change you did not choose.",
  },
  {
    number: "04",
    title: "The close",
    text: "The system, authority over it, and the record come back to you. X stops. The company leaves. A mercenary who keeps the ground is no longer a mercenary.",
  },
] as const;

export const limits = [
  "X does not sign an action. A person at the company does.",
  "The company does not remain in the environment after the return.",
  "The record of the engagement comes back with the system. It is not a product we keep.",
  "A standing retainer that never ends is a different contract. This one closes.",
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
        text: "X is the superintelligence agent that works for the company. It hunts. It proposes a hold. It can do both faster than a room of people can convene.",
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
    slug: "what-comes-back",
    kind: "Field note",
    title: "What comes back",
    dek: "An engagement ends with three things in your hands. The company does not keep a fourth.",
    date: "14 October 2026",
    blocks: [
      {
        kind: "p",
        text: "Return is the third movement, and it is the one that makes the name true. A mercenary who stays is an occupier. The contract is written so that staying is a failure of the work, not a success of the relationship.",
      },
      {
        kind: "h",
        text: "Three things",
      },
      {
        kind: "p",
        text: "The system, as it stands after the hold. Authority over it, which means our access is closed. A record of what was found and what was done, including the proposals X made and the ones an operator declined.",
      },
      {
        kind: "p",
        text: "We do not keep a copy of the record as a library of your environment. We do not leave an agent resident so the next incident is cheaper. The next incident, if it comes, begins with a new introduction.",
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
    name: "Pike",
    role: "Hunt",
    text: "Pike reads the system named in the brief. It looks for behavior that system was never instructed to perform, and for the places a new intelligence would use to keep performing it.",
    receive: "A location, the evidence, and a name.",
  },
  {
    number: "02",
    name: "Latch",
    role: "Hold",
    text: "Latch proposes the containment. The proposal stays scoped to that system, and it is fast enough that the path cannot be rewritten while an operator is still reading it. Latch does not sign.",
    receive: "A proposal an operator can sign, or a refusal in the record.",
  },
  {
    number: "03",
    name: "Quill",
    role: "Record",
    text: "Quill writes what Pike found and what was done with it, including an operator's no. The record comes back with the system. Mercenary does not keep a copy as a product.",
    receive: "The record, in your hands.",
  },
  {
    number: "04",
    name: "Bail",
    role: "Return",
    text: "Bail closes the engagement. It checks that the system, authority over it, and the record are back with the company. Then the agents stop. They do not remain in the environment.",
    receive: "The system, the authority, and the record.",
  },
] as const;

export const agentIs = [
  "Four named agents, employed by the company.",
  "The part of the work that hunts, proposes, records, and returns.",
  "Fast enough to read a system while an adversary is rewriting it.",
  "Finished when the engagement returns.",
] as const;

export const agentIsNot = [
  "A human.",
  "A roster you name yourself.",
  "A name an analyst uses.",
  "A chat window you steer.",
  "Allowed to sign an action.",
  "Allowed to ignore a refusal.",
  "A presence that remains after the return.",
] as const;

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Is X a human?",
    answer:
      "No. X is not a person, not a pen name, and not a team writing under one letter. If a human is involved in an action, that human is an operator of Mercenary, and the signature says so.",
  },
  {
    question: "Then what is X?",
    answer:
      "X is not one unnamed model, and it is not a person. X is four agents employed by Mercenary: Pike, Latch, Quill, and Bail. A company that signs up uses those four. It does not employ them, and it does not keep them after the return.",
  },
  {
    question: "Which agents do we get when we sign up?",
    answer:
      "The same four, every time. Pike hunts. Latch proposes the hold. Quill writes the record. Bail closes the engagement and brings the system back. A company does not rename them, drop one, or add its own. None of them is a person, and none of them signs.",
  },
  {
    question: "What does \"superintelligence agent\" mean here?",
    answer:
      "An agent that can learn and rewrite its method at a tempo a human process cannot match. It does not need the pause your playbook was written around. That is why the hunt is continuous, and why a hold has to be signed before the path changes again.",
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
    question: "Do we talk to X, or to the company?",
    answer:
      "You talk to Mercenary. You bring a brief. The company accepts it. X reads it and does the machine-speed work. What you see, before anything changes, is the action an operator is willing to sign.",
  },
  {
    question: "Does X stay in our environment?",
    answer:
      "No. The engagement ends. X stops. The company leaves. A standing presence after the return is outside the doctrine.",
  },
  {
    question: "Can we license X and run it ourselves?",
    answer:
      "No. Signing up gives a company the roster for the engagement. It does not give them a copy to run after Bail is finished. What you keep is the system, authority over it, and the record.",
  },
  {
    question: "What has to be in the brief?",
    answer:
      "Who you are, the system at risk, the tempo, and the unknown. Tempo is one of three: hours, days, or already inside. The brief is ready when those are specific enough for X to read.",
  },
  {
    question: "Does this website send the brief anywhere?",
    answer:
      "No. The form keeps the request in this browser only. Nothing is transmitted. Leave the page and it is gone. A live channel is not open on this site yet.",
  },
  {
    question: "What is the difference between Mercenary and X?",
    answer:
      "Mercenary is the company. It takes the contract, keeps an operator accountable, and returns the system with a record. X is the agent that works for the company. They are not the same actor, and the work depends on keeping them apart.",
  },
  {
    question: "Why is the X ember?",
    answer:
      "Ember marks the agent: the letter in the wordmark and the diamond in the seal. Mercenary stays bone. The coin around the diamond is the company, and the edge of the contract.",
  },
];

export const glossary: { term: string; text: string; agent?: boolean }[] = [
  {
    term: "Mercenary",
    text: "The company. It takes the contract, keeps an operator accountable for every action, and returns the system with a record.",
  },
  {
    term: "X",
    text: "Not a person. The fixed roster of agents employed by the company: Pike, Latch, Quill, and Bail. They do not sign for themselves.",
    agent: true,
  },
  {
    term: "Pike",
    text: "The hunt. Pike reads the system in the brief and returns a location, the evidence, and a name.",
    agent: true,
  },
  {
    term: "Latch",
    text: "The hold. Latch proposes containment scoped to that system. An operator signs it. Latch does not.",
    agent: true,
  },
  {
    term: "Quill",
    text: "The record. Quill writes what was found and what was done, including a refusal. The record comes back with the system.",
    agent: true,
  },
  {
    term: "Bail",
    text: "The return. Bail closes the engagement and checks that the system, the authority, and the record are back with the company.",
    agent: true,
  },
  {
    term: "Engagement",
    text: "One contract, from introduction to return. It has an end. A standing presence after that end is outside the doctrine.",
  },
  {
    term: "Brief",
    text: "The named system, the tempo, and the unknown. X reads the brief. The company accepts it.",
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
    term: "Return",
    text: "The close of an engagement: system, authority, and record, back in the customer's hands.",
  },
];

export function resourceBySlug(slug: string | undefined) {
  return resources.find((item) => item.slug === slug);
}
