"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../style/two-cards.module.css";

/* ── Animation variants ────────────────────────────────────────────────────── */
const leftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const eyebrowVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.35 },
  },
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function TwoCards() {
  return (
    <section className={styles.section}>
      <div className={`container-xxl ${styles.container}`}>
        <div className={`row align-items-center g-0 ${styles.row}`}>
          {/* ── Left column — text ── */}
          <motion.div
            className={`col-12 col-lg-6 ${styles.leftCol}`}
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Eyebrow */}
            <motion.div
              className={styles.eyebrow}
              variants={eyebrowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className={styles.eyebrowDot} />
              International Commodities Trading
            </motion.div>

            {/* Title */}
            <h2 className={styles.title}>
              Connecting Markets,{" "}
              <em className={styles.titleEm}>Delivering Value</em>
            </h2>

            {/* Paragraph */}
            <p className={styles.body}>
              Pamati Investment is a Nairobi-based commodities trading firm
              operating across global markets. We specialise in the ethical
              sourcing, financing, and distribution of agricultural products,
              energy resources, and precious metals — bridging producers and
              buyers with precision and integrity.
            </p>

            {/* Decorative rule */}
            <span className={styles.rule} />

            {/* CTA buttons */}
            <motion.div
              className={styles.actions}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <Link href="/about" className={styles.btnPrimary}>
                  Discover More
                  <svg
                    width="14"
                    height="14"
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

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                <Link href="/contact" className={styles.btnOutline}>
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right column — image ── */}
          <motion.div
            className={`col-12 col-lg-6 ${styles.rightCol}`}
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.imageWrap}>
              {/* Decorative gold frame offset behind image */}
              <motion.span
                className={styles.frameDeco}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Image */}
              <motion.div
                className={styles.imageInner}
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src="/cargoshipJ.jpg"
                  alt="Pamati Investment — global commodities trading"
                  fill
                  className={styles.image}
                  sizes="(max-width: 991px) 100vw, 50vw"
                  priority
                />
                {/* Bottom gold accent bar */}
                <span className={styles.imageAccent} />
              </motion.div>

              {/* Floating stat badge */}
              <motion.div
                className={styles.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <span className={styles.badgeNum}>15+</span>
                <span className={styles.badgeLabel}>
                  Years of Trading Experience
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
