"use client";
import { useMagnetic } from "./useMagnetic";
import { useCursor } from "./useCursor";

/** All desktop kinetic flourishes. Each sub-hook self-gates and self-cleans. */
export function useInteractions(): void {
  useMagnetic();
  useCursor();
}
