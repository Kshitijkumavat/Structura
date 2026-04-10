import { motion } from "motion/react";
import { TestimonialsColumn, testimonials } from "./testimonials-columns-1";

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section style={{ background: "#131010", padding: "6rem 0", position: "relative" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "36rem",
            margin: "0 auto 3.5rem",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ width: "24px", height: "1px", background: "#F0BB78", opacity: 0.5 }} />
            <span style={{
              color: "#F0BB78",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontFamily: "'Poppins', sans-serif",
            }}>
              Client Stories
            </span>
            <span style={{ width: "24px", height: "1px", background: "#F0BB78", opacity: 0.5 }} />
          </div>

          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
            fontWeight: 600,
            color: "#FFF0DC",
            margin: "0 0 1rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            fontFamily: "'Poppins', sans-serif",
          }}>
            What Our Clients Say
          </h2>

          <div style={{ width: "48px", height: "1px", background: "rgba(240,187,120,0.5)", margin: "0 0 1.25rem" }} />

          <p style={{
            fontSize: "0.875rem",
            color: "#948979",
            lineHeight: 1.75,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            maxWidth: "28rem",
            margin: 0,
          }}>
            From homeowners to developers — here's what our clients have to say about building with Tanishka.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1.25rem",
          overflow: "hidden",
          maxHeight: "680px",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}>
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>

      </div>
    </section>
  );
};