import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getProject, PROJECTS } from "@/data/portfolio";
import { ProjectLinks } from "@/components/project-links";
import { ProjectImage } from "@/components/project-image";
import { ProjectGallery } from "@/components/project-gallery";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    const title = p ? `${p.name} — ${p.tag}` : "Project — Jonas Kiwia";
    const desc = p?.summary ?? "Project detail — Jonas Kiwia portfolio.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  const t = useT();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="display text-4xl">{t("projects.notFound")}</h1>
        <p className="mt-3 text-muted-foreground">{t("projects.notFoundSub")}</p>
        <Link to="/projects" className="btn-dark mt-8 inline-flex">{t("projects.viewAll")}</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProjectDetail() {
  const { slug } = Route.useLoaderData();
  const t = useT();
  const L = useLocalized();
  const raw = getProject(slug);
  if (!raw) return null;
  const p = L.project(raw);
  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3).map(L.project);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-16">
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">{t("projects.back")}</Link>
          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <div>
              <span className="pill">{p.tag}</span>
              <h1 className="display text-[clamp(2.25rem,6vw,4.5rem)] mt-4">{p.name}</h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">{p.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
              <div className="mt-8"><ProjectLinks p={p} /></div>
            </div>
            <div className="card-soft overflow-hidden">
              <div className="aspect-[4/3] w-full"><ProjectImage p={p} eager /></div>
            </div>
          </div>
        </section>

        {p.gallery?.length ? (
          <section className="mx-auto max-w-5xl px-5 md:px-8 pb-4">
            <ProjectGallery p={p} />
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid lg:grid-cols-2 gap-5">
          <div className="card-soft p-8">
            <p className="text-xs font-bold text-muted-foreground">01 · {t("projects.problem")}</p>
            <p className="mt-3 leading-relaxed">{p.problem}</p>
          </div>
          <div className="rounded-[1.25rem] border border-border shadow-xl p-8 bg-foreground text-background">
            <p className="text-xs font-bold text-background/60">02 · {t("projects.solution")}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {p.solution.map((s) => (
                <li key={s}>→ {s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">{t("projects.more")}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link key={o.slug} to="/projects/$slug" params={{ slug: o.slug }} className="card-soft overflow-hidden lift block">
                <div className="aspect-[4/3] w-full"><ProjectImage p={o} /></div>
                <div className="p-5">
                  <p className="font-bold">{o.name}</p>
                  <p className="text-sm text-muted-foreground">{o.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
