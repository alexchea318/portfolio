import styles from "./cursor.module.scss";

/** Custom-cursor DOM marker. Motion is driven by useCursor (via useInteractions). */
export function Cursor() {
  return <div data-cursor-ring className={styles.cursor} />;
}
