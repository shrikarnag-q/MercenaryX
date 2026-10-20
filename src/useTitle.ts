import { useEffect } from "react";

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — Mercenary X`
      : "Mercenary X — Mercenaries for the superintelligence era";
  }, [title]);
}
