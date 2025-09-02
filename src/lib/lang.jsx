// src/lib/lang.jsx
import React, { createContext, useContext, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { dict } from "../locales/dict"; // ton objet de traductions

const LangContext = createContext({ lang: "fr", t: (k) => k });

export function LangProvider({ children }) {
  const { lang } = useParams();               // /!\ nécessite d’être dans le Router
  const current = dict[lang] ? lang : "fr";

  const t = useMemo(() => {
    return (key) => {
      try { return key.split(".").reduce((acc, k) => acc[k], dict[current]) ?? key; }
      catch { return key; }
    };
  }, [current]);

  return (
    <LangContext.Provider value={{ lang: current, t }}>
      {children}
    </LangContext.Provider>
  );
}
export const useLang = () => useContext(LangContext);

export function useLocaleLink() {
  const { lang } = useLang();
  return (to) => `/${lang}${to}`;
}

export function useSwitchLanguage() {
  const { lang } = useLang();
  const nav = useNavigate();
  const { pathname, search, hash } = useLocation();
  return (next) => {
    if (next === lang) return;
    const nextPath = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${next}`);
    nav(`${nextPath}${search}${hash}`, { replace: true });
  };
}
