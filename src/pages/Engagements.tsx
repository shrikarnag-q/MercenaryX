import { Link } from "react-router";
import { limits, stages } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Engagements() {
  useTitle("Engagements");

  return (
    <article className="page">
      <PageHeader
        kicker="Engagements"
        title="One contract. A visible end."
        lede="You name the system and the tempo. X does the machine-speed work. The company signs what changes, and then leaves."
      />
      <div className="wrap">
        <div className="doctrine">
          {stages.map((stage) => (
            <article key={stage.number}>
              <span className="num">{stage.number}</span>
              <h2>{stage.title}</h2>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
        <section className="limits">
          <p className="kicker">Outside the contract</p>
          <h2>What this engagement is not.</h2>
          <ul>
            {limits.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
        </section>
        <p className="page-next">
          <Link className="text-link" to="/access">
            Send a brief
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
