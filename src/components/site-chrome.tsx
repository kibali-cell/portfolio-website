import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "./theme-toggle";
import { LangToggle } from "./lang-toggle";
import { Logo } from "./logo";
import { HashLink } from "./hash-link";
import { useActiveSection, type SpySection } from "@/hooks/use-active-section";
import { scrollToTarget } from "@/lib/smooth-scroll";
import { useT, type StrKey } from "@/lib/i18n";
import { SITE } from "@/data/portfolio";

type NavItem = { key: StrKey; to: "/" | "/projects" | "/services" | "/pricing" | "/insights" | "/about"; section?: string };

const NAV: NavItem[] = [
  { key: "nav.projects", to: "/projects", section: "projects" },
  { key: "nav.caseStudy", to: "/", section: "case-study" },
  { key: "nav.services", to: "/services", section: "services" },
  { key: "nav.pricing", to: "/pricing" },
  { key: "nav.insights", to: "/insights" },
  { key: "nav.about", to: "/about" },
  { key: "nav.contact", to: "/", section: "contact" },
];

/**
 * Every section on the home page the scroll-spy tracks, in any order.
 * `nav: null` = a real section that belongs to no nav item (clears the highlight).
 */
const SPY_SECTIONS: SpySection[] = [
  { id: "projects", nav: "projects" },
  { id: "case-study", nav: "case-study" },
  { id: "services", nav: "services" },
  { id: "testimonials", nav: null },
  { id: "contact", nav: "contact" },
  { id: "faq", nav: null },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  scrollToTarget(el);
  window.history.replaceState(null, "", `#${id}`);
  return true;
}

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const { active, lockTo } = useActiveSection(isHome ? SPY_SECTIONS : []);

  const renderNavLink = (n: NavItem, mobile = false) => {
    // Home: the scroll-spy decides. Other pages: the matching top-level link is active.
    const isActive = isHome
      ? !!n.section && active === n.section
      : n.to !== "/" && (pathname === n.to || pathname.startsWith(`${n.to}/`));

    const cls = mobile
      ? `py-3 border-b border-border/60 last:border-0 ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`
      : `relative py-1 transition-colors hover:text-foreground ${isActive ? "text-foreground" : ""}`;

    const indicator = mobile ? null : (
      <span
        aria-hidden
        className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-foreground transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      />
    );
    const label = t(n.key);

    // On the home page, links that map to a section glide to it.
    if (isHome && n.section) {
      return (
        <a
          key={n.key}
          href={`#${n.section}`}
          aria-current={isActive ? "location" : undefined}
          onClick={(e) => {
            if (scrollToSection(n.section!)) {
              e.preventDefault();
              lockTo(n.section!);
            }
            if (mobile) setOpen(false);
          }}
          className={cls}
        >
          {label}
          {indicator}
        </a>
      );
    }

    return (
      <Link
        key={n.key}
        to={n.to}
        hash={n.to === "/" ? n.section : undefined}
        aria-current={isActive ? "page" : undefined}
        onClick={() => mobile && setOpen(false)}
        className={cls}
      >
        {label}
        {indicator}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:px-8">
        <Link to="/" aria-label={t("nav.home")} title="Jonas Kiwia" className="shrink-0 transition-transform hover:scale-105">
          <Logo size={38} />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground md:flex lg:gap-7">
          {NAV.map((n) => renderNavLink(n))}
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="menu-drop border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm font-medium">
            {NAV.map((n) => renderNavLink(n, true))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-20 border-t border-border bg-surface md:mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-8 md:py-14">
        <div className="sm:col-span-2">
          <Link to="/" aria-label={t("nav.home")} className="mb-4 inline-block">
            <Logo size={40} />
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{t("footer.blurb")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <HashLink id="contact" className="btn-dark px-5 py-3 text-sm">
              {t("footer.start")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </HashLink>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">{t("footer.explore")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/projects" className="hover:text-foreground">{t("nav.projects")}</Link></li>
            <li><Link to="/services" className="hover:text-foreground">{t("nav.services")}</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">{t("nav.pricing")}</Link></li>
            <li><Link to="/insights" className="hover:text-foreground">{t("nav.insights")}</Link></li>
            <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">{t("footer.connect")}</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub · kibali-cell</a></li>
            <li><a href={SITE.githubAlt} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub · JonasDeo</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a></li>
            <li><a href={SITE.cv} download className="hover:text-foreground">{t("cv.download")}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-foreground">{t("footer.email")}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Jonas Kiwia. {t("footer.rights")}</p>
          <p>{t("footer.located")}</p>
        </div>
      </div>
    </footer>
  );
}
