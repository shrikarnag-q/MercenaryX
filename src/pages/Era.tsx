import { Link } from "react-router";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Era() {
  useTitle("The era");

  return (
    <article className="page paper-page">
      <PageHeader
        kicker="The era"
        title="The attacker can think."
        lede="Superintelligence changes the tempo of an intrusion. The pause your process depends on is the pause it spends."
      />
      <div className="wrap">
        <div className="prose">
        <blockquote>
          When the attacker can think, a playbook is a history book.
        </blockquote>
        <p>
          Defense built for human attackers assumes a gap. Time to notice. Time
          to gather a room. Time to patch. Each of those intervals was
          reasonable when the other side had to sleep, staff a shift, and reuse
          a method that had worked before.
        </p>
        <p>
          A mind that can rewrite its own method does not reuse the method for
          your convenience. It can learn the response while the response is
          being written. The signature in last quarter's file is a description
          of someone who has already moved on.
        </p>
        <h2>What changes in the work</h2>
        <p>
          Hunting has to be continuous, because a list of known behaviors is a
          history. Containment has to be fast enough that the path cannot be
          rewritten while we are in it. And someone still has to sign the
          action. Speed without a signature is just a second attacker.
        </p>
        <p>
          That is the split inside Mercenary X. X is the mercenary team of agents
          you bring in, reading and proposing at the tempo of
          the threat. Mercenary is the platform, and the company that signs.
          You use it to send them to an app, the data, or a system you still own.
        </p>
        <p>
          The era does not ask you to become a research lab. It asks you to
          stop spending a gap the other side has already priced in.
        </p>
        <p className="page-next">
          <Link className="text-link" to="/resources/playbook-is-a-history-book">
            Read the essay
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
      </div>
    </article>
  );
}
