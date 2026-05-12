import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";

type BadgeType = "community" | "news" | "knowledge";

interface Card {
  tag: BadgeType;
  title: string;
  excerpt: string;
}

/* Figma: 6 blog-card examples — 3×2 grid */
const CARDS: Card[] = [
  {
    tag: "community",
    title: "Maximizing Efficiency in Team Operations",
    excerpt: "Discover how intentional workspace design reduces cognitive overhead and...",
  },
  {
    tag: "news",
    title: "OZ Launches New Collaboration Zones",
    excerpt: "Our newest addition brings flexible pods and standing-desk clusters to...",
  },
  {
    tag: "knowledge",
    title: "The Science of Focus in Open Environments",
    excerpt: "Explore curated research on how sound masking and spatial zoning improve...",
  },
  {
    tag: "community",
    title: "Member Spotlight: How Teams Thrive at OZ",
    excerpt: "Meet the founders who built their first product from OZ A's dedicated...",
  },
  {
    tag: "knowledge",
    title: "Biophilic Design and Employee Well-being",
    excerpt: "Natural light, greenery, and ventilation—how our campus was engineered...",
  },
  {
    tag: "news",
    title: "Upcoming Events: Innovation Week at OZ",
    excerpt: "Join workshops, keynotes, and networking dinners across the OZ campus...",
  },
];

const BADGE_CLASS: Record<BadgeType, string> = {
  community: styles.badgeCommunity,
  news: styles.badgeNews,
  knowledge: styles.badgeKnowledge,
};

const BADGE_LABEL: Record<BadgeType, string> = {
  community: "Community",
  news: "News",
  knowledge: "Knowledge",
};

export function InsightsSection() {
  return (
    <section className={styles.section} id="insights" aria-labelledby="insights-title">
      <div className={styles.container}>
        {/* Figma: Frame 1171275836 — header row: heading left, body right */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading} id="insights-title">
            Latest Insights
          </h2>
          <div className={styles.intro}>
            <p className={styles.body}>
              Stay informed with our latest updates, stories, and expert perspectives from the OZ
              community — built for curious minds and ambitious teams.
            </p>
          </div>
        </div>

        {/* Figma: Frame 1171275839 — 3×2 grid */}
        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              {/* Top image placeholder — Figma: h:316 radius:32/32/0/0 */}
              <div className={styles.cardImg} aria-hidden="true" />

              {/* Bottom text area */}
              <div className={styles.cardBody}>
                <span className={`${styles.badge} ${BADGE_CLASS[card.tag]}`}>
                  {BADGE_LABEL[card.tag]}
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.footer}>
          <a href="#" className={styles.btnPrimary}>
            <ArrowRight size={20} aria-hidden="true" />
            Explore our Insights
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
