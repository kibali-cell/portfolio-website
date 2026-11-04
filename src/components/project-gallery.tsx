import { useRef, useState } from "react";
import type { Project } from "@/data/portfolio";

/**
 * Screenshot carousel (`gallery` in portfolio.ts): one image at a time with
 * previous / next buttons, dots, arrow keys and swipe. Renders nothing without images.
 */
export function ProjectGallery({ p, className = "" }: { p: Project; className?: string }) {
  const imgs = p.gallery ?? [];
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  if (!imgs.length) return null;

  const go = (d: number) => setI((v) => (v + d + imgs.length) % imgs.length);
  const btn =
    "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground shadow-md ring-1 ring-border backdrop-blur transition hover:bg-foreground hover:text-background";

  return (
    <div
      className={className}
      role="group"
      aria-roledescription="carousel"
      aria-label={`${p.name} screenshots`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      }}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {imgs.map((src, n) => (
            <img
              key={src}
              src={src}
              alt={`${p.name} — screenshot ${n + 1} of ${imgs.length}`}
              loading={n === 0 ? "eager" : "lazy"}
              draggable={false}
              className="h-full w-full shrink-0 object-cover object-top"
            />
          ))}
        </div>
        {imgs.length > 1 && (
          <>
            <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)} className={`${btn} left-3`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button type="button" aria-label="Next screenshot" onClick={() => go(1)} className={`${btn} right-3`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold tabular-nums ring-1 ring-border">
              {i + 1} / {imgs.length}
            </span>
          </>
        )}
      </div>
      {imgs.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {imgs.map((_, n) => (
            <button
              key={n}
              type="button"
              aria-label={`Go to screenshot ${n + 1}`}
              aria-current={n === i}
              onClick={() => setI(n)}
              className={`h-2 rounded-full transition-all ${n === i ? "w-6 bg-foreground" : "w-2 bg-foreground/25 hover:bg-foreground/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
