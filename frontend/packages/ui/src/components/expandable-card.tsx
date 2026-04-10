"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  style?: React.CSSProperties;
  styleExpanded?: React.CSSProperties;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  style,
  styleExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  // Detect light theme from passed style
  const isLight = style?.background?.toString().includes("fff") ||
    style?.background?.toString().includes("FFF");

  const cardBg = isLight ? "#fff8f0" : "#1a1717";
  const titleColor = isLight ? "#131010" : "#FFF0DC";
  const subtitleColor = isLight ? "#543A14" : "#F0BB78";
  const bodyColor = isLight ? "rgba(84,58,20,0.7)" : "#948979";
  const borderColor = isLight ? "rgba(84,58,20,0.15)" : "rgba(240,187,120,0.12)";
  const borderHover = isLight ? "rgba(84,58,20,0.35)" : "rgba(240,187,120,0.35)";
  const btnBorder = isLight ? "rgba(84,58,20,0.3)" : "rgba(240,187,120,0.3)";
  const btnColor = isLight ? "#543A14" : "#F0BB78";
  const dividerColor = isLight ? "rgba(84,58,20,0.2)" : "rgba(240,187,120,0.35)";

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ── Backdrop ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: isLight ? "rgba(19,16,16,0.6)" : "rgba(13,11,11,0.82)",
              backdropFilter: "blur(8px)",
              zIndex: 10,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Expanded modal ── */}
      <AnimatePresence>
        {active && (
          <div style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 100,
            padding: "1.5rem",
          }}>
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              style={{
                width: "100%",
                maxWidth: "680px",
                maxHeight: "90vh",
                overflowY: "auto",
                background: cardBg,
                border: `1px solid ${btnBorder}`,
                position: "relative",
                scrollbarWidth: "none",
                ...styleExpanded,
              }}
              {...props}
            >
              {/* Image */}
              <motion.div layoutId={`image-${title}-${id}`} style={{ position: "relative" }}>
                <img
                  src={src}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.85)",
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 40%, ${cardBg} 100%)`,
                  pointerEvents: "none",
                }} />
              </motion.div>

              {/* Header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "1.5rem 2rem 0.75rem",
                gap: "1rem",
              }}>
                <div>
                  <motion.p
                    layoutId={`description-${description}-${id}`}
                    style={{
                      color: subtitleColor,
                      fontSize: "0.6rem",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {description}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    style={{
                      color: titleColor,
                      fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
                      fontWeight: 300,
                      letterSpacing: "0.06em",
                      margin: 0,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {title}
                  </motion.h3>
                </div>

                {/* Close button */}
                <motion.button
                  aria-label="Close card"
                  layoutId={`button-${title}-${id}`}
                  onClick={() => setActive(false)}
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    border: `1px solid ${btnBorder}`,
                    background: "transparent",
                    color: btnColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.4 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>

              {/* Divider */}
              <div style={{ width: "32px", height: "1px", background: dividerColor, margin: "0.75rem 2rem 1.25rem" }} />

              {/* Content */}
              <div style={{ padding: "0 2rem 2.5rem" }}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    color: bodyColor,
                    fontSize: "0.875rem",
                    lineHeight: 1.85,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {children}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Collapsed card ── */}
      <motion.div
        role="button"
        aria-label={`Open ${title}`}
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        style={{
          background: cardBg,
          border: `1px solid ${borderColor}`,
          cursor: "pointer",
          overflow: "hidden",
          transition: "border-color 0.3s",
          ...style,
        }}
        whileHover={{ borderColor: borderHover } as any}
        className={cn("group", className)}
      >
        {/* Image */}
        <motion.div layoutId={`image-${title}-${id}`} style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={src}
            alt={title}
            style={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              display: "block",
              filter: "brightness(0.85)",
              transition: "transform 0.5s ease, filter 0.3s",
            }}
            className="group-hover:scale-105"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: isLight
              ? "linear-gradient(to bottom, transparent 50%, rgba(255,240,220,0.6) 100%)"
              : "linear-gradient(to bottom, transparent 40%, rgba(19,16,16,0.75) 100%)",
            pointerEvents: "none",
          }} />
        </motion.div>

        {/* Footer */}
        <div style={{
          padding: "0.875rem 1.1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          borderTop: `1px solid ${borderColor}`,
        }}>
          <div style={{ minWidth: 0 }}>
            <motion.p
              layoutId={`description-${description}-${id}`}
              style={{
                color: subtitleColor,
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.25rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
              }}
            >
              {description}
            </motion.p>
            <motion.h3
              layoutId={`title-${title}-${id}`}
              style={{
                color: titleColor,
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Expand button */}
          <motion.button
            aria-label="Open card"
            layoutId={`button-${title}-${id}`}
            style={{
              width: "30px",
              height: "30px",
              flexShrink: 0,
              borderRadius: "50%",
              border: `1px solid ${btnBorder}`,
              background: "transparent",
              color: btnColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5v14" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}