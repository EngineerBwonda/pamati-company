"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../style/CtaBanner.module.css";

/* ── Animation variants ────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Animated orb ──────────────────────────────────────────────────────────── */
function Orb({ className }) {
  return (
    <motion.span
      className={className}
      animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function CtaBanner() {
  return (
    <section className={styles.section}>
      {/* Decorative ambient orbs */}
      <Orb className={styles.orbTopLeft} />
      <Orb className={styles.orbBottomRight} />

      {/* Gold rules */}
      <span className={styles.topRule} />
      <span className={styles.bottomRule} />

      <div className="container-fluid px-4 px-md-5">
        <div className={`row align-items-center ${styles.row}`}>
          {/* ── Left — text ── */}
          <motion.div
            className={`col-12 col-lg-7 ${styles.textCol}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span className={styles.eyebrow} variants={itemVariants}>
              <span className={styles.eyebrowDot} />
              Start Trading with Pamati
            </motion.span>

            <motion.h2 className={styles.heading} variants={itemVariants}>
              Ready to Access <em>Global</em>
              <br />
              Commodity Markets?
            </motion.h2>

            <motion.p className={styles.body} variants={itemVariants}>
              Whether you are a producer seeking buyers, an importer looking for
              reliable supply, or an investor exploring commodity exposure — our
              team is ready to structure the right deal for you.
            </motion.p>

            {/* Trust signals */}
            <motion.div className={styles.signals} variants={itemVariants}>
              {[
                "Ethical Sourcing",
                "Full Compliance",
                "End-to-End Logistics",
                "Bespoke Financing",
              ].map((tag) => (
                <span className={styles.tag} key={tag}>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#e08d3c"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — buttons ── */}
          <motion.div
            className={`col-12 col-lg-5 ${styles.btnCol}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className={styles.btnStack}>
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <Link href="/contact" className={styles.btnPrimary}>
                  Get in Touch
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <Link href="/about" className={styles.btnOutline}>
                  Learn About Us
                </Link>
              </motion.div>

              {/* Contact nudge */}
              <p className={styles.nudge}>
                Or call us directly &nbsp;
                <a href="tel:+254700000000" className={styles.nudgeLink}>
                  +254 700 000 000
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
