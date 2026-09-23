import Image from "next/image";
import Link from "next/link";
import styles from "./Shop.module.css";

type PetCategory = "dogs" | "cats";

type Product = {
  name: string;
  category: string;
  pet: PetCategory;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    name: "The Regent Collar",
    category: "Leather Collection",
    pet: "dogs",
    price: "₹4,800",
    image: "/products/collarbeltdog.png",
  },
    {
    name: "The Heritage Bowl",
    category: "Home Collection",
    pet: "cats",
    price: "₹5,200",
    image: "/products/Heritagebowl.png",
  },
  {
    name: "The Windsor Lead",
    category: "Walk Essentials",
    pet: "dogs",
    price: "₹3,600",
    image: "/products/Windsorlead.png",
  },

  {
    name: "The Manor Bed",
    category: "Sleep Collection",
    pet: "cats",
    price: "₹12,500",
    image: "/products/Manorbed.png",
  },
  {
    name: "The Kensington Harness",
    category: "Walk Essentials",
    pet: "dogs",
    price: "₹6,200",
    image: "/products/Kensingtonharness.png",
  },
  {
    name: "The Classic Bandana",
    category: "Accessories",
    pet: "cats",
    price: "₹1,800",
    image: "/products/Classicbandana.png",
  },
];

type ShopPageProps = {
  searchParams: Promise<{ pet?: string | string[] }>;
};

function getPetCategory(
  pet: string | string[] | undefined,
): PetCategory | undefined {
  return pet === "dogs" || pet === "cats" ? pet : undefined;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { pet } = await searchParams;
  const selectedPet = getPetCategory(pet);
  const visibleProducts = selectedPet
    ? products.filter((product) => product.pet === selectedPet)
    : products;

  const description = selectedPet
    ? `Thoughtfully designed objects for ${selectedPet} and the homes they make better.`
    : "Thoughtfully designed objects for dogs, cats, and the homes they make better.";

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          {/* <span>THE COLLECTION</span>
          <span>01 / SHOP</span> */}
        </div>

        <div className={styles.heroContent}>
          <h1>
            Made for
            <br />
            the <em>well-loved.</em>
          </h1>

          <p>{description}</p>
        </div>
      </section>

      <section className={styles.shop}>
        <div className={styles.filter}>
          {/* <div>
            <button className={styles.active}>All</button>
            <button>Walk</button>
            <button>Wear</button>
            <button>Home</button>
            <button>Sleep</button>
          </div> */}

          <span>
            {selectedPet ? `${selectedPet} · ` : ""}
            {visibleProducts.length} pieces
          </span>
        </div>

        <div className={styles.grid}>
          {visibleProducts.map((product, index) => (
            <Link
              href="#"
              className={styles.product}
              key={product.name}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles.image}
                />

                {/* <span className={styles.number}>
                  0{index + 1}
                </span> */}

                {/* <span className={styles.view}>View ↗</span> */}
              </div>

              <div className={styles.productInfo}>
                <div>
                  <span>{product.category}</span>
                  <h2>{product.name}</h2>
                </div>

                <strong>{product.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
