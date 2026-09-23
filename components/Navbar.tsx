import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.shopDropdown}>
            <Link href="/shop" className={styles.shopTrigger}>
              Shop
              <span className={styles.chevron}>⌄</span>
            </Link>

            <div className={styles.dropdownMenu}>
              <Link
                href={{ pathname: "/shop", query: { pet: "dogs" } }}
              >
                <span className={styles.dropdownNumber}></span>

                <div>
                  <strong>Dogs</strong>
                  <small>Furniture & essentials</small>
                </div>

                <span className={styles.dropdownArrow}>↗</span>
              </Link>

              <Link
                href={{ pathname: "/shop", query: { pet: "cats" } }}
              >
                <span className={styles.dropdownNumber}></span>

                <div>
                  <strong>Cats</strong>
                  <small>Furniture & essentials</small>
                </div>

                <span className={styles.dropdownArrow}>↗</span>
              </Link>
            </div>
          </div>
<Link href="/about">Our Story</Link>
          
        </div>

        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          GILDED <span>PAW</span>
        </Link>

        {/* RIGHT */}
        <div className={styles.right}>
          
          <Link href="/contact">Contact</Link>

          <Link href="/cart" className={styles.cart}>
            Bag <span>(0)</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
