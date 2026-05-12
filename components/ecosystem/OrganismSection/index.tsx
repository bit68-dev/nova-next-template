import styles from "./styles.module.scss";

/**
 * "A Unified Organism" — Figma Frame 2085663639 (1242×564).
 * Two-column: 84px heading + 2 paragraphs left, image card + vector right.
 */
export function OrganismSection() {
  return (
    <section className={styles.section} aria-label="A Unified Organism">
      <div className={styles.row}>
        {/* LEFT — Frame 1171275874 588×468 */}
        <div className={styles.left}>
          <h2 className={styles.heading}>A Unified Organism</h2>
          <p className={styles.paragraph}>
            OZ is organized around a single idea: when the right environment, people,
            knowledge, and energy converge, extraordinary things happen. Not by accident
            — by design.
          </p>
          <p className={styles.paragraph}>
            The ecosystem has seven interconnected pillars. Each one shapes a different
            dimension of your experience — from the physical environment you work in, to
            the people you meet, to the skills you develop, to the way your business
            grows. None works in isolation. Together, they form something no single
            workspace, gym, kitchen, or classroom could achieve alone.
          </p>
        </div>

        {/* RIGHT — Vector backdrop + image card */}
        <div className={styles.right}>
          {/* Vector 42 decorative shape behind */}
          <svg
            className={styles.vectorBg}
            viewBox="0 0 499 468"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M249 0 C 380 0, 499 100, 499 234 C 499 368, 380 468, 249 468 C 118 468, 0 368, 0 234 C 0 100, 118 0, 249 0 Z" />
          </svg>

          {/* Frame 1171275902 — 508×509 r:33.5 tinted image card */}
          <div className={styles.imageCard} aria-hidden="true">
            <img
              src="/oz-team-collaborating.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
