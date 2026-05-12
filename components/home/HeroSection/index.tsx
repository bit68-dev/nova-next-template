import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import styles from "./styles.module.scss";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel?: string;
}

export function HeroSection({
  headline,
  subheadline,
  ctaPrimaryLabel,
  ctaSecondaryLabel,
}: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.hexPattern} aria-hidden="true" />

      <div className={styles.heroInner}>
        <Text variant="H1" className={styles.headline} skipTranslate>
          {headline}
        </Text>

        <Text variant="P13" className={styles.subheadline} skipTranslate>
          {subheadline}
        </Text>

        <div className={styles.ctaGroup}>
          <Button
            className={styles.ctaPrimary}
            variant="primary"
            size="large"
          >
            {ctaPrimaryLabel}
          </Button>

          {ctaSecondaryLabel && (
            <Button
              className={styles.ctaSecondary}
              variant="noStyle"
              size="large"
            >
              {ctaSecondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
