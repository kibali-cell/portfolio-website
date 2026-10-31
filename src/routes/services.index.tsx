import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SERVICES } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Jonas Kiwia" },
      { name: "description", content: "Web development, custom business systems, Node.js APIs, SEO, and maintenance services from Tanzania." },
      { property: "og:title", content: "Services — Jonas Kiwia" },
      { property: "og:description", content: "Full service hub — web apps, backends, integrations, SEO and maintenance." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  const L = useLocalized();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-20 pb-8">
          <span className="pill">{t("services.hub")}</span>
          <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)] mt-4 max-w-3xl">
            {t("services.pageTitle")}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            {t("services.pageSub")}
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(L.service).map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="card-soft p-7 lift block">
                <p className="display text-4xl text-muted-foreground">{s.n}</p>
                <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  {t("services.view")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
