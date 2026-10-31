import { useLang } from "@/lib/i18n";

/** EN | SW switch. Persists the choice and updates <html lang>. */
export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const opt = (code: "en" | "sw", label: string) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      lang={code}
      className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
        lang === code ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div
      role="group"
      aria-label={t("lang.switch")}
      title={t("lang.switch")}
      className={`inline-flex items-center rounded-full bg-surface p-0.5 ring-1 ring-border ${className}`}
    >
      {opt("en", "EN")}
      {opt("sw", "SW")}
    </div>
  );
}
