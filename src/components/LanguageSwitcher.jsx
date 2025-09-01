import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function LanguageSwitcher() {
  const { lang } = useParams();                   // fr | en
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  const switchTo = (next) => {
    const nextPath = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${next}`);
    localStorage.setItem("lang", next);
    navigate(`${nextPath}${search}${hash}`, { replace: true });
  };

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
