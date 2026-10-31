import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

export function FaqSection() {
  const t = useT();
  const L = useLocalized();
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
      <h2 className="section-title text-center">{t("faq.title")}</h2>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {L.faqs().map((f, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-base font-semibold md:text-lg">{f.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface transition group-open:bg-foreground group-open:text-background">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
