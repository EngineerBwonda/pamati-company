"use client";

import { motion } from "framer-motion";
import styles from "../style/whychooseus.module.css";

/* ── Data ──────────────────────────────────────────────────────────────────── */
const pillars = [
  {
    number: "01",
    title: "Integrity First",
    description:
      "Every transaction we facilitate is grounded in ethical sourcing, transparent pricing, and full regulatory compliance — protecting both buyers and producers at every step.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Global Reach",
    description:
      "With active networks spanning Africa, Asia, and Europe, we connect sellers and buyers across 30+ markets — ensuring competitive pricing and reliable supply chains worldwide.",
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
    number: "03",
    title: "Logistics Precision",
    description:
      "From origin to destination, we manage end-to-end logistics — freight, customs clearance, documentation, and last-mile delivery — so your cargo arrives on time, every time.",
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
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Compliance & Risk",
    description:
      "We operate within all international trade regulations, maintaining full KYC, AML, and sanctions-screening protocols — giving counterparties confidence and peace of mind.",
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Market Intelligence",
    description:
      "Our in-house analysts monitor commodity price movements, geopolitical shifts, and supply disruptions daily — giving clients actionable intelligence to trade with confidence.",
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
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="2 20 22 20" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Tailored Solutions",
    description:
      "No two trades are the same. We structure bespoke financing, hedging, and delivery arrangements to match each client's unique risk appetite, timeline, and volume requirements.",
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
  },
];

/* ── Animation variants ────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container-fluid px-4 px-md-5">
        {/* ── Header row ── */}
        <div className={`row align-items-end mb-5 ${styles.headerRow}`}>
          <motion.div
            className="col-12 col-lg-6"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Our Advantage
            </span>
            <h2 className={styles.heading}>
              Why Choose <em>Pamati</em>
            </h2>
          </motion.div>

          <motion.div
            className={`col-12 col-lg-6 ${styles.headerRight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className={styles.headerPara}>
              We combine 15 years of on-the-ground commodity trading experience
              with institutional-grade processes — giving every client the
              efficiency of a global trading house and the agility of a local
              partner.
            </p>
          </motion.div>
        </div>

        {/* ── Pillars grid ── */}
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pillars.map(({ number, title, description, icon }) => (
            <motion.div className="col" key={number} variants={itemVariants}>
              <motion.div
                className={styles.pillar}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 40px rgba(10,20,40,0.1)",
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Number + icon row */}
                <div className={styles.pillarTop}>
                  <span className={styles.pillarNumber}>{number}</span>
                  <motion.div
                    className={styles.iconWrap}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {icon}
                  </motion.div>
                </div>

                {/* Gold rule */}
                <span className={styles.pillarRule} />

                {/* Text */}
                <h3 className={styles.pillarTitle}>{title}</h3>
                <p className={styles.pillarDesc}>{description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
