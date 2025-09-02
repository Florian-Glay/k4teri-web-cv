import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLang, useLocaleLink } from "../lib/lang";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const NavBar = () => {
  const { t } = useLang();
  const link = useLocaleLink();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  const baseLink = "px-3 py-2 rounded-xl text-sm text-neutral-300 hover:text-white transition";
  const active   = "text-white bg-neutral-800/60 border border-neutral-700";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-neutral-800"
            style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-2">
        <NavLink to={link("/")} className="font-semibold tracking-wide text-white min-w-0 truncate">
          {t("site.brand")}
        </NavLink>

        {/* BOUTON BURGER (très visible) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="sm:hidden inline-flex items-center gap-2 px-3 h-11 rounded-xl
                     bg-neutral-800/90 border border-neutral-700 text-white
                     shadow-lg shadow-black/40 backdrop-blur-md
                     focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          {/* Icône animée */}
          <span className="relative block w-5 h-3" aria-hidden="true">
            <span className={`absolute inset-x-0 top-0 h-0.5 bg-white transition-transform duration-300
                              ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1.25 h-0.5 bg-white transition-opacity duration-200
                              ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-300
                              ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
          <span className="text-sm font-medium">{open ? (t("site.nav.close") ?? "Fermer") : "Menu"}</span>
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden sm:flex items-center gap-1">
          <NavLink to={link("/projects")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.projects")}
          </NavLink>
          <NavLink to={link("/music")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.music")}
          </NavLink>
          <NavLink to={link("/running")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.running")}
          </NavLink>
          <NavLink to={link("/cv")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.cv")}
          </NavLink>
          <div className="ml-2 shrink-0"><LanguageSwitcher /></div>
        </nav>
      </div>

      {/* OVERLAY pour indiquer visuellement que le menu est ouvert */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="sm:hidden fixed inset-0 z-30 bg-black/40"
          aria-label="Fermer le menu"
        />
      )}

      {/* PANNEAU MOBILE */}
      <div
        id="mobile-menu"
        className={`sm:hidden relative z-40 overflow-hidden transition-[max-height] duration-300 border-t border-neutral-800
                   ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="px-4 py-2 flex flex-col gap-1 bg-neutral-950/95 backdrop-blur">
          <NavLink onClick={()=>setOpen(false)} to={link("/projects")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.projects")}
          </NavLink>
          <NavLink onClick={()=>setOpen(false)} to={link("/music")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.music")}
          </NavLink>
          <NavLink onClick={()=>setOpen(false)} to={link("/running")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.running")}
          </NavLink>
          <NavLink onClick={()=>setOpen(false)} to={link("/cv")} className={({isActive}) => `${baseLink} ${isActive?active:""}`}>
            {t("site.nav.cv")}
          </NavLink>

          {/* Langue visible DANS le panneau (jamais à l’étroit) */}
          <div className="mt-1"><LanguageSwitcher /></div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
