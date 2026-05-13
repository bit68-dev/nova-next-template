import { ArrowUpRight } from "lucide-react";
import styles from "./styles.module.scss";

interface Card {
  label: string;
  title: string;
  body: string;
  variant: "cardBlue" | "cardPink" | "cardYellow" | "cardPurple";
}

const CARDS: Card[] = [
  {
    label: "Day Pass",
    title: "Drop in & work",
    body: "Use any open desk for a single day. No commitment needed.",
    variant: "cardBlue",
  },
  {
    label: "Resident",
    title: "Your seat, every day",
    body: "Reserved desk, mailbox, and 24/7 access to all campus zones.",
    variant: "cardPink",
  },
  {
    label: "Studio",
    title: "Team headquarters",
    body: "Private studio for 2–10 people inside the OZ A campus.",
    variant: "cardYellow",
  },
  {
    label: "Patron",
    title: "Full ecosystem access",
    body: "Everything in OZ A plus events, deli credits, and gym access.",
    variant: "cardPurple",
  },
];

export function MembershipParticipation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Membership &amp; Participation</h2>
          <p className={styles.body}>
            Four ways to join the OZ A campus — each one designed around how
            you actually work, gather, and grow. Pick the rhythm that fits
            today; switch whenever it changes tomorrow.
          </p>
        </header>

        <div className={styles.cardsRow}>
          {CARDS.map((card) => (
            <article
              key={card.label}
              className={`${styles.card} ${styles[card.variant]}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardLabel}>{card.label}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.cardArrow} aria-hidden="true">
                  <ArrowUpRight size={20} strokeWidth={1.75} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
