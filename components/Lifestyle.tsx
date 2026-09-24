"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Lifestyle.module.css";

export default function Lifestyle() {
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
        threshold: 0.2,
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
          <h2>
            <span className={styles.titleLine}>
              <span>Their space,</span>
            </span>

            <span className={styles.titleLine}>
              <span>
                <em>beautifully considered.</em>
              </span>
            </span>
          </h2>

          <p>
            Furniture made for the quiet moments, afternoon naps and
            everyday rituals that make a house feel like home.
          </p>

          <Link href="/collections" className={styles.link}>
            <span>Explore the collection</span>
          </Link>
        </div>
      </div>
    </section>
  );
}