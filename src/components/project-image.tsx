import type { Project } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

const TINTS = ["bg-lavender", "bg-mint", "bg-sun", "bg-peach", "bg-sky"];

function tintFor(slug: string) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return TINTS[h % TINTS.length];
}

function monogram(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Shows the project's screenshot if it has one (`img` in portfolio.ts),
 * otherwise a tidy placeholder. Fills its parent — give the parent an aspect ratio.
 */
export function ProjectImage({ p, className = "", eager = false }: { p: Project; className?: string; eager?: boolean }) {
  const t = useT();
  if (p.img) {
    return (
      <img
        src={p.img}
        alt={p.name}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover object-top ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${p.name} — ${t("projects.placeholder")}`}
      className={`relative grid h-full w-full place-items-center overflow-hidden ${tintFor(p.slug)} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(var(--foreground) 0.8px, transparent 0.8px)",
          backgroundSize: "18px 18px",
          opacity: 0.12,
        }}
      />
      <div className="relative text-center">
        <p className="display text-[clamp(2rem,6vw,3.5rem)] text-foreground/80">{monogram(p.name)}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
          {t("projects.placeholder")}
        </p>
      </div>
    </div>
  );
}
