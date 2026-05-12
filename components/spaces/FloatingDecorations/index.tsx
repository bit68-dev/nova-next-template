import styles from "./styles.module.scss";

/**
 * Floating decorative shapes scattered across the Spaces & Access page.
 * Positions derived from Figma root-level X/Y coordinates.
 */
export function FloatingDecorations() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* Big blue 8-point cross star (Frame 1171275906 — 219x219) */}
      <div className={`${styles.crossStar} ${styles.crossStarBig}`}>
        <span />
        <span />
      </div>

      {/* Small blue 8-point cross star (Frame 2140 — 126x126) */}
      <div className={`${styles.crossStar} ${styles.crossStarSmall}`}>
        <span />
        <span />
      </div>

      {/* Lavender ellipse top-right (Ellipse 26 — 110x110, rot 72.6deg) */}
      <div className={`${styles.ellipse} ${styles.ellipseA}`} />

      {/* Lavender ellipse left middle (Ellipse 25 — 115x115) */}
      <div className={`${styles.ellipse} ${styles.ellipseB}`} />

      {/* Yellow-green vector arrow A (Frame 1171275908 — 114x140) */}
      <div className={`${styles.yellowArrow} ${styles.yellowArrowA}`}>
        <svg viewBox="0 0 114 140" fill="none">
          <path
            d="M14 8 L98 70 L20 132 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M2 14 L86 76 L8 138"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Yellow-green vector arrow B (Frame 1171275907 — 97x139) */}
      <div className={`${styles.yellowArrow} ${styles.yellowArrowB}`}>
        <svg viewBox="0 0 97 139" fill="none">
          <path
            d="M82 8 L8 70 L80 132 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Teal arrow (Arrow 10 — 69x44) */}
      <div className={styles.tealArrow}>
        <svg viewBox="0 0 69 44" fill="none">
          <path
            d="M2 22 L60 22 M44 8 L60 22 L44 36"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
