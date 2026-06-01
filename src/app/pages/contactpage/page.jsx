"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import styles from "../style/contactPage.module.css";
import styles from "./contact.module.css";
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

/* ── Contact info data ─────────────────────────────────────────────────────── */
const contactInfo = [
  {
    label: "Visit Us",
    lines: ["Pamati Investment Ltd", "Upper Hill, Nairobi", "Kenya"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    lines: ["+254 700 000 000", "+254 711 000 000"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.32 6.32l1.63-1.36a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    lines: ["info@pamatiinvestment.com", "trade@pamatiinvestment.com"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    lines: ["Mon – Fri: 08:00 – 17:00 EAT", "Sat: 09:00 – 13:00 EAT"],
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
];

const enquiryTypes = [
  "Commodity Sourcing",
  "Trading Partnership",
  "Logistics & Freight",
  "Financing & Offtake",
  "General Enquiry",
];

/* ── Form component ────────────────────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    enquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        /* ── Success state ── */
        <motion.div
          key="success"
          className={styles.successBox}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.successIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Message Received</h3>
          <p className={styles.successText}>
            Thank you for reaching out to Pamati Investment. A member of our
            trading team will be in touch within one business day.
          </p>
          <motion.button
            className={styles.btnPrimary}
            onClick={() => {
              setSubmitted(false);
              setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                enquiry: "",
                message: "",
              });
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.16 }}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      ) : (
        /* ── Form ── */
        <motion.form
          key="form"
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Name row */}
          <div className={`row g-3 ${styles.formRow}`}>
            <div className="col-12 col-sm-6">
              <label className={styles.label} htmlFor="firstName">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className={styles.input}
                placeholder="David"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <label className={styles.label} htmlFor="lastName">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className={styles.input}
                placeholder="Ochieng"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email + phone row */}
          <div className={`row g-3 ${styles.formRow}`}>
            <div className="col-12 col-sm-6">
              <label className={styles.label} htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                placeholder="david@company.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-6">
              <label className={styles.label} htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={styles.input}
                placeholder="+254 700 000 000"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Company */}
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="company">
              Company / Organisation
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className={styles.input}
              placeholder="East Africa Trading Co."
              value={form.company}
              onChange={handleChange}
            />
          </div>

          {/* Enquiry type */}
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="enquiry">
              Enquiry Type *
            </label>
            <div className={styles.selectWrap}>
              <select
                id="enquiry"
                name="enquiry"
                required
                className={styles.select}
                value={form.enquiry}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an enquiry type
                </option>
                {enquiryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <svg
                className={styles.selectChevron}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Tell us about your commodity requirements, volumes, and preferred delivery timeline..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            className={`${styles.btnPrimary} ${styles.submitBtn}`}
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            transition={{ duration: 0.16 }}
          >
            {loading ? (
              <>
                <svg
                  className={styles.spinner}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 12a9 9 0 1 1-6.22-8.56" strokeLinecap="round" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send Message
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
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
            <span className={styles.breadcrumbCurrent}>Contact</span>
          </motion.nav>

          <motion.div
            className={styles.heroText}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span className={styles.eyebrow} variants={fadeUp(0)}>
              <span className={styles.eyebrowDot} />
              Get in Touch
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp(0.1)}>
              Let&apos;s Start a<em> Conversation</em>
            </motion.h1>
            <motion.p className={styles.heroDesc} variants={fadeUp(0.2)}>
              Whether you&apos;re looking to source commodities, explore a
              trading partnership, or discuss logistics — our team is ready to
              respond within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. MAIN CONTENT — form + info ════════════════════════════════════ */}
      <section className={styles.mainSection}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-5 align-items-start">
            {/* Left — form ─────────────────────────────────────────────────── */}
            <motion.div
              className="col-12 col-lg-7"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.formCard}>
                <span className={styles.formCardTopRule} />
                <div className={styles.formCardHeader}>
                  <h2 className={styles.formCardTitle}>Send Us a Message</h2>
                  <p className={styles.formCardSubtitle}>
                    Fill in the form below and a member of our trading team will
                    respond within one business day.
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Right — contact info ─────────────────────────────────────────── */}
            <motion.div
              className="col-12 col-lg-5"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Info cards */}
              <motion.div
                className={styles.infoStack}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {contactInfo.map(({ label, lines, icon }, i) => (
                  <motion.div
                    key={label}
                    className={styles.infoCard}
                    variants={fadeUp(i * 0.1)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.infoIconWrap}>{icon}</div>
                    <div className={styles.infoText}>
                      <span className={styles.infoLabel}>{label}</span>
                      {lines.map((line) => (
                        <span key={line} className={styles.infoLine}>
                          {line}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                className={styles.mapWrap}
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.mapInner}>
                  <iframe
                    title="Pamati Investment Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176795698085!2d36.81!3d-1.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMjQuMCJTIDM2wrA0OCczNi4wIkU!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <span className={styles.mapAccent} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 3. RESPONSE PROMISE BAR ══════════════════════════════════════════ */}
      <section className={styles.promiseBar}>
        <span className={styles.rule} />
        <div className="container-fluid px-4 px-md-5">
          <motion.div
            className={styles.promiseGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {[
              { value: "< 24h", label: "Response time on all enquiries" },
              { value: "15+", label: "Years of trading expertise" },
              { value: "30+", label: "Global markets covered" },
              {
                value: "100%",
                label: "Compliance with international standards",
              },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                className={styles.promiseItem}
                variants={fadeUp(i * 0.1)}
              >
                <span className={styles.promiseValue}>{value}</span>
                <span className={styles.promiseLabel}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <span className={`${styles.rule} ${styles.ruleBottom}`} />
      </section>

      {/* ══ 4. CTA BANNER ════════════════════════════════════════════════════ */}
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
              Not Ready to Submit a Form?
            </motion.span>
            <motion.h2 className={styles.ctaHeading} variants={fadeUp(0.1)}>
              Call Our Trading Desk <em>Directly</em>
            </motion.h2>
            <motion.p className={styles.ctaBody} variants={fadeUp(0.2)}>
              For urgent trade enquiries, our team is available during East
              Africa business hours. Were ready to discuss commodity sourcing,
              pricing, logistics, and deal structures — call us now.
            </motion.p>
            <motion.div className={styles.ctaActions} variants={fadeUp(0.3)}>
              <motion.a
                href="tel:+254700000000"
                className={styles.btnPrimary}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16 }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.32 6.32l1.63-1.36a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.04z" />
                </svg>
                +254 700 000 000
              </motion.a>
              <motion.a
                href="mailto:info@pamatiinvestment.com"
                className={styles.btnOutlineLight}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.16 }}
              >
                info@pamatiinvestment.com
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
