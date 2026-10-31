import { Link } from "@tanstack/react-router";
import { HashLink } from "@/components/hash-link";
import { ArrowRightIcon } from "@/components/icons";
import { SERVICES, TIERS } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

export function TierCard({ tier }: { tier: (typeof TIERS)[number] }) {
  const t = useT();
  const L = useLocalized();
  const x = L.tier(tier);
  return (
    <article className={`card-soft card-pad lift flex flex-col ${x.featured ? "ring-2 ring-foreground" : ""}`}>
      <div className="flex items-center justify-between text-xs">
        <span className="display text-3xl">{x.n}</span>
        <span className="text-muted-foreground">
          {t("pricing.doneIn")} <strong className="text-foreground">{x.time}</strong>
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold">{x.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
      <p className="mt-3 text-xs">
        <span className="text-muted-foreground">{t("pricing.bestFor")}</span>
        {x.best}
      </p>
      <ul className="mt-5 flex-1 space-y-2 text-sm">
        {x.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t border-border pt-5">
        <p className="font-bold">{x.usd}</p>
        <p className="text-xs text-muted-foreground">{x.tzs}</p>
        <HashLink id="contact" className={`mt-4 inline-flex w-full justify-center ${x.featured ? "btn-dark" : "btn-ghost"}`}>
          {t("pricing.start")}
        </HashLink>
      </div>
    </article>
  );
}

/** Services + the three most common price tiers, in one section. */
export function ServicesSection() {
  const t = useT();
  const L = useLocalized();
  const top = SERVICES.slice(0, 4);
  const tiers = TIERS.filter((x) => ["1", "2", "3"].includes(x.n));

  return (
    <section id="services" className="section">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="pill">{t("services.pill")}</span>
          <h2 className="section-title mt-4 max-w-2xl">{t("services.title")}</h2>
        </div>
        <p className="max-w-sm text-muted-foreground">{t("services.sub")}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {top.map((raw) => {
          const s = L.service(raw);
          return (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="card-soft card-pad lift group block">
              <p className="display text-3xl text-muted-foreground transition group-hover:text-foreground">{s.n}</p>
              <h3 className="mt-4 text-lg font-bold leading-tight">{s.title}</h3>
              <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <Link to="/services" className="btn-ghost px-5 py-2.5 text-sm">
          {t("services.allLink")} ({SERVICES.length})
        </Link>
      </div>

      <div id="pricing" className="mt-16 text-center">
        <span className="pill">{t("pricing.pill")}</span>
        <h3 className="section-title mx-auto mt-4 max-w-2xl">{t("pricing.homeTitle")}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("pricing.homeSub")}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((x) => (
          <TierCard key={x.n} tier={x} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/pricing" className="btn-dark px-6 py-3 text-sm">
          {t("pricing.seeAll")} ({TIERS.length})
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </section>
  );
}
