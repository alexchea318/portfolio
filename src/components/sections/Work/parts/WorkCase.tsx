"use client";

import { useT } from "@/components/primitives/T";
import { Reveal } from "@/components/primitives/Reveal";
import { work } from "@/content/site";
import styles from "../work.module.scss";

type Case = (typeof work.cases)[number];

export function WorkCase({ c, index }: { c: Case; index: number }) {
  const t = useT();
  // Cases without a public page render as a plain block, not a dead link.
  const link = c.href
    ? { as: "a" as const, href: c.href, target: "_blank", rel: "noopener" }
    : {};

  return (
    <Reveal delay={index * 60} {...link} className={styles.case}>
      <div className={styles.case__head}>
        <div className={styles.case__meta}>
          <span className={styles.case__company}>{c.company}</span>
          {c.period && <span>{t(c.period)}</span>}
        </div>
        <h3 className={styles.case__title}>{t(c.title)}</h3>
        <div className={styles.case__tags}>
          {c.tags.map((tag, i) => (
            <span key={i} className={styles.case__tag}>{t(tag)}</span>
          ))}
        </div>
      </div>

      <div className={styles.case__body}>
        <p className={styles.case__text}>{t(c.text)}</p>
        {c.href && <span className={styles.case__cta}>{t(work.cta)}</span>}
      </div>
    </Reveal>
  );
}
