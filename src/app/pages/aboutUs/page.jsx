"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// import styles from "../style/aboutPage.module.css";
import styles from "./about.module.css";

/* ── Animation helpers ─────────────────────────────────────────────────────── */
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
const timeline = [
  {
    year: "2009",
    title: "Founded in Nairobi",
    desc: "Pamati Investment was established with a focus on agricultural commodity trading across East Africa, beginning with grains and soft commodities.",
  },
  {
    year: "2012",
    title: "Expanded to Minerals",
    desc: "Following strong demand from regional buyers, we expanded our portfolio to include precious metals and industrial minerals, with a dedicated compliance desk.",
  },
  {
    year: "2015",
    title: "International Markets",
    desc: "Established trading relationships across Asia and Europe, growing our active market presence to over 20 countries and launching our petroleum trading division.",
  },
  {
    year: "2018",
    title: "Logistics Division",
    desc: "Launched end-to-end logistics capabilities — freight management, customs brokerage, and last-mile delivery — giving clients a single-window trade solution.",
  },
  {
    year: "2021",
    title: "Clean Energy Pivot",
    desc: "Established a dedicated clean energy commodities desk, trading battery metals and critical minerals aligned with the global transition to renewable energy.",
  },
  {
    year: "2024",
    title: "30+ Markets",
    desc: "Today Pamati operates across 30+ global markets, trading 12 commodity categories with an institutional-grade compliance and risk management framework.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Every deal we structure — whether a spot trade or a multi-year offtake — is built on transparent pricing, honest communication, and ethical sourcing practices.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Precision",
    desc: "Commodity trading leaves no room for error. We invest in market intelligence, risk analytics, and logistics excellence to deliver with accuracy every time.",
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
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    desc: "We don't just execute transactions — we build long-term relationships with producers, buyers, and logistics partners that create shared value over time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Compliance",
    desc: "From KYC and AML screening to OECD due-diligence guidelines and sanctions compliance — we maintain the highest regulatory standards across all jurisdictions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Agility",
    desc: "Markets move fast. Our lean structure and experienced team allow us to respond to opportunities, disruptions, and client needs with speed that larger institutions cannot match.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    desc: "We prioritise ethical supply chains, responsible sourcing, and commodities that support the global clean energy transition — because how we trade matters as much as what we trade.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20" />
        <path d="M6 20V10l6-6 6 6v10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "James Kamau",
    role: "Founder & Chief Executive Officer",
    bio: "15 years in East African commodity markets. Previously Head of Commodity Origination at a leading regional trading house.",
    initials: "JK",
  },
  {
    name: "Amina Osei",
    role: "Chief Commercial Officer",
    bio: "Specialist in metals and minerals trading with deep relationships across Asian and European end-user markets.",
    initials: "AO",
  },
  {
    name: "Robert Njoroge",
    role: "Head of Compliance & Risk",
    bio: "Chartered compliance professional with expertise in international trade law, AML frameworks, and OECD mineral due-diligence.",
    initials: "RN",
  },
  {
    name: "Fatuma Hassan",
    role: "Head of Logistics",
    bio: "Oversees Pamati's end-to-end logistics network spanning freight management, customs clearance, and last-mile delivery across 30+ markets.",
    initials: "FH",
  },
];

const stats = [
  { value: "2009", label: "Year Founded" },
  { value: "15+", label: "Years of Experience" },
  { value: "30+", label: "Global Markets" },
  { value: "12", label: "Commodity Categories" },
];

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <span className={styles.heroOrbL} />
        <span className={styles.heroOrbR} />
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
            <span className={styles.breadcrumbCurrent}>About Us</span>
          </motion.nav>

          <div className="row align-items-center g-5">
            {/* Left — text */}
            <motion.div
              className="col-12 col-lg-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.span className={styles.eyebrow} variants={fadeUp(0)}>
                <span className={styles.eyebrowDot} />
                Established 2009 · Nairobi, Kenya
              </motion.span>
              <motion.h1 className={styles.heroTitle} variants={fadeUp(0.1)}>
                Trading with
                <em> Purpose &amp; Precision</em>
              </motion.h1>
              <motion.p className={styles.heroDesc} variants={fadeUp(0.2)}>
                Pamati Investment is a Nairobi-based international commodities
                trading firm with over 15 years of experience connecting
                producers, buyers, and investors across global markets. We trade
                agricultural products, precious metals, energy commodities, and
                critical minerals — with integrity, speed, and
                institutional-grade compliance at the core of everything we do.
              </motion.p>
              <motion.div className={styles.heroActions} variants={fadeUp(0.3)}>
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
                  <Link href="/commodities" className={styles.btnOutline}>
                    Our Commodities
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              className="col-12 col-lg-6"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.heroImgWrap}>
                <Image
                  src="/cargoshipG.jpg"
                  alt="Pamati Investment trading operations"
                  fill
                  className={styles.heroImg}
                  sizes="(max-width:991px) 100vw, 50vw"
                  priority
                />
                <span className={styles.heroImgAccent} />
                <span className={styles.heroImgFrame} />
                {/* Founding year badge */}
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeYear}>2009</span>
                  <span className={styles.heroBadgeLabel}>
                    Est. Nairobi, Kenya
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. STATS BAR ═════════════════════════════════════════════════════ */}
      <section className={styles.statsBar}>
        <span className={styles.rule} />
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
        <span className={`${styles.rule} ${styles.ruleBottom}`} />
      </section>

      {/* ══ 3. MISSION & VISION ══════════════════════════════════════════════ */}
      <section className={styles.missionSection}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-5 align-items-center">
            {/* Left — image */}
            <motion.div
              className="col-12 col-lg-5"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.missionImgWrap}>
                <Image
                  src="/cargoshipG.jpg"
                  alt="Pamati mission"
                  fill
                  className={styles.missionImg}
                  sizes="(max-width:991px) 100vw, 42vw"
                />
                <span className={styles.missionImgAccent} />
                {/* Floating quote card */}
                <div className={styles.quoteCard}>
                  <svg
                    className={styles.quoteIcon}
                    viewBox="0 0 32 24"
                    fill="none"
                  >
                    <path
                      d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 3.2C9.6 4.4 7.2 7.2 7.2 11.2H14.4V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 3.2C27.6 4.4 25.2 7.2 25.2 11.2H32.4V24H18z"
                      fill="#e08d3c"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <p className={styles.quoteText}>
                    We trade not just commodities, but opportunity — creating
                    value at every point in the supply chain.
                  </p>
                  <span className={styles.quoteAuthor}>— James Kamau, CEO</span>
                </div>
              </div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              className="col-12 col-lg-7"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Mission */}
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Who We Are
              </span>
              <h2 className={styles.sectionHeading}>
                Our Mission &amp; <em>Vision</em>
              </h2>
              <span className={styles.headingRule} />

              <div className={styles.missionGrid}>
                <div className={styles.missionCard}>
                  <span className={styles.missionCardLabel}>Mission</span>
                  <p className={styles.missionCardText}>
                    To be East Africa&apos;s most trusted commodities trading
                    partner — delivering reliable supply, competitive pricing,
                    and end-to-end logistics solutions that create lasting value
                    for producers, buyers, and investors worldwide.
                  </p>
                </div>
                <div className={styles.missionCard}>
                  <span className={styles.missionCardLabel}>Vision</span>
                  <p className={styles.missionCardText}>
                    A world where African commodity producers access global
                    markets on equal terms — and where every trade we facilitate
                    advances ethical, sustainable, and transparent commerce
                    across the supply chain.
                  </p>
                </div>
              </div>

              <p className={styles.bodyText}>
                Founded in Nairobi in 2009, Pamati Investment began as a
                regional agricultural trading firm. Over 15 years we have grown
                into a diversified international commodities trader — active in
                metals, minerals, energy, and soft commodities across 30+ global
                markets — while retaining the responsiveness and client focus of
                a specialist boutique.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 4. TIMELINE ══════════════════════════════════════════════════════ */}
      <section className={styles.timelineSection}>
        <span className={styles.rule} />
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
              Our Journey
            </span>
            <h2 className={`${styles.sectionHeading} ${styles.headingLight}`}>
              15 Years of <em>Growth</em>
            </h2>
            <span className={styles.headingRule} />
          </motion.div>

          <div className={styles.timeline}>
            {/* Vertical spine */}
            <span className={styles.timelineSpine} />

            <motion.div
              className={styles.timelineItems}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
                  variants={
                    i % 2 === 0
                      ? {
                          hidden: { opacity: 0, x: -40 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }
                      : {
                          hidden: { opacity: 0, x: 40 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }
                  }
                >
                  <motion.div
                    className={styles.timelineCard}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 32px rgba(10,20,40,0.18)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.timelineYear}>{year}</span>
                    <span className={styles.timelineRule} />
                    <h4 className={styles.timelineTitle}>{title}</h4>
                    <p className={styles.timelineDesc}>{desc}</p>
                  </motion.div>
                  {/* Dot on spine */}
                  <span className={styles.timelineDot} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <span className={`${styles.rule} ${styles.ruleBottom}`} />
      </section>

      {/* ══ 5. VALUES ════════════════════════════════════════════════════════ */}
      <section className={styles.valuesSection}>
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
              What Drives Us
            </span>
            <h2 className={styles.sectionHeading}>
              Our Core <em>Values</em>
            </h2>
            <span className={styles.headingRule} />
          </motion.div>

          <motion.div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map(({ title, desc, icon }, i) => (
              <motion.div
                className="col"
                key={title}
                variants={fadeUp(i * 0.08)}
              >
                <motion.div
                  className={styles.valueCard}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 16px 40px rgba(10,20,40,0.1)",
                  }}
                  transition={{ duration: 0.22 }}
                >
                  <motion.div
                    className={styles.valueIcon}
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {icon}
                  </motion.div>
                  <span className={styles.valueRule} />
                  <h4 className={styles.valueTitle}>{title}</h4>
                  <p className={styles.valueDesc}>{desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 6. TEAM ══════════════════════════════════════════════════════════ */}
      <section className={styles.teamSection}>
        <span className={styles.rule} />
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
              The People Behind Pamati
            </span>
            <h2 className={`${styles.sectionHeading} ${styles.headingLight}`}>
              Meet the <em>Team</em>
            </h2>
            <span className={styles.headingRule} />
          </motion.div>

          <motion.div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {team.map(({ name, role, bio, initials }, i) => (
              <motion.div className="col" key={name} variants={fadeUp(i * 0.1)}>
                <motion.div
                  className={styles.teamCard}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22 }}
                >
                  {/* Avatar */}
                  <div className={styles.teamAvatar}>
                    <motion.span
                      className={styles.teamAvatarOrb}
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.28, 0.15],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className={styles.teamInitials}>{initials}</span>
                  </div>
                  <span className={styles.teamRule} />
                  <h4 className={styles.teamName}>{name}</h4>
                  <span className={styles.teamRole}>{role}</span>
                  <p className={styles.teamBio}>{bio}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <span className={`${styles.rule} ${styles.ruleBottom}`} />
      </section>

      {/* ══ 7. CTA BANNER ════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
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
              Work With Us
            </motion.span>
            <motion.h2 className={styles.ctaHeading} variants={fadeUp(0.1)}>
              Ready to Trade with <em>Pamati?</em>
            </motion.h2>
            <motion.p className={styles.ctaBody} variants={fadeUp(0.2)}>
              Whether you&apos;re a producer seeking market access, a buyer
              looking for reliable supply, or an investor exploring commodity
              exposure — we&apos;d love to hear from you. Our team responds
              within one business day.
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
                  Explore Commodities
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
