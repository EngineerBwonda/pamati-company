"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../style/footer.module.css";

/* ── Data ──────────────────────────────────────────────────────────────────── */
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Who we are", href: "../pages/aboutUs" },
  { label: "Services", href: "../pages/servicepage" },
  { label: "Commodities", href: "/commodities" },

  { label: "Contact", href: "../pages/contactpage" },
];

const commodities = [
  { label: "Nickel", href: "../pages/nickel" },
  // { label: "Copper", href: "../pages/copperpage" },
  { label: "Tin", href: "../pages/tinpage" },
  { label: "Coffee & Tea", href: "#" },
  { label: "Soft Commodities", href: "#" },
];

const contact = [
  {
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
    lines: ["Pamati Investment Ltd", "Nairobi, Kenya"],
  },
  {
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
    lines: ["+254 700 000 000"],
  },
  {
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
    lines: ["info@pamatiinvestment.com"],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

/* ── Animation variants ────────────────────────────────────────────────────── */
const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Gold top rule */}
      <span className={styles.topRule} />

      {/* Ambient orbs */}
      <span className={styles.orbLeft} />
      <span className={styles.orbRight} />

      <div className="container-fluid px-4 px-md-5">
        {/* ── Main grid ── */}
        <div className={`row ${styles.mainRow}`}>
          {/* Col 1 — Brand */}
          <motion.div
            className={`col-12 col-md-6 col-lg-3 ${styles.col}`}
            custom={0}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Brand mark */}
            <div className={styles.brandMark}>
              <span className={styles.brandMain}>PAMATI</span>
              <span className={styles.brandSub}>INVESTMENT</span>
            </div>
            <p className={styles.brandDesc}>
              International commodities trading firm based in Nairobi, Kenya.
              Connecting producers and buyers across global markets with
              integrity and precision since 2009.
            </p>

            {/* Socials */}
            <div className={styles.socials}>
              {socials.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={styles.socialBtn}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.18 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div
            className={`col-12 col-md-6 col-lg-2 ${styles.col}`}
            custom={1}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className={styles.colHeading}>Quick Links</h4>
            <span className={styles.colRule} />
            <ul className={styles.linkList}>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.footerLink}>
                    <span className={styles.linkArrow}>›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Commodities */}
          <motion.div
            className={`col-12 col-md-6 col-lg-3 ${styles.col}`}
            custom={2}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className={styles.colHeading}>Commodities</h4>
            <span className={styles.colRule} />
            <ul className={styles.linkList}>
              {commodities.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.footerLink}>
                    <span className={styles.linkArrow}>›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact */}
          <motion.div
            className={`col-12 col-md-6 col-lg-4 ${styles.col}`}
            custom={3}
            variants={colVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className={styles.colHeading}>Get in Touch</h4>
            <span className={styles.colRule} />
            <ul className={styles.contactList}>
              {contact.map(({ icon, lines }, i) => (
                <li key={i} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{icon}</span>
                  <span className={styles.contactLines}>
                    {lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <span className={styles.divider} />

        {/* ── Bottom bar ── */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className={styles.copyright}>
            © {year} Pamati Investment Ltd. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className={styles.legalLink}>
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
