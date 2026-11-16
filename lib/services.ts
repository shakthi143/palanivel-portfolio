import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  LayoutDashboard,
  Monitor,
  PanelsTopLeft,
  Wrench,
  Workflow,
} from "lucide-react";

export const serviceQuoteEventName = "portfolio:service-quote";

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "business-website",
    number: "01",
    title: "Business Website Development",
    description:
      "Professional, responsive websites that establish your brand online.",
    deliverables: [
      "Responsive page layouts",
      "Brand-aligned presentation",
      "Contact-ready experience",
    ],
    icon: Monitor,
  },
  {
    id: "landing-page",
    number: "02",
    title: "Landing Page Development",
    description:
      "Conversion-focused landing pages for products, businesses and campaigns.",
    deliverables: [
      "Focused page structure",
      "Responsive design",
      "Clear call-to-action",
    ],
    icon: PanelsTopLeft,
  },
  {
    id: "full-stack-web-app",
    number: "03",
    title: "Full Stack Web Applications",
    description:
      "Custom web applications with frontend, backend and database integration.",
    deliverables: [
      "Frontend and backend",
      "Database integration",
      "Custom application flows",
    ],
    icon: Blocks,
  },
  {
    id: "saas-development",
    number: "04",
    title: "SaaS Application Development",
    description:
      "Subscription-based software products with authentication, dashboards and payment integration.",
    deliverables: [
      "Authentication flows",
      "Product dashboards",
      "Payment integration",
    ],
    icon: Workflow,
  },
  {
    id: "admin-dashboard",
    number: "05",
    title: "Admin Dashboard Development",
    description:
      "Modern management dashboards to manage business operations, users and data.",
    deliverables: [
      "Operations overview",
      "Data management views",
      "User-focused workflows",
    ],
    icon: LayoutDashboard,
  },
  {
    id: "api-bug-fixing",
    number: "06",
    title: "API Integration & Bug Fixing",
    description:
      "API integration, debugging and improvements to existing applications.",
    deliverables: [
      "API integration",
      "Issue investigation",
      "Application improvements",
    ],
    icon: Wrench,
  },
];
