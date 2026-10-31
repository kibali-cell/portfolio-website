import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { HashLink } from "@/components/hash-link";
import { TierCard } from "@/components/home/services-pricing";
import { TIERS } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Jonas Kiwia" },
      { name: "description", content: "Transparent website and web-system pricing in USD and TZS — from a $480 landing page to custom platforms." },
      { property: "og:title", content: "Pricing — Jonas Kiwia" },
      { property: "og:description", content: "Transparent website and web-system pricing in USD and TZS." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const t = useT();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 pb-6 pt-12 md:px-8 md:pt-20">
          <span className="pill">{t("pricing.pill")}</span>
          <h1 className="display mt-4 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">{t("pricing.title")}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("pricing.sub")}</p>
        </section>
        <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((x) => (
              <TierCard key={x.n} tier={x} />
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-muted-foreground">{t("pricing.note")}</p>
            <HashLink id="contact" className="btn-dark px-6 py-3 text-sm">{t("contact.tabInquiry")}</HashLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
