import { Link } from "react-router";
import { limits, stages } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Engagements() {
  useTitle("Engagements");

  return (
    <article className="page">
      <PageHeader
        kicker="The mission"
        title="The mission does not end."
        lede="You bring in a mercenary team of agents. They secure the system you named, and they do not leave."
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
          <h2>What this mission is not.</h2>
          <ul>
            {limits.map((limit) => (
              <li key={limit}>{limit}</li>
            ))}
          </ul>
        </section>
        <p className="page-next">
          <Link className="text-link" to="/deployments">
            Where they run
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
    </article>
  );
}
