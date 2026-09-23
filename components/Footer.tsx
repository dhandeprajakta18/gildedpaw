"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP STATEMENT */}
        <div className={styles.top}>
          <div className={styles.statement}>
            

            <h2>
              Beautifully considered.
              <br />
              <em>Made to belong.</em>
            </h2>
          </div>

          <Link href="/shop" className={styles.explore}>
            <span>Explore the collection</span>
            <span className={styles.arrow}>↗</span>
          </Link>
        </div>

        {/* DETAILS */}
        <div className={styles.details}>
          <div className={styles.about}>
            <div className={styles.monogram}>GP</div>

            <p>
              Thoughtfully designed furniture for pets,
              created to live beautifully within your home.
            </p>

            <span className={styles.location}>Mumbai · India</span>
          </div>

          <div className={styles.navigation}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Discover</span>

              <Link href="/shop">Shop</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Client Care</span>

              <Link href="/shipping">Shipping & Delivery</Link>
              <Link href="/care">Product Care</Link>
              <Link href="/faq">FAQs</Link>
              <Link href="/privacy">Privacy</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Follow</span>

              <a href="#" target="_blank" rel="noreferrer">
                Instagram <span>↗</span>
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                Pinterest <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* BRAND */}
      {/* ELEGANT SIGNATURE */}
{/* <div className={styles.signature}>
  <div className={styles.ornament}>
    <span className={styles.line} />
    <span className={styles.diamond}>◆</span>
    <span className={styles.centerMark}>GP</span>
    <span className={styles.diamond}>◆</span>
    <span className={styles.line} />
  </div>

  <p>Furniture for distinguished companions.</p>

  <span className={styles.signatureSub}>
    Thoughtfully crafted · Beautifully at home
  </span>
</div> */}

{/* BOTTOM */}
<div className={styles.bottom}>
  <span>© 2026 Gilded Paw</span>

  <div className={styles.legal}>
    <Link href="/privacy">Privacy</Link>
    <span>·</span>
    <Link href="/terms">Terms</Link>
  </div>

  <button
    type="button"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  >
    Back to top <span>↑</span>
  </button>
</div>

      
      </div>
    </footer>
  );
}