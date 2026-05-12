import type { LucideProps } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  headline: "Powering the Future of Digital Solutions",
  subheadline:
    "OZ delivers cutting-edge technology solutions that help businesses scale, innovate, and thrive in an ever-changing digital landscape.",
  ctaPrimaryLabel: "Get Started",
  ctaSecondaryLabel: "Learn More",
};

export const features: FeatureCard[] = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description:
      "Optimized performance at every layer, ensuring your users experience sub-second load times regardless of scale.",
  },
  {
    icon: "Shield",
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance-ready infrastructure to protect your most sensitive data.",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description:
      "Deploy to 30+ regions worldwide with automatic failover, so your service is always available.",
  },
  {
    icon: "BarChart2",
    title: "Advanced Analytics",
    description:
      "Real-time insights and reporting dashboards to help you make data-driven decisions with confidence.",
  },
  {
    icon: "Layers",
    title: "Scalable Architecture",
    description:
      "Built to grow with you — from startup to enterprise, our infrastructure scales seamlessly.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description:
      "Dedicated support engineers available around the clock to resolve any issues instantly.",
  },
];

export const stats: StatItem[] = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "30+", label: "Global Regions" },
  { value: "500+", label: "Enterprise Clients" },
];

export const footerLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Support", href: "#" },
];
