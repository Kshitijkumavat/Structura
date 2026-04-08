'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './carousel.css';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const slides: SlideData[] = [
  {
    title: 'Residential Construction',
    subtitle: 'Homes & Villas',
    description:
      'From custom family homes to luxury villas, we bring your vision to life with precision craftsmanship, quality materials, and end-to-end project delivery tailored to every homeowner.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Commercial Construction',
    subtitle: 'Offices & Business Complexes',
    description:
      'We design and build high-performance commercial spaces — from corporate offices to retail complexes — delivering on time, on budget, and to the highest structural standards.',
    imageUrl:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Interior Design & Fit-out',
    subtitle: 'Turnkey Interiors',
    description:
      'Our interior team transforms raw structures into refined living and working spaces — blending functionality with aesthetics to create environments that inspire and endure.',
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Renovation & Remodeling',
    subtitle: 'Restoration & Upgrades',
    description:
      'Breathe new life into existing properties. Whether a complete overhaul or targeted upgrades, our renovation experts deliver transformation with minimal disruption.',
    imageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Project Management',
    subtitle: 'End-to-End Oversight',
    description:
      'We manage every phase of your project — from procurement and scheduling to quality control and handover — ensuring your investment is protected at every step.',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=1200&fit=crop&q=80',
  },
  {
    title: 'Architectural Planning',
    subtitle: 'Design & Approvals',
    description:
      'Our architectural team handles blueprints, structural design, regulatory approvals, and site planning — laying a precise foundation before the first stone is laid.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=1200&fit=crop&q=80',
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setProgress(0);
      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    progressRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (SLIDE_DURATION / 50)));
    }, 50);
    intervalRef.current = setInterval(goNext, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX; };
  const handleTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) diff > 0 ? goNext() : goPrev();
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="tc-carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section label */}
      <div className="tc-section-label">
        <span className="tc-label-line" />
        <span className="tc-label-text">Our Services</span>
      </div>

      <div className="tc-inner">
        {/* Left: Text */}
        <div className="tc-content">
          <div className="tc-content-inner">
            <div className={`tc-num ${isTransitioning ? 'tc-out' : 'tc-in'}`}>
              <span className="tc-num-line" />
              <span className="tc-num-text">
                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <h2 className={`tc-title ${isTransitioning ? 'tc-out' : 'tc-in'}`}>
              {currentSlide.title}
            </h2>

            <p className={`tc-subtitle ${isTransitioning ? 'tc-out' : 'tc-in'}`}>
              {currentSlide.subtitle}
            </p>

            <p className={`tc-description ${isTransitioning ? 'tc-out' : 'tc-in'}`}>
              {currentSlide.description}
            </p>

            <div className={`tc-arrows ${isTransitioning ? 'tc-out' : 'tc-in'}`}>
              <button onClick={goPrev} className="tc-arrow" aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={goNext} className="tc-arrow" aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="tc-image-container">
          <div className={`tc-image-frame ${isTransitioning ? 'tc-out' : 'tc-in'}`}>
            <img src={currentSlide.imageUrl} alt={currentSlide.title} className="tc-image" />
            <div className="tc-image-overlay" />
          </div>
          <div className="tc-corner tc-corner--tl" />
          <div className="tc-corner tc-corner--br" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="tc-progress-bar">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`tc-progress-item ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to ${slide.title}`}
          >
            <div className="tc-progress-track">
              <div
                className="tc-progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                }}
              />
            </div>
            <span className="tc-progress-label">{slide.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}