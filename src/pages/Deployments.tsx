import { Link } from "react-router";
import { deployments } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Deployments() {
  useTitle("Deployments");

  return (
    <article className="page">
      <PageHeader
        kicker="Deployments"
        title="Two ways in."
        lede="The team is the same either way. You choose where they are brought in: your cloud or VPC, or a sovereign appliance."
      />
      <div className="wrap">
        <div className="doctrine placement">
          {deployments.map((place) => (
            <article key={place.number}>
              <span className="num">{place.number}</span>
              <h2>{place.title}</h2>
              <p>{place.text}</p>
            </article>
          ))}
        </div>
        <section className="limits">
          <p className="kicker">Either way</p>
          <h2>The team does not change.</h2>
          <ul>
            <li>Bearing, Flint, Span, Lode, Signet, Brace, Tally, and Vigil.</li>
            <li>An operator of Mercenary signs every action.</li>
            <li>The system, the authority, and the record stay yours.</li>
            <li>They stay on the mission.</li>
          </ul>
        </section>
        <p className="page-next">
          <Link className="text-link" to="/agents">
            Meet the team
            <span aria-hidden="true">→</span>
          </Link>
        </p>
        <p className="page-next">
          <Link className="text-link" to="/access">
            Bring the team
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
