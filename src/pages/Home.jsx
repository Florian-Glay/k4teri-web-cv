import Section from "../components/Section.jsx";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang, useLocaleLink } from "../lib/lang";

export default function Home(){
  const { t } = useLang();
  const link = useLocaleLink();

  return (
    <>
      <section className="relative h-[70svh] grid place-items-center overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}assets/background.png`} alt="banner" className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent" />
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative text-center">
          <h1 className="text-5xl font-black tracking-wider">{t("site.hero.headline")}</h1>
          <p className="text-neutral-300 mt-2 max-w-2xl mx-auto">
            {t("site.hero.sub")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <Link to={link("/projects")} className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">{t("home.buttons.projects")}</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <Link to={link("/music")} className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">{t("home.buttons.music")}</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <Link to={link("/running")} className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">{t("home.buttons.running")}</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <Link to={link("/CV")} className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">{t("home.buttons.cv")}</Link>
            </motion.div>
            
          </div>
        </motion.div>
      </section>

      <Section title="Aperçu rapide" subtitle=" ">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <h3 className="font-semibold mb-2">Conception d'apps & Jeux</h3>
            <p className="text-sm text-neutral-300">Mario Kart 3D (JS), Simulateur auto (C++/SFML), RPG 2D (Unity/C#)</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <h3 className="font-semibold mb-2">Musique</h3>
            <p className="text-sm text-neutral-300">Composition électronique — chaîne YouTube @K4TERI4music</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <h3 className="font-semibold mb-2">Course à pied</h3>
            <p className="text-sm text-neutral-300">+1500 km cumulés · objectifs performance et régularité</p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
