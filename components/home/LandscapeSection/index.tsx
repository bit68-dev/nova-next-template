import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

export function LandscapeSection() {
  return (
    <section className={styles.section} id="spaces" aria-labelledby="landscape-title">
      <div className={styles.container}>
        {/* Left: text */}
        <div className={styles.textCol}>
          <h2 className={styles.heading} id="landscape-title">
            Our Physical Landscape
          </h2>
          <p className={styles.body}>
            Step into a campus built on the philosophy of intentional space. We&apos;ve reimagined the traditional
            office as an integrated park, offering a variety of environments that move with you throughout the day.
          </p>
          <div className={styles.actions}>
            <Link href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore spaces
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="#visits" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right: geometric image collage from Figma */}
        <div className={styles.collage} aria-hidden="true">
          <div className={styles.collageInner}>
            {/* Star/cross shape */}
            <div className={styles.starShape}>
              <div className={styles.starV} />
              <div className={styles.starH} />
              <div className={styles.starD1} />
              <div className={styles.starD2} />
            </div>

            {/* Two tall blue rectangles */}
            <div className={styles.colGroup}>
              <div className={styles.rectBlueLight} />
              <div className={styles.rectBlueDark} />
            </div>

            {/* Tall grey photo rectangle */}
            <div className={styles.rectGrey} />
          </div>
        </div>
      </div>
    </section>
  );
}
