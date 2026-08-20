"use client";
import { useEffect, useState } from "react";

/** Types `full` out one character at a time. Restarts whenever the text
 *  changes (language switch), and prints instantly under reduced motion. */
export function useTypewriter(full: string, speed = 22): string {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(full);
      return;
    }
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [full, speed]);

  return shown;
}
