import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

export function FeaturesSection() {
  return (
    <section className={styles.section} id="oz-a" aria-labelledby="space-title">
      <div className={styles.container}>
        {/* Figma: Frame 1171275812 — centered heading + body + buttons, gap:24 */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading} id="space-title">
            The Space Between Work and Life
          </h2>
          <p className={styles.body}>
            Designed as an integrated ecosystem, OZ A connects people and ideas. From the quiet focus of our
            workspaces to the vibrant energy of our fitness and deli sub-brands, we provide the infrastructure for
          </p>
          <div className={styles.actions}>
            {/* Primary — Figma: fills #becb2a text #0047bb radius:32 */}
            <a href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore OZ A
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            {/* Secondary — Figma: no fill, stroke rgba(211,213,213) text #272a2a */}
            <a href="#" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Figma: Frame 1171275849 — two membership cards */}
        <div className={styles.cards}>
          {/* Blue card — #e4edff, w:529 h:563 radius:32 */}
          <div className={styles.cardBlue} aria-label="Blue membership card">
            <div className={styles.cardPin}>
              <div className={styles.pinBlue} />
            </div>
            <div className={styles.cardImage} />
          </div>

          {/* Green card — #f2f5d4, w:552 h:581 radius:32 */}
          <div className={styles.cardGreen} aria-label="Green membership card">
            <div className={styles.cardPin}>
              <div className={styles.pinGreen} />
            </div>
            <div className={styles.cardImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
