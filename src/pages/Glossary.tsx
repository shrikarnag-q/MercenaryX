import { glossary } from "../content.ts";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Glossary() {
  useTitle("Glossary");

  return (
    <article className="page">
      <PageHeader
        kicker="Glossary"
        title="The words we keep apart."
        lede="The doctrine fails if these are used as synonyms. Mercenary is not X. A signature on an action is not a signature of an attacker."
      />
      <div className="wrap">
        <dl className="glossary">
          {glossary.map((entry) => (
            <div key={entry.term}>
              <dt className={entry.agent ? "agent" : undefined}>{entry.term}</dt>
              <dd>{entry.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
