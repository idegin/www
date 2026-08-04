export const siteConfig = {
  name: "iDegin Technologies",
  legalName: "iDegin Technologies Limited",
  shortName: "iDegin",
  domain: "idegin.com",
  url: "https://idegin.com",
  locale: "en_US",
  twitter: "@idegin",
  tagline: "Build your AI workforce",
  description:
    "iDegin builds autonomous AI employees and custom software that automate operations, eliminate repetitive work, and help organizations scale without increasing headcount.",
  founded: "2023",

  contact: {
    email: "hello@idegin.com",
    sales: "discovery@idegin.com",
    support: "support@idegin.com",
    phone: "",
    address: {
      city: "Abuja",
      region: "FCT",
      country: "Nigeria",
      countryCode: "NG",
      full: "Abuja, Nigeria",
    },
  },

  socials: {
    linkedin: "https://linkedin.com/company/idegin",
    x: "https://x.com/idegin",
    github: "https://github.com/idegin",
    youtube: "https://youtube.com/@idegin",
    instagram: "https://instagram.com/idegin",
  },

  cta: {
    label: "Book Discovery",
    href: "/contact",
    note: "Book an AI Discovery Session",
  },

  analytics: {
    gaId: "G-QCSRBSNHMQ",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: readonly NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology", href: "/methodology" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav: Record<string, readonly NavItem[]> = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Methodology", href: "/methodology" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
  Solutions: [
    { label: "AI Workforce Transformation", href: "/solutions" },
    { label: "AI Workflow Audit", href: "/contact" },
    { label: "AI Agent Development", href: "/solutions#agents" },
    { label: "Systems Integration", href: "/solutions#integration" },
  ],
  Resources: [
    { label: "Insights", href: "/resources" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "FAQ", href: "/contact#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

/** Priority industries (ABOUT.md) — used for the hero trust marquee. */
export const industries: readonly string[] = [
  "Professional Services",
  "Logistics & Transport",
  "Healthcare",
  "Manufacturing",
  "Financial Services",
  "Real Estate",
  "Education",
  "Retail",
];
