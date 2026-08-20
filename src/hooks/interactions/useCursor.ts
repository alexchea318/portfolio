"use client";
import { useEffect } from "react";

const SMALL = 24;
const LARGE = 54;

/** Trailing cursor ring that swells over links and buttons.
 *  Fine-pointer + non-reduced-motion only; cleans up on unmount. */
export function useCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const ring = document.querySelector<HTMLElement>("[data-cursor-ring]");
    if (!ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let big = false;
    let raf = 0;

    // Delegated: catches links rendered after mount without re-binding.
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      ring.style.opacity = "1";
      const target = e.target instanceof Element ? e.target.closest("a[href], button") : null;
      if (!!target === big) return;
      big = !!target;
      const size = big ? LARGE : SMALL;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.margin = `${-size / 2}px 0 0 ${-size / 2}px`;
      ring.style.backgroundColor = big ? "var(--accent-soft)" : "transparent";
      ring.style.borderColor = big ? "var(--accent)" : "var(--ink)";
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      ring.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      ring.style.opacity = "0";
    };
  }, []);
}
