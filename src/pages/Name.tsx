import { Link } from "react-router";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

export function Name() {
  useTitle("The name");

  return (
    <article className="page">
      <PageHeader
        kicker="The name"
        title="Two words. Two roles."
        lede="Mercenary is the company. X is the superintelligence agent that works for the company. The platform is the contract between them and you."
      />
      <div className="wrap name-page">
        <section>
          <h2>Mercenary</h2>
          <p>
            The company. It takes the introduction, accepts the brief, and
            remains answerable for the engagement. An operator of Mercenary
            signs every action that touches your system.
          </p>
          <p>
            The company also closes the work. Authority comes back to you. The
            record comes back with it. Mercenary does not stay in the
            environment as a tenant.
          </p>
        </section>
        <section>
          <h2 className="agent">X</h2>
          <p>
            Not a human. X is four agents employed by the company: Pike,
            Latch, Quill, and Bail. They read the system at machine speed:
            behavior it was never instructed to perform, and the places a new
            intelligence would hide to keep performing it.
          </p>
          <p>
            X proposes the hold. It does not sign the hold. If an operator
            refuses the proposal, that refusal is part of the record, and X
            does not route around it.
          </p>
        </section>
        <section className="name-meet">
          <h2>Where they meet</h2>
          <p>
            You bring a brief. The company accepts it. X works it. A person
            signs what changes. The three of you are not the same actor, and
            the doctrine depends on keeping them apart.
          </p>
          <p>
            The ember in the seal is X: the unknown, once it has been marked.
            The coin around it is the company, and the limit of the contract.
          </p>
          <p className="name-links">
            <Link className="text-link" to="/x">
              What X is
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" to="/agents">
              The roster
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" to="/doctrine">
              Read the doctrine
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </section>
      </div>
    </article>
  );
}
