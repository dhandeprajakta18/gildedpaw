//components/Lifestyle.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Lifestyle.module.css";

export default function Lifestyle() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/lifestyle1.png"
            alt="Gilded Paw furniture designed for beautiful homes"
            fill
            className={styles.image}
            sizes="100vw"
          />
        </div>

        <div className={styles.content}>
          {/* <span className={styles.label}>Living Together</span> */}

          <h2>
            Their space,
            <br />
            <em>beautifully considered.</em>
          </h2>

          <p>
            Furniture made for the quiet moments, afternoon naps and
            everyday rituals that make a house feel like home.
          </p>

          <Link href="/collections" className={styles.link}>
            <span>Explore the collection</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}