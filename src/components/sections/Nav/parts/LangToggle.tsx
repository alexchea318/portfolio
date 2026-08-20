"use client";

import { useLang } from "@/components/primitives/T";
import { cx } from "@/lib/cx";
import type { Locale } from "@/lib/i18n";
import styles from "../nav.module.scss";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className={styles.lang}>
      {(["ru", "en"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cx(styles.lang__btn, lang === code && styles["lang__btn--active"])}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
