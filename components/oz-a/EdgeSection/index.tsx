import { MapPin } from "lucide-react";
import { cn } from "@/utils/CN";
import styles from "./styles.module.scss";

type EdgeCard = {
  title: string;
  body: string;
  variant: "purple" | "blue" | "green";
  imageAlt: string;
};

/* Figma order (left to right by x position): purple → blue (smaller, higher) → green */
const CARDS: EdgeCard[] = [
  {
    title: "A Unified Ecosystem",
    body: "Through OZ Fit, Deli, and Knowledge, we support the whole human, ensuring your physical, nutritional, and intellectual needs are met in one flow.",
    variant: "purple",
    imageAlt: "OZ ecosystem amenities",
  },
  {
    title: "Ritual Over Routine",
    body: "We replace the monotony of the workday with meaningful communal rituals—shared meals, evening talks, and intentional growth.",
    variant: "blue",
    imageAlt: "Communal ritual at OZ",
  },
  {
    title: "Physical-Digital Synergy",
    body: "Our platform isn't just a tool; it's a bridge that seamlessly connects our physical campus to your personal and professional journey.",
    variant: "green",
    imageAlt: "Physical and digital integration",
  },
];

const variantClass = {
  purple: styles.cardPurple,
  blue: styles.cardBlue,
  green: styles.cardGreen,
};

export function EdgeSection() {
  return (
    <section className={styles.section} aria-labelledby="oz-edge-title">
      <div className={styles.inner}>
        {/* Heading — Frame 1171275812 */}
        <div className={styles.heading}>
          <h2 id="oz-edge-title" className={styles.title}>
            The OZ Edge
          </h2>
          <p className={styles.body}>
            We prioritize intentionality over utility, creating an integrated ecosystem where
            rituals replace routines and spaces serve your mindset.
          </p>
        </div>

        {/* Cards — Frame 1171275877 (1235x703) */}
        <div className={styles.cards}>
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={cn(styles.card, variantClass[card.variant])}
            >
              <div className={styles.pinRow}>
                <span className={styles.pin} aria-hidden="true">
                  <MapPin size={20} strokeWidth={2} color="#ffffff" />
                </span>
              </div>

              <div className={styles.innerImage}>
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt={card.imageAlt}
                />
              </div>

              <div className={styles.text}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
