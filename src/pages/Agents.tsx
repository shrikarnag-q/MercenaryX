import { Link } from "react-router";
import { roster } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Agents() {
  useTitle("Agents");

  return (
    <article className="page">
      <PageHeader
        kicker="Mercenary team"
        title="A mercenary team of agents."
        lede="X is that team, built for the full security of a system. Bearing, Flint, Span, Lode, Signet, Brace, Tally, and Vigil. None of them is a person, and none of them signs."
      />
      <div className="wrap">
        <div className="doctrine roster">
          {roster.map((agent) => (
            <article key={agent.name}>
              <span className="num">{agent.number}</span>
              <h2>{agent.name}</h2>
              <div>
                <p className="kicker">{agent.role}</p>
                <p>{agent.text}</p>
                <p className="receive">
                  <span>Brings back</span>
                  {agent.receive}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="prose">
          <h2>How a mission starts</h2>
          <p>
            Bearing, Flint, Span, Lode, Signet, Brace, Tally, and Vigil. Not a
            menu of tools, and not a team you interview and staff. You bring
            these eight in, and they stay. They cover the adversary, the hunt,
            the app, the data, identity, the hold, the record, and the watch.
            You do not rename them, drop one, or add your own.
          </p>
          <p>
            They are agentic. They move at the tempo of a mind that does not
            sleep. They are not people in your meetings. An operator of
            Mercenary still signs every action. If the operator refuses Brace,
            Tally writes the refusal into the record, and the team does not
            route around it. Vigil keeps the watch. The eight stay on the
            mission. They do not leave.
          </p>
          <p className="page-next">
            <Link className="text-link" to="/x">
              X is not a person
              <span aria-hidden="true">→</span>
            </Link>
          </p>
          <p className="page-next">
            <Link className="text-link" to="/access">
              Join the waitlist
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
