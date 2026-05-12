import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

export function FeaturesSection() {
  return (
    <section className={styles.section} id="oz-a" aria-labelledby="space-title">
      <div className={styles.container}>
        {/* Left: text content */}
        <div className={styles.textCol}>
          <h2 className={styles.heading} id="space-title">
            The Space Between Work and Life
          </h2>
          <p className={styles.body}>
            Designed as an integrated ecosystem, OZ A connects people and ideas. From the quiet focus of our
            workspaces to the vibrant energy of our fitness and dining spaces, every corner is crafted for you.
          </p>
          <div className={styles.actions}>
            <Link href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore OZ A
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="#visits" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right: membership cards */}
        <div className={styles.cards}>
          <div className={styles.cardBlue} aria-label="Blue membership card">
            <div className={styles.cardPin}>
              <div className={styles.pinShape} style={{ background: "#a0bbeb" }} />
            </div>
            <div className={styles.cardImage} style={{ background: "#e4edff" }} />
          </div>

          <div className={styles.cardGreen} aria-label="Green membership card">
            <div className={styles.cardPin}>
              <div className={styles.pinShape} style={{ background: "#c5d14a" }} />
            </div>
            <div className={styles.cardImage} style={{ background: "#f2f5d4" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
