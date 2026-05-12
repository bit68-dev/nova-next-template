import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import type { FeatureCard } from "@/app/home/data";
import type { IconName } from "@/components/ui/Icon/types";
import styles from "./styles.module.scss";


interface FeaturesSectionProps {
  features: FeatureCard[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className={styles.section} id="services" aria-labelledby="features-title">
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <Text variant="L1" className={styles.sectionLabel} skipTranslate>
            What We Offer
          </Text>
          <Text variant="H2" className={styles.sectionTitle} skipTranslate id="features-title">
            Everything You Need to Succeed
          </Text>
          <Text variant="P1" className={styles.sectionSubtitle} skipTranslate>
            A comprehensive suite of tools and services built for modern businesses ready to scale.
          </Text>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <div className={styles.iconWrapper} aria-hidden="true">
                <Icon name={feature.icon as IconName} size={24} color="var(--color-oz-blue)" />
              </div>
              <Text variant="H6" className={styles.cardTitle} skipTranslate>
                {feature.title}
              </Text>
              <Text variant="P2" className={styles.cardDescription} skipTranslate>
                {feature.description}
              </Text>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
