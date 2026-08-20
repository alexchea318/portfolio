"use client";

import { useLang, useT } from "@/components/primitives/T";
import { contact, footer } from "@/content/site";
import styles from "./contact.module.scss";

export function Contact() {
  const t = useT();
  const { lang } = useLang();

  // VK is RU-only — drop it from the English contact row.
  const items = contact.links.filter((l) => !(l.kind === "VK" && lang === "en"));

  // No scroll-reveal here: the footer is the last thing on the page, so its lower
  // rows can never clear the reveal observer's bottom margin — they'd stay hidden.
  return (
    <footer id="contact" className={styles.contact}>
      <p className={styles.contact__note}>{t(contact.note)}</p>

      <a
        href={contact.headlineHref}
        target="_blank"
        rel="noopener"
        className={styles.contact__headline}
      >
        {t(contact.headline)}
      </a>

      <div className={styles.contact__links}>
        {items.map((l) => (
          <a
            key={l.kind}
            href={l.href}
            data-magnet
            {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
            className={styles.contact__link}
          >
            <span className={styles.contact__kind}>{l.kind}</span>
            <span className={styles.contact__value}>{l.value}</span>
          </a>
        ))}
      </div>

      <div className={styles.contact__bottom}>
        <span className={styles.contact__name}>{t(footer.left)}</span>
        <a href="#top" data-magnet>{t(contact.toTop)}</a>
      </div>
    </footer>
  );
}
