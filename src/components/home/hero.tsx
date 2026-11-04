import { Link } from "@tanstack/react-router";
import { HashLink } from "@/components/hash-link";
import { ProjectImage } from "@/components/project-image";
import { GithubIcon, MailIcon, WhatsappIcon, ArrowRightIcon } from "@/components/icons";
import { PROJECTS, SITE, STATS, type Project } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import jonasAvatar from "@/assets/jonas-avatar.jpg";

/** A project preview in a minimal browser frame (one border, nothing nested). */
function Frame({ p, className = "" }: { p: Project; className?: string }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      aria-label={`${p.name} — ${p.tag}`}
      className={`group absolute block overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-border transition duration-500 hover:z-30 hover:scale-[1.03] ${className}`}
    >
      <div className="flex items-center gap-1.5 bg-surface px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="ml-2 truncate text-[10px] font-medium text-muted-foreground">{p.name}</span>
      </div>
      <div className="aspect-[16/10] w-full">
        <ProjectImage p={p} eager />
      </div>
    </Link>
  );
}

export function Hero() {
  const t = useT();
  const by = (slug: string) => PROJECTS.find((x) => x.slug === slug)!;
  const kitu = by("kitu-analytics");

  const socials = [
    { label: t("hero.github"), href: SITE.github, Icon: GithubIcon },
    { label: t("hero.email"), href: `mailto:${SITE.email}`, Icon: MailIcon },
    { label: t("hero.whatsapp"), href: `https://wa.me/${SITE.whatsapp}`, Icon: WhatsappIcon },
  ];
  const proof = [
    { n: STATS.usersShort, l: t("hero.statUsers") },
    { n: STATS.universities, l: t("hero.statUnis") },
    { n: STATS.clients, l: t("hero.statClients") },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-4 sm:px-5 md:px-8 md:pb-10 md:pt-6">
      <div className="fade-up relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm md:rounded-[2.25rem]">
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-lavender/50 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />

        <div className="relative grid items-center gap-10 p-6 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:p-12">
          {/* ---- left: the pitch ---- */}
          <div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-4">
                <img
                  src={jonasAvatar}
                  alt="Jonas Kiwia"
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover shadow-md"
                />
                <div className="leading-tight">
                  <p className="font-bold">Jonas Kiwia</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{t("hero.role")}</p>
                  <ul className="mt-2.5 flex items-center gap-1.5">
                    {socials.map(({ label, href, Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          aria-label={label}
                          title={label}
                          className="grid h-9 w-9 place-items-center rounded-full bg-surface text-muted-foreground transition hover:bg-foreground hover:text-background"
                        >
                          <Icon size={16} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to="/projects/$slug"
                params={{ slug: kitu.slug }}
                className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                {t("hero.workingOn")} <strong className="text-foreground">Kitu Analytics</strong>
              </Link>
            </div>

            <h1 className="display mt-8 text-balance text-[clamp(2.4rem,5.2vw,4.4rem)]">
              {t("hero.h1a")}{" "}
              <span className="rounded-lg px-[0.12em] [-webkit-box-decoration-break:clone] [box-decoration-break:clone] bg-[linear-gradient(transparent_20%,color-mix(in_oklab,var(--mint)_70%,transparent)_20%,color-mix(in_oklab,var(--mint)_70%,transparent)_94%,transparent_94%)]">
                {t("hero.h1hl")}
              </span>{" "}
              {t("hero.h1b")}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{t("hero.sub")}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-dark px-6 py-3.5 text-base">
                {t("hero.cta1")}
                <ArrowRightIcon size={16} />
              </Link>
              <HashLink id="contact" className="btn-ghost px-6 py-3.5 text-base">
                {t("hero.cta2")}
              </HashLink>
              <a href={SITE.cv} download className="inline-flex items-center gap-2 px-2 py-3.5 text-base font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline">
                {t("cv.download")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14" /></svg>
              </a>
            </div>

            <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {proof.map((x) => (
                <div key={x.l}>
                  <dt className="display text-3xl sm:text-4xl">{x.n}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{x.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---- right: work, fanned out ---- */}
          <div className="relative h-[250px] sm:h-[340px] lg:h-[440px]" aria-hidden={false}>
            <Frame p={by("safari-tours")} className="left-0 top-[14%] w-[52%] -rotate-6 float-a" />
            <Frame p={by("swahili-sms-filter")} className="right-0 top-0 w-[56%] rotate-5 float-b" />
            <Frame p={kitu} className="left-[16%] top-[34%] z-20 w-[68%] -rotate-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
