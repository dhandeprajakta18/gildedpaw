"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyGildedPaw.module.css";

const values = [
  {
    number: "01",
    title: "Designed to Belong",
    text: "Furniture created to complement considered interiors, rather than compete with them.",
  },
  {
    number: "02",
    title: "Comfort at Heart",
    text: "Every proportion, surface and material is chosen with your companion's comfort in mind.",
  },
  {
    number: "03",
    title: "Made to Endure",
    text: "Timeless forms and quality materials designed for the realities of everyday life.",
  },
  {
    number: "04",
    title: "Quietly Distinctive",
    text: "Understated pieces with enough character to feel unmistakably Gilded Paw.",
  },
];

export default function WhyGildedPaw() {
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
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>
            <span className={styles.headingLine}>
              <span>Because they belong</span>
            </span>

            <span className={styles.headingLine}>
              <span>
                <em>everywhere you do.</em>
              </span>
            </span>
          </h2>
        </div>

        <div className={styles.values}>
          {values.map((value) => (
            <div className={styles.value} key={value.number}>
              <span>{value.number}</span>

              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}