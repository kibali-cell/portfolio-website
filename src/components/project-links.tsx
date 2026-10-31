import type { Project } from "@/data/portfolio";
import { GithubIcon, GlobeIcon } from "@/components/icons";
import { useT } from "@/lib/i18n";

const iconBtn =
  "grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground transition hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2";

/** GitHub + live-site icon links (only the ones the project actually has). */
export function ProjectLinks({ p }: { p: Project }) {
  const t = useT();
  if (!p.github && !p.live) return null;
  return (
    <div className="flex flex-wrap items-center gap-3">
      {p.github && (
        <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} — ${t("projects.github")}`} title={t("projects.github")} className={iconBtn}>
          <GithubIcon size={19} />
        </a>
      )}
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} — ${t("projects.live")}`} title={t("projects.live")} className={iconBtn}>
          <GlobeIcon size={19} />
        </a>
      )}
    </div>
  );
}
