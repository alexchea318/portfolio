"use client";

import { T } from "@/components/primitives/T";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { nav } from "@/content/site";
import { LangToggle } from "./parts/LangToggle";
import { Burger } from "./parts/Burger";
import { MobileMenu } from "./parts/MobileMenu";
import styles from "./nav.module.scss";

export function Nav() {
  const { open, toggle, close } = useMobileMenu();
  return (
    <header className={styles.nav}>
      <a href="#top" data-magnet className={styles.nav__brand}>
        <span className={styles.nav__dot} aria-hidden />
        <T v={nav.brand} />
      </a>

      <nav className={styles.nav__links}>
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} data-magnet className={styles.nav__link}>
            <T v={l.label} />
          </a>
        ))}
      </nav>

      <div className={styles.nav__side}>
        <LangToggle />
        <a
          href={nav.cta.href}
          target="_blank"
          rel="noopener"
          data-magnet
          className={styles.nav__cta}
        >
          <T v={nav.cta.label} />
        </a>
        <Burger open={open} onToggle={toggle} />
      </div>

      {open && <MobileMenu onClose={close} />}
    </header>
  );
}
