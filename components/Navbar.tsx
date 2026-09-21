import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link href="/shop">Shop</Link>
          <Link href="/collections">Collections</Link>
        </div>

        <Link href="/" className={styles.logo}>
          GILDED <span>PAW</span>
        </Link>

        <div className={styles.right}>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/cart" className={styles.cart}>
            Bag <span>(0)</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}