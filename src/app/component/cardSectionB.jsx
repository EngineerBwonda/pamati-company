"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../style/cardSectionB.module.css";

/* ── Data ──────────────────────────────────────────────────────────────────── */
const cards = [
  {
    eyebrow: "Agriculture",
    title: "Grains & Cereals",
    description:
      "Reliable sourcing of wheat, maize, and rice from certified producers across East Africa and international markets.",
    image: "/cargoshipJ.jpg",
    href: "#",
  },
  {
    eyebrow: "Energy",
    title: "Petroleum Products",
    description:
      "International trading of refined petroleum products, including diesel and jet fuel, with logistics support across the region.",
    image: "/cargoshipH.jpg",
    href: "#",
  },
  {
    eyebrow: "Minerals",
    title: "Precious Metals",
    description:
      "Ethical procurement and trading of gold and other precious metals, fully compliant with international standards.",
    image: "/cargoshipB.jpeg",
    href: "#",
  },
  {
    eyebrow: "Soft Commodities",
    title: "Coffee & Tea",
    description:
      "Premium Kenyan and Ethiopian specialty coffee and tea, traded directly with farming cooperatives for fair-market value.",
    image: "/cargoshipC.jpeg",
    href: "#",
  },
];

/* ── Animation variants ────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const headerVariants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function CommoditiesSection() {
  return (
    <section className={styles.section}>
      <div className="container-fluid px-4 px-md-5">
        {/* ── Section header ── */}
        <motion.div
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Eyebrow */}
          <span className={styles.eyebrowTop}>
            <span className={styles.eyebrowDot} />
            What We Trade
          </span>
          <h2 className={styles.heading}>Our Commodities</h2>
          <p className={styles.subheading}>
            Pamati Investment specialises in sourcing and trading high-value
            commodities across global markets, connecting producers and buyers
            with integrity and precision.
          </p>
        </motion.div>

        {/* ── Card grid: 4 col lg | 2 col md | 1 col sm ── */}
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map(({ eyebrow, title, description, image, href }) => (
            <motion.div className="col" key={title} variants={cardVariants}>
              <motion.div
                className={`card h-100 border-0 ${styles.card}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                {/* ── Image panel ── */}
                <div className={styles.cardImgWrap}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
                  />

                  {/* Dark gradient overlay */}
                  <span className={styles.imgOverlay} />

                  {/* Eyebrow floated over image */}
                  <span className={styles.imgEyebrow}>{eyebrow}</span>

                  {/* Gold accent bar */}
                  <span className={styles.accentLine} />
                </div>

                {/* ── Body ── */}
                <div
                  className={`card-body d-flex flex-column ${styles.cardBody}`}
                >
                  <h5 className={`card-title ${styles.cardTitle}`}>{title}</h5>
                  <p className={`card-text ${styles.cardText}`}>
                    {description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.18 }}
                    className="mt-auto pt-3"
                  >
                    <Link href={href} className={styles.cardLink}>
                      Learn more
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
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
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import styles from "../style/cardSectionB.module.css"; // Updated path for styles

// /* ── Data ──────────────────────────────────────────────────────────────────── */
// const cards = [
//   {
//     eyebrow: "Agriculture",
//     title: "Grains & Cereals",
//     description:
//       "Reliable sourcing of wheat, maize, and rice from certified producers across East Africa and international markets.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="M12 2a9 9 0 0 1 9 9c0 4.97-9 13-9 13S3 15.97 3 11a9 9 0 0 1 9-9z" />
//         <circle cx="12" cy="11" r="3" />
//       </svg>
//     ),
//     href: "#",
//   },
//   {
//     eyebrow: "Energy",
//     title: "Petroleum Products",
//     description:
//       "International trading of refined petroleum products, including diesel and jet fuel, with logistics support across the region.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="M3 22V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
//         <path d="M17 12h1a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1-2 2v1a2 2 0 0 1-2 2h-1" />
//         <path d="M3 22h16" />
//         <path d="M7 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//         <line x1="7" y1="11" x2="13" y2="11" />
//         <line x1="7" y1="15" x2="13" y2="15" />
//       </svg>
//     ),
//     href: "#",
//   },
//   {
//     eyebrow: "Minerals",
//     title: "Precious Metals",
//     description:
//       "Ethical procurement and trading of gold and other precious metals, fully compliant with international standards.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//       </svg>
//     ),
//     href: "#",
//   },
//   {
//     eyebrow: "Soft Commodities",
//     title: "Coffee & Tea",
//     description:
//       "Premium Kenyan and Ethiopian specialty coffee and tea, traded directly with farming cooperatives for fair-market value.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
//         <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
//         <line x1="6" y1="2" x2="6" y2="4" />
//         <line x1="10" y1="2" x2="10" y2="4" />
//         <line x1="14" y1="2" x2="14" y2="4" />
//       </svg>
//     ),
//     href: "#",
//   },
// ];

// /* ── Animation variants ────────────────────────────────────────────────────── */
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const headerVariants = {
//   hidden: { opacity: 0, x: -32 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 36 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// /* ── Component ─────────────────────────────────────────────────────────────── */
// export default function CommoditiesSection() {
//   return (
//     <section className={`py-5 ${styles.section}`}>
//       <div className="container-xxl">
//         {/* ── Section header ── */}
//         <motion.div
//           className={`mb-4 ${styles.header}`}
//           variants={headerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//         >
//           <h2 className={styles.heading}>Our Commodities</h2>
//           <p className={styles.subheading}>
//             Pamati Investment specialises in sourcing and trading high-value
//             commodities across global markets, connecting producers and buyers
//             with integrity and precision.
//           </p>
//         </motion.div>

//         {/* ── Card grid: 4 col lg | 2 col md | 1 col sm ── */}
//         <motion.div
//           className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//         >
//           {cards.map(({ eyebrow, title, description, icon, href }) => (
//             <motion.div className="col" key={title} variants={cardVariants}>
//               <motion.div
//                 className={`card h-100 border-0 ${styles.card}`}
//                 whileHover={{
//                   y: -6,
//                   boxShadow: "0 16px 40px rgba(10,20,40,0.16)",
//                 }}
//                 transition={{ duration: 0.22, ease: "easeOut" }}
//               >
//                 {/* ── Icon panel ── */}
//                 <div className={styles.cardImgTop}>
//                   <motion.span
//                     className={styles.iconOrb}
//                     animate={{
//                       scale: [1, 1.2, 1],
//                       opacity: [0.15, 0.28, 0.15],
//                     }}
//                     transition={{
//                       duration: 3.5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   />
//                   <motion.span
//                     className={styles.cardIcon}
//                     whileHover={{ scale: 1.12, rotate: 6 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {icon}
//                   </motion.span>
//                   <span className={styles.accentLine} />
//                 </div>

//                 {/* ── Body ── */}
//                 <div
//                   className={`card-body d-flex flex-column ${styles.cardBody}`}
//                 >
//                   <span className={styles.eyebrow}>{eyebrow}</span>
//                   <h5 className={`card-title ${styles.cardTitle}`}>{title}</h5>
//                   <p className={`card-text ${styles.cardText}`}>
//                     {description}
//                   </p>

//                   <motion.div
//                     whileHover={{ x: 4 }}
//                     transition={{ duration: 0.18 }}
//                     className="mt-auto pt-2"
//                   >
//                     <Link href={href} className={styles.cardLink}>
//                       Learn more
//                       <svg
//                         width="13"
//                         height="13"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         aria-hidden="true"
//                       >
//                         <path
//                           d="M3 8h10M9 4l4 4-4 4"
//                           stroke="currentColor"
//                           strokeWidth="1.8"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import styles from "../style/carouselB.module.css"; // Updated path for styles
// import Image from "next/image";

// export default function CardSectionB() {
//   // You may need to define the variants (eyebrowVariant, accentLineVariant, fadeUp) and any other logic here
//   // For now, I'll keep the structure as in your file
//   return (
//     <>
//       <motion.section className={styles.section}>
//         <div className={styles.content}>
//           <motion.p
//             className={styles.eyebrow}
//             variants={eyebrowVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Our Services
//           </motion.p>
//           <motion.div
//             className={styles.accentLine}
//             variants={accentLineVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           />
//           <motion.h2
//             className={styles.title}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             Tailored Financial Solutions for Your Future
//           </motion.h2>
//           <motion.p
//             className={styles.text}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             At Pamati Investment, we understand that every investor has unique
//             goals and aspirations. Our comprehensive suite of services is
//             designed to help you navigate the complexities of the financial
//             world and achieve your dreams with confidence.
//           </motion.p>
//           <motion.a
//             href="/about"
//             className={styles.button}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             Learn More
//           </motion.a>
//         </div>
//         <motion.div
//           className={styles.imageWrapper}
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//         >
//           <Image
//             src="/services.jpg"
//             alt="Financial services illustration"
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </motion.div>
//       </motion.section>
//     </>
//   );
// }
