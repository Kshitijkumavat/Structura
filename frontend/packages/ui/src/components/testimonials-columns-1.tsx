"use client";
import React from "react";
import { motion } from "motion/react";

export const testimonials = [
  {
    text: "Tanishka Constructions delivered our dream home on time and within budget. The quality of craftsmanship is exceptional — every detail was handled with care.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Rajesh Mehta",
    role: "Homeowner, Pune",
  },
  {
    text: "From architectural planning to final handover, the team was professional and transparent throughout. Our office complex turned out better than we imagined.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Priya Sharma",
    role: "Director, Sharma Enterprises",
  },
  {
    text: "The renovation of our heritage property was handled with incredible sensitivity and skill. They preserved what mattered while modernising everything else.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Vikram Desai",
    role: "Property Developer",
  },
  {
    text: "We entrusted Tanishka with our commercial campus and they delivered a LEED-certified building ahead of schedule. Highly recommended for large-scale projects.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Anita Joshi",
    role: "CEO, Greenfield Realty",
  },
  {
    text: "Their project management team kept us informed at every stage. No surprises, no delays — just a beautifully built villa exactly as we envisioned.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Suresh Patil",
    role: "Homeowner, Lonavala",
  },
  {
    text: "The interior fit-out team transformed our raw space into a stunning office. The attention to detail and use of materials is truly world-class.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Meera Kulkarni",
    role: "Founder, Studio MK",
  },
  {
    text: "As a real estate developer, I've worked with many contractors. Tanishka stands apart — their structural quality and commitment to timelines is unmatched.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Aditya Rane",
    role: "Real Estate Developer",
  },
  {
    text: "The team built our retail space with precision and creativity. Footfall has increased significantly since we moved into the new premises.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Kavita Nair",
    role: "Retail Business Owner",
  },
  {
    text: "Exceptional communication, skilled workforce, and a final product that exceeded all expectations. Tanishka is our go-to construction partner.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Rohit Chavan",
    role: "Infrastructure Investor",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                style={{
                  background: "#FFF0DC",
                  border: "1px solid rgba(240,187,120,0.35)",
                  borderRadius: "4px",
                  padding: "1.5rem",
                  width: "280px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {/* Gold quote mark */}
                <div style={{
                  color: "#F0BB78",
                  fontSize: "2rem",
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                  marginBottom: "0.75rem",
                  opacity: 0.8,
                }}>
                  "
                </div>

                <p style={{
                  fontSize: "0.8rem",
                  lineHeight: 1.75,
                  color: "#2a1f0e",
                  margin: "0 0 1.25rem",
                  fontWeight: 400,
                }}>
                  {text}
                </p>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(212,169,106,0.4)",
                }}>
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      outline: "2px solid #F0BB78",
                      outlineOffset: "1px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#131010",
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      {name}
                    </p>
                    <p style={{
                      fontSize: "0.68rem",
                      color: "#7a5c38",
                      margin: "0.2rem 0 0",
                      fontWeight: 400,
                    }}>
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};