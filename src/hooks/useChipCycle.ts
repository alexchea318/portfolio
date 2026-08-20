"use client";
import { useEffect, useState } from "react";

/** Rotating highlight over a list: advances one step every `interval` ms.
 *  Stays at -1 under reduced motion, so nothing blinks. */
export function useChipCycle(count: number, interval = 850): number {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (count < 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setActive(0);
    const id = setInterval(() => setActive((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  return active;
}
