import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

export function LandscapeSection() {
  return (
    <section className={styles.section} id="spaces" aria-labelledby="landscape-title">
      <div className={styles.container}>
        {/* Left: text — Figma Frame 1171275825 left col */}
        <div className={styles.textCol}>
          {/* Figma: 84px/500 #fcfcfc left-aligned */}
          <h2 className={styles.heading} id="landscape-title">
            Our Physical Landscape
          </h2>
          {/* Figma: 16px/400 #fcfcfc w:612 */}
          <p className={styles.body}>
            Step into a campus built on the philosophy of intentional space. We&apos;ve reimagined the
            traditional office as an integrated park, offering a variety of environments tailored to your
            daily needs, whethe
          </p>
          {/* Figma: Frame 1171275842 gap:16 */}
          <div className={styles.actions}>
            <a href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore spaces
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a href="#" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: geometric collage — Figma Frame 1171275823 */}
        <div className={styles.collage} aria-hidden="true">
          {/* 8-point star — Figma Frame 2140 (cross of white rectangles) */}
          <div className={styles.star}>
            <div className={styles.starV} />
            <div className={styles.starH} />
            <div className={styles.starD1} />
            <div className={styles.starD2} />
          </div>

          {/* Photo rects — Figma Frame 1171275822 */}
          <div className={styles.photoGroup}>
            <div className={styles.rectShort} />
            <div className={styles.rectTall} />
          </div>

          {/* Center rect — Figma Rectangle 1 #d9d9d9 */}
          <div className={styles.rectCenter} />

          {/* Yellow-green arc — Figma Vector 39 */}
          <div className={styles.arc} />
        </div>
      </div>
    </section>
  );
}
