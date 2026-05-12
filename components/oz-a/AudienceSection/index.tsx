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
    body: "For those who value the silence required for mastery and the focus needed to build something that lasts.",
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
        {/* Left — heading + user-type rows */}
        <div className={styles.left}>
          <h2 id="oz-audience-title" className={styles.title}>
            Who It&apos;s For ?
          </h2>

          <ul className={styles.items}>
            {ITEMS.map((item) => (
              <li key={item.title} className={styles.item}>
                <span className={cn(styles.icon, iconClass[item.icon])} aria-hidden="true">
                  <Globe size={20} strokeWidth={1.5} />
                </span>
                <div className={styles.text}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemBody}>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — image with floating pills */}
        <div className={styles.right}>
          <div className={styles.image}>
            <img
              src="/placeholder.svg?height=700&width=807"
              alt="People talking on the grass in an urban park, taking notes"
            />
          </div>

          <div className={styles.pillWhite}>
            <span>OZ COWorking park</span>
          </div>

          <div className={styles.pillYellow}>
            <span>Our Target Users</span>
          </div>
        </div>
      </div>
    </section>
  );
}
