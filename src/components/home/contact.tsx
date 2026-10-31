import { useState } from "react";
import { WhatsappIcon, MailIcon, PhoneIcon, ArrowRightIcon } from "@/components/icons";
import { SITE, TIERS } from "@/data/portfolio";
import { sendInquiry } from "@/lib/send-inquiry";
import { useT } from "@/lib/i18n";
import { useLocalized } from "@/lib/localize";

type Mode = "inquiry" | "direct";
type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:bg-background/15 focus:ring-2 focus:ring-background/40";

function DirectLinks({ className = "" }: { className?: string }) {
  const t = useT();
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t("contact.waText"))}`;
  const items = [
    { label: t("contact.wa"), detail: SITE.phoneDisplay, href: wa, Icon: WhatsappIcon, external: true },
    { label: t("contact.mail"), detail: SITE.email, href: `mailto:${SITE.email}`, Icon: MailIcon, external: false },
    { label: t("contact.call"), detail: SITE.phoneDisplay, href: `tel:${SITE.phoneTel}`, Icon: PhoneIcon, external: false },
  ];
  return (
    <div className={`mx-auto grid max-w-3xl gap-3 sm:grid-cols-3 ${className}`}>
      {items.map(({ label, detail, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
          className="group flex flex-col items-center gap-3 rounded-2xl bg-background px-5 py-7 text-foreground transition hover:-translate-y-0.5"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background">
            <Icon size={22} />
          </span>
          <span className="font-bold">{label}</span>
          <span className="break-all text-xs text-muted-foreground">{detail}</span>
        </a>
      ))}
    </div>
  );
}

function InquiryForm() {
  const t = useT();
  const L = useLocalized();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    // Honeypot: real visitors never see/fill this field. Pretend success for bots.
    if (get("_honey")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      await sendInquiry({
        name: get("name"),
        email: get("email"),
        phone: get("phone"),
        type: get("type"),
        message: get("message"),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="mx-auto max-w-md py-8 text-center" role="status">
        <p className="text-2xl font-bold">{t("contact.sentTitle")}</p>
        <p className="mt-3 text-sm text-background/75">{t("contact.sentBody")}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold underline underline-offset-4">
          {t("contact.sentAgain")}
        </button>
      </div>
    );
  }

  const label = "grid gap-1.5 text-xs font-semibold text-background/80";
  return (
    <form onSubmit={onSubmit} className="mx-auto grid max-w-2xl gap-4 text-left sm:grid-cols-2">
      {/* honeypot — hidden from people */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className={label}>
        {t("contact.name")}
        <input name="name" required autoComplete="name" placeholder={t("contact.namePh")} className={field} />
      </label>
      <label className={label}>
        {t("contact.email")}
        <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={field} />
      </label>
      <label className={label}>
        <span>
          {t("contact.phone")} <span className="font-normal text-background/50">{t("contact.optional")}</span>
        </span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+255 …" className={field} />
      </label>
      <label className={label}>
        {t("contact.need")}
        <span className="relative block">
          <select name="type" required defaultValue="" className={`${field} appearance-none pr-10`}>
            <option value="" disabled className="text-foreground">{t("contact.choose")}</option>
            {TIERS.map((x) => (
              <option key={x.n} value={x.title} className="text-foreground">{L.tier(x).title}</option>
            ))}
            <option value="Not sure yet" className="text-foreground">{t("contact.unsure")}</option>
          </select>
          <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-background/60"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </label>
      <label className={`${label} sm:col-span-2`}>
        {t("contact.message")}
        <textarea name="message" required rows={5} placeholder={t("contact.messagePh")} className={`${field} resize-y`} />
      </label>

      {status === "error" && (
        <div role="alert" className="sm:col-span-2 rounded-xl bg-destructive/20 p-4 text-sm">
          <p className="font-semibold">{t("contact.errTitle")}</p>
          <p className="mt-1 text-background/80">{t("contact.errBody")}</p>
          <DirectLinks className="mt-4 !max-w-none" />
        </div>
      )}

      <div className="flex flex-col items-center gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 font-semibold text-foreground transition hover:-translate-y-px disabled:opacity-60"
        >
          {status === "sending" ? t("contact.sending") : t("contact.send")}
          {status !== "sending" && <ArrowRightIcon size={16} />}
        </button>
        <p className="text-xs text-background/60">{t("contact.reply")}</p>
      </div>
    </form>
  );
}

export function ContactSection() {
  const t = useT();
  const [mode, setMode] = useState<Mode>("inquiry");
  const tabs: { id: Mode; label: string }[] = [
    { id: "inquiry", label: t("contact.tabInquiry") },
    { id: "direct", label: t("contact.tabDirect") },
  ];
  return (
    <section id="contact" className="section">
      <div className="relative overflow-hidden rounded-[1.25rem] bg-foreground p-6 text-center text-background shadow-xl sm:p-10 md:p-16">
        <div aria-hidden className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lavender/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-mint/30 blur-3xl" />
        <div className="relative">
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-background/75">{t("contact.sub")}</p>

          <div role="tablist" aria-label={t("contact.tablist")} className="mx-auto mt-8 inline-flex rounded-full bg-background/10 p-1">
            {tabs.map((x) => {
              const on = mode === x.id;
              return (
                <button
                  key={x.id}
                  id={`contact-tab-${x.id}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls={`contact-panel-${x.id}`}
                  onClick={() => setMode(x.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-6 ${
                    on ? "bg-background text-foreground" : "text-background/75 hover:text-background"
                  }`}
                >
                  {x.label}
                </button>
              );
            })}
          </div>

          <div key={mode} role="tabpanel" id={`contact-panel-${mode}`} aria-labelledby={`contact-tab-${mode}`} className="fade-up mt-8">
            {mode === "inquiry" ? <InquiryForm /> : <DirectLinks />}
          </div>
        </div>
      </div>
    </section>
  );
}
