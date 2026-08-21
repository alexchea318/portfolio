"use client";

import type { CSSProperties } from "react";
import { useLang, useT } from "@/components/primitives/T";
import { Marquee } from "@/components/primitives/Marquee";
import { cx } from "@/lib/cx";
import { hero } from "@/content/site";
import { tenurePhrase } from "@/lib/tenure";
import styles from "./hero.module.scss";

const COPIES = [0, 1, 2, 3];

export function Hero() {
  const { lang } = useLang();
  const t = useT();

  const c = hero.chips;
  const chips = [t(c.status), t(c.city), t(c.mode), `${tenurePhrase(lang)} ${t(c.tenureSuffix)}`];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.hero__rows}>
        {hero.marquee.rows.map((row, i) => (
          <Marquee
            key={i}
            dir={row.dir}
            duration={row.duration}
            className={cx(styles.hero__line, row.outline && styles["hero__line--outline"])}
          >
            {COPIES.map((n) => (
              <span key={n}>{t(hero.marquee.lines[row.line])}</span>
            ))}
          </Marquee>
        ))}
      </div>

      <img src={hero.photo.image.src} alt={t(hero.photo.alt)} className={styles.hero__photo} />

      <div className={styles.hero__foot}>
        <div className={styles.hero__chips}>
          {chips.map((chip, i) => (
            <span key={chip} className={styles.hero__chip} style={{ "--i": i } as CSSProperties}>
              {chip}
            </span>
          ))}
        </div>
        <p className={styles.hero__tagline}>{t(hero.tagline)}</p>
      </div>
    </section>
  );
}
