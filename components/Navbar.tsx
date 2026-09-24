"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setShopOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* DESKTOP LEFT */}
        <div className={styles.left}>
          <div className={styles.shopDropdown}>
            <Link href="/shop" className={styles.shopTrigger}>
              Shop
              <span className={styles.chevron}>⌄</span>
            </Link>

            <div className={styles.dropdownMenu}>
              <Link href={{ pathname: "/shop", query: { pet: "dogs" } }}>
                <div>
                  <strong>Dogs</strong>
                  <small>Furniture & essentials</small>
                </div>

                <span className={styles.dropdownArrow}></span>
              </Link>

              <Link href={{ pathname: "/shop", query: { pet: "cats" } }}>
                <div>
                  <strong>Cats</strong>
                  <small>Furniture & essentials</small>
                </div>

                <span className={styles.dropdownArrow}></span>
              </Link>
            </div>
          </div>

          <Link href="/about">Our Story</Link>
        </div>

        {/* LOGO */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          GILDED <span>PAW</span>
        </Link>

        {/* DESKTOP RIGHT */}
        <div className={styles.right}>
          <Link href="/contact">Contact</Link>

          <Link href="/cart" className={styles.cart}>
            Bag <span>(0)</span>
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className={styles.mobileActions}>
          <Link
            href="/cart"
            className={styles.mobileBag}
            onClick={closeMenu}
          >
            Bag <span>(0)</span>
          </Link>

          <button
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonOpen : ""
            }`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuTop}>
            <span>Navigation</span>
            <span>Gilded Paw · 2026</span>
          </div>

          <div className={styles.mobileLinks}>
            {/* SHOP */}
            <div className={styles.mobileShop}>
              <button
                type="button"
                className={styles.mobileShopTrigger}
                onClick={() => setShopOpen((prev) => !prev)}
                aria-expanded={shopOpen}
              >
                <span>Shop</span>

                <span
                  className={`${styles.mobilePlus} ${
                    shopOpen ? styles.mobilePlusOpen : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
  className={`${styles.mobileShopMenu} ${
    shopOpen ? styles.mobileShopMenuOpen : ""
  }`}
>
  <div className={styles.mobileShopMenuInner}>
    <Link
      href={{
        pathname: "/shop",
        query: { pet: "dogs" },
      }}
      onClick={closeMenu}
    >
      <span>Dogs</span>
      <small>Furniture & essentials</small>
    </Link>

    <Link
      href={{
        pathname: "/shop",
        query: { pet: "cats" },
      }}
      onClick={closeMenu}
    >
      <span>Cats</span>
      <small>Furniture & essentials</small>
    </Link>
  </div>
</div>
            </div>

            <Link href="/about" onClick={closeMenu}>
              <span>Our Story</span>
              <span className={styles.mobileArrow}>↗</span>
            </Link>

            <Link href="/contact" onClick={closeMenu}>
              <span>Contact</span>
              <span className={styles.mobileArrow}>↗</span>
            </Link>
          </div>

          <div className={styles.mobileMenuBottom}>
            <p>Furniture for distinguished companions.</p>

            <Link href="/shop" onClick={closeMenu}>
              Explore Collection
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}