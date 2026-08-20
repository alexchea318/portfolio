"use client";

import { work } from "@/content/site";
import { WorkCase } from "./parts/WorkCase";
import { WorkTiles } from "./parts/WorkTiles";
import styles from "./work.module.scss";

export function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.work__cases}>
        {work.cases.map((c, i) => (
          <WorkCase key={c.company + i} c={c} index={i} />
        ))}
      </div>

      <WorkTiles />
    </section>
  );
}
