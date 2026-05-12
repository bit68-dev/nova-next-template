import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { NavLink } from "@/app/home/data";
import type { IconName } from "@/components/ui/Icon/types";
import styles from "./styles.module.scss";

interface FooterSectionProps {
  links: NavLink[];
}

const socialLinks: { href: string; icon: IconName; label: string }[] = [
  { href: "#", icon: "Twitter", label: "Twitter" },
  { href: "#", icon: "Linkedin", label: "LinkedIn" },
  { href: "#", icon: "Github", label: "GitHub" },
];

const productLinks = ["Features", "Pricing", "Changelog", "Docs"];
const companyLinks = ["About", "Blog", "Careers", "Contact"];

export function FooterSection({ links }: FooterSectionProps) {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark} aria-hidden="true">OZ</span>
              <Text variant="H6" className={styles.brandName} skipTranslate>OZ</Text>
            </div>
            <Text variant="P2" className={styles.tagline} skipTranslate>
              Building digital solutions that empower businesses to grow, innovate, and lead.
            </Text>
          </div>

          {/* Link groups */}
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <Text variant="P10" className={styles.linkGroupTitle} skipTranslate>Product</Text>
              {productLinks.map((label) => (
                <Link key={label} href="#" className={styles.footerLink}>{label}</Link>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <Text variant="P10" className={styles.linkGroupTitle} skipTranslate>Company</Text>
              {companyLinks.map((label) => (
                <Link key={label} href="#" className={styles.footerLink}>{label}</Link>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <Text variant="P10" className={styles.linkGroupTitle} skipTranslate>Legal</Text>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className={styles.footerLink}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <Text variant="P3" className={styles.copyright} skipTranslate>
            {`© ${new Date().getFullYear()} OZ. All rights reserved.`}
          </Text>
          <div className={styles.social}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className={styles.socialLink} aria-label={s.label}>
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
