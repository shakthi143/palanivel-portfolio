export type ProjectId =
  | "bakery-saas"
  | "ai-sales"
  | "car-accessories"
  | "portfolio";

export type Project = {
  id: ProjectId;
  number: string;
  name: string;
  category: string;
  description: string;
  imageSrc: string;
  // Set to true once the corresponding image file exists in public.
  imageAvailable: boolean;
  technologies: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  liveDemoUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    id: "bakery-saas",
    number: "01",
    name: "Bakery SaaS Platform",
    category: "Full stack SaaS application",
    description:
      "A comprehensive bakery management and e-commerce platform designed to streamline bakery operations and improve customer experience.",
    imageSrc: "/images/projects/bakery-saas.png",
    imageAvailable: false,
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Clerk",
      "Stripe",
      "Uploadcare",
      "Pusher",
    ],
    features: [
      "Customer storefront",
      "Bakery product management",
      "Fresh juices and fast food management",
      "Order management",
      "Table booking management",
      "Party hall bookings",
      "Custom cake requests",
      "Customer management",
      "Admin dashboard",
      "Today’s Special management",
    ],
    overview:
      "A full-stack bakery management and e-commerce platform that brings customer-facing ordering and bakery operations into one product.",
    problem:
      "A bakery needs to manage its storefront, products, orders, bookings, custom requests, and customer information across its day-to-day operations.",
    solution:
      "The platform combines customer shopping and booking experiences with product, order, customer, and dashboard management in one application.",
    liveDemoUrl: null,
    githubUrl: null,
  },
  {
    id: "ai-sales",
    number: "02",
    name: "Automated AI Sales Representative Chatbot",
    category: "AI-powered SaaS",
    description:
      "An AI-powered sales representative platform designed to automate customer conversations and support business engagement.",
    imageSrc: "/images/projects/ai-sales.png",
    imageAvailable: false,
    technologies: ["Next.js", "Clerk", "Neon PostgreSQL", "Stripe", "Pusher"],
    features: [
      "AI chatbot interactions",
      "API key management",
      "Appointment bookings",
      "Live chat",
      "Email marketing",
      "Subscription packages",
    ],
    overview:
      "An AI-powered sales representative platform for customer conversations and business engagement.",
    problem:
      "Businesses need a connected way to support customer conversations alongside appointments, live chat, and subscription offerings.",
    solution:
      "The platform brings AI chatbot interactions together with appointment booking, live chat, API key management, email marketing, and subscriptions.",
    liveDemoUrl: null,
    githubUrl: null,
  },
  {
    id: "car-accessories",
    number: "03",
    name: "Car Accessories E-Commerce Application",
    category: "MERN stack application",
    description:
      "A full-stack car accessories application built using the MERN stack.",
    imageSrc: "/images/projects/car-accessories.png",
    imageAvailable: false,
    technologies: ["MongoDB Atlas", "Express.js", "React", "Node.js"],
    features: [
      "Product catalogue",
      "Product browsing",
      "Full-stack application architecture",
    ],
    overview:
      "A MERN stack e-commerce application for browsing a catalogue of car accessories.",
    problem:
      "Customers need a focused place to browse car accessories in an online catalogue.",
    solution:
      "A full-stack MERN application provides a product catalogue and browsing experience for car accessories.",
    liveDemoUrl: null,
    githubUrl: null,
  },
  {
    id: "portfolio",
    number: "04",
    name: "Personal Portfolio Website",
    category: "Frontend development",
    description:
      "A personal portfolio showcasing development skills and projects.",
    imageSrc: "/images/projects/portfolio.png",
    imageAvailable: false,
    technologies: ["HTML5", "CSS3"],
    features: [
      "Personal developer profile",
      "Development skills showcase",
      "Project showcase",
    ],
    overview:
      "A frontend portfolio website presenting development skills and projects.",
    problem:
      "Development skills and projects need a clear home where visitors can explore them.",
    solution:
      "A personal portfolio built with HTML and CSS brings the developer profile, skills, and projects together.",
    liveDemoUrl: null,
    githubUrl: null,
  },
];
