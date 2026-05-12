"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/utils/CN";
import styles from "./styles.module.scss";

const NAV_LINKS = [
  { label: "Oz A", href: "#oz-a" },
  { label: "The Ecosystem", href: "#ecosystem" },
  { label: "Spaces & Access", href: "#spaces" },
  { label: "Life Inside", href: "#life" },
  { label: "Insights", href: "#insights" },
  { label: "Visits", href: "#visits" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="OZ home">
          <span className={styles.logoText}>OZ</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.lang}>
          <Globe size={18} aria-hidden="true" />
          <span>العربية</span>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={cn(styles.drawer, open && styles.drawerOpen)} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.drawerLang}>
          <Globe size={16} aria-hidden="true" />
          <span>العربية</span>
        </div>
      </div>
    </header>
  );
}
