"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/utils/CN";
import styles from "./styles.module.scss";

const NAV_LINKS = [
  { label: "Oz A", href: "/oz-a" },
  { label: "The Ecosystem", href: "/ecosystem" },
  { label: "Spaces & Access", href: "/spaces-access" },
  { label: "Life Inside", href: "#life" },
  { label: "Insights", href: "#insights" },
  { label: "Visits", href: "#visits" },
];

type NavbarVariant = "dark" | "light";

export function Navbar({ variant = "dark" }: { variant?: NavbarVariant }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href.startsWith("/") && pathname === href;

  return (
    <header className={cn(styles.header, variant === "light" && styles.headerLight)}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="OZ home">
          <span className={styles.logoText}>OZ</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(styles.navLink, isActive(link.href) && styles.navLinkActive)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.lang}>
          <Globe size={18} aria-hidden="true" />
          <span className={styles.langText}>العربية</span>
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
              className={cn(styles.drawerLink, isActive(link.href) && styles.drawerLinkActive)}
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
