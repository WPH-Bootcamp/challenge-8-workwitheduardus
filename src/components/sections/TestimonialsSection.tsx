import {  testimonials } from "../../data/testimonials";
import TestimonialCard from "../ui/TestimonialCard";
import SectionHeading from "../ui/SectionHeading";

const TestimonialsSection = () => {
    return (
      <section id="testimonials" className="bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <SectionHeading
            title="What Partners Say About Working With Us"
            description="Trusted voices. Real experiences. Proven results." align="center" className="mb-12"
          />
          <div className="hidden md:grid grid-cols-3 gap-5">
            {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-5 pb-4 mx-4 px-4 scrollbar-hide">
          {testimonials.map((t) => (
            <div key={t.id} className="snap-center shrink-0 w-[cal(100vw-48px)]">
                <TestimonialCard testimonial={t} />
          </div>
          ))}
        </div>
    </div>
      </section>
    );
};

export default TestimonialsSection;