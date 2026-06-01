"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import styles from "../style/nickelPage.module.css";
import styles from "./nickel.module.css";

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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

/* ── Data ──────────────────────────────────────────────────────────────────── */
const useCases = [
  {
    title: "Stainless Steel",
    description:
      "Over two-thirds of all global nickel production goes into stainless steel. Adding nickel makes the alloy far more versatile, corrosion-resistant, and durable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Electric Vehicles",
    description:
      "Nickel is essential to the lithium-ion batteries powering EVs. A 60 kWh NMC811 battery requires 39 kg of nickel — enabling longer range and faster charging.",
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
    title: "Energy & Infrastructure",
    description:
      "Nickel is found in process plants, oil refineries, power generation equipment, and chemical production facilities worldwide.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Aerospace & Transport",
    description:
      "Nickel is a key ingredient in almost every form of transportation — cars, trains, ships, and the aerospace industry rely on its strength and heat resistance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: "Electronics",
    description:
      "From mobile phones and laptops to digital cameras, nickel components are found in everyday consumer electronics around the world.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Renewable Energy",
    description:
      "Nickel is a key component in a wide range of renewable energy storage systems, including lithium-ion battery packs for grid-scale storage.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const stats = [
  { value: "39kg", label: "Nickel per 60 kWh EV battery" },
  { value: "⅔", label: "Of global nickel goes to stainless steel" },
  { value: "500%", label: "Projected demand growth in battery nickel" },
  { value: "2", label: "Deposit types: laterite & sulphide" },
];

const deposits = [
  {
    type: "Sulphide Deposits",
    description:
      "Typically found deep underground, nickel sulphide deposits are mined using underground techniques. The ore is processed into nickel-in-matte and refined into high-purity nickel metal powder or briquettes.",
    tags: ["Underground Mining", "High Purity", "Nickel Metal"],
  },
  {
    type: "Laterite Deposits",
    description:
      "Formed near the surface through weathering of ultramafic rocks, laterite deposits are extracted via open-cut mining. They produce nickel sulphate — a key ingredient for EV battery cathodes.",
    tags: ["Open-Cut Mining", "Nickel Sulphate", "EV Batteries"],
  },
];

/* ── Page component ────────────────────────────────────────────────────────── */
export default function NickelPage() {
  return (
    <main className={styles.page}>
      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <Image
          src="/cargoshipG.jpg"
          alt="Nickel processing operations"
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
            <span className={styles.breadcrumbCurrent}>Nickel</span>
          </motion.nav>

          <motion.span
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <span className={styles.eyebrowDot} />
            Precious Metals · Nickel
          </motion.span>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            Nickel — The Metal
            <em> Powering Tomorrow</em>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
          >
            A silvery-white metallic element at the heart of stainless steel,
            electric vehicle batteries, and the global clean energy transition.
            Pamati Investment sources and trades ethically-certified nickel
            across international markets.
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

        {/* Scroll indicator */}
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
        <span className={styles.statsTopRule} />
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
        <span className={styles.statsBottomRule} />
      </section>

      {/* ══ 3. WHAT IS NICKEL — two-col ══════════════════════════════════════ */}
      <section className={styles.infoSection}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row align-items-center g-5">
            {/* Left — image */}
            <motion.div
              className="col-12 col-lg-6"
              variants={fadeUp()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.infoImgWrap}>
                <Image
                  src="/cargoshipG.jpg"
                  alt="Nickel ore deposits"
                  fill
                  className={styles.infoImg}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
                <span className={styles.infoImgAccent} />
                {/* Floating badge */}
                <div className={styles.imgBadge}>
                  <span className={styles.imgBadgeIcon}>Ni</span>
                  <div>
                    <span className={styles.imgBadgeTitle}>Nickel</span>
                    <span className={styles.imgBadgeSub}>Atomic Number 28</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — text */}
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
                What is <em>Nickel?</em>
              </h2>
              <span className={styles.headingRule} />
              <p className={styles.bodyText}>
                Nickel is a silvery-white, naturally occurring metallic element
                with a light golden tinge. It is hard, ductile, and highly
                resistant to corrosion — making it indispensable across modern
                industry.
              </p>
              <p className={styles.bodyText}>
                There are two main types of nickel deposits —{" "}
                <strong>laterite</strong> and <strong>sulphide</strong> — each
                requiring a different extraction technique. Both ore types are
                processed to produce nickel metal, predominantly for the
                production of stainless steel, and nickel sulphate for EV
                batteries.
              </p>
              <p className={styles.bodyText}>
                Pamati Investment sources nickel from certified, ethically
                operated mines and trades it across global markets, maintaining
                full compliance with international commodity standards.
              </p>

              {/* Inline trust tags */}
              <div className={styles.tags}>
                {[
                  "Ethically Sourced",
                  "KYC Compliant",
                  "Global Supply Chain",
                  "Competitive Pricing",
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
          </div>
        </div>
      </section>

      {/* ══ 4. DEPOSIT TYPES ═════════════════════════════════════════════════ */}
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
                    boxShadow: "0 16px 40px rgba(10,20,40,0.13)",
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

      {/* ══ 5. USE CASES GRID ════════════════════════════════════════════════ */}
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
            <h2 className={styles.sectionHeading}>Where Nickel is Used</h2>
            <span className={styles.headingRule} />
            <p className={styles.sectionSubtext}>
              Nickels unique combination of strength, corrosion resistance, and
              conductivity makes it indispensable across six major global
              industries.
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

      {/* ══ 6. CTA BANNER ════════════════════════════════════════════════════ */}
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
            <motion.span className={styles.eyebrow} variants={fadeUp(0)}>
              <span className={styles.eyebrowDot} />
              Trade Nickel with Pamati
            </motion.span>
            <motion.h2 className={styles.ctaHeading} variants={fadeUp(0.1)}>
              Ready to Source <em>Certified Nickel?</em>
            </motion.h2>
            <motion.p className={styles.ctaBody} variants={fadeUp(0.2)}>
              Whether you require nickel metal briquettes, powder, or nickel
              sulphate for battery-grade applications — our trading team will
              structure the right deal for your volume, timeline, and compliance
              requirements.
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

// export default function Nickel() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold mb-4">Nickel Page</h1>
//       <p className="text-lg text-gray-600">Welcome to the Nickel page!</p>

//       <p className="text-lg text-gray-600">BWONDA IS HERE </p>
//     </div>
//   );
// }

// //whats the path to this file?The path to this file is: src/app/pages/nickel/page.jsx
