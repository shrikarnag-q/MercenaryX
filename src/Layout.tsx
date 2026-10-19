import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { Lockup } from "./Mark.tsx";

const links = [
  { to: "/x", label: "X" },
  { to: "/agents", label: "Agents" },
  { to: "/doctrine", label: "Doctrine" },
  { to: "/engagements", label: "Engagements" },
  { to: "/resources", label: "Resources" },
  { to: "/questions", label: "Questions" },
];

function Item({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => {
        const names = [];
        if (to === "/x") names.push("nav-x");
        if (isActive) names.push("is-active");
        return names.join(" ") || undefined;
      }}
    >
      {label}
    </NavLink>
  );
}

export function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(location.pathname);

  if (path !== location.pathname) {
    setPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap nav">
          <Link className="brand" to="/" aria-label="Mercenary X, home">
            <Lockup />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <Item key={link.to} to={link.to} label={link.label} />
            ))}
          </nav>
          <Link className="btn nav-cta" to="/access">
            Request access
          </Link>
        </div>
        <nav id="site-nav" className="drawer wrap" aria-label="Mobile" hidden={!open}>
          {links.map((link) => (
            <Item key={link.to} to={link.to} label={link.label} onClick={() => setOpen(false)} />
          ))}
          <Link className="btn drawer-cta" to="/access" onClick={() => setOpen(false)}>
            Request access
          </Link>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <Link className="brand" to="/" aria-label="Mercenary X, home">
              <Lockup />
            </Link>
            <p>Cybersecurity for the superintelligence era.</p>
          </div>
          <nav aria-label="Company">
            <p className="kicker">Company</p>
            <Link to="/name">The name</Link>
            <Link to="/x">X</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/doctrine">Doctrine</Link>
            <Link to="/engagements">Engagements</Link>
          </nav>
          <nav aria-label="Reading">
            <p className="kicker">Reading</p>
            <Link to="/era">The era</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/glossary">Glossary</Link>
            <Link to="/questions">Questions</Link>
          </nav>
          <div>
            <p className="kicker">Access</p>
            <Link to="/access">Request access</Link>
            <p className="foot-year">© 2026 Mercenary X</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
