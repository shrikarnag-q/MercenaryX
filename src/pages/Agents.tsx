import { Link } from "react-router";
import { roster } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Agents() {
  useTitle("Agents");

  return (
    <article className="page">
      <PageHeader
        kicker="Agents"
        title="Four names. The same four every time."
        lede="When a company signs up with Mercenary, it uses X. X is these agents. The roster is fixed. None of them is a person, and none of them signs."
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
                  <span>You receive</span>
                  {agent.receive}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="prose">
          <h2>What signup gives you</h2>
          <p>
            Pike, Latch, Quill, and Bail. Not a menu, and not a team you staff.
            Mercenary employs them. Your company uses them for the engagement
            named in the brief. You do not rename them, and you do not bring a
            fifth.
          </p>
          <p>
            You still talk to the company. An operator of Mercenary signs every
            action that touches the system. If the operator refuses Latch, Quill
            writes the refusal, and Latch does not route around it. When Bail is
            finished, the four stop.
          </p>
          <p className="page-next">
            <Link className="text-link" to="/x">
              X is not a person
              <span aria-hidden="true">→</span>
            </Link>
          </p>
          <p className="page-next">
            <Link className="text-link" to="/access">
              Request access
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
