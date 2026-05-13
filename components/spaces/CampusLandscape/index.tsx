import styles from "./styles.module.scss";

export function CampusLandscape() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>The Campus Landscape</h2>
          <p className={styles.body}>
            A campus shaped by light, openness, and movement. Each zone flows
            into the next — from quiet libraries to dynamic event halls,
            outdoor terraces, and collaborative studios. Designed to support
            every state of focus.
          </p>
        </header>

        <div className={styles.gallery}>
          <div className={styles.galleryLeft}>
            <img
              src="/oz-deli-interior.jpg"
              alt="Wide view of OZ A campus interior with high ceilings and lounge seating"
            />
          </div>
          <div className={styles.galleryRight}>
            <div className={styles.galleryRightTop}>
              <img
                src="/knowledge-workshop.jpg"
                alt="OZ A workshop room with attendees and presenter"
              />
            </div>
            <div className={styles.galleryRightBottom}>
              <img
                src="/oz-fitness-gym.jpg"
                alt="OZ A fitness studio with equipment and natural light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
