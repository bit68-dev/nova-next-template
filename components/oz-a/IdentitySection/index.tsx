import { Star } from "lucide-react";
import styles from "./styles.module.scss";

export function IdentitySection() {
  return (
    <section className={styles.section} aria-labelledby="oz-identity-title">
      <div className={styles.inner}>
        {/* Left column — Frame 1171275866 */}
        <div className={styles.left}>
          <h1 id="oz-identity-title" className={styles.title}>
            The OZ Identity
          </h1>
          <p className={styles.leadBody}>
            Modern life often forces a choice between productivity and well-being, leaving us
            disconnected from our rituals and each other. OZ exists to bridge that gap. We
            provide a &quot;harmonic response&quot;—a space where intentionality replaces inertia.
          </p>
          <p className={styles.subtitle}>
            — OZ is a living infrastructure designed to harmonize the rhythm of work, wellness,
            and human connection.
          </p>
        </div>

        {/* Right column — Frame 1171275861 */}
        <div className={styles.right}>
          {/* Decorative Vector 5 — top-right of card */}
          <svg
            className={styles.vector5}
            viewBox="0 0 82 83"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M41 0 C50 25, 57 32, 82 41 C57 50, 50 57, 41 83 C32 57, 25 50, 0 41 C25 32, 32 25, 41 0 Z"
              fill="#becb2a"
            />
          </svg>

          {/* Outer blue rounded card */}
          <div className={styles.blueCard} aria-hidden="true" />

          {/* 2 decorative circles overlapping top-left of blue card */}
          <div className={styles.ellipses} aria-hidden="true">
            <div className={styles.ellipse}>
              <img src="/placeholder.svg?height=111&width=111" alt="" />
            </div>
            <div className={styles.ellipse}>
              <img src="/placeholder.svg?height=111&width=111" alt="" />
            </div>
          </div>

          {/* Inner image card with stars row at top-right */}
          <div className={styles.imageCard}>
            <img
              src="/placeholder.svg?height=528&width=528"
              alt=""
              className={styles.imageBg}
              aria-hidden="true"
            />
            <div className={styles.starRow}>
              <Star size={22} fill="#ffffff" strokeWidth={1.5} className={styles.star} aria-hidden="true" />
              <Star size={22} fill="#ffffff" strokeWidth={1.5} className={styles.star} aria-hidden="true" />
              <Star size={22} fill="#ffffff" strokeWidth={1.5} className={styles.star} aria-hidden="true" />
              <Star size={22} fill="#ffffff" strokeWidth={1.5} className={styles.star} aria-hidden="true" />
            </div>
          </div>

          {/* Yellow-green pill — absolute, overlapping bottom-left of blue card */}
          <div className={styles.pill}>
            <span>OZ Working park</span>
          </div>
        </div>
      </div>
    </section>
  );
}
