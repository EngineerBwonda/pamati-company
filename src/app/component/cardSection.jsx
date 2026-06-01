"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../style/cardSection.module.css"; // Updated path for styles

const cards = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80",
    title: "Wealth Management",
    text: "Strategic portfolio management tailored to your financial goals. Our advisors craft bespoke investment plans for lasting prosperity.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    title: "Equity & Stocks",
    text: "Access high-growth equity markets with expert analysis and real-time insights to maximise your investment returns.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    title: "Real Estate",
    text: "Diversify your portfolio with prime real estate opportunities curated by our experienced property investment team.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80",
    title: "Fixed Income",
    text: "Stable, reliable returns through carefully selected bonds and fixed-income instruments that safeguard your capital.",
  },
];

/* ── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

const eyebrowVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const accentLineVariant = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1 + i * 0.13,
    },
  }),
};

/* ── Card component ─────────────────────────────────────────────────────── */
function ServiceCard({ card, index }) {
  return (
    <motion.div
      className="col"
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={`card h-100 ${styles.card}`}
        whileHover={{
          y: -8,
          boxShadow: "0 20px 48px rgba(10,20,40,0.15)",
          borderColor: "rgba(224,141,60,0.4)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        {/* Image */}
        <div className={styles.imgWrapper}>
          <motion.img
            src={card.image}
            className={`card-img-top ${styles.cardImg}`}
            alt={card.title}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={styles.imgOverlay} />
        </div>

        {/* Body */}
        <div className={`card-body ${styles.cardBody}`}>
          <motion.div
            className={styles.cardAccent}
            initial={{ width: "2rem" }}
            whileHover={{ width: "3.5rem" }}
            transition={{ duration: 0.3 }}
          />
          <h5 className={`card-title ${styles.cardTitle}`}>{card.title}</h5>
          <p className={`card-text ${styles.cardText}`}>{card.text}</p>
        </div>

        {/* Footer */}
        <div className={`card-footer ${styles.cardFooter}`}>
          <motion.a
            href="#"
            className={styles.cardLink}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            Learn more
            <motion.span
              className={styles.arrow}
              variants={{
                rest: { x: 0 },
                hover: { x: 5 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function CardsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  return (
    <section className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.headerRow} ref={headerRef}>
        <div className={styles.headerContent}>
          <motion.span
            className={styles.eyebrow}
            variants={eyebrowVariant}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Our Services
          </motion.span>

          <motion.h2
            className={styles.heading}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Investment Solutions <br />
            <em>Built for You</em>
          </motion.h2>

          <motion.p
            className={styles.subtext}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            At Pamati Investments, we provide a curated suite of financial
            products and advisory services designed to grow, protect, and
            sustain your wealth across every stage of life.
          </motion.p>
        </div>

        <motion.div
          className={styles.accentLine}
          variants={accentLineVariant}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        />
      </div>

      {/* ── Cards Grid ── */}
      <div
        className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ${styles.cardGrid}`}
      >
        {cards.map((card, index) => (
          <ServiceCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
