"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.statement}>
            <h2>
              <span className={styles.titleLine}>
                <span>Beautifully considered.</span>
              </span>

              <span className={styles.titleLine}>
                <span>
                  <em>Made to belong.</em>
                </span>
              </span>
            </h2>
          </div>

          <Link href="/shop" className={styles.explore}>
            <span>Explore the collection</span>
            {/* <span className={styles.arrow}>↗</span> */}
          </Link>
        </div>

        {/* DETAILS */}
        <div className={styles.details}>
          <div className={styles.about}>
            <div className={styles.monogram}>GP</div>

            <p>
              Thoughtfully designed furniture for pets, created to live
              beautifully within your home.
            </p>

            <span className={styles.location}>
              Mumbai · India
            </span>
          </div>

          <div className={styles.navigation}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>
                Discover
              </span>

              <Link href="/shop">Shop</Link>
              {/* <Link href="/shop">Collections</Link> */}
              <Link href="/about">Our Story</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>
                Client Care
              </span>

              <Link href="/shipping">
                Shipping & Delivery
              </Link>

              <Link href="/care">Product Care</Link>
              <Link href="/faq">FAQs</Link>
              {/* <Link href="/privacy">Privacy</Link> */}
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>
                Follow
              </span>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <span></span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Pinterest <span></span>
              </a>
            </div>
          </div>
        </div>

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
            Back to top <span></span>
          </button>
        </div>
      </div>
    </footer>
  );
}