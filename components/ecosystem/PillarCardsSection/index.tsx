import { CircleCheck } from "lucide-react";
import styles from "./styles.module.scss";

type CardTheme = "pink" | "lavender" | "green" | "orange";

interface Pillar {
  theme: CardTheme;
  label: string;
  topImage: string;
  smallImage: string;
}

const PILLARS: Pillar[] = [
  {
    theme: "pink",
    label: "OZ | COMMUNITY",
    smallImage: "/community-circle-photo.jpg",
    topImage: "/community-gathering.png",
  },
  {
    theme: "lavender",
    label: "OZ | KNOWLEDGE",
    smallImage: "/learning-knowledge-portrait.jpg",
    topImage: "/knowledge-workshop.jpg",
  },
  {
    theme: "green",
    label: "OZ | DELI",
    smallImage: "/healthy-deli-food.jpg",
    topImage: "/oz-deli-interior.jpg",
  },
  {
    theme: "orange",
    label: "OZ | FITNESS",
    smallImage: "/fitness-portrait.png",
    topImage: "/oz-fitness-gym.jpg",
  },
];

const themeClass: Record<CardTheme, string> = {
  pink: styles.cardPink,
  lavender: styles.cardLavender,
  green: styles.cardGreen,
  orange: styles.cardOrange,
};

/**
 * Four pillar cards — Figma Frame 2085663640 — Component 6/4/7/5.
 * Each card is 277×260 r:250 (pill) with stacked top images, decorative dots,
 * white tick-circle icon, colored Union shape, and a colored label strip.
 */
export function PillarCardsSection() {
  return (
    <section className={styles.section} aria-label="Ecosystem pillars">
      <div className={styles.row}>
        {PILLARS.map((p) => (
          <article key={p.label} className={`${styles.card} ${themeClass[p.theme]}`}>
            {/* Top stacked images — Frame 1171275814 */}
            <div className={styles.topImages}>
              <div className={styles.smallTile}>
                <img src={p.smallImage || "/placeholder.svg"} alt="" />
              </div>
              <div className={styles.largeTile}>
                <img src={p.topImage || "/placeholder.svg"} alt="" />
              </div>
            </div>

            {/* Inner decorative layer — Frame 1000003220 */}
            <div className={styles.inner} aria-hidden="true">
              {/* Decorative dot pair — Vector 30×30 */}
              <span className={styles.dotTopRight} />
              <span className={styles.dotBottomLeft} />

              {/* Side bars — Frame 1000003223 + Frame 1000003330 */}
              <span className={styles.barLeft} />
              <span className={styles.barBottom} />

              {/* Vector 23 small detail */}
              <span className={styles.vectorTopRight} />

              {/* Union wave shape 235×158 r:26 */}
              <span className={styles.unionShape} />

              {/* Screenshot label strip 197×41 */}
              <div className={styles.screenshot}>
                <span>{p.label}</span>
              </div>

              {/* Central white tick-circle 40×40 */}
              <CircleCheck className={styles.tickCircle} size={40} strokeWidth={1.5} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
