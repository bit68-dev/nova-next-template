import styles from "./styles.module.scss";

export function CampusPhilosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            The Campus
            <br />
            Philosophy
          </h2>
          <p className={styles.body}>
            OZ A is not just a workspace — it&apos;s a lifestyle campus designed
            for ambitious individuals who refuse to settle for ordinary. Every
            corner of the campus is engineered to spark creativity, foster
            meaningful connections, and accelerate growth.
          </p>
          <p className={styles.body}>
            We blend the energy of a vibrant community with the discipline of a
            world-class workplace. From quiet focus pods to electric event
            stages, the campus adapts to your rhythm — not the other way
            around.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.imageBackdrop} aria-hidden="true" />
          <div className={styles.imageCard}>
            <img
              src="/oz-team-collaborating.jpg"
              alt="OZ A campus interior with people working and collaborating"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
