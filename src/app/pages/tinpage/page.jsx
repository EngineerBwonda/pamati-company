"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Tin.module.css";

/* ── Shared animation helpers ──────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

/* ── Data ──────────────────────────────────────────────────────────────────── */
const stats = [
  { value: "280K+", label: "Metric tonnes mined annually worldwide" },
  { value: "~50%", label: "Of tin used in electronics & soldering" },
  { value: "35+", label: "Countries with active tin mining operations" },
  { value: "3500 BC", label: "Earliest recorded use of tin in bronze" },
];

const useCases = [
  {
    title: "Electronics & Soldering",
    description:
      "Semiconductor circuit-board soldering accounts for around half of all global tin consumption. As AI chips and IoT devices grow more complex, demand for tin solder continues to rise.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Tin Plating",
    description:
      "Tin's corrosion resistance and high polish make it ideal for coating steel in food packaging, beverage cans, and industrial containers — protecting contents without chemical interaction.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Alloys & Bronze",
    description:
      "Alloyed with copper, tin produces bronze — one of the oldest and most durable alloys in human history, still used today in bearings, marine hardware, and decorative applications.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Electric Vehicles",
    description:
      "Tin is a critical material in EV battery systems, power electronics, and onboard semiconductor controllers. Rising EV adoption is a key demand driver for high-purity tin.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Chemicals & PVC",
    description:
      "Tin compounds are used as stabilisers in PVC manufacturing, as catalysts in chemical reactions, and as biocides in agriculture and marine anti-fouling applications.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2v7.31" />
        <path d="M14 9.3V1.99" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
        <path d="M5.58 16.5h12.85" />
      </svg>
    ),
  },
  {
    title: "Renewable Energy",
    description:
      "Tin-based perovskite solar cells and thin-film photovoltaics are emerging as next-generation renewable energy technologies, positioning tin as a future-facing clean energy material.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
];

const deposits = [
  {
    type: "Alluvial / Placer Deposits",
    description:
      "The majority of the world's tin comes from placer deposits — cassiterite ore found in gravel along streambeds in Indonesia, Malaysia, Thailand, and Bolivia. Dredges and water jets extract the ore, which may contain as little as 0.15% tin by weight.",
    tags: ["Dredging", "Southeast Asia", "Gravel Mining", "Cassiterite"],
  },
  {
    type: "Hard Rock / Lode Deposits",
    description:
      "Found deep underground in Bolivia, England, and Australia, hard rock lode deposits are accessed via tunnelling. They typically contain 0.8%–1.0% tin by weight and require conventional underground mining techniques followed by flotation processing.",
    tags: ["Underground Mining", "Bolivia", "High Grade", "Flotation"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Extraction",
    desc: "Cassiterite ore is mined from alluvial gravel beds via dredging, or from hard rock deposits via underground tunnelling.",
  },
  {
    step: "02",
    title: "Concentration",
    desc: "Revolving screens, shakers, and water troughs separate tin ore from sand and debris, progressively increasing tin concentration.",
  },
  {
    step: "03",
    title: "Smelting",
    desc: "Concentrated ore is smelted with coal or coke in a furnace, removing oxygen to yield crude tin metal at ~99% purity.",
  },
  {
    step: "04",
    title: "Refining",
    desc: "Crude tin is refined electrolytically or by liquation to produce high-purity tin (99.9%+) ready for global commodity markets.",
  },
];

/* ── Page component ────────────────────────────────────────────────────────── */
export default function TinPage() {
  return (
    <main className={styles.page}>
      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <Image
          src="/cargoshipG.jpg"
          alt="Tin smelting and refining operations"
          fill
          className={styles.heroImg}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <span className={styles.heroAccent} />

        <div className={`container-fluid px-4 px-md-5 ${styles.heroContent}`}>
          {/* Breadcrumb */}
          <motion.nav
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>›</span>
            <Link href="/commodities" className={styles.breadcrumbLink}>
              Commodities
            </Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>Tin</span>
          </motion.nav>

          <motion.span
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <span className={styles.eyebrowDot} />
            Metals & Minerals · Tin
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            Tin — The Metal at the
            <em> Heart of Modern Technology</em>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            One of humanity&apos;s oldest metals, tin remains indispensable in
            the modern world — from soldering the chips inside every smartphone
            to enabling the clean energy transition. Pamati Investment trades
            certified, high-purity tin across global commodity markets.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.56 }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.16 }}
            >
              <Link href="/contact" className={styles.btnPrimary}>
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
              transition={{ duration: 0.16 }}
            >
              <Link href="/commodities" className={styles.btnOutline}>
                All Commodities
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll chevron */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>

      {/* ══ 2. STATS BAR ═════════════════════════════════════════════════════ */}
      <section className={styles.statsBar}>
        <span className={styles.statsRule} />
        <div className="container-fluid px-4 px-md-5">
          <motion.div
            className={styles.statsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className={styles.statItem}
                variants={fadeUp(i * 0.1)}
              >
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <span className={`${styles.statsRule} ${styles.statsRuleBottom}`} />
      </section>

      {/* ══ 3. WHAT IS TIN — two-col ═════════════════════════════════════════ */}
      <section className={styles.infoSection}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-center g-5">
            {/* Left — text */}
            <motion.div
              className="col-12 col-lg-6"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                About the Metal
              </span>
              <h2 className={styles.sectionHeading}>
                What is <em>Tin?</em>
              </h2>
              <span className={styles.headingRule} />
              <p className={styles.bodyText}>
                Tin (chemical symbol <strong>Sn</strong>) is a silvery-white,
                malleable metal that is not easily oxidised in air. It is
                lightweight, ductile, and highly resistant to corrosion —
                properties that have made it one of the most commercially
                important metals for over five millennia.
              </p>
              <p className={styles.bodyText}>
                Most of the world&apos;s tin is extracted from{" "}
                <strong>cassiterite</strong> (SnO₂), the only commercially
                viable tin-bearing mineral. Cassiterite is primarily found in
                alluvial placer deposits across Southeast Asia, with over half
                of global production coming from Indonesia, Malaysia, and
                Thailand.
              </p>
              <p className={styles.bodyText}>
                Pamati Investment sources and trades certified tin metal —
                including high-purity refined tin, tin alloys, and tin solder —
                connecting producers in key mining regions to buyers across
                global manufacturing markets.
              </p>

              <div className={styles.tags}>
                {[
                  "Ethically Sourced",
                  "High Purity (99.9%+)",
                  "Global Supply",
                  "Fully Compliant",
                ].map((t) => (
                  <span className={styles.tag} key={t}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#e08d3c"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              className="col-12 col-lg-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.infoImgWrap}>
                <Image
                  src="/cargoshipG.jpg"
                  alt="Cassiterite tin ore"
                  fill
                  className={styles.infoImg}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
                <span className={styles.infoImgAccent} />
                {/* Floating element badge */}
                <div className={styles.imgBadge}>
                  <span className={styles.imgBadgeIcon}>Sn</span>
                  <div>
                    <span className={styles.imgBadgeTitle}>Tin</span>
                    <span className={styles.imgBadgeSub}>Atomic Number 50</span>
                  </div>
                </div>
                {/* Decorative frame */}
                <span className={styles.imgFrame} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 4. MINING PROCESS STEPS ══════════════════════════════════════════ */}
      <section className={styles.processSection}>
        <span className={styles.processTopRule} />
        <div className="container-fluid px-4 px-md-5">
          <motion.div
            className={styles.sectionHeader}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              <span className={styles.eyebrowDot} />
              From Ground to Market
            </span>
            <h2
              className={`${styles.sectionHeading} ${styles.sectionHeadingLight}`}
            >
              How Tin is <em>Produced</em>
            </h2>
            <span className={styles.headingRule} />
          </motion.div>

          <motion.div
            className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4`}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map(({ step, title, desc }, i) => (
              <motion.div className="col" key={step} variants={fadeUp(i * 0.1)}>
                <motion.div
                  className={styles.processCard}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.processNum}>{step}</span>
                  <span className={styles.processRule} />
                  <h4 className={styles.processTitle}>{title}</h4>
                  <p className={styles.processDesc}>{desc}</p>
                  {/* Connector arrow (hidden on last) */}
                  {i < processSteps.length - 1 && (
                    <span className={styles.processArrow} aria-hidden="true">
                      ›
                    </span>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <span
          className={styles.processTopRule}
          style={{ bottom: 0, top: "auto" }}
        />
      </section>

      {/* ══ 5. DEPOSIT TYPES ═════════════════════════════════════════════════ */}
      <section className={styles.depositSection}>
        <div className="container-fluid px-4 px-md-5">
          <motion.div
            className={styles.sectionHeader}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Geology
            </span>
            <h2 className={styles.sectionHeading}>Deposit Types</h2>
            <span className={styles.headingRule} />
            <p className={styles.sectionSubtext}>
              Tin mining techniques vary significantly depending on whether the
              deposit is near the surface in alluvial form or buried deep in
              hard rock.
            </p>
          </motion.div>

          <div className="row g-4">
            {deposits.map(({ type, description, tags }, i) => (
              <motion.div
                className="col-12 col-md-6"
                key={type}
                variants={fadeUp(i * 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className={styles.depositCard}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 16px 40px rgba(10,20,40,0.1)",
                  }}
                  transition={{ duration: 0.22 }}
                >
                  <span className={styles.depositNum}>0{i + 1}</span>
                  <h3 className={styles.depositTitle}>{type}</h3>
                  <span className={styles.depositRule} />
                  <p className={styles.depositDesc}>{description}</p>
                  <div className={styles.depositTags}>
                    {tags.map((t) => (
                      <span className={styles.depositTag} key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. USE CASES ═════════════════════════════════════════════════════ */}
      <section className={styles.useCasesSection}>
        <div className="container-fluid px-4 px-md-5">
          <motion.div
            className={styles.sectionHeader}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Applications
            </span>
            <h2 className={styles.sectionHeading}>Where Tin is Used</h2>
            <span className={styles.headingRule} />
            <p className={styles.sectionSubtext}>
              From ancient bronze to modern AI semiconductors, tin&apos;s unique
              properties have kept it at the centre of industrial progress for
              over 5,000 years.
            </p>
          </motion.div>

          <motion.div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {useCases.map(({ title, description, icon }, i) => (
              <motion.div
                className="col"
                key={title}
                variants={fadeUp(i * 0.08)}
              >
                <motion.div
                  className={styles.useCard}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 16px 40px rgba(10,20,40,0.1)",
                  }}
                  transition={{ duration: 0.22 }}
                >
                  <motion.div
                    className={styles.useIcon}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {icon}
                  </motion.div>
                  <span className={styles.useRule} />
                  <h4 className={styles.useTitle}>{title}</h4>
                  <p className={styles.useDesc}>{description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 7. CTA BANNER ════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <span className={styles.ctaTopRule} />
        <span className={styles.ctaOrbL} />
        <span className={styles.ctaOrbR} />

        <div className={`container-fluid px-4 px-md-5 ${styles.ctaInner}`}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span
              className={`${styles.eyebrow} ${styles.eyebrowGold}`}
              variants={fadeUp(0)}
            >
              <span className={styles.eyebrowDot} />
              Trade Tin with Pamati
            </motion.span>
            <motion.h2 className={styles.ctaHeading} variants={fadeUp(0.1)}>
              Ready to Source <em>High-Purity Tin?</em>
            </motion.h2>
            <motion.p className={styles.ctaBody} variants={fadeUp(0.2)}>
              Whether you require refined tin metal, tin solder, or tin alloys
              for electronics, packaging, or industrial applications — our
              trading team will structure the right deal for your volume,
              specifications, and delivery timeline.
            </motion.p>
            <motion.div className={styles.ctaActions} variants={fadeUp(0.3)}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16 }}
              >
                <Link href="/contact" className={styles.btnPrimary}>
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
                transition={{ duration: 0.16 }}
              >
                <Link href="/commodities" className={styles.btnOutlineLight}>
                  View All Commodities
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <span className={styles.ctaBottomRule} />
      </section>
    </main>
  );
}
