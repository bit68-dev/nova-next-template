import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

const CARDS = [
  { color: "#f8d0de", accent: "#f07a9e" },
  { color: "#ead8f2", accent: "#c67dd4" },
  { color: "#d0e4f0", accent: "#6aaed0" },
  { color: "#d8f0da", accent: "#75c97b" },
];

export function StatsSection() {
  return (
    <section className={styles.section} id="ecosystem" aria-labelledby="ecosystem-title">
      <div className={styles.container}>
        {/* Text */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading} id="ecosystem-title">
            Living the Ecosystem
          </h2>
          <p className={styles.body}>
            More than just a workspace, OZ is a holistic environment where productivity meets life. Whether you
            are fueling at the Deli, expanding your mind with our programming, or breaking a sweat in the gym —
            everything you need is here.
          </p>
          <div className={styles.actions}>
            <Link href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore Ecosystem
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="#visits" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* 4 image cards */}
        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ background: card.color }}
              aria-hidden="true"
            >
              <div className={styles.cardBadge} style={{ background: card.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
