"use client";

import { useT } from "@/components/primitives/T";
import { Marquee } from "@/components/primitives/Marquee";
import { work } from "@/content/site";
import styles from "../work.module.scss";

/** A single strip of project frames. Decorative — the projects themselves are
 *  the linked rows above. */
export function WorkTiles() {
  const t = useT();
  return (
    <div className={styles.tiles} aria-hidden>
      <Marquee duration={104} gap={10}>
        {work.tiles.map((tile) => (
          <figure key={tile.img.src} className={styles.tile}>
            <img src={tile.img.src} alt="" loading="lazy" className={styles.tile__img} />
            <figcaption className={styles.tile__label}>{t(tile.label)}</figcaption>
          </figure>
        ))}
      </Marquee>
    </div>
  );
}
