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
        title="A mercenary does not occupy."
        lede="Hunt, hold, return. Then the contract is over. Each movement ends in something you can hold."
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
            How an engagement runs
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
