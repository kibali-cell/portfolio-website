import { Link } from "@tanstack/react-router";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { ArrowRightIcon } from "@/components/icons";
import { PROJECTS } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

export function ProjectsPreview() {
  const t = useT();
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section id="projects" className="section">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="pill">{t("projects.pill")}</span>
          <h2 className="section-title mt-4 max-w-2xl">{t("projects.title")}</h2>
        </div>
        <p className="max-w-sm text-muted-foreground">{t("projects.sub")}</p>
      </div>
      <div className="mt-12">
        <ProjectsGrid projects={featured} />
      </div>
      <div className="mt-10 flex justify-center">
        <Link to="/projects" className="btn-dark px-6 py-3 text-sm">
          {t("projects.viewAll")} ({PROJECTS.length})
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </section>
  );
}
