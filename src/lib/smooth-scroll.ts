import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Eased, inertial page scrolling (wheel/trackpad). Touch devices keep native scrolling. */
export function initSmoothScroll() {
  if (lenis || typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lenis = new Lenis({
    lerp: 0.09, // lower = glidier
    smoothWheel: true,
    wheelMultiplier: 1,
    anchors: false, // we handle in-page links ourselves
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  // Pause page smoothing while a modal has locked body scroll.
  const sync = () => {
    const locked = document.body.hasAttribute("data-scroll-locked") || document.body.style.overflow === "hidden";
    if (locked) lenis?.stop();
    else lenis?.start();
  };
  new MutationObserver(sync).observe(document.body, {
    attributes: true,
    attributeFilter: ["data-scroll-locked", "style"],
  });
}

/** Smooth-scroll to an element (or Y position), leaving room for the sticky header. */
export function scrollToTarget(target: HTMLElement | number, offset = 0) {
  if (lenis) {
    // Lenis honours the CSS scroll-margin-top (5.5rem) set on every [id] in styles.css.
    lenis.scrollTo(target, { offset, duration: 1.3, easing: (t) => 1 - Math.pow(1 - t, 4) });
    return;
  }
  const top = typeof target === "number" ? target : target.getBoundingClientRect().top + window.scrollY - 88 + offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}
