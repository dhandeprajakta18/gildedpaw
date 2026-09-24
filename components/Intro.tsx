"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Intro.module.css";

export default function Intro() {
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
      className={`${styles.intro} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>

        {/* TOP DIVIDER */}
        {/* <div className={styles.top}>
          <p className={styles.eyebrow}>Our Philosophy</p>
          <span className={styles.line} />
        </div> */}

        {/* MAIN CONTENT */}
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>
              <span className={styles.headingLine}>
                <span>Made for them.</span>
              </span>

              <span className={styles.headingLine}>
                <span>
                  Designed for <em>your home.</em>
                </span>
              </span>
            </h2>
          </div>

          <div className={styles.copy}>
            <p className={styles.copyLead}>
              Because the things they live with become part of the way
              you live, too.
            </p>

            <p>
              We believe pet furniture should feel as considered as every
              other piece in your home — never an afterthought, never
              something to hide away.
            </p>

            <p>
              Gilded Paw brings together thoughtful proportions, enduring
              materials and uncompromising comfort to create pieces that
              feel naturally at home in considered interiors.
            </p>

            <Link href="/about" className={styles.link}>
              <span>Discover our story</span>
              {/* <span className={styles.linkArrow}>↗</span> */}
            </Link>
          </div>
        </div>

        {/* BRAND STATEMENT */}
        {/* <div className={styles.statement}>
          <span className={styles.statementLabel}></span>

          <p>
            Not pet furniture that simply occupies a room.
            <br />
            <em>Furniture that belongs in it.</em>
          </p>
        </div> */}

        {/* VALUES */}
        <div className={styles.values}>
          <div className={styles.value}>
            <span className={styles.valueNumber}></span>

            <h3>Considered</h3>

            <p>
              Designed with quiet proportions and thoughtful details to
              belong naturally within beautiful interiors.
            </p>
          </div>

          <div className={styles.value}>
            <span className={styles.valueNumber}></span>

            <h3>Comfortable</h3>

            <p>
              Created around the way our companions actually rest,
              stretch, lounge and live beside us.
            </p>
          </div>

          <div className={styles.value}>
            <span className={styles.valueNumber}></span>

            <h3>Enduring</h3>

            <p>
              Honest materials, lasting construction and timeless forms
              designed for years of everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}