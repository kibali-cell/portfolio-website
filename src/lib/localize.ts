import { useLang } from "@/lib/i18n";
import {
  FAQS,
  PROCESS_STEPS,
  SKILLS,
  TIERS,
  type Insight,
  type Project,
  type Service,
} from "@/data/portfolio";
import { SW_FAQS, SW_INSIGHTS, SW_PROCESS, SW_PROJECTS, SW_SERVICES, SW_SKILL_AREAS, SW_TIERS } from "@/data/sw";

type Tier = (typeof TIERS)[number];

/** Returns localised views of the portfolio content for the active language. */
export function useLocalized() {
  const { lang } = useLang();
  const sw = lang === "sw";

  return {
    lang,
    project: (p: Project): Project => (sw && SW_PROJECTS[p.slug] ? { ...p, ...SW_PROJECTS[p.slug] } : p),
    service: (s: Service): Service => (sw && SW_SERVICES[s.slug] ? { ...s, ...SW_SERVICES[s.slug] } : s),
    tier: (t: Tier): Tier => (sw && SW_TIERS[t.n] ? { ...t, ...SW_TIERS[t.n] } : t),
    process: () => PROCESS_STEPS.map((p, i) => (sw ? { ...p, ...SW_PROCESS[i] } : p)),
    faqs: () => (sw ? SW_FAQS : FAQS),
    skillArea: (a: string) => (sw ? SW_SKILL_AREAS[a] ?? a : a),
    /** `translated` is false when we fell back to the English article body. */
    insight: (i: Insight): Insight & { translated: boolean } => {
      const s = sw ? SW_INSIGHTS[i.slug] : undefined;
      if (!s) return { ...i, translated: !sw };
      return { ...i, title: s.title, excerpt: s.excerpt, category: s.category, body: s.body ?? i.body, translated: !!s.body };
    },
  };
}
