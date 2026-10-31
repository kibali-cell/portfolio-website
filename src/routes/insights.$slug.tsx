import { useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { INSIGHTS, getInsight, readMinutes, slugify, type Block } from "@/data/portfolio";
import { HashLink } from "@/components/hash-link";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const i = getInsight(params.slug);
    if (!i) throw notFound();
    return { slug: i.slug };
  },
  head: ({ loaderData }) => {
    const i = loaderData ? getInsight(loaderData.slug) : undefined;
    const title = i ? `${i.title} — Jonas Kiwia` : "Insight — Jonas Kiwia";
    const desc = i?.excerpt ?? "Insight — Jonas Kiwia";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: InsightDetail,
  notFoundComponent: InsightNotFound,
});

function InsightNotFound() {
  const t = useT();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="display text-4xl">{t("insights.notFound")}</h1>
        <p className="mt-3 text-muted-foreground">{t("insights.notFoundSub")}</p>
        <Link to="/insights" className="btn-dark mt-8 inline-flex">{t("insights.allBtn")}</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

/** Thin bar at the top of the viewport showing how far through the article you are. */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article-body");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setPct(total <= 0 ? 100 : Math.min(100, Math.max(0, (-r.top / total) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div aria-hidden className="fixed left-0 right-0 top-16 z-30 h-0.5 bg-transparent">
      <div className="h-full bg-foreground transition-[width] duration-100" style={{ width: `${pct}%` }} />
    </div>
  );
}

function RenderBlock({ b }: { b: Block }) {
  switch (b.t) {
    case "h2":
      return (
        <h2 id={slugify(b.text)} className="mt-12 text-2xl md:text-[1.75rem] font-bold leading-tight">
          {b.text}
        </h2>
      );
    case "p":
      return <p>{b.text}</p>;
    case "ul":
      return (
        <ul className="space-y-2.5 pl-1">
          {b.items.map((it) => (
            <li key={it} className="flex items-start gap-3">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-2 border-l-4 border-foreground pl-5 text-xl md:text-2xl font-semibold leading-snug tracking-tight">
          {b.text}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="rounded-2xl bg-surface p-6">
          <p className="text-sm font-bold">{b.title}</p>
          <p className="mt-2 text-[16px] leading-relaxed text-muted-foreground">{b.text}</p>
        </aside>
      );
  }
}

function InsightDetail() {
  const { slug } = Route.useLoaderData();
  const t = useT();
  const L = useLocalized();
  const raw = getInsight(slug);
  if (!raw) return null;
  const i = L.insight(raw);

  const idx = INSIGHTS.findIndex((x) => x.slug === i.slug);
  const prev = idx > 0 ? L.insight(INSIGHTS[idx - 1]) : null;
  const next = idx < INSIGHTS.length - 1 ? L.insight(INSIGHTS[idx + 1]) : null;
  const toc = i.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <ReadingProgress />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 md:px-8 pt-10 md:pt-16 pb-16">
          <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground">{t("insights.all")}</Link>

          <header>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-muted-foreground">
              <span className="pill">{i.category}</span>
              <span>{readMinutes(i)} {t("insights.min")}</span>
              <span aria-hidden>·</span>
              <span>{t("insights.by")}</span>
            </div>
            <h1 className="display text-[clamp(2rem,5vw,3.5rem)] mt-5 text-balance">{i.title}</h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">{i.excerpt}</p>
            {!i.translated && (
              <p className="mt-5 rounded-xl bg-surface px-4 py-3 text-sm text-muted-foreground">{t("insights.enOnly")}</p>
            )}
          </header>

          {toc.length > 1 && (
            <nav aria-label={t("insights.toc")} className="mt-10 rounded-2xl bg-surface p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{t("insights.toc")}</p>
              <ol className="mt-3 space-y-2 text-[15px]">
                {toc.map((h, n) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`} className="flex gap-3 hover:underline underline-offset-4">
                      <span className="w-5 shrink-0 text-muted-foreground tabular-nums">{n + 1}.</span>
                      <span>{h.text.replace(/^\d+\.\s*/, "")}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div id="article-body" className="mt-10 space-y-6 text-[17px] md:text-[18px] leading-[1.8]">
            {i.body.map((b, n) => (
              <RenderBlock key={n} b={b} />
            ))}
          </div>

          <div className="mt-14 rounded-[1.25rem] bg-foreground p-8 text-center text-background shadow-xl">
            <h2 className="text-xl font-bold">{t("insights.ctaTitle")}</h2>
            <p className="mt-2 text-sm text-background/75">{t("insights.ctaSub")}</p>
            <HashLink id="contact" className="btn-dark mt-5 inline-flex bg-background text-foreground text-sm">{t("insights.ctaBtn")}</HashLink>
          </div>

          {(prev || next) && (
            <nav aria-label={t("insights.moreNav")} className="mt-10 grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link to="/insights/$slug" params={{ slug: prev.slug }} className="card-soft lift p-5 block">
                  <p className="text-xs font-bold text-muted-foreground">{t("insights.prev")}</p>
                  <p className="mt-2 font-bold leading-snug line-clamp-3">{prev.title}</p>
                </Link>
              ) : <span />}
              {next ? (
                <Link to="/insights/$slug" params={{ slug: next.slug }} className="card-soft lift p-5 block sm:text-right">
                  <p className="text-xs font-bold text-muted-foreground">{t("insights.next")}</p>
                  <p className="mt-2 font-bold leading-snug line-clamp-3">{next.title}</p>
                </Link>
              ) : <span />}
            </nav>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
