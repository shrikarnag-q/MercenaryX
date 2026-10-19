import { useEffect } from "react";

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} — Mercenary X`
      : "Mercenary X — Cyber operations for the superintelligence era";
  }, [title]);
}
