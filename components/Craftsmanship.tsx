import Image from "next/image";
import Link from "next/link";
import styles from "./Craftsmanship.module.css";

export default function Craftsmanship() {
  return (
    <section className={styles.section}>
      <div className={styles.imageSide}>
        <Image
          src="/images/craftsmanship.jpg"
          alt="Gilded Paw craftsmanship"
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        {/* <span className={styles.number}>02 / CRAFT</span> */}

        <h2>
          Crafted with
          <br />
          <em>intention.</em>
        </h2>

        <p className={styles.lead}>
          Good design should be felt long before it needs to be explained.
        </p>

        <p className={styles.description}>
          From the proportions of every frame to the texture of every
          surface, each Gilded Paw piece is considered as furniture first
          and pet furniture second.
        </p>

        <Link href="/about" className={styles.link}>
          Our approach <span>↗</span>
        </Link>
      </div>
    </section>
  );
}