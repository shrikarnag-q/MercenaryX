import { Link } from "react-router";
import { movements } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Doctrine() {
  useTitle("Doctrine");

  return (
    <article className="page">
      <PageHeader
        kicker="Doctrine"
        title="Hunt, hold, watch."
        lede="Three movements. Each one ends in something you can hold in your hands, and the team remains on the work after the last."
      />
      <div className="wrap">
        <div className="doctrine">
          {movements.map((movement) => (
            <article key={movement.number}>
              <span className="num">{movement.number}</span>
              <h2>{movement.title}</h2>
              <div>
                <p>{movement.text}</p>
                <p className="receive">
                  <span>You receive</span>
                  {movement.receive}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="page-next">
          <Link className="text-link" to="/engagements">
            How a mission runs
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
