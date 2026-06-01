"use client";

// import styles from "../style/";
import styles from "../style/logo.module.css";

export default function PamatiLogo({ className = "" }) {
  return (
    <div className={`${styles.logoContainer} ${className}`}>
      <div className={styles.logoContent}>
        <h1 className={styles.mainText}>PAMATI INVESTMENT</h1>
        <p className={styles.tagline}>
          International Commodities Trading{" "}
          <span className={styles.separator}>|</span> Nairobi, Kenya
        </p>
      </div>
    </div>
  );
}
