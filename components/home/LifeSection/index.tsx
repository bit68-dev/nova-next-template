"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

const GALLERY = [
  { bg: "#d6d6d6", label: "Community space" },
  { bg: "#c8d8ee", label: "Collaborative area" },
  { bg: "#d6e8d6", label: "Garden terrace" },
  { bg: "#e8d6d6", label: "Wellness zone" },
];

export function LifeSection() {
  const [active, setActive] = useState(0);

  function prev() {
    setActive((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  }

  function next() {
    setActive((i) => (i === GALLERY.length - 1 ? 0 : i + 1));
  }

  return (
    <section className={styles.section} id="life" aria-labelledby="life-title">
      <div className={styles.container}>
        {/* Text */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading} id="life-title">
            Life at OZ
          </h2>
          <p className={styles.body}>
            Experience the daily rhythms that define our community — from collaborative workshops and morning
            rituals to shared dinners and evening talks.
          </p>
          <div className={styles.actions}>
            <Link href="#" className={styles.btnPrimary}>
              <ArrowRight size={20} aria-hidden="true" />
              Explore Life inside
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="#visits" className={styles.btnSecondary}>
              <ArrowRight size={20} aria-hidden="true" />
              Visit Us
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.gallery}>
          <div className={styles.galleryTrack}>
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className={`${styles.galleryItem} ${i === active ? styles.galleryItemActive : ""}`}
                style={{ background: item.bg }}
                aria-label={item.label}
                aria-hidden={i !== active}
              />
            ))}
          </div>

          {/* Prev / Next arrows from Figma */}
          <div className={styles.galleryControls}>
            <button className={styles.arrowBtn} onClick={prev} aria-label="Previous photo">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button className={styles.arrowBtn} onClick={next} aria-label="Next photo">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
