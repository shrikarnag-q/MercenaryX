import { useEffect, useRef, useState, type FormEvent } from "react";
import { Lockup, Mark } from "./Mark.tsx";

type Brief = {
  name: string;
  organization: string;
  email: string;
  system: string;
  tempo: string;
  brief: string;
};

const emptyBrief: Brief = {
  name: "",
  organization: "",
  email: "",
  system: "",
  tempo: "",
  brief: "",
};

const movements = [
  {
    id: "hunt",
    number: "01",
    title: "Hunt",
    text: "X reads the system you named: behavior it was never instructed to perform, and the places a new intelligence would use to keep performing it. You receive a location, the evidence, and a name for what was found.",
  },
  {
    id: "hold",
    number: "02",
    title: "Hold",
    text: "X proposes the containment. An operator of the company signs it. The action stays scoped to your system, and it is fast enough that the adversary cannot rewrite the path while we are still in it.",
  },
  {
    id: "return",
    number: "03",
    title: "Return",
    text: "The engagement closes when three things are back in your hands: the system, authority over it, and a record of what was found and what was done. We do not remain in the environment.",
  },
];

function App() {
  const [brief, setBrief] = useState<Brief>(emptyBrief);
  const [received, setReceived] = useState<Brief | null>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  function update(field: keyof Brief, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReceived(brief);
  }

  useEffect(() => {
    if (received) confirmationRef.current?.focus();
  }, [received]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Mercenary X, home">
            <Lockup />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#the-name">The name</a>
            <a href="#doctrine">Doctrine</a>
            <a href="#era">The era</a>
            <a href="#access">Access</a>
          </nav>
          <a className="btn nav-cta" href="#access">
            Request access
          </a>
        </div>
      </header>

      <main id="content">
        <section className="hero wrap" id="top">
          <div className="hero-copy">
            <p className="status">
              <i aria-hidden="true" />
              Receiving introductions
            </p>
            <h1>
              The <em>unknown</em>
              <br />
              is the brief.
            </h1>
            <p className="deck">
              Mercenary X is a cybersecurity platform run as a contract force.
              Security leaders bring a system that is under pressure from an
              adversary that can learn. The work ends when that system is
              theirs again.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#access">
                Request access
              </a>
              <a className="text-link" href="#doctrine">
                Read the doctrine
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="seal">
            <Mark className="seal-mark" />
          </div>
        </section>

        <section id="the-name" className="section name-section">
          <div className="wrap">
            <p className="kicker">The name</p>
            <div className="name-grid">
              <article>
                <h2>Mercenary</h2>
                <p>
                  The company. It takes the contract, keeps an operator
                  accountable for every action, and returns the system with a
                  record.
                </p>
              </article>
              <article>
                <h2 className="agent">X</h2>
                <p>
                  The superintelligence agent that works for the company. X
                  does the machine-speed work of an engagement. It does not
                  sign for itself.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="doctrine" className="section">
          <div className="wrap">
            <p className="kicker">Doctrine</p>
            <h2>A mercenary does not occupy.</h2>
            <p className="lede">
              Hunt, hold, return. Then the contract is over.
            </p>
            <div className="doctrine">
              {movements.map((movement) => (
                <article id={movement.id} key={movement.id}>
                  <span className="num">{movement.number}</span>
                  <h3>{movement.title}</h3>
                  <p>{movement.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="era" className="section section-era">
          <div className="wrap era">
            <p className="kicker">The era</p>
            <div>
              <blockquote>
                When the attacker can think, a playbook is a history book.
              </blockquote>
              <p>
                Defense built for human attackers assumes a gap. Time to
                notice. Time to gather a room. Time to patch. A mind that can
                rewrite its own method uses that gap. Yesterday's playbook
                describes yesterday.
              </p>
              <p>
                Mercenary X is built for the other tempo. Judgment stays
                with an operator. Speed is not handed to a dashboard and left
                there.
              </p>
            </div>
          </div>
        </section>

        <section id="access" className="section">
          <div className="wrap access">
            <div>
              <p className="kicker">Access</p>
              <h2>Send the brief.</h2>
              <p className="lede">
                Tell us who you are, which system is at risk, and how fast
                this is moving. We read every brief. This preview keeps the
                request in the browser only.
              </p>
            </div>
            {received ? (
              <div
                className="confirmation"
                role="status"
                tabIndex={-1}
                ref={confirmationRef}
              >
                <p className="kicker">Introduction received</p>
                <p className="confirm-title">
                  {received.name}, the brief on {received.system} for{" "}
                  {received.organization} stays in this session.
                </p>
                <p>Nothing was transmitted. Leave the page and it is gone.</p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setReceived(null);
                    setBrief(emptyBrief);
                  }}
                >
                  Write another
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : (
              <form className="brief" onSubmit={onSubmit}>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={brief.name}
                      onChange={(event) => update("name", event.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="organization">Organization</label>
                    <input
                      id="organization"
                      name="organization"
                      autoComplete="organization"
                      required
                      value={brief.organization}
                      onChange={(event) =>
                        update("organization", event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={brief.email}
                    onChange={(event) => update("email", event.target.value)}
                  />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="system">System at risk</label>
                    <input
                      id="system"
                      name="system"
                      required
                      value={brief.system}
                      onChange={(event) => update("system", event.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="tempo">Tempo</label>
                    <select
                      id="tempo"
                      name="tempo"
                      required
                      value={brief.tempo}
                      onChange={(event) => update("tempo", event.target.value)}
                    >
                      <option value="">Select</option>
                      <option>Hours</option>
                      <option>Days</option>
                      <option>Already inside</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="facing">What you are facing</label>
                  <textarea
                    id="facing"
                    name="facing"
                    required
                    rows={4}
                    placeholder="What changed, and what you cannot yet name."
                    value={brief.brief}
                    onChange={(event) => update("brief", event.target.value)}
                  />
                </div>
                <button className="btn" type="submit">
                  Request access
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap foot">
          <a className="brand" href="#top" aria-label="Mercenary X, home">
            <Lockup />
          </a>
          <p>Cybersecurity for the superintelligence era.</p>
          <p>© 2026 Mercenary X</p>
        </div>
      </footer>
    </>
  );
}

export default App;
