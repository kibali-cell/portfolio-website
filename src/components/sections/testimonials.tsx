import { TESTIMONIALS } from "@/data/portfolio";
import { useT } from "@/lib/i18n";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const TINTS = ["bg-lavender", "bg-mint", "bg-sun", "bg-peach", "bg-sky"];

export function TestimonialsSection() {
  const t = useT();
  return (
    <section id="testimonials" className="section">
      <div className="max-w-3xl">
        <span className="pill">{t("testi.pill")}</span>
        <h2 className="section-title mt-4">
          {t("testi.title")}
        </h2>
        <p className="mt-4 body-text text-muted-foreground">
          {t("testi.sub")}
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <figure key={i} className="card-soft card-pad flex flex-col">
            <blockquote className="body-text text-foreground/90 flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden
                className={`w-10 h-10 rounded-full grid place-items-center text-sm font-bold text-foreground ${TINTS[i % TINTS.length]}`}
              >
                {initials(t.name)}
              </span>
              <div>
                <p className="text-sm font-bold leading-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

