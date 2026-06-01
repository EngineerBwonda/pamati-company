"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../style/testimonial.module.css";

/* ── Data ──────────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Pamati Investment transformed how we source raw materials. Their market intelligence and logistics network are second to none — we cut procurement costs by 18% in the first year alone.",
    name: "David Ochieng",
    role: "Head of Procurement",
    company: "East Africa Grain Holdings",
    initials: "DO",
  },
  {
    quote:
      "Working with Pamati gave us access to markets we simply couldn't reach on our own. Their compliance framework is rigorous and their team responds at every hour. A truly professional outfit.",
    name: "Fatima Al-Rashidi",
    role: "Chief Commercial Officer",
    company: "Gulf Commodities Group",
    initials: "FA",
  },
  {
    quote:
      "We've traded precious metals through many intermediaries, but Pamati stands out for their ethical sourcing standards and transparent pricing. We won't go back to anyone else.",
    name: "James Kiptoo",
    role: "Director of Operations",
    company: "Rift Valley Mining Co.",
    initials: "JK",
  },
  {
    quote:
      "The bespoke financing structure Pamati arranged for our coffee export deal was exactly what we needed. They understood our cash-flow constraints and built a solution around us.",
    name: "Amina Wanjiku",
    role: "Managing Director",
    company: "Highland Coffee Exporters",
    initials: "AW",
  },
  {
    quote:
      "From documentation to customs clearance, Pamati handled everything seamlessly. Our petroleum shipments now arrive on schedule with zero compliance issues. Exceptional reliability.",
    name: "Marcus Ferreira",
    role: "VP Logistics",
    company: "Atlantic Energy Trading",
    initials: "MF",
  },
];

/* ── Slide variants ────────────────────────────────────────────────────────── */
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (next) => {
      const dir = next > index ? 1 : -1;
      setDirection(dir);
      setIndex((next + total) % total);
    },
    [index, total],
  );

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  /* Auto-advance every 5 s unless hovered */
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => go(index + 1), 5000);
    return () => clearTimeout(id);
  }, [index, paused, go]);

  const current = testimonials[index];

  return (
    <section className={styles.section}>
      {/* Background decorative quote mark */}
      <span className={styles.bgQuote} aria-hidden="true">
        &ldquo;
      </span>

      <div className="container-fluid px-4 px-md-5">
        {/* ── Section header ── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Client Voices
          </span>
          <h2 className={styles.heading}>
            What Our <em>Partners</em> Say
          </h2>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          className={styles.carouselWrap}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Gold top rule */}
          <span className={styles.cardTopRule} />

          {/* Quote icon */}
          <div className={styles.quoteIcon} aria-hidden="true">
            <svg viewBox="0 0 40 30" fill="none">
              <path
                d="M0 30V18C0 8 6 2 18 0l2 4C12 5.5 9 9 9 14h7v16H0zm22 0V18C22 8 28 2 40 0l2 4C34 5.5 31 9 31 14h7v16H22z"
                fill="#e08d3c"
                fillOpacity="0.9"
              />
            </svg>
          </div>

          {/* Animated slide */}
          <div className={styles.slideTrack}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.slide}
              >
                {/* Quote text */}
                <blockquote className={styles.quote}>
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className={styles.author}>
                  {/* Avatar */}
                  <div className={styles.avatar}>
                    <span className={styles.avatarInitials}>
                      {current.initials}
                    </span>
                  </div>

                  {/* Name + role */}
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{current.name}</span>
                    <span className={styles.authorRole}>
                      {current.role}
                      <span className={styles.authorSep}> · </span>
                      {current.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Controls row ── */}
          <div className={styles.controls}>
            {/* Dot indicators */}
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className={styles.arrows}>
              <motion.button
                className={styles.arrow}
                onClick={prev}
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                transition={{ duration: 0.15 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </motion.button>

              <motion.button
                className={styles.arrow}
                onClick={next}
                aria-label="Next testimonial"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                transition={{ duration: 0.15 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Progress bar */}
          <div className={styles.progressTrack}>
            <motion.div
              className={styles.progressBar}
              key={`progress-${index}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: paused ? undefined : 1 }}
              transition={{ duration: 5, ease: "linear" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
