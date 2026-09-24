"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Craftsmanship.module.css";

export default function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.imageSide}>
        <Image
          src="/images/craftsmanship.jpg"
          alt="Gilded Paw craftsmanship"
          fill
          className={styles.image}
          sizes="(max-width: 800px) 100vw, 54vw"
        />
      </div>

      <div className={styles.content}>
        <h2>
          <span className={styles.titleLine}>
            <span>Crafted with</span>
          </span>

          <span className={styles.titleLine}>
            <span>
              <em>intention.</em>
            </span>
          </span>
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
          <span>Our approach</span>
          {/* <span className={styles.arrow}></span> */}
        </Link>
      </div>
    </section>
  );
}