"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

/* Figma: 5 image rects with different bg shades (all #d9d9d9 as placeholders) */
const IMAGES = [
  { cls: styles.img1, label: "OZ community space" },
  { cls: styles.img2, label: "Collaborative area" },
  { cls: styles.img3, label: "Central space" },
  { cls: styles.img4, label: "Garden terrace" },
  { cls: styles.img5, label: "Wellness zone" },
];

export function LifeSection() {
  return (
    <section className={styles.section} id="life" aria-labelledby="life-title">
      <div className={styles.container}>
        {/* Figma: Frame 1171275829 — centered text block */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading} id="life-title">
            Life at OZ
          </h2>
          <p className={styles.body}>
            Experience the daily rhythms that define our community—from collaborative workshops and morning
            rituals to shared dinners and evening talks.
          </p>
          <div className={styles.actions}>
            {/* Primary */}
            <a href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore Life inside
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            {/* Secondary */}
            <a href="#" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Figma: Frame 1171275831 — gallery + nav */}
        <div className={styles.gallery}>
          {/* Figma: Frame 1171275828 — 5 rects at varying heights, centered */}
          <div className={styles.galleryRow} role="group" aria-label="Life at OZ gallery">
            {IMAGES.map((img) => (
              <div
                key={img.label}
                className={`${styles.img} ${img.cls}`}
                role="img"
                aria-label={img.label}
              />
            ))}
          </div>

          {/* Figma: Frame 1171275830 — prev/next circle buttons */}
          <div className={styles.navRow}>
            <button className={styles.arrowBtn} aria-label="Previous">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button className={styles.arrowBtn} aria-label="Next">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
