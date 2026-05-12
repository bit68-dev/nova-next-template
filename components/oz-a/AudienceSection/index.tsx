import { Globe } from "lucide-react";
import { cn } from "@/utils/CN";
import styles from "./styles.module.scss";

type AudienceItem = {
  title: string;
  body: string;
  icon: "blue" | "yellow" | "purple";
};

const ITEMS: AudienceItem[] = [
  {
    title: "The Collaborative Catalyst",
    body: "For those who thrive on the friction of ideas and find energy in diverse perspectives.",
    icon: "blue",
  },
  {
    title: "The Deep Seeker",
    body: " For those who value the silence required for mastery and the focus needed to build something that lasts.",
    icon: "yellow",
  },
  {
    title: "The Holistic Achiever",
    body: "For those who refuse to sacrifice health or learning in the pursuit of their professional goals.",
    icon: "purple",
  },
];

const iconClass = {
  blue: styles.iconBlue,
  yellow: styles.iconYellow,
  purple: styles.iconPurple,
};

export function AudienceSection() {
  return (
    <section className={styles.section} aria-labelledby="oz-audience-title">
      <div className={styles.inner}>
        {/* Left — Frame 1171275874 (502x666) — heading + user-type rows */}
        <div className={styles.left}>
          <h2 id="oz-audience-title" className={styles.title}>
            Who It&apos;s For ?
          </h2>

          <ul className={styles.items}>
            {ITEMS.map((item) => (
              <li key={item.title} className={styles.item}>
                <span className={cn(styles.icon, iconClass[item.icon])} aria-hidden="true">
                  <Globe size={20} strokeWidth={1.5} color="#ffffff" />
                </span>
                <div className={styles.text}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Frame 1171275875 (721x664) — image + 2 pills + Vector 41 */}
        <div className={styles.right}>
          {/* Decorative Vector 41 — 339x508 on the right side */}
          <svg
            className={styles.vector41}
            viewBox="0 0 339 508"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              d="M170 0 C260 80, 339 180, 320 280 C300 380, 230 470, 170 508 C110 470, 40 380, 19 280 C0 180, 80 80, 170 0 Z"
              fill="#becb2a"
              opacity="0.18"
            />
          </svg>

          {/* Background image (807x700, extends beyond container left edge) */}
          <div className={styles.image}>
            <img
              src="/placeholder.svg?height=700&width=807"
              alt="People talking on the grass in an urban park, taking notes"
            />
          </div>

          {/* Yellow pill (TOP) — "Our Target Users" */}
          <div className={styles.pillYellow}>
            <span>Our Target Users</span>
          </div>

          {/* White pill (BELOW yellow) — "OZ COWorking park" */}
          <div className={styles.pillWhite}>
            <span>OZ COWorking park</span>
          </div>
        </div>
      </div>
    </section>
  );
}
