"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
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
        threshold: 0.22,
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
      <div className={styles.inner}>
        <h2>
          <span className={styles.titleLine}>
            <span>For people who make</span>
          </span>

          <span className={styles.titleLine}>
            <span>
              room for <em>beautiful things.</em>
            </span>
          </span>
        </h2>

        <p className={styles.description}>
          New collections, thoughtful spaces and occasional notes from
          Gilded Paw.
        </p>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />

          <button type="submit">Join </button>
        </form>
      </div>
    </section>
  );
}