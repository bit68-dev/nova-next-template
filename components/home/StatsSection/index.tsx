import { ArrowRight, Check } from "lucide-react";
import styles from "./styles.module.scss";

/* Figma card colors: C6=pink #f07ca3, C4=purple #d3a5e5, C7=green #4a7c59, C5=orange-red #ff5733 */
const CARDS = [
  { blob: "#f07ca3", dot: "#fad3e0", opacity: 0.2 },
  { blob: "#d3a5e5", dot: "#eddaf5", opacity: 1 },
  { blob: "#4a7c59", dot: "#d2e4d8", opacity: 1 },
  { blob: "#ff5733", dot: "#ff5733", opacity: 0.2 },
];

export function StatsSection() {
  return (
    <section className={styles.section} id="ecosystem" aria-labelledby="ecosystem-title">
      <div className={styles.container}>
        {/* Figma: Frame 1171275813 — text block center */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading} id="ecosystem-title">
            Living the Ecosystem
          </h2>
          <p className={styles.body}>
            More than just a workspace, OZ is a holistic environment where productivity meets life.
            Whether you are fueling at the Deli, expanding your mind with OZ Knowledge, or finding your
            strength at OZ Fit,
          </p>
          <div className={styles.actions}>
            <a href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore Ecosystem
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a href="#" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Figma: Frame 2085663624 — 4 ecosystem cards space-between */}
        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={styles.card}
              aria-hidden="true"
            >
              {/* Colored "Union" blob fill */}
              <div
                className={styles.cardBlob}
                style={{ background: card.blob }}
              />
              {/* Corner accent dots — top-left + bottom-right */}
              <div
                className={`${styles.cardDot} ${styles.cardDotTl}`}
                style={{ background: card.dot, opacity: card.opacity }}
              />
              <div
                className={`${styles.cardDot} ${styles.cardDotBr}`}
                style={{ background: card.dot, opacity: card.opacity }}
              />
              {/* Figma: white tick-circle centered */}
              <div className={styles.cardTick}>
                <Check size={20} color="rgba(252,252,252,0.9)" strokeWidth={2.5} />
              </div>
              {/* Small image strip */}
              <div className={styles.cardStrip} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
