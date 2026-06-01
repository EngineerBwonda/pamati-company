"use client";

import { useEffect } from "react";
import Image from "next/image";
// import styles from "./Carousel.module.css";
import styles from "../style/carouselB.module.css"; // Updated path for styles

// ─── Component ────────────────────────────────────────────────────────────────

export default function Carousel({
  images = [],
  interval = 5000,
  height = "600px",
  showIndicators = true,
  showControls = true,
  className = "",
}) {
  // Bootstrap JS is loaded once on mount (client-only)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      id="heroCarousel"
      className={`carousel slide ${styles.carousel} ${className}`}
      data-bs-ride="carousel"
      data-bs-interval={interval}
      style={{ height }}
    >
      {/* ── Slide counter pill (top-left) ─────────────────────────────────── */}
      {/* <div className={styles.slideCounter}>
        <span id="carouselCounter">01</span>
        <span className={styles.counterSep}>/</span>
        <span>{String(images.length).padStart(2, "0")}</span>
      </div> */}

      {/* ── Indicators — custom line style ────────────────────────────────── */}
      {showIndicators && (
        <div className={styles.indicators}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={`${styles.indicator} ${i === 0 ? styles.indicatorActive : ""}`}
              aria-current={i === 0 ? "true" : "false"}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Slides ────────────────────────────────────────────────────────── */}
      <div className={`carousel-inner ${styles.inner}`}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""} ${styles.item}`}
          >
            {/* Background image */}
            <Image
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              fill
              className={styles.image}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              priority={i === 0}
              quality={90}
              loading="eager"
            />

            {/* Gradient overlay: dark-green vignette from bottom */}
            <div className={styles.overlay} />

            {/* Green accent line at the very bottom of each slide */}
            <div className={styles.accentLine} />

            {/* Caption — only renders if at least title or description exists */}
            {(img.eyebrow || img.title || img.description) && (
              <div className={styles.caption}>
                {/* Eyebrow label */}
                {img.eyebrow && (
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    {img.eyebrow}
                  </div>
                )}

                {/* Headline — splits into normal + italic portion */}
                {img.title && (
                  <h2 className={styles.title}>
                    {img.title}
                    {img.titleEm && (
                      <>
                        <br />
                        <em>{img.titleEm}</em>
                      </>
                    )}
                  </h2>
                )}

                {/* Body text */}
                {img.description && (
                  <p className={styles.description}>{img.description}</p>
                )}

                {/* CTA button */}
                {img.buttonLabel && (
                  <a href={img.buttonHref || "#"} className={styles.button}>
                    {img.buttonLabel}
                    <svg
                      width="14"
                      height="14"
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
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Prev / Next arrow controls ─────────────────────────────────────── */}
      {showControls && (
        <>
          <button
            className={`carousel-control-prev ${styles.control}`}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <svg
              className={styles.arrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className={`carousel-control-next ${styles.control}`}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <svg
              className={styles.arrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
