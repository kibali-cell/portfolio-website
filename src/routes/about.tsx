import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { HashLink } from "@/components/hash-link";
import { SKILLS, STATS, SITE } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";
import jonasAvatar from "@/assets/jonas-avatar.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jonas Kiwia" },
      { name: "description", content: "Jonas Kiwia is a software engineer and founder in Tanzania building web apps and business systems for clients worldwide." },
      { property: "og:title", content: "About — Jonas Kiwia" },
      { property: "og:description", content: "Software engineer and founder in Tanzania." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const L = useLocalized();
  const stats = [
    { n: STATS.years, l: t("about.expYears"), tint: "bg-lavender" },
    { n: STATS.usersShort, l: t("about.users"), tint: "bg-mint" },
    { n: STATS.universities, l: t("about.unis"), tint: "bg-sun" },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-12 md:px-8 md:pt-20 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="pill">{t("about.pill")}</span>
            <h1 className="display mt-4 max-w-3xl text-balance text-[clamp(2.25rem,5.5vw,4.25rem)]">{t("about.title")}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t("about.body1")}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{t("about.body2")}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <HashLink id="contact" className="btn-dark px-6 py-3 text-sm">{t("about.cta")}</HashLink>
              <a href={SITE.cv} download className="btn-ghost px-6 py-3 text-sm">{t("cv.download")}</a>
            </div>
          </div>
          <img src={jonasAvatar} alt="Jonas Kiwia" className="aspect-square w-full max-w-sm rounded-[2rem] object-cover shadow-lg lg:ml-auto" />
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3 md:px-8">
          {stats.map((x) => (
            <div key={x.l} className={`rounded-[1.25rem] p-8 ${x.tint}`}>
              <p className="display text-6xl">{x.n}</p>
              <p className="mt-2 font-bold">{x.l}</p>
            </div>
          ))}
        </section>

        <section id="process" className="section">
          <span className="pill">{t("about.processPill")}</span>
          <h2 className="section-title mt-4 max-w-2xl">{t("about.processTitle")}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{t("about.processSub")}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {L.process().map((s) => (
              <article key={s.n} className="card-soft card-pad lift flex flex-col">
                <p className="display text-3xl text-muted-foreground">{s.n}</p>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="card-soft card-pad">
            <span className="pill">{t("about.skillsPill")}</span>
            <h2 className="section-title mt-4">{t("about.skillsTitle")}</h2>
            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((s) => (
                <div key={s.area}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{L.skillArea(s.area)}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.tools.map((tool) => (
                      <li key={tool} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium">{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
