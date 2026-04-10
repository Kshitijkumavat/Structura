import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { ExpandableCard } from "@workspace/ui/components/expandable-card"

interface Project {
  title: string
  category: string
  image: string
  year: string
  location: string
  area: string
  description: string
}

interface ProjectsSectionProps {
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    title: "Meridian Towers",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    year: "2023",
    location: "Pune, Maharashtra",
    area: "1,20,000 sq ft",
    description:
      "A landmark 32-storey residential complex featuring premium 3 and 4 BHK apartments with panoramic city views. Designed with sustainable materials and passive cooling systems, Meridian Towers sets a new benchmark for urban living in the heart of Pune.",
  },
  {
    title: "Verdant Business Park",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    year: "2022",
    location: "Hinjewadi, Pune",
    area: "2,40,000 sq ft",
    description:
      "A LEED Platinum-certified commercial campus housing Fortune 500 tenants. The park integrates green roofs, rainwater harvesting, and smart building management systems, reducing energy consumption by 40% over conventional office buildings.",
  },
  {
    title: "The Bungalow Co.",
    category: "Luxury Villas",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    year: "2023",
    location: "Lonavala, Maharashtra",
    area: "18,000 sq ft",
    description:
      "An exclusive gated community of 12 ultra-luxury bungalows set amidst the Sahyadri foothills. Each villa features private infinity pools, stone-clad facades, and bespoke interiors crafted by award-winning designers.",
  },
  {
    title: "Skyline Mall",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
    year: "2021",
    location: "Nashik, Maharashtra",
    area: "3,50,000 sq ft",
    description:
      "A four-level experiential retail destination anchored by a 12-screen multiplex and food court. Skyline Mall revitalised a 6-acre brownfield site and created over 2,000 direct employment opportunities for the local community.",
  },
  {
    title: "Lakefront Residences",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    location: "Khadakwasla, Pune",
    area: "85,000 sq ft",
    description:
      "A boutique waterfront development of 64 premium lake-facing apartments. The project prioritises unobstructed water views, natural ventilation, and a community wellness centre including a spa, gym, and yoga pavilion.",
  },
  {
    title: "Heritage Walk Hotel",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    year: "2022",
    location: "Kolhapur, Maharashtra",
    area: "65,000 sq ft",
    description:
      "A heritage-sensitive adaptive reuse of a 19th-century palace into a 5-star boutique hotel. The project preserved original Indo-Saracenic stone carvings and wooden fretwork while integrating contemporary amenities across 84 suites.",
  },
]

const poppins = "'Poppins', sans-serif"

export default function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        width: "100%",
        padding: "7rem 1.5rem",
        background: "#FFF0DC",
        position: "relative",
        overflow: "hidden",
        fontFamily: poppins,
      }}
    >
      {/* Subtle warm texture overlay */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "-5%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,187,120,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 10 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* ── Header ── */}
        <motion.div variants={itemVariants} style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ width: "24px", height: "1px", background: "#543A14", opacity: 0.4 }} />
            <span style={{
              color: "#543A14",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontFamily: poppins,
              fontWeight: 500,
            }}>
              Our Portfolio
            </span>
          </div>

          <h2 style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#131010",
            margin: "0 0 1.25rem",
            fontFamily: poppins,
          }}>
            Featured Projects
          </h2>

          <div style={{ width: "48px", height: "1px", background: "#543A14", opacity: 0.4 }} />
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ExpandableCard
                title={project.title}
                src={project.image}
                description={project.category}
                // Light theme overrides passed as props for the card footer
                style={{
                  background: "#fff8f0",
                  border: "1px solid rgba(84,58,20,0.15)",
                }}
                styleExpanded={{
                  background: "#fff8f0",
                  border: "1px solid rgba(84,58,20,0.2)",
                }}
              >
                {/* Expanded content — meta grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "1px",
                  background: "rgba(84,58,20,0.1)",
                  border: "1px solid rgba(84,58,20,0.1)",
                  marginBottom: "1.25rem",
                }}>
                  {[
                    { label: "Year", value: project.year },
                    { label: "Location", value: project.location },
                    { label: "Area", value: project.area },
                  ].map((item) => (
                    <div key={item.label} style={{ background: "#fff8f0", padding: "0.875rem 1rem" }}>
                      <p style={{
                        fontSize: "0.55rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#543A14",
                        marginBottom: "0.3rem",
                        opacity: 0.8,
                        fontFamily: poppins,
                        fontWeight: 500,
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: "0.78rem",
                        color: "#131010",
                        margin: 0,
                        lineHeight: 1.4,
                        fontFamily: poppins,
                        fontWeight: 400,
                      }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{
                  color: "#543A14",
                  fontSize: "0.875rem",
                  lineHeight: 1.85,
                  margin: 0,
                  fontFamily: poppins,
                  fontWeight: 400,
                  opacity: 0.8,
                }}>
                  {project.description}
                </p>
              </ExpandableCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}