import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { MarqueeDir } from "@/content/site";
import styles from "./marquee.module.scss";

/**
 * Seamless infinite ticker. Children are rendered twice — the track is exactly
 * two identical groups wide, so a -50% translate loops without a jump. Spacing
 * lives on the items (margin-right), never as a flex gap, or the seam drifts.
 *
 * `duration` is the time for one full group to pass, so speed scales with how
 * many children are handed in: more copies need a proportionally longer time.
 */
export function Marquee({
  dir = "left",
  duration,
  gap = 40,
  className,
  children,
}: {
  dir?: MarqueeDir;
  duration: number;
  gap?: number;
  className?: string;
  children: ReactNode;
}) {
  const vars = { "--dur": `${duration}s`, "--gap": `${gap}px` } as CSSProperties;
  return (
    <div className={styles.marquee}>
      <div
        className={cx(styles.marquee__track, dir === "right" && styles["marquee__track--right"], className)}
        style={vars}
      >
        <div className={styles.marquee__group}>{children}</div>
        <div className={styles.marquee__group} aria-hidden>{children}</div>
      </div>
    </div>
  );
}
