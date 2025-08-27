import { motion } from "framer-motion";
import Section from "../components/Section.jsx";

export default function Home(){
  return (
    <>
      <section className="relative h-[50svh] grid place-items-center overflow-hidden">
        <img src="/assets/k4teri-banner.png" alt="banner"
             className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent" />
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="relative text-center">
          <h1 className="text-5xl font-black tracking-wider">K4TERI</h1>
          <p className="text-neutral-300 mt-2 max-w-2xl mx-auto">
            Étudiant ingénieur · Développeur Web & Jeux · Producteur de musique
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <a href="/projects" className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">Voir les projets</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <a href="/music" className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">Écouter la musique</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
                <a href="/running" className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition">Stats de course</a>
            </motion.div>
            
          </div>
        </motion.div>
      </section>

      <Section title="Aperçu rapide" subtitle="Ce CV interactif démontre mes compétences techniques et créatives.">
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
