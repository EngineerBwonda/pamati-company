"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../style/navbarC.module.css";

const commodityLinks = [
  { label: "Grains & Cereals", href: "/commodities/grains" },
  { label: "Petroleum Products", href: "/commodities/petroleum" },
  { label: "Precious Metals", href: "/commodities/precious-metals" },
  { label: "Coffee & Tea", href: "/commodities/coffee-tea" },
  { label: "Nickel", href: "/commodities/nickel" },
  { label: "Tin", href: "/commodities/tin" },
  { label: "Copper", href: "/commodities/copper" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Commodities",
    href: "/commodities",
    dropdown: commodityLinks,
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ── Dropdown variants ─────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.97,
    transition: { duration: 0.16, ease: "easeIn" },
  },
};

const dropItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: i * 0.04, ease: "easeOut" },
  }),
};

/** Inline brand mark */
function BrandMark({ collapsed = false }) {
  return (
    <div
      className={`${styles.brandMark} ${collapsed ? styles.brandMarkCollapsed : ""}`}
    >
      <span className={styles.brandMain}>PAMATI INVESTMENT</span>
      <span className={styles.brandSub}>
        International Commodities Trading
        <span className={styles.brandSep}> | </span>
        Nairobi, Kenya
      </span>
    </div>
  );
}

/** Desktop dropdown nav item */
function DropdownNavItem({ label, href, dropdown, activeHref, setActiveHref }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive =
    activeHref === href || dropdown?.some((d) => d.href === activeHref);

  return (
    <li
      className={`nav-item ${styles.dropdownItem}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger link */}
      <Link
        href={href}
        className={`nav-link ${styles.navLink} ${isActive ? styles.active : ""}`}
        onClick={() => setActiveHref(href)}
      >
        {label}
        {/* Chevron */}
        <motion.svg
          className={styles.dropChevron}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
        <span className={styles.underline} />
      </Link>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.dropdown}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Gold top rule */}
            <span className={styles.dropTopRule} />

            {dropdown.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={dropItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className={`${styles.dropLink} ${activeHref === item.href ? styles.dropLinkActive : ""}`}
                  onClick={() => {
                    setActiveHref(item.href);
                    setOpen(false);
                  }}
                >
                  <span className={styles.dropLinkDot} />
                  {item.label}
                  <svg
                    className={styles.dropLinkArrow}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}

            {/* View all link */}
            <div className={styles.dropFooter}>
              <Link
                href="/commodities"
                className={styles.dropViewAll}
                onClick={() => {
                  setActiveHref("/commodities");
                  setOpen(false);
                }}
              >
                View All Commodities →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/** Mobile offcanvas accordion item for dropdown */
function OffcanvasDropdown({
  label,
  href,
  dropdown,
  activeHref,
  setActiveHref,
  closeOffcanvas,
}) {
  const [open, setOpen] = useState(false);
  const isActive =
    activeHref === href || dropdown?.some((d) => d.href === activeHref);

  return (
    <li className="nav-item text-center">
      {/* Parent toggle */}
      <button
        className={`${styles.offcanvasLink} ${isActive ? styles.offcanvasActive : ""} ${styles.offcanvasDropToggle}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <motion.svg
          className={styles.offcanvasChevron}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>

      {/* Sub-links */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.offcanvasSubList}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {dropdown.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.offcanvasSubLink} ${activeHref === item.href ? styles.offcanvasActive : ""}`}
                  onClick={() => {
                    setActiveHref(item.href);
                    closeOffcanvas();
                  }}
                >
                  <span className={styles.offcanvasSubDot} />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/commodities"
                className={styles.offcanvasSubViewAll}
                onClick={() => {
                  setActiveHref("/commodities");
                  closeOffcanvas();
                }}
              >
                View All →
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ── Main component ────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = offcanvasOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [offcanvasOpen]);

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className="container-fluid">
          {/* Brand */}
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <BrandMark />
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar-toggler border-0 shadow-none ${styles.toggler}`}
            type="button"
            onClick={() => setOffcanvasOpen(true)}
            aria-label="Open navigation"
          >
            <span className={styles.togglerBar} />
            <span className={styles.togglerBar} />
            <span className={styles.togglerBar} />
          </button>

          {/* Desktop links */}
          <div className="collapse navbar-collapse justify-content-end">
            <ul className={`navbar-nav align-items-center ${styles.navList}`}>
              {navLinks.map(({ label, href, dropdown }) =>
                dropdown ? (
                  <DropdownNavItem
                    key={label}
                    label={label}
                    href={href}
                    dropdown={dropdown}
                    activeHref={activeHref}
                    setActiveHref={setActiveHref}
                  />
                ) : (
                  <li className="nav-item" key={label}>
                    <Link
                      href={href}
                      className={`nav-link ${styles.navLink} ${activeHref === href ? styles.active : ""}`}
                      onClick={() => setActiveHref(href)}
                    >
                      {label}
                      <span className={styles.underline} />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        className={styles.backdrop}
        style={{
          opacity: offcanvasOpen ? 1 : 0,
          pointerEvents: offcanvasOpen ? "all" : "none",
        }}
        onClick={() => setOffcanvasOpen(false)}
      />

      {/* ── Offcanvas ── */}
      <div
        className={`${styles.offcanvas} ${offcanvasOpen ? styles.offcanvasOpen : ""}`}
      >
        {/* Close */}
        <div className="d-flex justify-content-end w-100">
          <button
            className={styles.closeBtn}
            onClick={() => setOffcanvasOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Brand */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center w-100 ${styles.offcanvasTop}`}
        >
          <BrandMark collapsed />
        </div>

        <hr className={styles.offcanvasDivider} />

        {/* Links */}
        <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
          {navLinks.map(({ label, href, dropdown }) =>
            dropdown ? (
              <OffcanvasDropdown
                key={label}
                label={label}
                href={href}
                dropdown={dropdown}
                activeHref={activeHref}
                setActiveHref={setActiveHref}
                closeOffcanvas={() => setOffcanvasOpen(false)}
              />
            ) : (
              <li className="nav-item text-center" key={label}>
                <Link
                  href={href}
                  className={`nav-link ${styles.offcanvasLink} ${activeHref === href ? styles.offcanvasActive : ""}`}
                  onClick={() => {
                    setActiveHref(href);
                    setOffcanvasOpen(false);
                  }}
                >
                  {label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}

//=======================================================================================================================================================================================

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// // import styles from "./styles/navbar.module.css";
// import styles from "../style/navbarB.module.css";

// const navLinks = [
//   { label: "Home", href: "/" },

//   { label: "Services", href: "../pages/servicepage" },
//   //{ label: "Services", href: "../pages/servicepage" },

//   { label: "Commodities", href: "/join" },
//   { label: "Who we are", href: "../pages/aboutUs" },

//   { label: "Contact", href: "../pages/contactpage" },
// ];

// /** Inline brand mark — matches PamatiLogo identity */
// function BrandMark({ collapsed = false }) {
//   return (
//     <div
//       className={`${styles.brandMark} ${collapsed ? styles.brandMarkCollapsed : ""}`}
//     >
//       <span className={styles.brandMain}>PAMATI INVESTMENT</span>
//       <span className={styles.brandSub}>
//         International Commodities Trading
//         <span className={styles.brandSep}> | </span>
//         Nairobi, Kenya
//       </span>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [offcanvasOpen, setOffcanvasOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHref, setActiveHref] = useState("/");

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = offcanvasOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [offcanvasOpen]);

//   return (
//     <>
//       {/* ── Main Navbar ── */}
//       <nav
//         className={`navbar navbar-expand-lg  ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
//       >
//         <div className="container-fluid">
//           {/* Brand */}
//           <Link href="/" className={`navbar-brand ${styles.brand}`}>
//             <BrandMark />
//           </Link>

//           {/* Hamburger toggler */}
//           <button
//             className={`navbar-toggler border-0 shadow-none ${styles.toggler}`}
//             type="button"
//             onClick={() => setOffcanvasOpen(true)}
//             aria-label="Open navigation"
//           >
//             <span className={styles.togglerBar} />
//             <span className={styles.togglerBar} />
//             <span className={styles.togglerBar} />
//           </button>

//           {/* Desktop Links */}
//           <div className="collapse navbar-collapse justify-content-end">
//             <ul className={`navbar-nav align-items-center ${styles.navList}`}>
//               {navLinks.map(({ label, href }) => (
//                 <li className="nav-item" key={label}>
//                   <Link
//                     href={href}
//                     className={`nav-link ${styles.navLink} ${activeHref === href ? styles.active : ""}`}
//                     onClick={() => setActiveHref(href)}
//                   >
//                     {label}
//                     <span className={styles.underline} />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* ── Backdrop ── */}
//       <div
//         className={styles.backdrop}
//         style={{
//           opacity: offcanvasOpen ? 1 : 0,
//           pointerEvents: offcanvasOpen ? "all" : "none",
//         }}
//         onClick={() => setOffcanvasOpen(false)}
//       />

//       {/* ── Offcanvas Drawer ── */}
//       <div
//         className={`${styles.offcanvas} ${offcanvasOpen ? styles.offcanvasOpen : ""}`}
//       >
//         {/* Close */}
//         <div className="d-flex justify-content-end w-100">
//           <button
//             className={styles.closeBtn}
//             onClick={() => setOffcanvasOpen(false)}
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Top third – brand mark */}
//         <div
//           className={`d-flex flex-column align-items-center justify-content-center w-100 ${styles.offcanvasTop}`}
//         >
//           <BrandMark collapsed />
//         </div>

//         {/* Divider */}
//         <hr className={styles.offcanvasDivider} />

//         {/* Centered links */}
//         <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
//           {navLinks.map(({ label, href }) => (
//             <li className="nav-item text-center" key={label}>
//               <Link
//                 href={href}
//                 className={`nav-link ${styles.offcanvasLink} ${activeHref === href ? styles.offcanvasActive : ""}`}
//                 onClick={() => {
//                   setActiveHref(href);
//                   setOffcanvasOpen(false);
//                 }}
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
//=======================================================================================================================================================================================

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// // import styles from "./styles/navbar.module.css";

// import styles from "../style/navbar.module.css";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Programme", href: "/programme" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Join Us", href: "/join" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [offcanvasOpen, setOffcanvasOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHref, setActiveHref] = useState("/");

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = offcanvasOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [offcanvasOpen]);

//   return (
//     <>
//       {/* ── Main Navbar ── */}
//       <nav
//         className={`navbar navbar-expand-lg   ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
//       >
//         <div className="container-xxl ">
//           {/* Brand */}
//           <Link
//             href="/"
//             className={`navbar-brand d-flex align-items-center gap-2 ${styles.brand}`}
//           >
//             <Image
//               src="/logo.png"
//               alt="Pathfinder Club Logo"
//               width={70}
//               height={70}
//               className={styles.logoImg}
//               priority
//             />
//             <div className={`d-flex flex-column ${styles.brandText}`}>
//               <span className={styles.brandName}>
//                 Shauri Moyo Pathfinder Club
//               </span>
//               <em className={styles.brandTagline}>Take the Advent Message</em>
//             </div>
//           </Link>

//           {/* Hamburger toggler */}
//           <button
//             className={`navbar-toggler border-0 shadow-none ${styles.toggler}`}
//             type="button"
//             onClick={() => setOffcanvasOpen(true)}
//             aria-label="Open navigation"
//           >
//             <span className={styles.togglerBar} />
//             <span className={styles.togglerBar} />
//             <span className={styles.togglerBar} />
//           </button>

//           {/* Desktop Links */}
//           <div className="collapse navbar-collapse justify-content-end">
//             <ul className={`navbar-nav align-items-center ${styles.navList}`}>
//               {navLinks.map(({ label, href }) => (
//                 <li className="nav-item" key={label}>
//                   <Link
//                     href={href}
//                     className={`nav-link ${styles.navLink} ${activeHref === href ? styles.active : ""}`}
//                     onClick={() => setActiveHref(href)}
//                   >
//                     {label}
//                     <span className={styles.underline} />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* ── Backdrop ── */}
//       <div
//         className={styles.backdrop}
//         style={{
//           opacity: offcanvasOpen ? 1 : 0,
//           pointerEvents: offcanvasOpen ? "all" : "none",
//         }}
//         onClick={() => setOffcanvasOpen(false)}
//       />

//       {/* ── Offcanvas Drawer ── */}
//       <div
//         className={`${styles.offcanvas} ${offcanvasOpen ? styles.offcanvasOpen : ""}`}
//       >
//         {/* Close */}
//         <div className="d-flex justify-content-end w-100">
//           <button
//             className={styles.closeBtn}
//             onClick={() => setOffcanvasOpen(false)}
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Top third – logo + texts */}
//         <div
//           className={`d-flex flex-column align-items-center justify-content-center w-100 ${styles.offcanvasTop}`}
//         >
//           <Image
//             src="/logoC.png"
//             alt="Pathfinder Club Logo"
//             width={80}
//             height={80}
//             className={styles.offcanvasLogoImg}
//           />
//           <span className={`mt-3 text-center ${styles.offcanvasBrandName}`}>
//             Shauri Moyo Pathfinder Club
//           </span>
//           <em className={styles.offcanvasTagline}>Take the Advent Message</em>
//         </div>

//         {/* Divider */}
//         <hr className={styles.offcanvasDivider} />

//         {/* Centered links */}
//         <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
//           {navLinks.map(({ label, href }) => (
//             <li className="nav-item text-center" key={label}>
//               <Link
//                 href={href}
//                 className={`nav-link ${styles.offcanvasLink} ${activeHref === href ? styles.offcanvasActive : ""}`}
//                 onClick={() => {
//                   setActiveHref(href);
//                   setOffcanvasOpen(false);
//                 }}
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
