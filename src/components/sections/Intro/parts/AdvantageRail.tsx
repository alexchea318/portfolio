"use client";

import { useT } from "@/components/primitives/T";
import { Reveal } from "@/components/primitives/Reveal";
import { intro } from "@/content/site";
import styles from "../intro.module.scss";

/** Three reasons a week is realistic. Snap-scrolls sideways on narrow screens. */
export function AdvantageRail() {
  const t = useT();
  return (
    <div className={styles.rail}>
      {intro.advantages.map((ad, i) => (
        <Reveal key={i} delay={i * 60} className={styles.rail__card}>
          <h3 className={styles.rail__title}>{t(ad.title)}</h3>
          <p className={styles.rail__text}>{t(ad.text)}</p>
        </Reveal>
      ))}
    </div>
  );
}
