import { Link } from "react-router";
import { agentIs, agentIsNot } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Agent() {
  useTitle("X");

  return (
    <article className="page">
      <PageHeader
        kicker="The agent"
        title="X is not a person."
        lede="X is not a human working under another name. It is four agents employed by Mercenary: Pike, Latch, Quill, and Bail. A company that signs up uses those four. None of them signs."
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
          <h2>What &quot;agent&quot; means here</h2>
          <p>
            X is not a colleague with a letter for a name. It is an agent that
            can learn. On an engagement it reads the system you named: behavior
            that system was never instructed to perform, and the places a new
            intelligence would use to keep performing it.
          </p>
          <p>
            It works at the tempo of a mind that does not sleep and does not
            reuse yesterday's method for your convenience. That is the sense in
            which it is a superintelligence agent. The letter is not a disguise
            for a person on a shift.
          </p>
          <h2>What it does</h2>
          <p>
            You do not brief X. You brief the company. Mercenary accepts the
            brief. X hunts and proposes the containment. An operator, a person
            at Mercenary, signs every action that touches your system. You see
            the move before it becomes a change you did not choose.
          </p>
          <h2>The limit</h2>
          <p>
            If the operator refuses the proposal, the refusal is written into
            the record. X does not take another route around that no. Speed
            without a signature would be a second attacker. The doctrine does
            not allow it.
          </p>
          <h2>When the contract ends</h2>
          <p>
            X stops. The company leaves. What comes back is the system,
            authority over it, and the record. X is not something you license
            and keep running in the building.
          </p>
          <p>
            Ember marks the agent: the letter in the wordmark, and the diamond
            in the seal. Mercenary stays bone. The coin around the diamond is
            the company, and the edge of the contract.
          </p>
          <p className="page-next">
            <Link className="text-link" to="/agents">
              The four agents
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
