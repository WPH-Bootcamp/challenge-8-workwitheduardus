
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface ServiceCardProps {
  service: ServiceItem;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio?: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  avatar?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Modal Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
}

// Data Types

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface SectionHeadingProps {
  tag?: string;
  title: string;
  description: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export interface IndustryItem {
  id: string;
  label: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface PortfolioCardProps {
  item: PortfolioItem;
  imgSrc: string;
}

export interface FAQIteam {
  id: number;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  variant?: "light" | "dark";
}

export interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
}