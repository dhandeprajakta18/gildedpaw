import Image from "next/image";
import Link from "next/link";
import styles from "./Collections.module.css";

const collections = [
  {
    number: "01",
    title: "The Walk",
    subtitle: "Collars · Leads · Harnesses",
    image: "/images/collection-walk.jpg",
  },
  {
    number: "02",
    title: "The Home",
    subtitle: "Beds · Bowls · Objects",
    image: "/images/collection-home.jpg",
  },
  {
    number: "03",
    title: "The Wardrobe",
    subtitle: "Bandanas · Coats · Accessories",
    image: "/images/collection-wear.jpg",
  },
];

export default function CollectionsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span>GILDED PAW / COLLECTIONS</span>

        <h1>
          A considered life,
          <br />
          <em>with them.</em>
        </h1>

        <p>
          Everyday objects elevated through material,
          craftsmanship and a little indulgence.
        </p>
      </section>

      <section className={styles.collections}>
        {collections.map((collection) => (
          <Link
            href="/shop"
            className={styles.collection}
            key={collection.title}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="100vw"
                className={styles.image}
              />
            </div>

            <div className={styles.info}>
              <span>{collection.number}</span>

              <div>
                <h2>{collection.title}</h2>
                <p>{collection.subtitle}</p>
              </div>

              <i>↗</i>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}