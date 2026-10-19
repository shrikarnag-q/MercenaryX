const GORES =
  "M 100.00 81.62 L 53.38 34.99 A 80.00 80.00 0 0 1 146.62 34.99 Z M 118.38 100.00 L 165.01 53.38 A 80.00 80.00 0 0 1 165.01 146.62 Z M 100.00 118.38 L 146.62 165.01 A 80.00 80.00 0 0 1 53.38 165.01 Z M 81.62 100.00 L 34.99 146.62 A 80.00 80.00 0 0 1 34.99 53.38 Z";

const DIAMOND = "M 100 89.5 L 110.5 100 L 100 110.5 L 89.5 100 Z";

type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="3.4" />
      <path fill="currentColor" d={GORES} />
      <path fill="var(--ember)" d={DIAMOND} />
    </svg>
  );
}

export function Lockup() {
  return (
    <span className="lockup">
      <Mark className="lockup-mark" />
      <span className="wordmark">
        <span className="wordmark-name">Mercenary</span>
        <span className="wordmark-x">X</span>
      </span>
    </span>
  );
}
