import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  lede,
  nested = false,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  nested?: boolean;
}) {
  return (
    <header className={nested ? "page-head" : "page-head wrap"}>
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  );
}
