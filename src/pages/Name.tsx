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
        lede="Mercenary is the platform. X is the mercenary team of agents you bring in for one mission."
      />
      <div className="wrap name-page">
        <section>
          <h2>Mercenary</h2>
          <p>
            The company, and the platform. You name the mission: the app, the
            data, or the system. Mercenary brings the team in and remains
            answerable. An operator of Mercenary signs every action that
            touches your system.
          </p>
          <p>
            The system stays yours. The record stays yours. The team stays on
            the mission. They do not take the environment, and they do not
            walk out of it.
          </p>
        </section>
        <section>
          <h2 className="agent">X</h2>
          <p>
            Not people. X is a mercenary team of agents for the
            superintelligence era: Bearing, Flint, Span, Lode, Signet, Brace,
            Tally, and Vigil. You bring them in for the mission. You do not employ
            them. They stay, and they read the system at machine speed: behavior it was never instructed
            to perform, and the places a new intelligence would hide to keep
            performing it.
          </p>
          <p>
            The team proposes the hold. It does not sign the hold. If an
            operator refuses the proposal, that refusal is part of the record,
            and the team does not route around it.
          </p>
        </section>
        <section className="name-meet">
          <h2>Where they meet</h2>
          <p>
            You name the mission. The company brings the team. A person signs
            what changes. You, Mercenary, and X are not the same actor, and
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
              The team
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
