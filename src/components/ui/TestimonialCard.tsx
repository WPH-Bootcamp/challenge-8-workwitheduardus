import type { TestimonialCardProps } from "../../types";
import starRating from "../../assets/star-rating.png";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    
    <div className="relative rounded-2xl border border-neutral-200 bg-white p-8 text-center flex flex-col items-center">
      <span className="absolute top-4 left-6 text-6xl leading-none text-primary-200 font-serif select-none">
        "
      </span>
      <div className="flex justify-center gap-1 mb-5 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <img
            key={i}
            src={starRating}
            alt=""
            className="h-5 w-5"
          />
        ))}
      </div>
      <p className="text-base text-neutral-900 leading-8 mb-6">
        "{testimonial.content}"
      </p>
      <div className="font-bold text-neutral-900 mb-1">
        {testimonial.name}
      </div>
      <div className="text-primary-200 text-sm mb-4">
        {testimonial.role} at {testimonial.company}
      </div>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="mx-auto w-16 h-16 rounded-full object-cover
            "
        loading="lazy"
      />
    </div>
  );
};

export default TestimonialCard;
