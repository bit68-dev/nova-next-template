import { Star } from "lucide-react";
import styles from "./styles.module.scss";

export function IdentitySection() {
  return (
    <section className={styles.section} aria-labelledby="oz-identity-title">
      <div className={styles.inner}>
        {/* Left column — Frame 1171275866 */}
        <div className={styles.left}>
          <div className={styles.textBlock}>
            <p className={styles.leadBody}>
              Modern life often forces a choice between productivity and well-being, leaving us
              disconnected from our rituals and each other. OZ exists to bridge that gap. We
              provide a &quot;harmonic response&quot;—a space where intentionality replaces inertia.
            </p>
            <h1 id="oz-identity-title" className={styles.title}>
              The OZ Identity
            </h1>
          </div>
          <p className={styles.subtitle}>
            — OZ is a living infrastructure designed to harmonize the rhythm of work, wellness,
            and human connection.
          </p>
        </div>

        {/* Right column — Frame 1171275861 */}
        <div className={styles.right}>
          {/* Outer blue rounded card */}
          <div className={styles.blueCard} aria-hidden="true" />

          {/* Inner image card with stars */}
          <div className={styles.imageCard}>
            <img
              src="/placeholder.svg?height=528&width=528"
              alt=""
              className={styles.imageBg}
              aria-hidden="true"
            />
            <div className={styles.starRow}>
              <Star size={22} fill="#ffffff" className={styles.star} aria-hidden="true" />
              <Star size={22} fill="#ffffff" className={styles.star} aria-hidden="true" />
              <Star size={22} fill="#ffffff" className={styles.star} aria-hidden="true" />
              <Star size={22} fill="#ffffff" className={styles.star} aria-hidden="true" />
            </div>
          </div>

          {/* Yellow pill */}
          <div className={styles.pill}>
            <span>OZ Working park</span>
          </div>

          {/* Decorative bottom ellipses */}
          <div className={styles.ellipses} aria-hidden="true">
            <div className={styles.ellipse}>
              <img src="/placeholder.svg?height=111&width=111" alt="" />
            </div>
            <div className={styles.ellipse}>
              <img src="/placeholder.svg?height=111&width=111" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
