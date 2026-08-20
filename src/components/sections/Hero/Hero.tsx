"use client";

import { useLang, useT } from "@/components/primitives/T";
import { Marquee } from "@/components/primitives/Marquee";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cx } from "@/lib/cx";
import { hero } from "@/content/site";
import { tenurePhrase } from "@/lib/tenure";
import styles from "./hero.module.scss";

const COPIES = [0, 1, 2, 3];

export function Hero() {
  const { lang } = useLang();
  const t = useT();

  const eyebrow = `${t(hero.openStatus)} / ${t(hero.location)} / ${tenurePhrase(lang)} ${t(hero.tenureSuffix)}`;
  const typed = useTypewriter(eyebrow);

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
        <p className={styles.hero__eyebrow}>
          {typed}
          <span className={styles.hero__caret} aria-hidden>_</span>
        </p>
        <p className={styles.hero__tagline}>{t(hero.tagline)}</p>
      </div>
    </section>
  );
}
