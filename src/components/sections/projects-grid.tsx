import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ProjectImage } from "@/components/project-image";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectLinks } from "@/components/project-links";
import { PROJECTS, type Project } from "@/data/portfolio";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  const t = useT();
  return (
    <button
      type="button"
      onClick={() => onOpen(p)}
      className="card-soft lift group block w-full cursor-pointer overflow-hidden text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectImage p={p} />
        </div>
        {p.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-sun px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
            {t("projects.featured")}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div className="min-w-0">
          <p className="truncate text-lg font-bold leading-tight">{p.name}</p>
          <p className="truncate text-sm text-muted-foreground">{p.tag}</p>
        </div>
        <span
          aria-hidden
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function ProjectDialog({ p, onClose }: { p: Project | null; onClose: () => void }) {
  const t = useT();
  return (
    <Dialog open={!!p} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-lenis-prevent
        className="[&>button]:z-10 [&>button]:grid [&>button]:h-9 [&>button]:w-9 [&>button]:place-items-center [&>button]:rounded-full [&>button]:bg-background [&>button]:opacity-100 [&>button]:shadow-md max-h-[85vh] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto rounded-[1.25rem] p-0"
      >
        {p && (
          <div>
            <div className="relative aspect-[2/1] overflow-hidden bg-surface">
              <ProjectImage p={p} eager />
              <span className="pill absolute left-4 top-4 bg-background">{p.tag}</span>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <DialogTitle className="display text-2xl md:text-3xl">{p.name}</DialogTitle>
                <ProjectLinks p={p} />
              </div>
              <DialogDescription className="mt-3 leading-relaxed text-muted-foreground">{p.summary}</DialogDescription>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>

              <ProjectGallery p={p} className="mt-6" />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-border p-5">
                  <p className="text-xs font-bold text-muted-foreground">01 · {t("projects.problem")}</p>
                  <p className="mt-2 text-sm leading-relaxed">{p.problem}</p>
                </div>
                <div className="rounded-[1rem] border border-border bg-foreground p-5 text-background">
                  <p className="text-xs font-bold text-background/60">02 · {t("projects.solution")}</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.solution.map((s) => (
                      <li key={s}>→ {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/projects/$slug" params={{ slug: p.slug }} className="mt-6 inline-block text-sm font-semibold underline-offset-4 hover:underline">
                {t("projects.caseLink")}
              </Link>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  const L = useLocalized();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const localized = projects.map(L.project);
  const active = localized.find((p) => p.slug === activeSlug) ?? null;
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {localized.map((p) => (
          <ProjectCard key={p.slug} p={p} onOpen={(x) => setActiveSlug(x.slug)} />
        ))}
      </div>
      <ProjectDialog p={active} onClose={() => setActiveSlug(null)} />
    </>
  );
}
