import { Link } from "react-router";
import { resources } from "../content.ts";
import { useTitle } from "../useTitle.ts";

const doors = [
  {
    to: "/name",
    number: "01",
    title: "The name",
    text: "Mercenary is the platform and the company. X is the team it fields.",
  },
  {
    to: "/x",
    number: "02",
    title: "X",
    text: "A mercenary team of agents. Not people. Brought in to secure what you own.",
  },
  {
    to: "/agents",
    number: "03",
    title: "Agents",
    text: "Bearing, Flint, Span, Lode, Signet, Brace, Tally, Vigil. They stay.",
  },
  {
    to: "/doctrine",
    number: "04",
    title: "Doctrine",
    text: "Hunt, hold, watch. The team stays on the mission.",
  },
  {
    to: "/engagements",
    number: "05",
    title: "Engagements",
    text: "How the team is brought in, and why it does not leave.",
  },
  {
    to: "/deployments",
    number: "06",
    title: "Deployments",
    text: "Cloud or VPC, or a sovereign appliance. The same team either way.",
  },
  {
    to: "/resources",
    number: "07",
    title: "Resources",
    text: "Essays, field notes, a brief on tempo, and the glossary.",
  },
  {
    to: "/questions",
    number: "08",
    title: "Questions",
    text: "Plain answers, starting with what X is and what it is not.",
  },
];

export function Home() {
  useTitle();

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="status">
            <i aria-hidden="true" />
            Taking missions
          </p>
          <h1 className="hero-title">
            Mercenaries for the
            <br />
            <em>superintelligence</em> era.
          </h1>
          <p className="deck">
            X is a team of eight agents you bring in to hunt, hold, and keep
            watch over your apps, data, and systems against adversaries that
            can think. They run in your cloud or on your own appliance. A
            person at Mercenary signs every action. They do not leave.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/access">
              Bring the team
            </Link>
            <Link className="text-link" to="/agents">
              Meet the team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero-sketch.png"
            alt="White pencil sketch of a mounted condottiere carrying a lance. Toward the back, the pencil strokes resolve into a fine wireframe lattice. An ember X on the pennant."
            width={722}
            height={827}
          />
        </figure>
      </section>

      <section className="section directory-section">
        <div className="wrap">
          <p className="kicker">The site</p>
          <h2>Start with the part you need.</h2>
          <div className="directory">
            {doors.map((door) => (
              <Link key={door.to} to={door.to}>
                <span>{door.number}</span>
                <h3 className={door.to === "/x" ? "agent" : undefined}>{door.title}</h3>
                <p>{door.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-era">
        <div className="wrap era">
          <p className="kicker">The era</p>
          <div>
            <blockquote>
              When the attacker can think, a playbook is a history book.
            </blockquote>
            <p>
              Defense built for human attackers assumes a gap. A mind that can
              rewrite its own method uses that gap.
            </p>
            <Link className="text-link" to="/era">
              Read the era
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Resources</p>
          <h2>From the library.</h2>
          <ul className="index-list">
            {resources.slice(0, 3).map((item) => (
              <li key={item.slug}>
                <Link to={`/resources/${item.slug}`}>
                  <span className="kicker">
                    {item.kind} · {item.date}
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="text-link library-more" to="/resources">
            All resources
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
