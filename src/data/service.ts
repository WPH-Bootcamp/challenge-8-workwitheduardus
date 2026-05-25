import type { ServiceItem } from "../types";

import websiteIcon from "../assets/Website-icon.svg";
import mobileIcon from "../assets/Mobile-icon.svg";
import uiIcon from "../assets/Ui-icon.svg";
import cloudIcon from "../assets/Cloud-icon.svg";
import sofwareIcon from "../assets/Software-icon.svg";
import itIcon from"../assets/IT-icon.svg";
import cycbersecIcon from "../assets/Cybersecurity-icon.svg";
import qaIcon from "../assets/QA-icon.svg";
import itConsultingIcon from "../assets/IT-consulting-icon.svg";

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    icon: websiteIcon,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    icon: mobileIcon,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces",
    icon: uiIcon,
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
    icon: cloudIcon,
  },
  {
    id: 5,
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    icon: sofwareIcon,
  },
  {
    id: 6,
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    icon: itIcon,
  },
  {
    id: 7,
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    icon: cycbersecIcon,
  },
  {
    id: 8,
    title: "QA Solution",
    description: "Ensure performance with rigorous testing frameworks.",
    icon: qaIcon,
  },
  {
    id: 9,
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    icon: itConsultingIcon,
  },
];
