import { Check } from "lucide-react";
import styles from "./styles.module.scss";

interface Item {
  title: string;
  body: string;
}

const ITEMS: Item[] = [
  {
    title: "Members-only access",
    body: "Card-based entry to keep the campus focused and secure.",
  },
  {
    title: "Quiet zones, by design",
    body: "Dedicated focus pods with no calls, no music, no interruptions.",
  },
  {
    title: "Bookable studios",
    body: "Reserve meeting rooms and event spaces in seconds from your app.",
  },
  {
    title: "Respectful community code",
    body: "Clear etiquette so every member shares the campus the same way.",
  },
];

export function ClearBoundaries() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Clear
            <br />
            boundaries.
          </h2>
          <p className={styles.body}>
            A premium campus runs on trust. OZ A members agree to a simple set
            of shared rules that keep the space calm, productive, and open to
            everyone who values their craft.
          </p>
          <p className={styles.body}>
            From soundproof studios to clear booking rules and member-only
            entry, the boundaries protect the experience for everyone inside
            the campus.
          </p>
        </div>

        <ul className={styles.right}>
          {ITEMS.map((item) => (
            <li key={item.title} className={styles.bulletItem}>
              <span className={styles.bulletIcon} aria-hidden="true">
                <Check size={18} strokeWidth={2.25} />
              </span>
              <div className={styles.bulletText}>
                <h3 className={styles.bulletTitle}>{item.title}</h3>
                <p className={styles.bulletBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
