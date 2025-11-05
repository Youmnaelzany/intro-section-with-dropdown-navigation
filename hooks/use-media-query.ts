"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const getMatch = () => typeof window !== "undefined" && window.matchMedia(query).matches;
  const [matches, setMatches] = useState<boolean>(getMatch());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mql.matches);

    if (mql.addEventListener) {
      mql.addEventListener("change", handler);
    } else {
      // @ts-expect-error Older browsers
      mql.addListener(handler);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handler);
      } else {
        // @ts-expect-error Older browsers
        mql.removeListener(handler);
      }
    };
  }, [query]);

  return matches;
}
