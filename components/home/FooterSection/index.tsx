import Link from "next/link";
import { MapPin } from "lucide-react";
import styles from "./styles.module.scss";

const DISCOVER_LINKS = [
  { label: "Oz A", href: "#oz-a" },
  { label: "The Ecosystem", href: "#ecosystem" },
  { label: "Spaces & Access", href: "#spaces" },
  { label: "Life Inside", href: "#life" },
  { label: "Inside", href: "#inside" },
  { label: "Visits", href: "#visits" },
];

export function FooterSection() {
  return (
    <footer className={styles.footer} id="visits" aria-label="Site footer">
      <div className={styles.container}>
        {/* Top area */}
        <div className={styles.top}>
          {/* Discover nav */}
          <div className={styles.discoverCol}>
            <span className={styles.discoverLabel}>Discover</span>
            <nav aria-label="Footer navigation">
              {DISCOVER_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={styles.discoverLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Office + Contact */}
          <div className={styles.infoCol}>
            {/* Office */}
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Office</span>
              <p className={styles.infoText}>
                Plot D, El Nozha Street, El Sheikh Zayed, Cairo Governorate
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.mapsLink}>
                <MapPin size={18} aria-hidden="true" />
                Google Maps
              </a>
            </div>

            {/* Contact */}
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Contact Us</span>
              <a href="mailto:hello@truus.co" className={styles.contactItem}>hello@truus.co</a>
              <a href="tel:+20111111111" className={styles.contactItem}>+20 111111111</a>

              {/* Social icons */}
              <div className={styles.social}>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* App store buttons */}
          <div className={styles.storeCol}>
            <a href="#" className={styles.storeBtn} aria-label="Get it on Google Play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 20.5L13.5 12 3 3.5V20.5Z" fill="#EA4335" />
                <path d="M16.5 9L3 3.5L13.5 12L16.5 9Z" fill="#FBBC04" />
                <path d="M16.5 15L13.5 12L3 20.5L16.5 15Z" fill="#34A853" />
                <path d="M21 12C21 10.5 20.2 9.2 19 8.5L16.5 9L13.5 12L16.5 15L19 13.5C20.2 12.8 21 11.5 21 12Z" fill="#4285F4" />
              </svg>
              <div className={styles.storeBtnText}>
                <span className={styles.storeBtnSub}>GET IT ON</span>
                <span className={styles.storeBtnMain}>Google Play</span>
              </div>
            </a>

            <a href="#" className={styles.storeBtn} aria-label="Download on the App Store">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className={styles.storeBtnText}>
                <span className={styles.storeBtnSub}>Download on the</span>
                <span className={styles.storeBtnMain}>App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link href="#" className={styles.legalLink}>Terms &amp; Conditions</Link>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
          </div>
          <p className={styles.copyright}>© 2026 oz coworking Park</p>
        </div>
      </div>
    </footer>
  );
}
