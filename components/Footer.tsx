"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Gilded Paw</span>

            <h2>
              Made for their comfort.
              <br />
              <em>Designed for your world.</em>
            </h2>
          </div>

          <Link href="/shop" className={styles.shopLink}>
            <span>Explore Collection</span>
            <span className={styles.arrow}>↗</span>
          </Link>
        </div>

        {/* MIDDLE */}
        <div className={styles.middle}>
          <div className={styles.note}>
            <p>
              Thoughtfully designed furniture for pets and the beautiful
              homes they share.
            </p>

            <span>Mumbai · India</span>
          </div>

          <div className={styles.navigation}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Explore</span>

              <Link href="/shop">Shop</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Information</span>

              <Link href="/shipping">Shipping & Delivery</Link>
              <Link href="/care">Product Care</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/privacy">Privacy</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Social</span>

              <a href="#" target="_blank" rel="noreferrer">
                Instagram ↗
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                Pinterest ↗
              </a>
            </div>
          </div>
        </div>

        {/* LARGE BRAND */}
        <div className={styles.brand}>
          <span>GILDED</span>

          <span className={styles.paw}>PAW</span>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <span>© 2026 Gilded Paw</span>

          <span>Furniture for distinguished companions.</span>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}