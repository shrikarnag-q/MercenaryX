import { Link } from "react-router";
import { resources } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Resources() {
  useTitle("Resources");

  return (
    <article className="page">
      <PageHeader
        kicker="Resources"
        title="Reading from the company."
        lede="Essays, field notes, and a short brief. Nothing here is a customer story. The library is the doctrine, written out."
      />
      <div className="wrap">
        <ul className="index-list">
          {resources.map((item) => (
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
        <section className="glossary-promo">
          <p className="kicker">Reference</p>
          <h2>Glossary</h2>
          <p>
            Mercenary, X, the eight, mission, brief, deployment, tempo,
            operator, signature, watch.
          </p>
          <Link className="text-link" to="/glossary">
            Open the glossary
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </article>
  );
}
