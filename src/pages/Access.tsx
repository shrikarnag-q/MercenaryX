import { useEffect, useRef, useState, type FormEvent } from "react";
import { PageHeader } from "./PageHeader.tsx";
import { useTitle } from "../useTitle.ts";

type Brief = {
  name: string;
  organization: string;
  email: string;
  system: string;
  tempo: string;
  brief: string;
};

const emptyBrief: Brief = {
  name: "",
  organization: "",
  email: "",
  system: "",
  tempo: "",
  brief: "",
};

export function Access() {
  useTitle("Request access");
  const [brief, setBrief] = useState<Brief>(emptyBrief);
  const [received, setReceived] = useState<Brief | null>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  function update(field: keyof Brief, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReceived(brief);
  }

  useEffect(() => {
    if (received) confirmationRef.current?.focus();
  }, [received]);

  return (
    <article className="page">
      <div className="wrap access access-page">
        <div>
          <PageHeader
            nested
            kicker="Access"
            title="Send the brief."
            lede="Tell us who you are, which system is at risk, and how fast this is moving. We read every brief. This preview keeps the request in the browser only."
          />
        </div>
        {received ? (
          <div className="confirmation" role="status" tabIndex={-1} ref={confirmationRef}>
            <p className="kicker">Introduction received</p>
            <p className="confirm-title">
              {received.name}, the brief on {received.system} for {received.organization} stays in
              this session.
            </p>
            <p>Nothing was transmitted. Leave the page and it is gone.</p>
            <button
              type="button"
              className="text-link"
              onClick={() => {
                setReceived(null);
                setBrief(emptyBrief);
              }}
            >
              Write another
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          <form className="brief" onSubmit={onSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={brief.name}
                  onChange={(event) => update("name", event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="organization">Organization</label>
                <input
                  id="organization"
                  name="organization"
                  autoComplete="organization"
                  required
                  value={brief.organization}
                  onChange={(event) => update("organization", event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={brief.email}
                onChange={(event) => update("email", event.target.value)}
              />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="system">System at risk</label>
                <input
                  id="system"
                  name="system"
                  required
                  value={brief.system}
                  onChange={(event) => update("system", event.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="tempo">Tempo</label>
                <select
                  id="tempo"
                  name="tempo"
                  required
                  value={brief.tempo}
                  onChange={(event) => update("tempo", event.target.value)}
                >
                  <option value="">Select</option>
                  <option>Hours</option>
                  <option>Days</option>
                  <option>Already inside</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="facing">What you are facing</label>
              <textarea
                id="facing"
                name="facing"
                required
                rows={4}
                placeholder="What changed, and what you cannot yet name."
                value={brief.brief}
                onChange={(event) => update("brief", event.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Request access
            </button>
          </form>
        )}
      </div>
    </article>
  );
}
