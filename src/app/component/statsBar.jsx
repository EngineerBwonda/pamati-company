"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../style/statsBar.module.css";

/* ── Data ──────────────────────────────────────────────────────────────────── */
const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    description: "Trusted trading expertise since 2009",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: 30,
    suffix: "+",
    label: "Global Markets",
    description: "Active presence across Africa, Asia & Europe",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: "+",
    label: "Tonnes Traded",
    description: "High-volume commodity movement annually",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    value: 12,
    suffix: "",
    label: "Commodity Categories",
    description: "Diverse portfolio across key sectors",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

/* ── Animated counter hook ─────────────────────────────────────────────────── */
function useCounter(target, duration = 1800, isActive = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
}

/* ── Single stat item ──────────────────────────────────────────────────────── */
function StatItem({
  value,
  suffix,
  label,
  description,
  icon,
  index,
  isActive,
}) {
  const count = useCounter(value, 1600 + index * 100, isActive);

  return (
    <motion.div
      className={styles.statItem}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Icon */}
      <motion.div
        className={styles.iconWrap}
        whileHover={{ scale: 1.1, rotate: 6 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>

      {/* Number */}
      <div className={styles.statNumber}>
        <span className={styles.count}>{count}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>

      {/* Label */}
      <p className={styles.statLabel}>{label}</p>

      {/* Description */}
      <p className={styles.statDesc}>{description}</p>
    </motion.div>
  );
}

/* ── Main component ────────────────────────────────────────────────────────── */
export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} ref={ref}>
      {/* Top gold rule */}
      <span className={styles.topRule} />

      <div className="container-fluid px-4 px-md-5">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Pamati by the Numbers
          </span>
          <h2 className={styles.heading}>
            Built on <em>Scale</em> &amp; <em>Trust</em>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              index={i}
              isActive={isInView}
            />
          ))}
        </div>
      </div>

      {/* Bottom gold rule */}
      <span className={styles.bottomRule} />
    </section>
  );
}
