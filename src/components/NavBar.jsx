import { NavLink } from "react-router-dom";
import { useLang, useLocaleLink } from "../lib/lang";
import LanguageSwitcher from "./LanguageSwitcher.jsx";


const NavBar1 = () => (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
        <nav className="px-4 sm:px-6 lg:px-8 h-[var(--nav-h)] flex items-center justify-between">
            <NavLink to="/" className="font-black tracking-wider text-xl">GLAY Florian</NavLink>
            <div className="flex items-center gap-6 text-sm">
                <NavLink to="/projects" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Projets</NavLink>
                <NavLink to="/music" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Musique</NavLink>
                <NavLink to="/running" className={({isActive})=>isActive?"text-accent":"hover:text-accent-soft"}>Course</NavLink>
                <NavLink to="/cv" className="px-3 py-2 text-sm text-neutral-200 hover:text-white">CV</NavLink>
            </div>
        </nav>
    </header>
);




const NavBar2 = () => {
  const { t } = useLang();
  const link = useLocaleLink();

  const baseLink = "px-3 py-2 rounded-xl text-sm text-neutral-300 hover:text-white transition";
  const active   = "text-white bg-neutral-800/60 border border-neutral-700";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        <NavLink to={link("/")} className="font-semibold tracking-wide text-white">
          {t("site.brand")}
        </NavLink>
        <nav className="flex items-center gap-1">
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
          <div className="ml-2"><LanguageSwitcher /></div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar2;