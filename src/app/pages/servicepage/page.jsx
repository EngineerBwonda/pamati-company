"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./servicepage.module.css";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Data ──────────────────────────────────────────────────────────────────── */
const services = [
  {
    id: "trading",
    number: "01",
    title: "Commodity Trading",
    tagline: "Sourcing & Trading Across Global Markets",
    image: "/cargoshipG.jpg",
    description:
      "Our core business is the physical trading of commodities — sourcing from producers, negotiating competitive prices, and delivering to end-users across 30+ markets worldwide. We trade agricultural products, precious metals, base metals, energy commodities, and soft commodities.",
    features: [
      "Spot and forward trading across 12 commodity categories",
      "Direct relationships with certified producers and refineries",
      "LME-referenced pricing with full transparency",
      "OECD-aligned ethical sourcing protocols",
      "Currency hedging and price risk management",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "logistics",
    number: "02",
    title: "Logistics & Freight",
    tagline: "End-to-End Supply Chain Management",
    image: "/cargoshipG.jpg",
    description:
      "We manage the full logistics lifecycle — from origin loading and freight booking to port handling, customs clearance, and last-mile delivery. Our logistics desk operates 24/7 to track shipments and resolve issues in real time, ensuring your cargo arrives on schedule.",
    features: [
      "Freight management by sea, air, and road",
      "Customs brokerage and documentation",
      "Port handling and container management",
      "Real-time cargo tracking and status updates",
      "Last-mile delivery across East and Central Africa",
    ],
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
    id: "financing",
    number: "03",
    title: "Trade Financing",
    tagline: "Bespoke Financing for Every Transaction",
    image: "/cargoshipG.jpg",
    description:
      "Access to capital is often the difference between a successful trade and a missed opportunity. Pamati structures bespoke trade financing solutions — including letters of credit, prepayment facilities, and offtake financing — tailored to your cash-flow requirements and transaction size.",
    features: [
      "Letters of credit (LC) and documentary collections",
      "Pre-export and prepayment financing facilities",
      "Offtake and structured commodity financing",
      "Deferred payment arrangements",
      "Multi-currency settlement support",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "compliance",
    number: "04",
    title: "Compliance & Due Diligence",
    tagline: "Institutional-Grade Regulatory Standards",
    image: "/cargoshipG.jpg",
    description:
      "International commodity trading demands rigorous compliance. Our dedicated compliance desk manages full KYC/AML screening, sanctions checking, OECD mineral due-diligence, and conflict-mineral traceability — protecting our clients and counterparties at every step of the transaction.",
    features: [
      "Full KYC and AML screening for all counterparties",
      "Sanctions screening against OFAC, EU, and UN lists",
      "OECD 5-Step Due Diligence Framework for minerals",
      "Conflict-mineral traceability and supply chain audits",
      "Regulatory reporting and documentation management",
    ],
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
    id: "intelligence",
    number: "05",
    title: "Market Intelligence",
    tagline: "Data-Driven Commodity Insights",
    image: "/cargoshipG.jpg",
    description:
      "Our in-house analytics team monitors global commodity price movements, supply-demand dynamics, geopolitical developments, and trade-flow data daily. We share actionable market intelligence with clients to support better trading decisions and risk management.",
    features: [
      "Daily commodity price monitoring and reporting",
      "Supply-demand analysis across key markets",
      "Geopolitical risk assessment for mining regions",
      "Trade-flow data and arbitrage opportunity identification",
      "Custom research reports on request",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="2 20 22 20" />
      </svg>
    ),
  },
  {
    id: "advisory",
    number: "06",
    title: "Trade Advisory",
    tagline: "Strategic Guidance for Complex Deals",
    image: "/cargoshipG.jpg",
    description:
      "For larger or more complex transactions, our senior trading team provides strategic advisory services — structuring multi-party deals, negotiating offtake agreements, advising on market entry strategies, and supporting producers seeking access to international buyers.",
    features: [
      "Offtake agreement structuring and negotiation",
      "Market entry strategy for new commodity categories",
      "Producer-to-buyer deal origination",
      "Joint venture and partnership facilitation",
      "Regulatory and market access advisory",
    ],
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
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Initial Enquiry",
    desc: "Contact our trading desk with your commodity requirements — type, volume, grade, delivery timeline, and preferred pricing basis.",
  },
  {
    step: "02",
    title: "Due Diligence",
    desc: "We run KYC and AML checks on all new counterparties. This typically takes 24–48 hours and is a mandatory step for all transactions.",
  },
  {
    step: "03",
    title: "Deal Structuring",
    desc: "Our team structures the transaction — pricing, payment terms, financing if required, incoterms, and delivery logistics — and presents a formal term sheet.",
  },
  {
    step: "04",
    title: "Execution",
    desc: "On agreement, we execute the trade, manage logistics end-to-end, and provide real-time updates until the commodity reaches its destination.",
  },
];

/* ── Accordion FAQ ─────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "What is the minimum order volume Pamati trades?",
    a: "We trade from spot lots of 25 metric tonnes up to multi-thousand-tonne annual offtake contracts. Volume requirements vary by commodity — contact our trading desk for specific minimums.",
  },
  {
    q: "Which countries do you deliver to?",
    a: "We deliver to 30+ countries across Africa, Asia, the Middle East, and Europe. Our logistics network covers major ports in Mombasa, Dar es Salaam, Durban, Singapore, Rotterdam, and beyond.",
  },
  {
    q: "How long does the KYC process take?",
    a: "Standard KYC for new counterparties takes 24–48 business hours. Enhanced due diligence for high-risk profiles or complex structures may take up to 5 business days.",
  },
  {
    q: "Do you provide trade financing?",
    a: "Yes. We structure letters of credit, prepayment facilities, and offtake financing arrangements. Financing terms depend on the commodity, counterparty profile, and transaction size.",
  },
  {
    q: "What commodities does Pamati trade?",
    a: "We trade 12 commodity categories including grains and cereals, coffee and tea, petroleum products, precious metals, base metals (copper, tin, nickel), and battery critical minerals.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}
      layout
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        className={styles.faqBtn}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.faqQ}>{q}</span>
        <motion.span
          className={styles.faqChevron}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.28 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.faqA}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main className={styles.page}>
      {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <span className={styles.heroOrbL} />
        <span className={styles.heroOrbR} />
        <span className={styles.heroAccent} />

        <div className={`container-fluid px-4 px-md-5 ${styles.heroContent}`}>
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
            <span className={styles.breadcrumbCurrent}>Services</span>
          </motion.nav>

          <div className="row align-items-center g-5">
            <motion.div
              className="col-12 col-lg-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.span className={styles.eyebrow} variants={fadeUp(0)}>
                <span className={styles.eyebrowDot} />
                What We Offer
              </motion.span>
              <motion.h1 className={styles.heroTitle} variants={fadeUp(0.1)}>
                Full-Spectrum
                <em> Trading Services</em>
              </motion.h1>
              <motion.p className={styles.heroDesc} variants={fadeUp(0.2)}>
                From commodity sourcing and physical delivery to trade
                financing, compliance, and market intelligence — Pamati
                Investment provides everything you need to trade global
                commodities with confidence.
              </motion.p>
              <motion.div className={styles.heroActions} variants={fadeUp(0.3)}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                >
                  <Link href="../contactpage" className={styles.btnPrimary}>
                    Start a Conversation
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

            {/* Service pills */}
            <motion.div
              className="col-12 col-lg-6"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <div className={styles.heroPills}>
                {services.map(({ number, title, icon }, i) => (
                  <motion.a
                    key={number}
                    href={`#${services[i].id}`}
                    className={styles.heroPill}
                    variants={fadeUp(i * 0.08)}
                    whileHover={{ x: 6, borderColor: "rgba(224,141,60,0.6)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.heroPillIcon}>{icon}</span>
                    <span className={styles.heroPillNum}>{number}</span>
                    <span className={styles.heroPillTitle}>{title}</span>
                    <svg
                      className={styles.heroPillArrow}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 2. SERVICES — alternating layout ═════════════════════════════════ */}
      <section className={styles.servicesSection}>
        {services.map(
          (
            { id, number, title, tagline, image, description, features, icon },
            i,
          ) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={id}
                id={id}
                className={`${styles.serviceBlock} ${isEven ? styles.serviceBlockLight : styles.serviceBlockDark}`}
              >
                {!isEven && <span className={styles.rule} />}
                <div className="container-fluid px-4 px-md-5">
                  <div
                    className={`row align-items-center g-5 ${!isEven ? "flex-lg-row-reverse" : ""}`}
                  >
                    {/* Image side */}
                    <motion.div
                      className="col-12 col-lg-5"
                      variants={isEven ? fadeLeft : fadeRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className={styles.serviceImgWrap}>
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className={styles.serviceImg}
                          sizes="(max-width:991px) 100vw, 42vw"
                        />
                        <span className={styles.serviceImgAccent} />
                        {!isEven && <span className={styles.serviceImgFrame} />}
                        {/* Number watermark */}
                        <span className={styles.serviceImgNum}>{number}</span>
                      </div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                      className="col-12 col-lg-7"
                      variants={isEven ? fadeRight : fadeLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <span
                        className={`${styles.eyebrow} ${!isEven ? styles.eyebrowLight : ""}`}
                      >
                        <span className={styles.eyebrowDot} />
                        {tagline}
                      </span>
                      <h2
                        className={`${styles.serviceTitle} ${!isEven ? styles.serviceTitleLight : ""}`}
                      >
                        {number}. {title}
                      </h2>
                      <span className={styles.headingRule} />
                      <p
                        className={`${styles.bodyText} ${!isEven ? styles.bodyTextLight : ""}`}
                      >
                        {description}
                      </p>

                      {/* Feature list */}
                      <motion.ul
                        className={styles.featureList}
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {features.map((f, fi) => (
                          <motion.li
                            key={fi}
                            className={`${styles.featureItem} ${!isEven ? styles.featureItemLight : ""}`}
                            variants={fadeUp(fi * 0.07)}
                          >
                            <span className={styles.featureTick}>
                              <svg viewBox="0 0 12 12" fill="none">
                                <path
                                  d="M2 6l3 3 5-5"
                                  stroke="#e08d3c"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            {f}
                          </motion.li>
                        ))}
                      </motion.ul>

                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.16 }}
                        style={{ display: "inline-block", marginTop: "1.5rem" }}
                      >
                        <Link
                          href="../contactpage"
                          className={styles.btnPrimary}
                        >
                          Enquire About This Service
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 16 16"
                            fill="none"
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
                    </motion.div>
                  </div>
                </div>
                {!isEven && <span className={styles.ruleBottom} />}
              </div>
            );
          },
        )}
      </section>

      {/* ══ 3. HOW WE WORK ═══════════════════════════════════════════════════ */}
      <section className={styles.processSection}>
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
              Our Process
            </span>
            <h2 className={`${styles.sectionHeading} ${styles.headingLight}`}>
              How We <em>Work</em>
            </h2>
            <span className={styles.headingRule} />
            <p className={`${styles.sectionSubtext} ${styles.subtextLight}`}>
              Every Pamati transaction follows a structured four-step process —
              ensuring speed, transparency, and compliance at every stage.
            </p>
          </motion.div>

          <motion.div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {process.map(({ step, title, desc }, i) => (
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
                  {i < process.length - 1 && (
                    <span className={styles.processArrow} aria-hidden="true">
                      ›
                    </span>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <span className={styles.ruleBottom} />
      </section>

      {/* ══ 4. FAQ ═══════════════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-5 align-items-start">
            {/* Left — heading */}
            <motion.div
              className="col-12 col-lg-4"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Common Questions
              </span>
              <h2 className={styles.sectionHeading}>
                Frequently <em>Asked</em>
              </h2>
              <span className={styles.headingRule} />
              <p className={styles.bodyText}>
                Can&apos;t find the answer you&apos;re looking for? Our trading
                team is happy to answer any questions about our services,
                process, or commodity coverage.
              </p>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16 }}
              >
                <Link
                  href="/src/app/pages/contactpage"
                  className={styles.btnPrimary}
                >
                  Ask Us Directly
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
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
            </motion.div>

            {/* Right — accordion */}
            <motion.div
              className="col-12 col-lg-8"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.faqList}>
                {faqs.map((faq, i) => (
                  <motion.div key={i} variants={fadeUp(i * 0.08)}>
                    <FaqItem {...faq} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 5. CTA ═══════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <span className={styles.ctaOrbL} />
        <span className={styles.ctaOrbR} />
        <span className={styles.rule} />

        <div className={`container-fluid px-4 px-md-5 ${styles.ctaInner}`}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp(0)}>
              <span className={styles.eyebrowDot} />
              Ready to Trade?
            </motion.span>
            <motion.h2 className={styles.ctaHeading} variants={fadeUp(0.1)}>
              Let&apos;s Build a Deal <em>Together</em>
            </motion.h2>
            <motion.p className={styles.ctaBody} variants={fadeUp(0.2)}>
              Whether you need a single spot trade or a long-term structured
              offtake — our team is ready to discuss your requirements and
              propose the right solution within one business day.
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
                <Link href="/about" className={styles.btnOutlineLight}>
                  About Pamati
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
