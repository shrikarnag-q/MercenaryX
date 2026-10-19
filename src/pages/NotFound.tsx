import { Link } from "react-router";
import { useTitle } from "../useTitle.ts";

export function NotFound() {
  useTitle("Not found");

  return (
    <article className="page">
      <header className="page-head wrap">
        <p className="kicker">404</p>
        <h1>This page is not in the brief.</h1>
        <p className="lede">The address does not match a page on this site.</p>
        <p className="page-next">
          <Link className="text-link" to="/">
            Back to the start
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </header>
    </article>
  );
}
