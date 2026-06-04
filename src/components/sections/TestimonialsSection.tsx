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
          <div className="md:hidden px-4">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">{testimonials.map((t) => (
              <div
              key={t.id}
              className="snap-center shrink-0 w-[calc(100vw-32px)] max-w-[344px]">
              <TestimonialCard testimonial={t} />
              </div>
          ))}
        </div>
         <div className="flex justify-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-primary-200"></span>
          <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
           <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
          </div>
        </div>
        </div>
      </section>
    );
};

export default TestimonialsSection;