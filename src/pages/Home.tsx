import { Link } from "react-router";
import { resources } from "../content.ts";
import { Mark } from "../Mark.tsx";
import { useTitle } from "../useTitle.ts";

const doors = [
  {
    to: "/name",
    number: "01",
    title: "The name",
    text: "Mercenary is the platform. You bring X in for one mission.",
  },
  {
    to: "/x",
    number: "02",
    title: "X",
    text: "A mercenary team of agents. Not people. Brought in for one mission.",
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
    text: "Hunt, hold, return. The team stays on the mission.",
  },
  {
    to: "/engagements",
    number: "05",
    title: "Engagements",
    text: "One mission. The team stays on it.",
  },
  {
    to: "/resources",
    number: "06",
    title: "Resources",
    text: "Essays, field notes, a brief on tempo, and the glossary.",
  },
  {
    to: "/questions",
    number: "07",
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
          <h1>
            A mercenary
            <br />
            team of <em>agents</em>.
          </h1>
          <p className="deck">
            Mercenary is the platform. You bring in X, a mercenary team of
            agents, for one mission in the superintelligence era. Bearing,
            Flint, Span, Lode, Signet, Brace, Tally, and Vigil secure the
            app, the data, and the system. They stay.
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
        <div className="seal">
          <Mark className="seal-mark" />
        </div>
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
