import { Link } from "react-router";
import { agentIs, agentIsNot } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Agent() {
  useTitle("X");

  return (
    <article className="page">
      <PageHeader
        kicker="The team"
        title="X is not a person."
        lede="X is a mercenary team of agents for the superintelligence era, not a person and not a human crew. You bring in Bearing, Flint, Span, Lode, Signet, Brace, Tally, and Vigil for one mission. None of them signs."
      />
      <div className="wrap">
        <div className="agent-facts">
          <section>
            <p className="kicker">X is</p>
            <ul>
              {agentIs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className="kicker">X is not</p>
            <ul>
              {agentIsNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="prose">
          <h2>What the team is</h2>
          <p>
            X is not a colleague with a letter for a name, and it is not a
            crew of people sharing a desk. It is a mercenary team of agents that can learn. On a
            mission it reads the system you named: behavior that system was
            never instructed to perform, and the places a new intelligence
            would use to keep performing it.
          </p>
          <p>
            The team works at the tempo of a mind that does not sleep and does
            not reuse yesterday's method for your convenience. That is the
            sense in which they are superintelligence agents. The letter is not
            a disguise for a person on a shift.
          </p>
          <h2>What the mission is</h2>
          <p>
            You name the mission: the app, the data, or the system. Mercenary
            brings the eight in for it. You do not brief the
            team yourself. An operator, a person at Mercenary, signs every
            action that touches your system. You see the move before it becomes
            a change you did not choose.
          </p>
          <h2>The limit</h2>
          <p>
            If the operator refuses the proposal, the refusal is written into
            the record. X does not take another route around that no. Speed
            without a signature would be a second attacker. The doctrine does
            not allow it.
          </p>
          <h2>They stay</h2>
          <p>
            The team does not leave. The mission is the security of that
            system, and they remain on it. The system, the authority, and the
            record are yours. X is not a staff you employ. They are the
            mercenaries you brought in, and they stay.
          </p>
          <p>
            Ember marks the agent: the letter in the wordmark, and the diamond
            in the seal. Mercenary stays bone. The coin around the diamond is
            the company, and the edge of the contract.
          </p>
          <p className="page-next">
            <Link className="text-link" to="/agents">
              Meet the team
              <span aria-hidden="true">→</span>
            </Link>
          </p>
          <p className="page-next">
            <Link className="text-link" to="/questions">
              Questions about X
              <span aria-hidden="true">→</span>
            </Link>
          </p>
          <p className="page-next">
            <Link className="text-link" to="/doctrine">
              Read the doctrine
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
