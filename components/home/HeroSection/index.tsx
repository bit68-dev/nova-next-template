import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import styles from "./styles.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero — Work With Energy">
      {/* Figma: "Subtract" vector — white elliptical cutout at bottom */}
      <div className={styles.subtract} aria-hidden="true" />

      {/* Figma: Container gap:77 */}
      <div className={styles.container}>
        {/* Navbar sits inside container at top */}
        <Navbar />

        {/* Main content row: title col (w:612) + desc col (w:303) */}
        <div className={styles.mainRow}>
          {/* Left: Title block */}
          <div className={styles.titleCol}>
            {/* Row 1: "Work" + "With" + profile bubbles — Figma gap:32 */}
            <div className={styles.titleRow}>
              <h1 className={styles.word}>Work</h1>
              <h1 className={styles.word}>With</h1>

              {/* Figma: Ellipse19 (grey 90px) + connector line + profile container
                  Ellipse20 (purple 71px) + Ellipse21 (yellow 71px) + profile card */}
              <div className={styles.profiles} aria-hidden="true">
                <span className={`${styles.bubble}`} />
                <span className={`${styles.bubble}`} />
                <span className={`${styles.bubble}`} />
                <div className={styles.profileCard}>
                  <div className={styles.profileLine} />
                  <div className={styles.profileLine} />
                  <div className={styles.profileLine} />
                </div>
              </div>
            </div>

            {/* Row 2: "Energy" */}
            <h1 className={styles.word}>Energy</h1>
          </div>

          {/* Right: description + CTA */}
          <div className={styles.descCol}>
            <p className={styles.descText}>
              Your space to create, move, and connect — all in one vibrant ecosystem.
            </p>
            <a href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore OZ
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Figma: "secondray" circle 100x100 #f6f6f6 with arrow-right icon */}
      <button className={styles.scrollCircle} aria-label="Scroll down">
        <ArrowRight size={41} color="#0047bb" aria-hidden="true" />
      </button>
    </section>
  );
}
