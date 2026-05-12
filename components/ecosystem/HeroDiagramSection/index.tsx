import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import styles from "./styles.module.scss";

/**
 * Hero + Orbital Diagram — Figma Frame 2085663588 (1442×1083).
 * Composed of:
 *  - Hero text block (3 lines @ 120/700) with inline ON-toggle pill
 *  - Decorative lavender ellipse, blue 8-point cross star, teal arrow
 *  - Orbital diagram (1242×564) with 7 nodes + dashed SVG connectors
 */
export function HeroDiagramSection() {
  return (
    <section className={styles.section} aria-label="Ecosystem hero and diagram">
      <Navbar variant="light" />

      {/* ============ HERO TEXT ============ */}
      <div className={styles.hero}>
        {/* 8-point blue cross star (Frame 2140) — top-right */}
        <div className={styles.crossStar} aria-hidden="true">
          <svg viewBox="0 0 126 126" width="100%" height="100%">
            {/* Rect 24 — 72×114 at center */}
            <rect x="27" y="6" width="72" height="114" fill="#2e68c9" />
            {/* Rect 25 — 114×72 at center */}
            <rect x="6" y="27" width="114" height="72" fill="#2e68c9" />
            {/* Rect 26 — 126×10 horizontal bar */}
            <rect x="0" y="58" width="126" height="10" fill="#2e68c9" />
            {/* Rect 29 — 10×126 vertical bar */}
            <rect x="58" y="0" width="10" height="126" fill="#2e68c9" />
          </svg>
        </div>

        <div className={styles.heroInner}>
          <h1 className={styles.line}>Not a workspace.</h1>

          <div className={styles.middleRow}>
            <span className={styles.line}>A living</span>
            <span className={styles.toggle} aria-hidden="true">
              <span className={styles.toggleKnob} />
            </span>
          </div>

          <h1 className={styles.line}>ecosystem.</h1>
        </div>

        {/* Decorative lavender ellipse */}
        <div className={styles.lavenderEllipse} aria-hidden="true" />

        {/* Decorative arrow ↗ */}
        <ArrowUpRight className={styles.arrow} strokeWidth={2.5} aria-hidden="true" />
      </div>

      {/* ============ ORBITAL DIAGRAM ============ */}
      <div className={styles.diagram} role="img" aria-label="Ecosystem pillars diagram">
        {/* Dashed SVG connector curves */}
        <svg
          className={styles.connectors}
          viewBox="0 0 1011 391"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Left half curves */}
          <path
            d="M 5 100 Q 250 -20 500 100"
            stroke="#b0e8db"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M 5 100 Q 250 380 500 290"
            stroke="#f07ca3"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          {/* Right half curves */}
          <path
            d="M 510 100 Q 760 -20 1005 100"
            stroke="#f07ca3"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M 510 290 Q 760 380 1005 290"
            stroke="#0047bb"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>

        {/* Integrate — top-left */}
        <div className={`${styles.node} ${styles.integrate}`}>
          <div className={styles.nodeRing}>
            <img className={styles.nodeImage} src="/node-integrate.jpg" alt="" />
          </div>
          <span className={styles.nodeLabel}>Integrate</span>
        </div>

        {/* Expand — top-right */}
        <div className={`${styles.node} ${styles.expand}`}>
          <div className={styles.nodeRing}>
            <img className={styles.nodeImage} src="/node-expand.jpg" alt="" />
          </div>
          <span className={styles.nodeLabel}>Expand</span>
        </div>

        {/* Create — left */}
        <div className={`${styles.node} ${styles.create}`}>
          <div className={styles.nodeRing}>
            <img className={styles.nodeImage} src="/node-create.jpg" alt="" />
          </div>
          <span className={styles.nodeLabel}>Create</span>
        </div>

        {/* Nourish — CENTER */}
        <div className={`${styles.node} ${styles.nourish}`}>
          <div className={styles.nodeRing}>
            <img className={styles.nodeImage} src="/node-nourish.jpg" alt="" />
          </div>
          <span className={styles.nodeLabel}>Nourish</span>
        </div>

        {/* Develop — solid blue CTA */}
        <div className={`${styles.node} ${styles.develop}`}>
          <div className={styles.nodeRing}>
            <button type="button" className={styles.developInner} aria-label="Develop skills">
              <span className={styles.developText}>Develop skills</span>
              <ArrowRight size={20} color="#ffffff" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <span className={styles.nodeLabel}>Develop</span>
        </div>

        {/* Flourish — bottom-left */}
        <div className={`${styles.node} ${styles.flourish}`}>
          <div className={styles.nodeRing}>
            <img className={styles.nodeImage} src="/node-flourish.jpg" alt="" />
          </div>
          <span className={styles.nodeLabel}>Flourish</span>
        </div>

        {/* Grow — bottom-right */}
        <div className={`${styles.node} ${styles.grow}`}>
          <div className={styles.nodeRing}>
            <img className={styles.nodeImage} src="/node-grow.jpg" alt="" />
          </div>
          <span className={styles.nodeLabel}>Grow</span>
        </div>
      </div>
    </section>
  );
}
