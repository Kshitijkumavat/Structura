"use client"
import { useEffect, useState } from "react";
import SmoothScrollHero from "@workspace/ui/components/smooth-scroll-hero";
import { SimpleHeader } from "@workspace/ui/components/simple-header";
import AboutUsSection from "@workspace/ui/components/about-us-section";
import ProjectsSection from "@workspace/ui/components/projects-section"
import { Testimonials } from "@workspace/ui/components/testimonials-section";
import ServicesCarousel from "@workspace/ui/components/elegant-carousel";
import cityImg from "./assets/city.jpg";
import aboutImg from "./assets/about.jpg";

const SCROLL_HEIGHT = 1500;

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Nav appears only after the smooth scroll hero animation completes
      setShowNav(scrollY >= SCROLL_HEIGHT);

      // Hero text fades out over first 400px of scroll, fully gone after that
      // Hero text fades out near the END of the scroll animation (1200-1500px)
      const fadeStart = 1500;
      const fadeEnd = 1600;
      if (scrollY <= fadeStart) {
        setHeroOpacity(1);
        setHeroVisible(true);
      } else if (scrollY < fadeEnd) {
        setHeroOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
        setHeroVisible(true);
      } else {
        setHeroOpacity(0);
        setHeroVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#131010" }}>

      {/* ── Nav: slides in after scrolling past hero ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "opacity 0.4s ease, transform 0.4s ease",
          opacity: showNav ? 1 : 0,
          transform: showNav ? "translateY(0)" : "translateY(-100%)",
          pointerEvents: showNav ? "auto" : "none",
          background: "rgba(13,11,11,0.55)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(240,187,120,0.15)",
        }}
      >
        <SimpleHeader />
      </div>

      {/* ── Hero text: fixed but fades + unmounts as user scrolls down ── */}
      {heroVisible && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1rem",
            pointerEvents: "none",
            userSelect: "none",
            opacity: heroOpacity,
          }}
        >
          <h1
            style={{
              color: "#CDB885",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textShadow: "0 2px 40px rgba(19,16,16,0.7)",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Tanishka
          </h1>

          <p
            style={{
              color: "#FFDAB3",
              fontSize: "clamp(0.75rem, 2vw, 1.25rem)",
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              textShadow: "0 1px 20px rgba(19,16,16,0.6)",
              marginTop: "0.5rem",
              marginBottom: 0,
            }}
          >
            Constructions
          </p>

          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, rgba(240,187,120,0.5), transparent)",
              margin: "20px auto 0",
            }}
          />

          {/* Scroll indicator */}
          <div style={{ marginTop: "2.5rem" }}>
            <div
              style={{
                width: "1px",
                height: "48px",
                background: "linear-gradient(to bottom, rgba(240,187,120,0.6), transparent)",
                margin: "0 auto",
                animation: "scrollPulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>

      {/* ── Smooth scroll hero ── */}
      <SmoothScrollHero
        scrollHeight={SCROLL_HEIGHT}
        desktopImage={cityImg}
        mobileImage={cityImg}
        initialClipPercentage={25}
        finalClipPercentage={75}
      />
      <ProjectsSection />
      <ServicesCarousel />

      
      {/* ── About section sits in normal document flow below hero ── */}
      <AboutUsSection aboutImage={aboutImg}/>
      <Testimonials />
    </div>
  );
};

export default App;