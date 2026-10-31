import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { HashLink } from "@/components/hash-link";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { PROJECTS } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Jonas Kiwia" },
      { name: "description", content: "Every project I've shipped — web apps, mobile apps, business systems and open-source work." },
      { property: "og:title", content: "Projects — Jonas Kiwia" },
      { property: "og:description", content: "Full portfolio of Jonas Kiwia: web apps, mobile apps and business systems." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const t = useT();
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 md:px-8 md:pt-20">
          <span className="pill">{t("projects.all")}</span>
          <h1 className="display mt-4 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)]">{t("projects.pageTitle")}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("projects.pageSub")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/" className="btn-ghost text-sm">{t("projects.home")}</Link>
            <HashLink id="contact" className="btn-dark text-sm">{t("footer.start")}</HashLink>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{t("projects.featured")}</h2>
          <ProjectsGrid projects={featured} />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{t("projects.more")}</h2>
          <ProjectsGrid projects={rest} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
