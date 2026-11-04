import { Link } from "@tanstack/react-router";
import { GithubIcon, ArrowRightIcon } from "@/components/icons";
import { PROJECTS } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function CaseStudySection() {
  const t = useT();
  const kitu = PROJECTS.find((p) => p.slug === "kitu-analytics")!;
  const items = t("case.p2Items").split("|");
  const arch = [
    { n: t("case.arch1"), d: t("case.arch1d") },
    { n: t("case.arch2"), d: t("case.arch2d") },
    { n: t("case.arch3"), d: t("case.arch3d") },
    { n: t("case.arch4"), d: t("case.arch4d") },
  ];

  return (
    <section id="case-study" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <span className="pill">{t("case.pill")}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-sun" />
            {t("case.status")}
          </span>
        </div>
        <h2 className="section-title mt-4 max-w-4xl text-balance">{t("case.title")}</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{t("case.lead")}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="card-soft p-8">
            <p className="text-xs font-bold text-muted-foreground">{t("case.p1Label")}</p>
            <h3 className="mt-2 text-2xl font-bold">{t("case.p1Title")}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t("case.p1Body")}</p>
          </div>
          <div className="rounded-[1.25rem] bg-foreground p-8 text-background shadow-xl">
            <p className="text-xs font-bold text-background/60">{t("case.p2Label")}</p>
            <h3 className="mt-2 text-2xl font-bold">{t("case.p2Title")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/85">
              {items.map((it) => (
                <li key={it}>→ {it}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-soft mt-5 p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold">{t("case.archTitle")}</h3>
            <span className="text-xs text-muted-foreground">{t("case.archNote")}</span>
          </div>
          <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {arch.map((a, i) => (
              <li key={a.n} className="rounded-xl bg-surface p-4">
                <p className="text-[11px] font-bold text-muted-foreground">0{i + 1}</p>
                <p className="mt-2 font-semibold leading-snug">{a.n}</p>
                <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {kitu.github && (
              <a href={kitu.github} target="_blank" rel="noreferrer" className="btn-dark px-5 py-3 text-sm">
                <GithubIcon size={16} />
                {t("case.viewRepo")}
              </a>
            )}
            <Link to="/projects/$slug" params={{ slug: kitu.slug }} className="btn-ghost px-5 py-3 text-sm">
              {t("case.viewProject")}
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[1.25rem] bg-lavender p-6 md:p-8">
          <div className="max-w-2xl">
            <p className="font-bold">
              {t("case.cpageTitle")} · {t("case.status")}
            </p>
            <p className="mt-1 text-sm text-foreground/75">{t("case.cpageBody")}</p>
          </div>
          <Link to="/projects/$slug" params={{ slug: kitu.slug }} className="inline-flex items-center gap-2 text-sm font-semibold">
            {t("case.cpageLink")}
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
