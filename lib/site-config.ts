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

export const primaryNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology", href: "/methodology" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Partners", href: "/about#partners" },
    { label: "Contact", href: "/contact" },
  ],
  Solutions: [
    { label: "AI Employees", href: "/solutions#ai-employees" },
    { label: "AI Agents", href: "/solutions#ai-agents" },
    { label: "Automation", href: "/solutions#automation" },
    { label: "Custom Software", href: "/solutions#software" },
    { label: "AI Transformation", href: "/solutions#ai-transformation" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries" },
    { label: "Finance", href: "/industries" },
    { label: "Government", href: "/industries" },
    { label: "Manufacturing", href: "/industries" },
    { label: "Retail", href: "/industries" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Methodology", href: "/methodology" },
    { label: "ROI Calculator", href: "/#cost" },
  ],
} as const;

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
  { label: "Accessibility", href: "/accessibility" },
] as const;
