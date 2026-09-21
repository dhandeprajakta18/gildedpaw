import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Gilded Journal</p>

        <h2>
          For people who make
          <br />
          room for <em>beautiful things.</em>
        </h2>

        <p className={styles.description}>
          New collections, thoughtful spaces and occasional notes from
          Gilded Paw.
        </p>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />

          <button type="submit">Join ↗</button>
        </form>
      </div>
    </section>
  );
}