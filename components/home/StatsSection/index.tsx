import { Fragment } from "react";
import { Text } from "@/components/ui/Text";
import type { StatItem } from "@/app/home/data";
import styles from "./styles.module.scss";

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className={styles.section} aria-label="Statistics">
      <div className={styles.inner}>
        {stats.map((stat, index) => (
          <Fragment key={stat.label}>
            <div className={styles.statItem}>
              <Text variant="H1" className={styles.statValue} skipTranslate>
                {stat.value}
              </Text>
              <Text variant="P5" className={styles.statLabel} skipTranslate>
                {stat.label}
              </Text>
            </div>
            {index < stats.length - 1 && (
              <div className={styles.divider} aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
