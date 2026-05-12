import styles from "./styles.module.scss";

type Card = {
  tone: "blue" | "purple" | "green";
  pinColors: { outer: string; inner: string; accent: string };
  image: string;
  className: string;
};

const CARDS: Card[] = [
  {
    tone: "blue",
    pinColors: { outer: "#A0BCEB", inner: "#5B8AD6", accent: "#2E68C9" },
    image: "/space-hero-blue.jpg",
    className: "cardBlue",
  },
  {
    tone: "purple",
    pinColors: { outer: "#E5C9EF", inner: "#D3A5E5", accent: "#B588C6" },
    image: "/space-hero-purple.jpg",
    className: "cardPurple",
  },
  {
    tone: "green",
    pinColors: { outer: "#EBEFBF", inner: "#BECB2A", accent: "#CBD555" },
    image: "/space-hero-green.jpg",
    className: "cardGreen",
  },
];

function PinIcon({ colors }: { colors: Card["pinColors"] }) {
  return (
    <svg
      className={styles.pinSvg}
      viewBox="0 0 107 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer rounded pin head */}
      <path
        d="M53.5 4 C77.5 4 95 21 95 45 C95 60 85 73 70 82 L53.5 105 L37 82 C22 73 12 60 12 45 C12 21 29.5 4 53.5 4 Z"
        fill={colors.outer}
      />
      {/* Inner darker disc */}
      <circle cx="53.5" cy="42" r="22" fill={colors.inner} />
      {/* Center accent */}
      <circle cx="53.5" cy="42" r="9" fill={colors.accent} />
    </svg>
  );
}

export function PhysicalParkHero() {
  return (
    <section className={styles.section} aria-labelledby="physical-park-title">
      <div className={styles.heading}>
        <h1 id="physical-park-title" className={styles.title}>
          The Physical Park
        </h1>
        <p className={styles.body}>
          A curated landscape of diverse environments designed for work, movement, and recovery.
          Explore the logic of our physical campus and find the access model that fits your
          professional rhythm.
        </p>
      </div>

      <div className={styles.cardsRow}>
        {CARDS.map((card) => (
          <article key={card.tone} className={`${styles.card} ${styles[card.className]}`}>
            <div className={styles.pin}>
              <PinIcon colors={card.pinColors} />
            </div>
            <div className={styles.cardImage}>
              <img src={card.image} alt="" />
            </div>
          </article>
        ))}
      </div>

      <div className={styles.ellipseBackdrop} aria-hidden="true" />
    </section>
  );
}
