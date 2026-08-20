"use client";

import { useT, type Localizable } from "@/components/primitives/T";
import { Marquee } from "@/components/primitives/Marquee";
import { cx } from "@/lib/cx";
import type { MarqueeDir } from "@/content/site";
import styles from "./band.module.scss";

const COPIES = [0, 1, 2, 3, 4, 5];

/** Full-bleed scrolling section title. The repetition is decoration, so the
 *  readable heading is kept for assistive tech and the ticker is hidden. */
export function Band({
  text,
  dir = "left",
  duration,
}: {
  text: Localizable;
  dir?: MarqueeDir;
  duration: number;
}) {
  const t = useT();
  const label = t(text);

  return (
    <div className={styles.band}>
      <h2 className={styles.band__sr}>{label}</h2>
      <div aria-hidden>
        <Marquee dir={dir} duration={duration} gap={36} className={styles.band__line}>
          {COPIES.map((n) => (
            <span key={n} className={cx(n % 2 === 1 && styles["band__word--outline"])}>{label}</span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
