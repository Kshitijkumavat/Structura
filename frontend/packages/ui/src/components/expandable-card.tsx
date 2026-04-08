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
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

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
              background: "rgba(13,11,11,0.82)",
              backdropFilter: "blur(8px)",
              zIndex: 10,
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Expanded modal ── */}
      <AnimatePresence>
        {active && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              display: "grid",
              placeItems: "center",
              zIndex: 100,
              padding: "1.5rem",
            }}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              style={{
                width: "100%",
                maxWidth: "680px",
                maxHeight: "90vh",
                overflowY: "auto",
                background: "#1a1717",
                border: "1px solid rgba(240,187,120,0.2)",
                position: "relative",
                scrollbarWidth: "none",
              }}
              className={classNameExpanded}
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
                {/* Gradient over image bottom */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 40%, #1a1717 100%)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "1.5rem 2rem 0.75rem",
                  gap: "1rem",
                }}
              >
                <div>
                  <motion.p
                    layoutId={`description-${description}-${id}`}
                    style={{
                      color: "#F0BB78",
                      fontSize: "0.6rem",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {description}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    style={{
                      color: "#FFF0DC",
                      fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
                      fontWeight: 300,
                      letterSpacing: "0.06em",
                      margin: 0,
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
                    border: "1px solid rgba(240,187,120,0.3)",
                    background: "transparent",
                    color: "#DFD0B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background = "rgba(240,187,120,0.12)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
                  }
                >
                  <motion.div animate={{ rotate: active ? 45 : 0 }} transition={{ duration: 0.4 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>

              {/* Divider */}
              <div style={{ width: "32px", height: "1px", background: "rgba(240,187,120,0.35)", margin: "0.75rem 2rem 1.25rem" }} />

              {/* Content */}
              <div style={{ padding: "0 2rem 2.5rem" }}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    color: "#948979",
                    fontSize: "0.875rem",
                    lineHeight: 1.85,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
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
          background: "#1a1717",
          border: "1px solid rgba(240,187,120,0.12)",
          cursor: "pointer",
          overflow: "hidden",
          transition: "border-color 0.3s",
        }}
        whileHover={{ borderColor: "rgba(240,187,120,0.35)" } as any}
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
              filter: "brightness(0.8)",
              transition: "transform 0.5s ease, filter 0.3s",
            }}
            className="group-hover:scale-105"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(19,16,16,0.75) 100%)",
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* Footer */}
        <div
          style={{
            padding: "0.875rem 1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            borderTop: "1px solid rgba(240,187,120,0.08)",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <motion.p
              layoutId={`description-${description}-${id}`}
              style={{
                color: "#F0BB78",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.25rem",
              }}
            >
              {description}
            </motion.p>
            <motion.h3
              layoutId={`title-${title}-${id}`}
              style={{
                color: "#FFF0DC",
                fontSize: "0.9rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                margin: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
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
              border: "1px solid rgba(240,187,120,0.3)",
              background: "transparent",
              color: "#F0BB78",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            <motion.div animate={{ rotate: 0 }} transition={{ duration: 0.4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5v14" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}