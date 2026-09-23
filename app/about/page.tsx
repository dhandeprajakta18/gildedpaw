import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        {/* <span className={styles.eyebrow}>
          OUR STORY / EST. 2026
        </span> */}

        <h1>
          Because they&apos;re
          <br />
          not <em>just pets.</em>
        </h1>

        <div className={styles.heroBottom}>
          <p>
            Gilded Paw was born from a simple belief: the objects
            we choose for our animals should be as considered as
            the objects we choose for ourselves.
          </p>

          
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.largeImage}>
          <Image
            src="/images/abouthero.png"
            alt="Gilded Paw"
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.storyContent}>
          

          <h2>
            Designed for dogs.
            <br />
            Made for <em>beautiful living.</em>
          </h2>

          <div className={styles.storyCopy}>
            <p>
              We wanted pet essentials that didn&apos;t need to be
              hidden when guests came over.
            </p>

            <p>
              So we created a collection where function, comfort
              and craftsmanship live alongside thoughtful design.
              Pieces made to belong in your home — and in their
              everyday life.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div>
          
          <h3>Considered</h3>
          <p>Nothing unnecessary. Nothing overlooked.</p>
        </div>

        <div>
         
          <h3>Crafted</h3>
          <p>Materials chosen to age beautifully.</p>
        </div>

        <div>
         
          <h3>Loved</h3>
          <p>Because that&apos;s really what this is about.</p>
        </div>
      </section>

      <section className={styles.cta}>
        

        <Link href="/shop">
          Made for
          <br />
          your favourite
          <br />
          <em>someone.</em>

          <i>↗</i>
        </Link>
      </section>
    </main>
  );
}