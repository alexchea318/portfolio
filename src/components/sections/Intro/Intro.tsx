"use client";

import { useLang, useT } from "@/components/primitives/T";
import { Reveal } from "@/components/primitives/Reveal";
import { intro } from "@/content/site";
import { tenurePhrase } from "@/lib/tenure";
import { RagDemo } from "./parts/RagDemo";
import { AdvantageRail } from "./parts/AdvantageRail";
import styles from "./intro.module.scss";

export function Intro() {
  const { lang } = useLang();
  const t = useT();
  const s = intro.statement;
  // Years are derived from the career start date, so they never go stale.
  const years = tenurePhrase(lang);

  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.intro__grid}>
        <div>
          <Reveal as="p" className={styles.intro__statement}>
            {t(s.leadA)}
            {years}
            {t(s.leadB)}
            <span className={styles.intro__accent}>{t(s.accent)}</span>
            {t(s.tail)}
          </Reveal>

          <div className={styles.intro__stats}>
            {intro.stats.map((st, i) => (
              <Reveal key={i} delay={i * 60} className={styles.stat}>
                <span className={styles.stat__value}>{st.value ? t(st.value) : years}</span>
                <span className={styles.stat__label}>{t(st.label)}</span>
              </Reveal>
            ))}
          </div>

          <div className={styles.intro__ctas}>
            {intro.ctas.map((c) => (
              <a
                key={c.href}
                href={c.href}
                data-magnet
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                className={c.solid ? styles["intro__cta--solid"] : styles.intro__cta}
              >
                {t(c.label)}
              </a>
            ))}
          </div>
        </div>

        <RagDemo />
      </div>

      <AdvantageRail />
    </section>
  );
}
