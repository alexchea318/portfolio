"use client";

import { useT } from "@/components/primitives/T";
import { cx } from "@/lib/cx";
import { Reveal } from "@/components/primitives/Reveal";
import { useRagDemo } from "@/hooks/useRagDemo";
import { ragDemo } from "@/content/site";
import styles from "../intro.module.scss";

const Words = ({ items }: { items: string[] }) => (
  <>
    {items.map((word, i) => (
      // Key is the position, so already-revealed words never re-animate.
      <span key={i} className={styles.demo__word}>{word} </span>
    ))}
  </>
);

/** Live proof instead of a screenshot: the card plays a real retrieval flow. */
export function RagDemo() {
  const t = useT();
  const { question, searching, sources, answer, closing } = useRagDemo();

  return (
    <Reveal className={styles.demo}>
      <div className={styles.demo__head}>
        <span data-pulse className={styles.demo__dot} aria-hidden />
        {t(ragDemo.label)}
      </div>

      <div className={cx(styles.demo__thread, closing && styles["demo__thread--closing"])}>
        {question.length > 0 && (
          <p className={styles.demo__q}><Words items={question} /></p>
        )}

        {searching && <p className={styles.demo__status}>{t(ragDemo.retrieving)}</p>}

        {sources && (
          <div className={styles.demo__sources}>
            {sources.map((src) => (
              <span key={src} className={styles.demo__src}>{src}</span>
            ))}
          </div>
        )}

        {answer.length > 0 && (
          <p className={styles.demo__a}><Words items={answer} /></p>
        )}
      </div>
    </Reveal>
  );
}
