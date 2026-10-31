import { useCallback, useEffect, useRef, useState } from "react";

export type SpySection = {
  /** DOM id of the section element */
  id: string;
  /** nav key this section highlights; null = section belongs to no nav item */
  nav: string | null;
};

/**
 * Scroll-spy. Works off the real DOM order (not the order of the nav list),
 * so the highlight always matches what is actually on screen.
 *
 * A section is "current" while it contains a reference line placed a little
 * below the sticky header. Sections that belong to no nav item clear the
 * highlight instead of leaving a stale one behind. Clicking a nav link locks
 * the highlight to the target until the smooth scroll has finished, so the
 * underline doesn't flicker through every section it passes.
 */
export function useActiveSection(sections: SpySection[], headerOffset = 64) {
  const [active, setActive] = useState<string | null>(null);
  const lockRef = useRef<{ nav: string; until: number } | null>(null);
  const key = sections.map((s) => `${s.id}:${s.nav}`).join(",");

  useEffect(() => {
    if (typeof window === "undefined" || sections.length === 0) return;

    let frame = 0;
    let settle = 0;

    const compute = () => {
      frame = 0;

      const lock = lockRef.current;
      if (lock) {
        if (Date.now() < lock.until) {
          setActive(lock.nav);
          return;
        }
        lockRef.current = null;
      }

      const line = headerOffset + (window.innerHeight - headerOffset) * 0.3;
      const found = sections
        .map((s) => ({ s, el: document.getElementById(s.id) }))
        .filter((x): x is { s: SpySection; el: HTMLElement } => !!x.el)
        .map((x) => ({ ...x, rect: x.el.getBoundingClientRect() }))
        .sort((a, b) => a.rect.top - b.rect.top);

      let current: string | null = null;
      for (const { s, rect } of found) {
        if (rect.top <= line && rect.bottom > line) current = s.nav;
      }

      // At the very bottom the last sections can never reach the line.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && found.length) current = found[found.length - 1].s.nav;

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(compute);
      // re-check once scrolling stops (covers lock expiry + late layout shifts)
      window.clearTimeout(settle);
      settle = window.setTimeout(compute, 150);
    };

    compute();
    const late = window.setTimeout(compute, 400); // after images/fonts settle
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      window.clearTimeout(late);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, headerOffset]);

  /** Highlight `nav` immediately and hold it while a programmatic scroll runs. */
  const lockTo = useCallback((nav: string, ms = 900) => {
    lockRef.current = { nav, until: Date.now() + ms };
    setActive(nav);
  }, []);

  return { active, lockTo };
}
