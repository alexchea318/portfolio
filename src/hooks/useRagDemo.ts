"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/components/primitives/T";
import { ragDemo } from "@/content/site";

export type RagState = {
  /** Words revealed so far — one <span> each, so CSS fades them in. */
  question: string[];
  searching: boolean;
  sources: string[] | null;
  answer: string[];
  /** True while the finished thread fades out before the next question. */
  closing: boolean;
};

const EMPTY: RagState = { question: [], searching: false, sources: null, answer: [], closing: false };
const FADE = 500;

const words = (s: string) => s.split(" ");

/** Self-playing "chat over your files" demo: types a question word by word,
 *  shows the retrieval step, reveals the sources, answers, then moves on.
 *  Word-level steps keep the bubble from resizing on every frame. */
export function useRagDemo(): RagState {
  const { lang } = useLang();
  const [state, setState] = useState<RagState>(EMPTY);

  useEffect(() => {
    const srcOf = (item: (typeof ragDemo.items)[number]) => item.src.map((s) => s[lang]);

    const first = ragDemo.items[0];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState({
        question: words(first.q[lang]),
        searching: false,
        sources: srcOf(first),
        answer: words(first.a[lang]),
        closing: false,
      });
      return;
    }

    const ac = new AbortController();
    const { signal } = ac;
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) => {
        const id = setTimeout(resolve, ms);
        signal.addEventListener("abort", () => { clearTimeout(id); reject(signal.reason); }, { once: true });
      });

    (async () => {
      try {
        for (let i = 0; ; i++) {
          const item = ragDemo.items[i % ragDemo.items.length];
          const q = words(item.q[lang]);
          const a = words(item.a[lang]);
          const src = srcOf(item);

          setState(EMPTY);
          await wait(700);
          for (let n = 1; n <= q.length; n++) {
            setState({ ...EMPTY, question: q.slice(0, n) });
            await wait(130);
          }
          await wait(450);
          setState({ question: q, searching: true, sources: null, answer: [], closing: false });
          await wait(950);
          // Sources replace the status row instead of stacking under it — one
          // swap in place reads calmer than a row appearing then vanishing.
          setState({ question: q, searching: false, sources: src, answer: [], closing: false });
          await wait(700);
          for (let n = 1; n <= a.length; n++) {
            setState({ question: q, searching: false, sources: src, answer: a.slice(0, n), closing: false });
            await wait(85);
          }
          await wait(3800);
          // Fade the finished thread out instead of blanking it: the loop reads
          // as one continuous conversation rather than a hard cut.
          setState({ question: q, searching: false, sources: src, answer: a, closing: true });
          await wait(FADE);
        }
      } catch {
        /* aborted on unmount or language change */
      }
    })();

    return () => ac.abort(new Error("stopped"));
  }, [lang]);

  return state;
}
