import Image from "next/image";
//import styles from "./page.module.css";
import Navbar from "./component/navbar";
import Carousel from "./component/carousel";
import Logo from "./component/logo";
import CardsSection from "./component/cardSection";
import CardSectionB from "./component/cardSectionB";
import TwoCards from "./component/two-cards";
import StatsBar from "./component/statsBar";
import WhyChooseUs from "./component/whychooseus";
import Testimonials from "./component/testimonial";
import CtaBanner from "./component/CtaBanner";
import Footer from "./component/footer";

export default function Home() {
  // const slides = [
  //   {
  //     src: "/cargoshipG.jpg",
  //     alt: "Pathfinders during outdoor activities",
  //     eyebrow: "SDA Pathfinder Club",
  //     title: "Faith, Adventure &",
  //     titleEm: "Fellowship",
  //     description:
  //       "Equipping young hearts and minds to serve God and community — one badge, one campfire, one memory at a time.",
  //     buttonLabel: "Join Us Today",
  //     buttonHref: "/join",
  //   },
  //   {
  //     src: "/cargoshipH.jpg",
  //     alt: "Camping trip",
  //     eyebrow: "Outdoor Skills",
  //     title: "Built for the",
  //     titleEm: "Great Outdoors",
  //     description:
  //       "From camping under the stars to mastering first aid — our Pathfinders learn resilience in God's creation.",
  //     buttonLabel: "Explore Activities",
  //     buttonHref: "/activities",
  //   },
  //   {
  //     src: "/cargoshipJ.jpg",
  //     alt: "Bible study session",
  //     eyebrow: "Spiritual Growth",
  //     title: "Rooted in the",
  //     titleEm: "Word of God",
  //     description:
  //       "Bible study, devotion, and worship are at the heart of everything we do. Growing closer to God, together.",
  //     buttonLabel: "Learn More",
  //     buttonHref: "/about",
  //   },
  // ];

  const slides = [
    {
      src: "/cargoshipG.jpg",
      alt: "Cargo vessel navigating international shipping lanes",
      eyebrow: "Global Commodities Trading",
      title: "Connecting Markets,",
      titleEm: "Delivering Value",
      description:
        "From East Africa to global ports — we source, finance, and distribute high-value commodities with precision, integrity, and speed.",
      buttonLabel: "Explore Our Commodities",
      buttonHref: "/commodities",
    },
    {
      src: "/cargoshipH.jpg",
      alt: "Bulk cargo being loaded at a major port",
      eyebrow: "End-to-End Logistics",
      title: "Seamless Supply,",
      titleEm: "Every Shipment",
      description:
        "We manage the full trade lifecycle — freight, customs clearance, documentation, and last-mile delivery — so your cargo arrives on time, every time.",
      buttonLabel: "How We Work",
      buttonHref: "/services",
    },
    {
      src: "/cargoshipJ.jpg",
      alt: "Commodity trading operations centre",
      eyebrow: "Trusted Since 2009",
      title: "Built on Integrity,",
      titleEm: "Driven by Results",
      description:
        "15+ years of ethical sourcing, bespoke financing, and institutional-grade compliance — giving producers and buyers the confidence to trade globally.",
      buttonLabel: "About Pamati",
      buttonHref: "/about",
    },
  ];
  return (
    <>
      <Carousel
        images={slides}
        height="800px"
        interval={5000}
        showIndicators
        showControls
      />
      <CardsSection />

      <TwoCards />
      <CardSectionB />
      <StatsBar />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
