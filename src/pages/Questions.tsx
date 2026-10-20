import { Link } from "react-router";
import { faqs } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Questions() {
  useTitle("Questions");

  return (
    <article className="page">
      <PageHeader
        kicker="Questions"
        title="Asked plainly."
        lede="Starting with the one that matters. X is not a human team. It is a mercenary team of agents, brought in to secure what you own."
      />
      <div className="wrap">
        <div className="faq">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0} name="faq">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
        <p className="page-next">
          <Link className="text-link" to="/x">
            Read about X
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
