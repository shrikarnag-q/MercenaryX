// An M that becomes an X. The bone M is Mercenary. The ember strokes that
// continue its diagonals through the vertex complete the X: the team.
const EMBER =
  "M 100 84.92 L 49 146.46 L 49 180 L 59.36 180 L 100 123.08 Z M 100 84.92 L 151 146.46 L 151 180 L 140.64 180 L 100 123.08 Z";
const BONE =
  "M 19 20 H 49 V 180 H 19 Z M 151 20 H 181 V 180 H 151 Z M 19 20 L 53.08 20 L 100 84.92 L 100 123.08 Z M 181 20 L 146.92 20 L 100 84.92 L 100 123.08 Z";

type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <path fill="var(--ember)" d={EMBER} />
      <path fill="currentColor" d={BONE} />
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
