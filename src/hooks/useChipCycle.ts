"use client";
import { useEffect, useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Step that hops across the list instead of walking it: any stride coprime
 *  with the length still visits every item exactly once per lap. */
function stride(count: number): number {
  for (const s of [5, 7, 3, 4, 2]) {
    if (s < count && gcd(s, count) === 1) return s;
  }
  return 1;
}

/** Rotating highlight over a list: hops one stride every `interval` ms.
 *  Stays at -1 under reduced motion, so nothing blinks. */
export function useChipCycle(count: number, interval = 850): number {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (count < 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const step = stride(count);
    setActive(0);
    const id = setInterval(() => setActive((i) => (i + step) % count), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  return active;
}
