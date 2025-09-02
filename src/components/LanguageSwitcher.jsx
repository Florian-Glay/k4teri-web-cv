import { useLang, useSwitchLanguage } from "../lib/lang";

export default function LanguageSwitcher() {
  const { lang } = useLang();
  const switchTo = useSwitchLanguage();

  return (
    <div className="inline-flex rounded-xl border border-neutral-700 overflow-hidden">
      <button
        onClick={() => switchTo("fr")}
        className={`px-3 py-1 text-sm ${lang === "fr" ? "bg-neutral-800 text-white" : "text-neutral-300 hover:bg-neutral-800/60"}`}
      >
        FR
      </button>
      <button
        onClick={() => switchTo("en")}
        className={`px-3 py-1 text-sm ${lang === "en" ? "bg-neutral-800 text-white" : "text-neutral-300 hover:bg-neutral-800/60"}`}
      >
        EN
      </button>
    </div>
  );
}
