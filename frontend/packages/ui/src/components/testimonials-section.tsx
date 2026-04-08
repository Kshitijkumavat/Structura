import { motion } from "motion/react";
import { TestimonialsColumn, testimonials } from "./testimonials-columns-1";

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-[#131010] py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-xl mx-auto mb-14"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFF0DC] leading-tight">
            What our users say
          </h2>

          {/* Gold underline — matches your portfolio section */}
          <div className="w-12 h-px bg-[#F0BB78] mt-4 mb-5" />

          <p className="text-sm text-[#a89070] leading-relaxed max-w-sm">
            See what our customers have to say about us.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center items-start gap-5 overflow-hidden max-h-[680px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
          />
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