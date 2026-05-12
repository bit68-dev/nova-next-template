"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { navLinks } from "@/app/home/data";
import { cn } from "@/utils/CN";
import styles from "./styles.module.scss";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="OZ home">
          <span className={styles.logoMark} aria-hidden="true">OZ</span>
          <span className={styles.logoText}>OZ</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className={styles.actions}>
          <Button
            className={styles.loginBtn}
            variant="secondary"
            size="small"
          >
            Login
          </Button>
          <Button
            className={styles.getStartedBtn}
            variant="primary"
            size="small"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={cn(styles.bar, mobileOpen && styles.barOpen)} />
          <span className={cn(styles.bar, mobileOpen && styles.barOpen)} />
          <span className={cn(styles.bar, mobileOpen && styles.barOpen)} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={cn(styles.mobileMenu, mobileOpen && styles.open)} aria-hidden={!mobileOpen}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <Button className={styles.loginBtn} variant="secondary" size="small" isFullWidth>
            Login
          </Button>
          <Button className={styles.getStartedBtn} variant="primary" size="small" isFullWidth>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
