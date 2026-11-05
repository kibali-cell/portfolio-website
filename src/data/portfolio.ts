import kituShot from "@/assets/project-kitu.jpg";
import smsShot from "@/assets/project-sms-filter.jpg";
import safariShot from "@/assets/project-safari.jpg";
import kituDash from "@/assets/kitu-dashboard.jpg";
import kituLogin from "@/assets/kitu-login.jpg";
import safariHome from "@/assets/safari-home.jpg";
import safariTours from "@/assets/safari-tours.jpg";
import safariAdmin from "@/assets/safari-admin.jpg";



/**
 * Single source of truth for contact details & social links.
 */
export const SITE = {
  email: "jonasdeo02@gmail.com",
  phoneDisplay: "+255 795 650 726",
  phoneTel: "+255795650726",
  whatsapp: "255795650726", // international format, digits only (no +)
  github: "https://github.com/kibali-cell",
  githubAlt: "https://github.com/JonasDeo",
  /**
   * Contact-form endpoint (sends the inquiry to your inbox without opening the
   * visitor's email app). FormSubmit's free AJAX endpoint — the FIRST submission
   * triggers an activation email to this address: click "Activate" once.
   * To use another service (Formspree, Web3Forms…), change this URL.
   */
  /** CV file. Drop your PDF into /public with this exact name. */
  cv: "/Jonas-Kiwia-CV.pdf",
  formEndpoint: "https://formsubmit.co/ajax/jonasdeo02@gmail.com",
} as const;

/**
 * Canonical numbers — change them here and they update everywhere.
 */
export const STATS = {
  clients: "10+",
  years: "5",
} as const;

const gh = (owner: "kibali-cell" | "JonasDeo", repo: string) => `https://github.com/${owner}/${repo}`;

/**
 * Project screenshots are placeholders for now. To add one:
 *   import shot from "@/assets/my-shot.jpg";
 *   …then set `img: shot` on the project below.
 */
export type Project = {
  slug: string;
  name: string;
  tag: string;
  img?: string;
  /** extra screenshots shown on the project page and in the pop-up */
  gallery?: string[];
  featured?: boolean;
  live?: string;
  github?: string;
  summary: string;
  problem: string;
  solution: string[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "kitu-analytics",
    name: "Kitu Analytics",
    img: kituShot, // demo data, real UI
    gallery: [kituLogin, kituDash],
    tag: "SME Bookkeeping & Credit Analytics",
    featured: true,
    github: gh("JonasDeo", "Kitu-Analytics"),
    summary: "A bookkeeping and analytics platform for small businesses that turns everyday records into clear insight — including credit scoring — currently in MVP development.",
    problem: "Small businesses keep records in notebooks and chats, so they can't easily see how they're doing or prove it to a lender.",
    solution: [
      "Simple bookkeeping built for SMEs",
      "Analytics that turn records into plain-language insight",
      "A credit-scoring service built on a business's own transaction history",
      "Containerised so every part runs the same everywhere",
    ],
    stack: ["Laravel", "JavaScript", "ML service", "Docker"],
  },
  {
    slug: "safari-tours",
    name: "Native Kilimanjaro",
    img: safariShot,
    gallery: [safariHome, safariTours, safariAdmin],
    tag: "Safari Tour Platform",
    featured: true,
    github: gh("JonasDeo", "Safari-Tours"),
    live: "https://nativekilimanjaro.com",
    summary: "A platform for showcasing African safari destinations, managing tour operations and building trips.",
    problem: "Tour companies need a beautiful way to show destinations and a simple way to turn interest into booked trips.",
    solution: [
      "Curated destination and journey pages",
      "Trip-building experience for travellers",
      "Fast, responsive front end deployed on Vercel",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    slug: "swahili-sms-filter",
    name: "Swahili SMS Spam Filter",
    img: smsShot,
    tag: "Android · Machine Learning",
    featured: true,
    github: gh("kibali-cell", "swahili-sms-filter-android"),
    summary: "An Android app that uses machine learning to filter spam SMS in real time for Swahili speakers.",
    problem: "Most spam filters are built for English, so Swahili scam and promotional messages slip through.",
    solution: [
      "On-device spam detection for Swahili messages",
      "Real-time filtering as messages arrive",
      "Built as a native Android app",
    ],
    stack: ["Java", "Android", "Machine Learning"],
  },
  {
    slug: "travel-management",
    name: "Travel Management API",
    tag: "Business Travel & Expenses",
    featured: true,
    github: gh("kibali-cell", "Travel-Management-API"),
    summary: "A Laravel and MySQL application for business travel booking, expense tracking and travel-policy management.",
    problem: "Business travel requests, approvals and expenses end up scattered across emails and spreadsheets.",
    solution: [
      "Travel booking workflow",
      "Expense tracking per trip",
      "Policy management and checks",
      "API-first backend",
    ],
    stack: ["Laravel", "PHP", "MySQL", "REST API"],
  },
  {
    slug: "usalama-barabarani",
    name: "Usalama Barabarani",
    tag: "Android · Driving Education",
    featured: true,
    github: gh("kibali-cell", "Usalama-Barabarani"),
    summary: "An Android app for learning to drive, for beginners and experienced learners alike.",
    problem: "Learners need a convenient way to study road rules and practise before facing the test.",
    solution: ["Learn-to-drive content on your phone", "Built for beginners and refreshers", "Native Android app"],
    stack: ["Java", "Android"],
  },
  {
    slug: "it-diagnosis-table",
    name: "IT Diagnosis Table",
    tag: "Support Reference Tool",
    github: gh("JonasDeo", "IT-Diagnosis-Table"),
    summary: "An interactive reference tool for IT support staff to look up common problems and their fixes.",
    problem: "Support staff lose time re-solving the same everyday problems.",
    solution: ["Searchable table of common issues", "Quick, step-by-step fixes", "Lightweight and fast"],
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    slug: "cosmetics-ecommerce",
    name: "Cosmetics & Beauty Store",
    tag: "E-commerce · Laravel",
    github: gh("kibali-cell", "Cosmetics-Beauty-ecommerce"),
    summary: "A beauty and cosmetics e-commerce project built with Laravel.",
    problem: "Beauty brands need an online store that is easy to browse and easy to manage.",
    solution: ["Product catalogue and storefront", "Cart and order flow", "Laravel back end"],
    stack: ["Laravel", "PHP", "MySQL"],
  },
  {
    slug: "ecommerce-flutter",
    name: "eCommerce Flutter App",
    tag: "Mobile Shopping App",
    featured: true,
    github: gh("kibali-cell", "eCommerce-Flutter"),
    summary: "A shopping app built with Flutter for a smooth buying experience on mobile.",
    problem: "Shoppers expect a fast, native-feeling app rather than a slow mobile website.",
    solution: ["Cross-platform mobile storefront", "Smooth browsing and checkout flow", "Single Flutter codebase"],
    stack: ["Flutter", "Dart"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

/* ---------------- SERVICES (numbered grid) ---------------- */
export type Service = {
  slug: string;
  n: string;
  title: string;
  short: string;
  long: string;
  deliverables: string[];
};


export const SERVICES: Service[] = [
  {
    slug: "business-websites",
    n: "01",
    title: "Business Websites",
    short:
      "Professional, mobile-friendly websites that help businesses establish an online presence, showcase their services, and attract customers.",
    long:
      "I design and develop custom websites for businesses that need more than a social media page. From landing pages to multi-page business websites, I focus on responsive design, clear navigation, and a strong presentation of your brand.",
    deliverables: [
      "Custom responsive design",
      "Mobile-friendly layouts",
      "Service and contact pages",
      "Basic technical SEO",
      "Contact forms and WhatsApp integration",
      "Website deployment",
    ],
  },
  {
    slug: "web-applications",
    n: "02",
    title: "Web Applications",
    short:
      "Custom web applications for businesses that need dashboards, booking systems, management tools, or solutions beyond a traditional website.",
    long:
      "I build interactive web applications using React, TypeScript and Laravel. Whether you need an administrative dashboard, booking platform, customer portal, or business management system, I can help turn your requirements into a working application.",
    deliverables: [
      "Custom React interfaces",
      "Backend and database development",
      "REST API integration",
      "Authentication and user management",
      "Admin dashboards",
      "Deployment and handover",
    ],
  },
  {
    slug: "backend-api-development",
    n: "03",
    title: "Backend & API Development",
    short:
      "Backend systems, REST APIs and database-driven functionality built with Laravel and Python.",
    long:
      "I develop the server-side functionality that powers web and mobile applications. This includes API endpoints, database structures, authentication, business logic and connections between different application components.",
    deliverables: [
      "Laravel backend development",
      "Python and FastAPI development",
      "REST API development",
      "Database design and integration",
      "Authentication and permissions",
      "API documentation",
    ],
  },
  {
    slug: "api-integrations",
    n: "04",
    title: "API & Third-Party Integrations",
    short:
      "Connect your website or application to payment services, messaging platforms, maps and other external systems.",
    long:
      "I integrate external services into existing applications so different systems can communicate and exchange information. This includes working with API credentials, webhooks, request handling and integration testing.",
    deliverables: [
      "Third-party API integration",
      "Payment gateway integration",
      "Messaging and notification integrations",
      "Google Maps and Places integration",
      "Webhook implementation",
      "Integration testing",
    ],
  },
  {
    slug: "website-maintenance",
    n: "05",
    title: "Website Maintenance & Support",
    short:
      "Keep your existing website working properly with technical updates, bug fixes, content changes and troubleshooting.",
    long:
      "Websites need attention after launch. I help businesses maintain their existing websites by investigating technical problems, fixing bugs, updating content and making improvements as their needs change.",
    deliverables: [
      "Bug fixes and troubleshooting",
      "Content and image updates",
      "Dependency updates",
      "Performance improvements",
      "Technical support",
      "Backup configuration",
    ],
  },
  {
    slug: "seo-optimization",
    n: "06",
    title: "Website SEO & Optimization",
    short:
      "Improve your website's search engine foundations, loading performance and mobile experience.",
    long:
      "I help improve how websites are structured and presented to search engines. This includes technical SEO, metadata, page structure, sitemap configuration and performance improvements.",
    deliverables: [
      "Page titles and meta descriptions",
      "Heading structure",
      "Image optimization",
      "Sitemap and robots.txt",
      "Canonical URL configuration",
      "Technical SEO improvements",
    ],
  },
  {
    slug: "website-redesign",
    n: "07",
    title: "Website Redesign",
    short:
      "Modernize an outdated website with a cleaner design, better navigation and an improved mobile experience.",
    long:
      "If your current website looks outdated, is difficult to navigate or doesn't represent your business properly, I can redesign its interface and improve its overall user experience while retaining relevant existing content.",
    deliverables: [
      "Existing website review",
      "Modern UI redesign",
      "Responsive layouts",
      "Improved navigation",
      "Content restructuring",
      "Deployment of redesigned website",
    ],
  },
  {
    slug: "technical-consultation",
    n: "08",
    title: "Technical Consultation",
    short:
      "Get practical guidance on turning your business idea into a realistic software project.",
    long:
      "Not every business needs a complex application. I help clients understand their technical requirements, identify the features they actually need, and plan a practical development approach before committing to a project.",
    deliverables: [
      "Project requirements discussion",
      "Feature and scope planning",
      "Technology recommendations",
      "Development roadmap",
      "Initial cost and timeline estimate",
    ],
  },
];


export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/* ---------------- PROCESS ---------------- */
export const PROCESS_STEPS = [
  { n: "01", title: "Booking a call", desc: "We'll discuss your goals and vision — no assumptions, no fluff." },
  { n: "02", title: "Custom design", desc: "I'll create a custom design tailored to your needs and audience." },
  { n: "03", title: "Development", desc: "The design comes to life with clean, efficient, well-tested code." },
  { n: "04", title: "Launch", desc: "I'll help you get your site live, monitored, and ready for the world." },
];

/* ---------------- PRICING ---------------- */

/* ---------------- PRICING ---------------- */
export const TIERS = [
  {
    n: "1",
    time: "3–5 days",
    title: "Starter Landing Page",
    desc: "A clean, mobile-friendly one-page website for individuals, freelancers and small businesses establishing an online presence.",
    best: "Small businesses, personal brands and service providers",
    features: [
      "One-page responsive website",
      "Business introduction and services",
      "Contact information and WhatsApp button",
      "Contact form",
      "Basic SEO setup",
      "Website deployment",
    ],
    usd: "$95 – $175",
    tzs: "TSh 250k – 450k",
  },
  {
    n: "2",
    time: "1–2 weeks",
    title: "Business Website",
    desc: "A professional multi-page website to showcase your business, services, products and contact information.",
    best: "Established small businesses and growing companies",
    features: [
      "Up to 5–7 pages",
      "Custom responsive design",
      "About, services and contact pages",
      "Image gallery or portfolio",
      "WhatsApp and contact form integration",
      "Basic technical SEO",
      "Deployment and handover",
    ],
    usd: "$230 – $460",
    tzs: "TSh 600k – 1.2M",
    featured: true,
  },
  {
    n: "3",
    time: "3–6 weeks",
    title: "Custom Business System",
    desc: "A database-driven application designed to help businesses manage everyday operations such as bookings, inventory, customers and records.",
    best: "Businesses looking to digitize manual processes",
    features: [
      "Custom admin dashboard",
      "User accounts and authentication",
      "Database design",
      "Core business workflows",
      "Basic reporting",
      "Role-based permissions where required",
      "Testing and deployment",
    ],
    usd: "$690 – $1,730",
    tzs: "TSh 1.8M – 4.5M",
  },
  {
    n: "4",
    time: "3–6 weeks",
    title: "E-Commerce Website",
    desc: "An online store where customers can browse products, place orders and contact your business or pay online.",
    best: "Retail shops, cosmetics brands and product businesses",
    features: [
      "Product catalogue and categories",
      "Product detail pages",
      "Shopping cart and checkout",
      "Order management",
      "Mobile money or payment integration",
      "Admin product management",
      "Mobile-friendly design",
    ],
    usd: "$575 – $1,345",
    tzs: "TSh 1.5M – 3.5M",
  },
  {
    n: "5",
    time: "Scoped per project",
    title: "Custom Web Application",
    desc: "A tailored web platform for more complex requirements, including customer portals, booking platforms, internal tools and startup MVPs.",
    best: "Startups and businesses with specific software requirements",
    features: [
      "Requirements and feature planning",
      "Custom frontend and backend",
      "Database and API development",
      "Authentication and user roles",
      "Third-party integrations where required",
      "Testing and deployment",
      "Technical handover",
    ],
    usd: "From $1,150",
    tzs: "From TSh 3M",
  },
  {
    n: "6",
    time: "3–7 days",
    title: "SEO Setup & Optimization",
    desc: "Improve your website's technical SEO foundations and make it easier for search engines to understand your content.",
    best: "Businesses with existing websites",
    features: [
      "Page titles and meta descriptions",
      "Heading structure review",
      "Image optimization",
      "Sitemap and robots.txt",
      "Google Search Console setup",
      "Basic technical SEO review",
    ],
    usd: "$60 – $135",
    tzs: "TSh 150k – 350k",
  },
  {
    n: "7",
    time: "Monthly",
    title: "Website Maintenance",
    desc: "Practical ongoing support to keep your website updated, functional and working as expected.",
    best: "Businesses with existing websites",
    features: [
      "Minor bug fixes",
      "Small content and image updates",
      "Routine dependency updates",
      "Basic backup checks",
      "Technical troubleshooting",
      "Up to 2–4 support hours monthly",
    ],
    usd: "$25 – $60 / mo",
    tzs: "TSh 60k – 150k / mo",
  },
];



/* ---------------- SKILLS ---------------- */
export const SKILLS = [
  {
    area: "Frontend",
    tools: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    area: "Backend",
    tools: [
      "PHP",
      "Laravel",
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
    ],
  },
  {
    area: "Database & Storage",
    tools: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Firebase Firestore",
      "Redis",
      "SQL",
    ],
  },
  {
    area: "Mobile Development",
    tools: [
      "Flutter",
      "React Native",
      "Java",
      "Android Development",
    ],
  },
  {
    area: "Machine Learning",
    tools: [
      "Python",
      "Scikit-learn",
      "Data Preprocessing",
      "Classification",
      "Regression",
      "Model Evaluation",
    ],
  },
  {
    area: "Tools & Deployment",
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "NGINX",
      "Postman",
      "Vercel",
      "Netlify",
    ],
  },
  {
    area: "AI-Assisted Development",
    tools: [
      "AI Coding Assistants",
      "Prompt Engineering",
      "AI-Assisted Debugging",
    ],
  },
];


/* ---------------- TESTIMONIALS ---------------- */
export const TESTIMONIALS = [
  {
    quote: "Jonas did a great job developing our tours website. He was attentive to our ideas, open to feedback, and committed to bringing our vision online.",
    name: "Theophil Kiwia",
    role: "Native Kilimanjaro Safaris"
  },
  {
    quote: "I had the opportunity to work with Jonas during the early stages of Kibalit. He brought technical ideas to the table and showed a genuine interest in building practical solutions to business problems.",
    name: "Lucky Maro",
    role: "Kibalit"
  },
  {
    quote: "Working with Jonas was a positive experience. He understood what we wanted to achieve and worked to translate our ideas into a functional online presence.",
    name: "Balbina K.",
    role: "Balbina Safaris"
  },
  {
    quote: "I appreciate Jonas's dedication to software development and his ability to turn ideas into working digital solutions. His enthusiasm for technology is evident in the work he produces.",
    name: "Emmanuel K.",
    role: "Tourism"
  },
  {
    quote: "Jonas is passionate about technology and consistently demonstrates a willingness to learn, build, and solve problems. I appreciate his commitment to developing useful digital solutions.",
    name: "George Baraka",
    role: "Professional Connection"
  },
  {
    quote: "Did a great job bringing the e-commerce idea to life. He understood what we wanted, paid attention to the design and functionality, and delivered a website that makes the shopping experience feel more modern and straightforward.",
    name: "Thomas Warburg",
    role: "Enterprenuer"
  }
];

/* ---------------- INSIGHTS ---------------- */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "callout"; title: string; text: string };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: Block[];
};

/** Reading time in minutes, derived from the actual article text (~200 wpm). */
export function readMinutes(i: Insight): number {
  const words = i.body
    .map((b) => {
      if (b.t === "ul") return b.items.join(" ");
      if (b.t === "callout") return `${b.title} ${b.text}`;
      return b.text;
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export const slugify = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const INSIGHTS: Insight[] = [
  {
    slug: "how-much-does-a-website-cost-in-tanzania",
    category: "Pricing",
    title: "Website Development Cost in Tanzania: Real Prices, Examples, and Scope Breakdown",
    excerpt:
      "Website cost depends on what the website must do for the business. A focused landing page can start around $480, while managed business websites, e-commerce builds and custom web systems can range from $1,500 up to $35,800 depending on scope.",
    body: [
      { t: "p", text: "The honest answer to \u201chow much does a website cost in Tanzania?\u201d is: it depends entirely on what the website has to do for your business. A one-page site that introduces your company is a very different job from a dashboard that runs your daily operations \u2014 and the price follows the work, not the word \u201cwebsite\u201d." },
      { t: "p", text: "Below are the ranges I actually quote, what each one includes, and how to tell which tier you need. Prices are in TZS with the USD equivalent, and every project is scoped in writing before any money changes hands." },
      { t: "h2", text: "The price ranges at a glance" },
      { t: "ul", items: [
        "Starter Landing Page \u2014 TSh 1.2M \u2013 1.7M (about $480 \u2013 $690), delivered in 3\u20137 days",
        "Managed Business Website \u2014 TSh 3.7M \u2013 5.8M (about $1,500 \u2013 $2,350), 1\u20132 weeks",
        "Custom Business System (POS, inventory, CRM) \u2014 TSh 18M \u2013 30M (about $7,300 \u2013 $12,100), 3\u20135 weeks",
        "E-Commerce Website \u2014 TSh 11.7M \u2013 20M (about $4,700 \u2013 $8,150), 5\u20138 weeks",
        "Custom Web Application / SaaS \u2014 TSh 45M \u2013 90M (about $18,000 \u2013 $35,800), 8\u201312+ weeks",
        "SEO Services \u2014 $430 \u2013 $1,050, over 1\u20133 months",
        "Website Maintenance \u2014 $110 \u2013 $240 per month",
      ] },
      { t: "h2", text: "Starter landing page: $480 \u2013 $690" },
      { t: "p", text: "One well-designed, mobile-friendly page with your services, contact details and basic SEO. It is the right choice for a new business that needs to look credible online this week. The content is fixed: when something changes, you ask me to update it." },
      { t: "h2", text: "Managed business website: $1,500 \u2013 $2,350" },
      { t: "p", text: "The jump in price buys you independence. You get an admin dashboard so you can edit services, publish blog posts or update products without calling a developer. If you expect to change your site more than a few times a year, this tier usually pays for itself." },
      { t: "h2", text: "Custom business systems: $7,300 \u2013 $12,100" },
      { t: "p", text: "A POS, inventory tool, booking system or CRM is not a website \u2014 it replaces real operational work. You are paying for staff logins and permissions, a database that models how your business runs, reports you can trust, and workflow rules. That is why it costs several times more than a brochure site, and why it can save you far more than it costs." },
      { t: "h2", text: "E-commerce and custom web applications" },
      { t: "p", text: "Online stores ($4,700 \u2013 $8,150) add a product catalogue, cart, order management and mobile-money payments. Full custom platforms ($18,000 and up) are SaaS-style products with custom architecture, role-based access and a backend built to scale. Both need a planning phase first \u2014 it is the cheapest part of the project and prevents the most expensive mistakes." },
      { t: "callout", title: "What moves the price up or down", text: "The number of user roles, integrations (payments, SMS, WhatsApp, accounting), amount of custom reporting, and how much content or data has to be migrated. Design polish matters far less than functionality." },
      { t: "h2", text: "How to choose without overspending" },
      { t: "ul", items: [
        "Write down the three things the site must do for you. If they are \u201cshow information\u201d, start with the landing page.",
        "If you will edit content weekly, budget for the managed website.",
        "If staff will log in and records need to be tracked, you need a system, not a website.",
        "If you are unsure, pay for a short technical scoping session first \u2014 it often removes thousands of dollars of overbuilding.",
      ] },
      { t: "quote", text: "The right question isn\u2019t \u201chow cheap can I get it?\u201d \u2014 it\u2019s \u201cwhat will this system do for me every day for the next three years?\u201d" },
      { t: "p", text: "If you want a firm number for your own idea, send me a short description and I will reply within 24 hours with a scope, timeline and price." },
    ],
  },
  {
    slug: "nextjs-vs-wordpress-tanzania",
    category: "Technology",
    title: "Next.js vs WordPress for Tanzanian Businesses",
    excerpt:
      "WordPress is often a good choice for content-heavy websites that need simple editing. Next.js is usually stronger when the business needs speed, custom workflows, SEO-focused pages, dashboards, portals, or room to grow into a full web application.",
    body: [
      { t: "p", text: "Both tools are good. The mistake I see most often is not picking the \u201cwrong\u201d one \u2014 it is picking one for the wrong job. Here is how I decide for clients in Tanzania." },
      { t: "h2", text: "When WordPress is the right call" },
      { t: "p", text: "If your website is mostly articles, service pages and a contact form, and a non-technical person will edit content every week, WordPress does the job well. Editing is familiar, themes are cheap, and hosting is easy to find." },
      { t: "ul", items: [
        "A marketing brochure or blog with frequent text updates",
        "A tight budget and a short deadline",
        "No custom logic beyond forms and basic plugins",
      ] },
      { t: "h2", text: "Where WordPress starts to strain" },
      { t: "p", text: "Every plugin is a tradeoff between features, speed, security and lock-in. The moment you need custom workflows, dashboards, user accounts with different permissions, or consistently fast pages on mobile networks, you end up fighting the platform instead of building on it." },
      { t: "h2", text: "When Next.js is the better fit" },
      { t: "p", text: "Next.js gives full control over performance and structure. Pages can be rendered ahead of time for speed and SEO, and the same codebase can power a dashboard, a customer portal or a booking system." },
      { t: "ul", items: [
        "SEO and page speed directly affect your revenue",
        "The site is really an application: dashboards, portals, bookings, payments",
        "You expect to add features over the next few years",
        "You want to integrate mobile money, messaging or internal systems properly",
      ] },
      { t: "callout", title: "The editing question", text: "The real tradeoff is who edits content. With Next.js I add a lightweight admin area or a headless CMS so your team can still update text and images \u2014 it simply takes more setup than installing a WordPress theme." },
      { t: "h2", text: "My rule of thumb" },
      { t: "p", text: "I recommend Next.js when SEO, speed or product-like features matter, and WordPress when the site is genuinely a marketing brochure that a non-developer will edit weekly. If you are not sure which side you are on, that is exactly what a short planning session is for." },
    ],
  },
  {
    slug: "why-bookkeeping-comes-before-credit-scoring",
    category: "Case Study",
    title: "Why Bookkeeping Has to Come Before Credit Scoring: Lessons from Building Kitu Analytics",
    excerpt:
      "Kitu Analytics is a bookkeeping, analytics and credit-insight platform for small businesses. Here is why it starts with simple record-keeping, and what that means for any business system I build.",
    body: [
      { t: "p", text: "Kitu Analytics is the product I am building right now. The goal is simple to say and hard to do: help a small business understand its own numbers and, in time, prove them to a lender. It is still in MVP development, so this is a story about decisions, not results." },
      { t: "h2", text: "1. A credit score is only as good as the records behind it" },
      { t: "p", text: "Most small businesses in Tanzania run on memory, notebooks and chat messages. A bank looking at that has nothing reliable to read. Any scoring model built on top of missing or messy data is guessing, so the records have to come first." },
      { t: "h2", text: "2. Bookkeeping must be easier than the notebook" },
      { t: "p", text: "If recording a sale takes longer than writing it down, the owner stops. So the first job of the product is not analytics or scoring \u2014 it is record-keeping an owner will actually use every day." },
      { t: "h2", text: "3. Turn records into plain-language insight" },
      { t: "p", text: "Owners do not need a dashboard full of charts. They need to know whether the business is healthy, what changed this week, and what to do next, in words they would use themselves \u2014 in English or Swahili." },
      { t: "h2", text: "4. Keep the scoring service separate" },
      { t: "p", text: "The credit-scoring model runs as its own service, apart from the app owners use. That lets the model change without touching the day-to-day product, and it keeps the whole stack easy to run in Docker with one command." },
      { t: "callout", title: "What I bring to client work", text: "Before building anything I ask what the business records today, who will enter the data, and what decision the data should support. A system people keep using beats a clever one they abandon." },
      { t: "p", text: "You can see the full case study on the home page, or read the project details and repository on the Kitu Analytics page." },
    ],
  },
  {
    slug: "spreadsheet-vs-custom-business-system",
    category: "Business Systems",
    title: "Spreadsheets, Notebooks or a Custom System? How to Know When It Is Time to Switch",
    excerpt:
      "Many Tanzanian businesses run on notebooks, spreadsheets and WhatsApp messages. That works until it doesn\u2019t. Here are the signs it\u2019s time for a POS, inventory or booking system \u2014 and what to expect when you build one.",
    body: [
      { t: "p", text: "Most small businesses do not start with software, and they should not. A notebook and a phone are fine when you have one till and two staff. The question is how to recognise the moment when the old way starts costing you money." },
      { t: "p", text: "One retail client was tracking sales, feed stock and bird counts across notebooks and WhatsApp messages. Nothing was \u201cbroken\u201d, but nobody could say with confidence how much stock they had or what they had earned that week. That is the typical starting point for a custom system." },
      { t: "h2", text: "Signs it is time to switch" },
      { t: "ul", items: [
        "You cannot answer \u201cwhat did we sell today?\u201d without calling someone",
        "Stock counts disagree between the shelf, the notebook and the spreadsheet",
        "Month-end closing takes days because data lives in several places",
        "Different staff should see different things, but everyone can see everything",
        "You spend more time chasing information than acting on it",
      ] },
      { t: "h2", text: "What a custom system actually replaces" },
      { t: "p", text: "A good system is not a fancy website. It replaces specific manual work: a point of sale with quick keys or barcodes, inventory that updates when you sell, daily and weekly revenue reports, and staff accounts with role-based access so a cashier cannot edit prices." },
      { t: "h2", text: "What to expect when building one" },
      { t: "ul", items: [
        "A scoping conversation first \u2014 we map how your business really runs, not how a template assumes it does",
        "A working first version in a few weeks, which you test with real staff",
        "Typical delivery of 3\u20135 weeks for a Custom Business System, depending on workflows and integrations",
        "Training and handover documentation, plus 30 days of free post-launch support",
      ] },
      { t: "callout", title: "Do not automate a mess", text: "If a process is confusing on paper, software will make it confusing faster. Part of my job is simplifying the workflow before I build it." },
      { t: "h2", text: "Is it worth it?" },
      { t: "p", text: "Custom business systems start around $7,300 \u2013 $12,100 because they replace real operational work. If you are losing hours every week to reconciliation, or losing stock you cannot account for, the system pays for itself faster than most people expect. If you are not there yet, a managed website or a simple spreadsheet is a perfectly good place to stay." },
    ],
  },
];

export const getInsight = (slug: string) => INSIGHTS.find((i) => i.slug === slug);

/* ---------------- FAQ ---------------- */
export const FAQS = [
  { q: "What kind of projects do you take on?", a: "Production web applications, business systems (POS, inventory, CRM), e-commerce platforms, and custom SaaS. If it lives on the web and needs to scale, I can build it." },
  { q: "Where are you based and who do you work with?", a: "I'm based in Tanzania and work remotely with clients across Africa, Europe, and North America. Async-first communication, weekly demos." },
  { q: "How does payment work?", a: "Most projects are 50% upfront and 50% on launch. For longer projects, we split into milestones. I accept bank transfer, mobile money (Tanzania), and Wise." },
  { q: "Do you provide post-launch support?", a: "Yes. Every project includes 30 days of free post-launch support. After that, optional monthly maintenance plans cover hosting, updates, and improvements." },
  { q: "Can you take over an existing project?", a: "Yes. I do code audits, refactors, and rescue projects from previous developers. I'll send you a written assessment before quoting." },
  { q: "How do I get started?", a: "Use the project inquiry form, or message me directly on WhatsApp, email or phone. We'll book a 30-min discovery call, then I'll send a written proposal within 48 hours." },
];
