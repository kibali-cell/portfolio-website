

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
  formEndpoint: "https://formsubmit.co/ajax/jonasdeo02@gmail.com",
} as const;

/**
 * Canonical numbers — change them here and they update everywhere.
 */
export const STATS = {
  users: "15,500+", // cPage active users (long form)
  usersShort: "15.5K+", // same number, compact
  universities: "50+",
  coverPages: "17K+",
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
    slug: "cpage",
    name: "cPage",
    tag: "Academic Cover Page Generator",
    featured: true,
    live: "https://cpage.co.tz/",
    summary: `The most-used student productivity tool in Tanzania — ${STATS.users} users generating cover pages for ${STATS.universities} universities.`,
    problem: "Every Tanzanian student wastes 30 minutes formatting a cover page for every assignment. Group assignments turn into a midnight admin nightmare.",
    solution: [
      `Templates for ${STATS.universities} Tanzanian universities`,
      "Individual & Group modes with smart team management",
      "Generates editable .docx files",
      "Smart autofill for repeat information",
      "Completely free with zero account creation required",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    slug: "safari-tours",
    name: "Safari Tours",
    tag: "Safari Tour Platform",
    featured: true,
    github: gh("JonasDeo", "Safari-Tours"),
    live: "https://native-kilimanjaro.vercel.app",
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
    slug: "ipf-meals",
    name: "iPF Meals",
    tag: "Meals Selection System",
    featured: true,
    summary: "Internal meal-selection & reminder system for iPF Softwares, powered by a Telegram bot and an admin dashboard.",
    problem: "The team kept losing track of daily meal choices, and the admin was chasing people over WhatsApp every lunch hour.",
    solution: [
      "Telegram bot that pings each engineer to pick their meal",
      "Admin dashboard to manage menus, orders and vendors",
      "Daily reports exported to the operations team",
      "Role-based accounts for admins, vendors, and staff",
    ],
    stack: ["Node.js", "Telegram Bot API", "MySQL", "React"],
  },
  {
    slug: "usalama-barabarani",
    name: "Usalama Barabarani",
    tag: "Android · Driving Education",
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
    github: gh("kibali-cell", "eCommerce-Flutter"),
    summary: "A shopping app built with Flutter for a smooth buying experience on mobile.",
    problem: "Shoppers expect a fast, native-feeling app rather than a slow mobile website.",
    solution: ["Cross-platform mobile storefront", "Smooth browsing and checkout flow", "Single Flutter codebase"],
    stack: ["Flutter", "Dart"],
  },
  {
    slug: "wifi-billing",
    name: "Wi-Fi Billing System",
    tag: "MikroTik Hotspot Billing & Vouchers",
    summary: "Hotspot billing platform for ISPs running MikroTik routers — voucher generation, plans, and revenue reporting.",
    problem: "Small ISPs were juggling MikroTik CLI, spreadsheets and printed vouchers to bill hotspot customers.",
    solution: [
      "Voucher generation with printable batches",
      "MikroTik RADIUS integration",
      "Revenue and usage dashboards",
      "Multi-hotspot support",
    ],
    stack: ["PHP", "MySQL", "MikroTik API", "Tailwind"],
  },
  {
    slug: "maconet",
    name: "Maconet Agribusiness",
    tag: "Agribusiness Marketing & Investment Platform",
    live: "https://www.mass.co.tz/",
    summary: "Marketing site and investor portal for a Tanzanian agribusiness fund.",
    problem: "Maconet needed a credible online presence to attract diaspora investors and share farm updates.",
    solution: [
      "Investor-focused marketing pages",
      "News & updates section",
      "Contact & investment enquiry flow",
      "Mobile-first responsive design",
    ],
    stack: ["Next.js", "Tailwind", "Sanity CMS"],
  },
  {
    slug: "trinity",
    name: "Trinity",
    tag: "Poultry POS",
    summary: "Point-of-sale and inventory system built for a Tanzanian poultry retail chain.",
    problem: "The business was tracking sales, feed stock and bird counts in a mix of notebooks and WhatsApp messages.",
    solution: [
      "Fast POS with barcode & quick keys",
      "Feed & stock inventory tracking",
      "Daily/weekly revenue reports",
      "Role-based staff accounts",
    ],
    stack: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "exchange-safaris",
    name: "Exchange Safaris & Tours",
    tag: "Travel & Courier Services Website",
    live: "https://exchangesafaris.co.tz/",
    summary: "Website and booking flow for a Tanzanian safari and courier company.",
    problem: "Bookings were entirely over phone — no online catalog, no lead capture, no way to share tour packages.",
    solution: [
      "Tour package catalog with rich imagery",
      "Booking / quote request forms",
      "Courier service pages",
      "SEO-focused route pages",
    ],
    stack: ["Next.js", "Tailwind", "Node.js"],
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
  { slug: "custom-websites", n: "01", title: "Custom Business Websites",
    short: "Fast, mobile-friendly websites for Tanzanian businesses — landing pages, service pages, and contact flows that convert.",
    long: "I design and ship business websites focused on speed, SEO and clear conversion. Every page is built to be easy to update and easy for search engines to crawl.",
    deliverables: ["Responsive design", "SEO foundations", "CMS or editable content", "Contact & lead capture", "Analytics setup"] },
  { slug: "nextjs-react", n: "02", title: "Next.js & React Web Apps",
    short: "Responsive web applications with React, Next.js and TypeScript — dashboards, SaaS products, client portals, and internal tools.",
    long: "I build production React and Next.js applications for teams that need dashboards, SaaS surfaces, portals, and internal business tools.",
    deliverables: ["Typed React + Next.js codebase", "Auth & role-based access", "Dashboards & reports", "Deploy pipeline", "Handover documentation"] },
  { slug: "node-apis", n: "03", title: "Node.js APIs & Backends",
    short: "Reliable Node.js APIs, SQL databases, authentication, permissions, integrations and reporting flows.",
    long: "Behind every useful app is a reliable backend. I build REST APIs, database schemas, auth systems and integrations that stay maintainable as the product grows.",
    deliverables: ["REST API design", "Database schema", "Auth, roles & permissions", "3rd-party integrations", "Monitoring & logging"] },
  { slug: "planning-consulting", n: "04", title: "Technical Planning & Consulting",
    short: "Choose the right technical plan, define realistic scope, and avoid expensive overbuilding before development starts.",
    long: "I help founders and business owners pick the right stack, scope realistic MVPs, and review architecture before spending on development.",
    deliverables: ["Technical scoping doc", "Stack & vendor recommendation", "Milestone plan", "Cost & timeline estimate"] },
  { slug: "maintenance", n: "05", title: "Website Maintenance Tanzania",
    short: "Deploy websites and web apps, keep them updated, monitor reliability, fix bugs, improve performance, and support changes after launch.",
    long: "Ongoing technical support so your site stays fast, secure and running — bug fixes, content updates, backups and uptime monitoring.",
    deliverables: ["Bug fixes", "Content updates", "Backups", "Uptime monitoring", "Monthly report"] },
  { slug: "seo-performance", n: "06", title: "SEO & Performance",
    short: "Improve page performance, metadata, headings, structured data, sitemap coverage, and technical SEO foundations.",
    long: "Speed and crawlability matter. I audit and improve your site's Core Web Vitals, SEO fundamentals and structured data.",
    deliverables: ["Lighthouse audit", "On-page SEO fixes", "Structured data", "Sitemap & robots", "Monthly performance report"] },
  { slug: "api-integration", n: "07", title: "API Integration",
    short: "Plan and build reliable integrations for payments, messaging, data services, and internal workflows.",
    long: "Connect third-party services — payments, mobile money, messaging, CRMs — into your product with proper error handling and observability.",
    deliverables: ["Integration design", "Sandbox + prod setup", "Webhooks & retries", "Error monitoring"] },
  { slug: "debugging", n: "08", title: "Debugging",
    short: "Investigate the cause, explain the tradeoff, and fix the problem — without turning it into a rebuild.",
    long: "Got an issue with your current app? I diagnose the root cause, propose the smallest safe fix, and ship it.",
    deliverables: ["Root cause report", "Targeted fix", "Regression test", "Follow-up recommendations"] },
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
export const TIERS = [
  { n: "1", time: "3–7 days", title: "Starter Landing Page", desc: "A simple fixed-content page for small businesses that need a clean online presence.", best: "Small businesses needing a simple page", features: ["One-page website", "Responsive design", "Business info section", "Contact section", "Basic SEO setup"], usd: "$480 – $690", tzs: "1.2M – 1.7M TZS" },
  { n: "2", time: "1–2 weeks", title: "Managed Business Website", desc: "A small business website with an admin area for updating content like services, blogs, or products.", best: "Businesses that want to update without calling a dev", features: ["Responsive website", "Admin dashboard", "Editable content", "Blog or product section", "Contact section"], usd: "$1,500 – $2,350", tzs: "3.7M – 5.8M TZS" },
  { n: "3", time: "3–5 weeks", title: "Custom Business System", desc: "A web-based operations system built around how your business works — POS, inventory, bookings, records, and CRM.", best: "Businesses needing POS, inventory, booking or CRM", features: ["Admin dashboard", "User accounts", "Database system", "Reports section", "Business workflow tools"], usd: "$7,300 – $12,100", tzs: "18M – 30M TZS", featured: true },
  { n: "4", time: "5–8 weeks", title: "E-Commerce Website", desc: "A complete online store for selling products or services with payment and order management.", best: "Businesses selling products or services online", features: ["Product catalog", "Shopping cart", "Order management", "Mobile money payments", "Admin dashboard"], usd: "$4,700 – $8,150", tzs: "11.7M – 20M TZS" },
  { n: "5", time: "8–12+ weeks", title: "Custom Web Application", desc: "A fully tailored platform built around your workflows — SaaS products, MVPs, portals, and complex internal systems.", best: "Startups needing a custom platform, SaaS or MVP", features: ["Custom architecture", "Advanced features", "Scalable backend", "Role-based access", "Consultation & planning"], usd: "$18,000 – $35,800", tzs: "45M – 90M TZS" },
  { n: "6", time: "1–3 months", title: "SEO Services", desc: "Search engine optimization to improve website visibility and attract organic traffic.", best: "Businesses looking to rank higher on Google", features: ["Keyword optimization", "On-page SEO", "Performance monitoring", "SEO reporting"], usd: "$430 – $1,050", tzs: "1M – 2.6M TZS" },
  { n: "7", time: "Monthly", title: "Website Maintenance", desc: "Ongoing support to keep your site secure, updated, and running — bug fixes, backups, and uptime monitoring.", best: "Existing website owners wanting peace of mind", features: ["Bug fixes", "Content updates", "Backups", "Uptime monitoring"], usd: "$110 – $240 / mo", tzs: "275k – 600k TZS / mo" },
];

/* ---------------- SKILLS ---------------- */
export const SKILLS = [
  { area: "Frontend", tools: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Shadcn UI"] },
  { area: "Backend", tools: ["Node.js", "Express", "REST APIs", "JWT & OAuth", "PHP"] },
  { area: "Database", tools: ["PostgreSQL", "MySQL", "Prisma ORM", "Data modeling"] },
  { area: "Deployment", tools: ["Linux", "NGINX", "Apache", "CI/CD", "Uptime monitoring"] },
  { area: "Collaboration", tools: ["Git", "GitHub", "Code reviews", "Async handover"] },
  { area: "AI-Assisted Dev", tools: ["Claude", "Cursor", "Lovable", "OpenCode"] },
];

/* ---------------- TESTIMONIALS ---------------- */
export const TESTIMONIALS = [
  { quote: "Jonas understood the problem before we finished explaining it. The system he built replaced our spreadsheets and sped up monthly closing by days.", name: "Jonas Mshiu", role: "Director · TRP Construction" },

  { quote: "cPage simplifies the hustle of creating cover pages. It saves cost to students, exposes them to technology, and it just works.", name: "Felix Mselle", role: "Stationery Entrepreneur" },
  { quote: "I'm thoroughly impressed by the web development services Jonas provided. Professional, dedicated, and clear communication throughout.", name: "Lilian Mihale", role: "Health Counselor · Mihale Afya Clinic" },
  { quote: "The custom POS Jonas built has completely transformed our daily operations — fast, reliable, and drastically reduced our manual bookkeeping.", name: "Emmanuel M.", role: "Business Owner · Retail" },
  { quote: "Thoughtful in the way he builds products and open to collaboration. Working together on the Swahili AI project was smooth and productive.", name: "Inzari Senzia", role: "Content Engineer" },
  { quote: "Good understanding of core software development principles. He breaks complex issues into simple, actionable steps.", name: "Jovin Shija", role: "Software Engineer · Nasiacademy" },
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
      { t: "p", text: "Below are the ranges I actually quote, what each one includes, and how to tell which tier you need. Prices are in USD with the TZS equivalent, and every project is scoped in writing before any money changes hands." },
      { t: "h2", text: "The price ranges at a glance" },
      { t: "ul", items: [
        "Starter Landing Page \u2014 $480 \u2013 $690 (about 1.2M \u2013 1.7M TZS), delivered in 3\u20137 days",
        "Managed Business Website \u2014 $1,500 \u2013 $2,350 (3.7M \u2013 5.8M TZS), 1\u20132 weeks",
        "Custom Business System (POS, inventory, CRM) \u2014 $7,300 \u2013 $12,100 (18M \u2013 30M TZS), 3\u20135 weeks",
        "E-Commerce Website \u2014 $4,700 \u2013 $8,150 (11.7M \u2013 20M TZS), 5\u20138 weeks",
        "Custom Web Application / SaaS \u2014 $18,000 \u2013 $35,800 (45M \u2013 90M TZS), 8\u201312+ weeks",
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
    slug: "what-cpage-taught-me-about-building-products",
    category: "Case Study",
    title: `What ${STATS.users.replace("+", "")} Students Taught Me About Building a Product People Actually Use`,
    excerpt:
      `cPage started as a personal frustration and grew to ${STATS.users} active users across ${STATS.universities} institutions with a zero marketing budget. These are the product lessons I now apply to every client project.`,
    body: [
      { t: "p", text: `cPage is a cover page generator for Tanzanian university students. It began as a way to stop wasting 30 minutes formatting a cover page before every assignment, and it grew to ${STATS.users} active users across ${STATS.universities} institutions \u2014 with no marketing budget at all.` },
      { t: "p", text: "I did not plan that growth. But looking back, a handful of decisions made the difference, and they apply just as well to a client\u2019s POS system as they do to a student tool." },
      { t: "h2", text: "1. Start with a task that repeats" },
      { t: "p", text: "Every student writes assignments all year, and every assignment needs a cover page. A small, painful, repeated task is a far better starting point than a big vague idea, because people feel the benefit every single time they use it." },
      { t: "h2", text: "2. Remove every step between the user and the result" },
      { t: "p", text: "cPage is completely free and needs no account. You pick your university, fill in your details and get a document. Every sign-up form I did not add was a user I did not lose." },
      { t: "h2", text: "3. Output something people already use" },
      { t: "p", text: "cPage generates editable .docx files. Students can open them in the tools they already have and tweak anything. A product that fits into an existing workflow gets adopted; one that asks people to change their habits gets ignored." },
      { t: "h2", text: "4. Solve the awkward version of the problem" },
      { t: "p", text: "Group assignments meant one person became the unofficial \u201ccover page person\u201d, chasing five classmates at midnight. Adding a group mode with smart team management removed that pain entirely, and it was one of the features students told their friends about most." },
      { t: "h2", text: "5. Treat word-of-mouth as your growth metric" },
      { t: "p", text: "With no budget for ads, the only marketing was people telling classmates \u201cjust use cPage\u201d. That forced me to make the first-time experience obvious and fast \u2014 if a new user could not finish in under a minute, the product failed." },
      { t: "callout", title: "What I bring to client work", text: "I ask the same questions: what is the repeated painful task, what can be removed, what format do your people already use, and who is the awkward edge case? The answers usually shape the scope better than a feature list does." },
      { t: "p", text: "You can see the full story, numbers and timeline in the cPage case study on the home page, or try the product yourself at cpage.co.tz." },
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
