"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function AboutPage() {
  const pageRef = useRef<HTMLElement>(null);

  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(["hero"])
  );

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const sections =
      page.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("data-reveal");

          if (id) {
            setVisibleSections((current) => {
              const next = new Set(current);

              next.add(id);

              return next;
            });
          }

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -4% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const revealClass = (id: string) =>
    visibleSections.has(id) ? styles.visible : "";

  return (
    <main ref={pageRef} className={styles.page}>
      {/* HERO */}

      <section className={`${styles.hero} ${styles.visible}`}>
        <h1>
          <span className={styles.heroLine}>
            <span>Because they&apos;re</span>
          </span>

          <span className={styles.heroLine}>
            <span>
              not <em>just pets.</em>
            </span>
          </span>
        </h1>

        <div className={styles.heroBottom}>
          <p>
            Gilded Paw was born from a simple belief: the objects we
            choose for our animals should be as considered as the
            objects we choose for ourselves.
          </p>

          <p className={styles.heroSecondary}>
            They share our rooms, our routines and our quietest
            moments. Their things should belong there beautifully,
            too.
          </p>
        </div>
      </section>

      {/* STORY */}

      <section
        data-reveal="story"
        className={`${styles.story} ${revealClass("story")}`}
      >
        <div className={styles.largeImage}>
          <Image
            src="/images/abouthero.png"
            alt="Gilded Paw furniture designed for considered homes"
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>

        <div className={styles.storyContent}>
          <h2>
            <span className={styles.headingLine}>
              <span>Designed for them.</span>
            </span>

            <span className={styles.headingLine}>
              <span>
                Made for <em>beautiful living.</em>
              </span>
            </span>
          </h2>

          <div className={styles.storyCopy}>
            <p>
              We started Gilded Paw after noticing how often pet
              furniture felt disconnected from the homes it lived in.
              The choices were usually practical or beautiful —
              rarely both.
            </p>

            <p>
              We wanted to create something different: objects that
              respect the needs of our companions while feeling
              entirely at home alongside the furniture, materials and
              objects we choose for ourselves.
            </p>

            <p>
              That means thinking beyond appearance. Every
              proportion, surface and detail is considered around the
              way animals actually rest, stretch, play and move
              through a home.
            </p>

            <p>
              The result is a collection where function, comfort and
              craftsmanship sit naturally beside thoughtful design —
              pieces made to become part of everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section
        data-reveal="philosophy"
        className={`${styles.philosophy} ${revealClass(
          "philosophy"
        )}`}
      >
        <div className={styles.philosophyContent}>
          <p className={styles.philosophyIntro}>
            We don&apos;t believe
            <br />
            pet furniture should
            <br />
            look like <em>pet furniture.</em>
          </p>

          <div className={styles.philosophyCopy}>
            <p>
              A bed can be comfortable without becoming something
              you want to hide. A feeding piece can be practical
              without feeling purely utilitarian. An object designed
              for an animal can still contribute to the character of
              a room.
            </p>

            <p>
              Our approach begins with that balance. We consider how
              a piece feels to your companion, how it lives within
              your space and how it continues to look and function
              after years of everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}

      <section
        data-reveal="values"
        className={`${styles.values} ${revealClass("values")}`}
      >
        <article className={styles.valueItem}>
          <h3>Considered</h3>

          <p>
            Nothing unnecessary. Nothing overlooked. Every
            proportion and detail has a reason for being there.
          </p>
        </article>

        <article className={styles.valueItem}>
          <h3>Crafted</h3>

          <p>
            Materials are selected for their character, comfort and
            ability to become more beautiful through everyday life.
          </p>
        </article>

        <article className={styles.valueItem}>
          <h3>Loved</h3>

          <p>
            Designed around the animals who turn our houses into
            homes, because that&apos;s really what this is about.
          </p>
        </article>
      </section>

      {/* APPROACH */}

      <section
        data-reveal="approach"
        className={`${styles.approach} ${revealClass("approach")}`}
      >
        <div className={styles.approachHeading}>
          <h2>
            <span className={styles.headingLine}>
              <span>Less pet product.</span>
            </span>

            <span className={styles.headingLine}>
              <span>
                More <em>part of home.</em>
              </span>
            </span>
          </h2>
        </div>

        <div className={styles.approachGrid}>
          <article className={styles.approachItem}>
            <h3>Form</h3>

            <p>
              Quiet silhouettes and thoughtful proportions allow
              each piece to sit naturally within contemporary
              interiors.
            </p>
          </article>

          <article className={styles.approachItem}>
            <h3>Material</h3>

            <p>
              Tactile, enduring materials are selected not only for
              how they look on day one, but for how they live over
              time.
            </p>
          </article>

          <article className={styles.approachItem}>
            <h3>Comfort</h3>

            <p>
              Design begins with the animal. Their posture, movement
              and everyday rituals shape the decisions behind every
              piece.
            </p>
          </article>

          <article className={styles.approachItem}>
            <h3>Longevity</h3>

            <p>
              We favour timeless forms over passing trends, creating
              pieces intended to remain part of your home for years.
            </p>
          </article>
        </div>
      </section>

      {/* CLOSING */}

      <section
        data-reveal="closing"
        className={`${styles.closing} ${revealClass("closing")}`}
      >
        <p className={styles.closingStatement}>
          <span>They wait by the door.</span>

          <span>Sleep beside us.</span>

          <span>Follow us from room to room.</span>

          <span>
            <em>They belong here, too.</em>
          </span>
        </p>

        <div className={styles.closingCopy}>
          <p>
            Gilded Paw is our way of making a little more room for
            them — without asking you to compromise the home
            you&apos;ve carefully made your own.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section
        data-reveal="cta"
        className={`${styles.cta} ${revealClass("cta")}`}
      >
        <Link href="/shop">
          <span>
            Made for
            <br />
            your favourite
            <br />
            <em>someone.</em>
          </span>

          <i></i>
        </Link>
      </section>
    </main>
  );
}