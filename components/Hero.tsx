import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {/* LEFT CONTENT */}
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Elevated living, for every member of the family
          </p>

          <h1>
            Furniture for
            <br />
            distinguished
            <br />
            <em>companions.</em>
          </h1>

          <p className={styles.description}>
            Thoughtfully designed pet furniture that belongs in beautiful
            homes. Crafted for their comfort, considered for yours.
          </p>

          <Link href="/shop" className={styles.cta}>
            <span>Explore the collection</span>
            <span className={styles.arrow}>↗</span>
          </Link>
        </div>

        {/* RIGHT PRODUCT */}
        <div className={styles.visual}>
          {/* <div className={styles.productNumber}>01</div> */}

          <div className={styles.imageWrap}>
  <Image
    src="/images/hero1.png"
    alt="Gilded Paw premium pet furniture with pets"
    fill
    priority
    className={styles.productImage}
    sizes="(max-width: 800px) 90vw, 55vw"
  />
</div>

          <div className={styles.productInfo}>
            <div>
              <span className={styles.label}>The Collection</span>
              <p>Architectural Pet Furniture</p>
            </div>

            <span className={styles.material}>Wood · Textile · Comfort</span>
          </div>
        </div>
      </div>

      {/* DECORATIVE TEXT */}
      <span className={styles.sideText}>GILDED PAW · EST. 2026</span>
    </section>
  );
}