import type {ProcessStep, Stat, IndustryItem} from '../types';

import fintechImg from "../assets/fintech-icon.png"
import ecommerceImg from "../assets/e-commerce-icon.png"
import healthImg from "../assets/healthcare-icon.png"

export const ProcessSteps: ProcessStep[] = [
    { id: 1,
    title: "Discovery & Consultation",
    description: "Understanding Your Needs & Goals"},
    { id: 2,
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap"},
    { id: 3,
    title: "Design & Prototyping",
    description: "Crafting UX That Converts"},
    { id: 4,
    title: "Development & Implementation",
    description: "Delivery With Speed & Precision"},
    { id: 5,
    title: "Testing & Optimization",
    description: "Ensuring Quality at Every Step"},
    { id: 6,
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously"},
  ];

  export const stats: Stat []= [
    {value: "50+", label: "Project Delivered"},
    {value: "5+", label: "Years of Experience"},
    {value: "10+", label: "Industry Awards Won"},
    {value: "100%", label: "Client Satisfaction Rate"},
  ]

  export const industries: IndustryItem[] = [
    {
      id: "fintech",
      label: "Fintech",
      description:
        "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
        image: fintechImg
    },
    {
      id: "ecommerce",
      label: "E-Commerce",
      description:
        "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
        image: ecommerceImg
    },
    {
      id: "healthcare",
      label: "Healthcare",
      description:
        "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
      image: healthImg
    },
  ];
