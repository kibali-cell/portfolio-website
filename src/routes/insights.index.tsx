import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { INSIGHTS, readMinutes } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Jonas Kiwia" },
      { name: "description", content: "Practical insights from building real products in Tanzania — cost, tools, stacks, and business systems." },
      { property: "og:title", content: "Insights — Jonas Kiwia" },
      { property: "og:description", content: "Short reads on builds, decisions, platforms, and business systems." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const t = useT();
  const L = useLocalized();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-20 pb-8">
          <span className="pill">{t("insights.pill")}</span>
          <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)] mt-4 max-w-3xl">
            {t("insights.title")}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            {t("insights.sub")}
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-5 md:px-8 py-8">
          <div className="grid gap-5">
            {INSIGHTS.map((raw) => { const i = L.insight(raw); return (
              <Link key={i.slug} to="/insights/$slug" params={{ slug: i.slug }} className="card-soft p-8 lift block">
                <p className="text-xs font-bold text-muted-foreground">{i.category} · {readMinutes(i)} {t("insights.min")}</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight">{i.title}</h2>
                <p className="mt-3 text-muted-foreground line-clamp-3">{i.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  {t("insights.read")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ); })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
