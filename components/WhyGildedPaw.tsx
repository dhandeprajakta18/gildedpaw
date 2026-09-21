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
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {/* <p>Why Gilded Paw</p> */}

          <h2>
            Because they belong
            <br />
            <em>everywhere you do.</em>
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