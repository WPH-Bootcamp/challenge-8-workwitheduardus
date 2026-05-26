import type { Testimonial } from "../types";

import JohnLee from "../assets/John-Lee.png";
import SarahTan from "../assets/Sarah-Tan.png";
import EmilyChen from "../assets/Emily-Chen.png";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Lee",
    role: "Creative Director",
    company: "Innovate Corp",
    content:
      "“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”",
    rating: 5,
    avatar: JohnLee,
  },
  {
    id: 2,
    name: "Sarah Tan",
    role: "Product Manager",
    company: "Finovate",
    content:
      "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
    rating: 5,
    avatar: SarahTan,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Head",
    company: "Tech Solutions",
    content:
      "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
    rating: 5,
    avatar: EmilyChen,
  },
];