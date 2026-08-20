"use client";

import { useT } from "@/components/primitives/T";
import { Reveal } from "@/components/primitives/Reveal";
import { useChipCycle } from "@/hooks/useChipCycle";
import { cx } from "@/lib/cx";
import { services } from "@/content/site";
import styles from "./services.module.scss";

export function Services() {
  const t = useT();
  const active = useChipCycle(services.chips.length);

  return (
    <section id="services" className={styles.services}>
      <Reveal as="h2" className={styles.services__heading}>
        {t(services.heading)}
      </Reveal>

      <ul className={styles.services__cloud}>
        {services.chips.map((chip, i) => (
          <li key={i} className={cx(styles.chip, i === active && styles["chip--active"])}>
            {t(chip)}
          </li>
        ))}
      </ul>
    </section>
  );
}
