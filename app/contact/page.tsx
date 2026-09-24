import Link from "next/link";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* =====================================
          CONTACT
      ===================================== */}

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* LEFT */}
            <div className={styles.intro}>
             

              <h1>
                We’d love to
                <br />
                <em>hear from you.</em>
              </h1>

              <p className={styles.description}>
                Whether you have a question about a piece, need help choosing
                the right fit, or simply want to say hello — our team is here
                to help.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.detail}>
                  <span>General Enquiries</span>

                  <a href="mailto:hello@gildedpaw.com">
                    hello@gildedpaw.com
                  </a>
                </div>

                <div className={styles.detail}>
                  <span>Based In</span>

                  <p>Mumbai, India</p>
                </div>

                <div className={styles.detail}>
                  <span>Social</span>

                  <div className={styles.socials}>
                    <a href="#" target="_blank" rel="noreferrer">
                      Instagram 
                    </a>

                    <a href="#" target="_blank" rel="noreferrer">
                      Pinterest 
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className={styles.formSide}>
              <div className={styles.formHeading}>
                <span>Send an enquiry</span>
                <span></span>
              </div>

              <form className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Your name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">What can we help with?</label>

                  <select id="subject" name="subject" defaultValue="">
                    <option value="" disabled>
                      Select an enquiry
                    </option>

                    <option value="product">Product enquiry</option>
                    <option value="order">Order support</option>
                    <option value="custom">Custom request</option>
                    <option value="collaboration">Collaborations</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Your message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little more..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  <span>Send enquiry</span>
                  <span className={styles.submitArrow}></span>
                </button>
              </form>

              <p className={styles.response}>
                We typically respond within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          INFO STRIP
      ===================================== */}

      <section className={styles.infoStrip}>
        <div className={styles.infoContainer}>
          <div>
            <span></span>

            <div>
              <small>Need help choosing?</small>
              <p>We’re happy to guide you.</p>
            </div>
          </div>

          <div>
            <span></span>

            <div>
              <small>Order assistance</small>
              <p>Questions about an existing order.</p>
            </div>
          </div>

          <div>
            <span></span>

            <div>
              <small>Something special?</small>
              <p>Talk to us about custom requests.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}