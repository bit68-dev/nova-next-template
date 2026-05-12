import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import styles from "./styles.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <Navbar />
      {/* Wavy subtract shape from Figma */}
      <div className={styles.waveMask} aria-hidden="true" />

      <div className={styles.container}>
        {/* Title block: Work / With [profiles] / Energy */}
        <div className={styles.titleBlock}>
          <div className={styles.topRow}>
            <h1 className={styles.titleWord}>Work</h1>
            <h1 className={styles.titleWord}>With</h1>

            {/* Profile bubbles from Figma */}
            <div className={styles.profiles} aria-hidden="true">
              <span className={styles.bubble} style={{ background: "#d9d9d9" }} />
              <span className={styles.bubble} style={{ background: "#d3a6e5" }} />
              <span className={styles.bubble} style={{ background: "#bece29" }} />
            </div>
          </div>

          <h1 className={styles.titleWord}>Energy</h1>
        </div>

        {/* Description + CTA row */}
        <div className={styles.bottomRow}>
          <p className={styles.desc}>
            Your space to create, move, and connect — all in one vibrant ecosystem.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#ecosystem" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore OZ
              <ArrowRight size={20} aria-hidden="true" />
            </Link>

            <Link href="#spaces" className={styles.btnArrow} aria-label="Explore spaces">
              <ArrowRight size={24} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
