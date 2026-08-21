"use client";
import { useEffect } from "react";

/**
 * Freezes the viewport height into `--app-h`, measured once per real resize.
 *
 * In-app browsers (Telegram, Instagram) shrink their own chrome while the page
 * scrolls, and there they shrink the layout viewport with it — `vh` and even
 * `svh` follow, so every block sized in viewport units reflows mid-scroll and
 * the page shudders. A locked pixel value cannot move.
 *
 * Only a change in *width* counts as a real resize (a rotation, a resized
 * window); a height-only change is the browser chrome and is ignored. Coarse
 * pointers only: desktop has no collapsing chrome, and there the CSS fallback
 * `--app-h: 100svh` keeps the hero honest while the window is dragged.
 */
export function useViewportLock(): void {
  useEffect(() => {
    if (!window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const root = document.documentElement;
    let width = window.innerWidth;
    const lock = () => root.style.setProperty("--app-h", `${window.innerHeight}px`);
    lock();

    const onResize = () => {
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      lock();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      root.style.removeProperty("--app-h");
    };
  }, []);
}
