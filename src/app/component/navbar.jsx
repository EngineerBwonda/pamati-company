"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import styles from "./styles/navbar.module.css";
import styles from "../style/navbarB.module.css";

const navLinks = [
  { label: "Home", href: "/" },

  { label: "Services", href: "../pages/servicepage" },
  //{ label: "Services", href: "../pages/servicepage" },

  { label: "Commodities", href: "/join" },
  { label: "Who we are", href: "../pages/aboutUs" },

  { label: "Contact", href: "../pages/contactpage" },
];

/** Inline brand mark — matches PamatiLogo identity */
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
        className={`navbar navbar-expand-lg  ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className="container-fluid">
          {/* Brand */}
          <Link href="/" className={`navbar-brand ${styles.brand}`}>
            <BrandMark />
          </Link>

          {/* Hamburger toggler */}
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

          {/* Desktop Links */}
          <div className="collapse navbar-collapse justify-content-end">
            <ul className={`navbar-nav align-items-center ${styles.navList}`}>
              {navLinks.map(({ label, href }) => (
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
              ))}
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

      {/* ── Offcanvas Drawer ── */}
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

        {/* Top third – brand mark */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center w-100 ${styles.offcanvasTop}`}
        >
          <BrandMark collapsed />
        </div>

        {/* Divider */}
        <hr className={styles.offcanvasDivider} />

        {/* Centered links */}
        <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
          {navLinks.map(({ label, href }) => (
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
          ))}
        </ul>
      </div>
    </>
  );
}

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
