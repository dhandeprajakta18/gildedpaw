import Link from "next/link";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* <span className={styles.number}>01</span> */}

          {/* <p className={styles.eyebrow}>Our Philosophy</p> */}

          <span className={styles.line} />
        </div>

        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>
              Made for them.
              <br />
              Designed for <em>your home.</em>
            </h2>
          </div>

          <div className={styles.copy}>
            <p>
              We believe pet furniture should feel as considered as every
              other piece in your home.
            </p>

            <p>
              Gilded Paw brings together thoughtful design, enduring
              materials and uncompromising comfort — creating furniture
              that both you and your companion can live beautifully with.
            </p>

            <Link href="/about" className={styles.link}>
              <span>Discover our story</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.value}>
            {/* <span>01</span> */}
            <h3>Considered</h3>
            <p>Designed to belong naturally within beautiful interiors.</p>
          </div>

          <div className={styles.value}>
            {/* <span>02</span> */}
            <h3>Comfortable</h3>
            <p>Created around the way our companions rest, lounge and live.</p>
          </div>

          <div className={styles.value}>
            {/* <span>03</span> */}
            <h3>Enduring</h3>
            <p>Quality materials and timeless forms made for everyday life.</p>
          </div>
        </div>
      </div>
    </section>
  );
}