"use client";

import { T } from "@/components/primitives/T";
import { nav } from "@/content/site";
import styles from "../nav.module.scss";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className={styles.nav__backdrop} onClick={onClose} />
      <div className={styles.menu}>
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={onClose} className={styles.menu__link}>
            <T v={l.label} />
          </a>
        ))}
        <a
          href={nav.cta.href}
          target="_blank"
          rel="noopener"
          onClick={onClose}
          className={styles.menu__cta}
        >
          <T v={nav.cta.label} />
        </a>
      </div>
    </>
  );
}
