import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedCollection.module.css";

const products = [
  {
    id: "01",
    name: "The Haven",
    category: "Pet Bed",
    image: "/products/product-1.jpeg",
  },
  {
    id: "02",
    name: "The Cocoon",
    category: "Pet Retreat",
    image: "/products/product-2.jpeg",
  },
  {
    id: "03",
    name: "The Lounger",
    category: "Pet Bed",
    image: "/products/product-3.jpeg",
  },
];

export default function FeaturedCollection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            {/* <p className={styles.eyebrow}>The Collection</p> */}

            <h2>
              Objects of
              <br />
              <em>comfort.</em>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p>
              Designed with an eye for interiors and an understanding of
              how our companions live.
            </p>

            <Link href="/shop" className={styles.viewAll}>
              View all pieces <span>↗</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <Link href="/shop" className={styles.product} key={product.id}>
              <div className={styles.imageBox}>
                <span className={styles.number}>{product.id}</span>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 700px) 100vw, 33vw"
                />

                <span className={styles.discover}>Discover ↗</span>
              </div>

              <div className={styles.info}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}