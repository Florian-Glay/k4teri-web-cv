import Section from "../components/Section.jsx";
import GameEmbed from "../components/GameEmbed.jsx";
import { motion } from "framer-motion";

export default function ProjectUnity(){
  return (
    <>
      <Section
        title="RPG 2D (Unity/C#) — Démo WebGL"
        subtitle="Jeu jouable sur PC uniquement"
      >
        {/* Charge /public/games/unity/index.html */}
        <GameEmbed slug="unity" height={720} />
      </Section>

      <Section title="Comment Jouer">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
          <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
            <li>Se déplacer avec "ZQSD" </li>
            <li>Sélctionner un objet avec la molette </li>
            <li>Récupérer un objet avec "E" </li>
            <li>Poser un objet avec "F" puis cliquer (sortir du mode construction avec "F" à nouveau)</li>
            <li>Inventaire & crafting avec la touche "tab"</li>
            <li>Attaquer avec souris, faire des mouvement et maintenir clique gauche</li>
          </ul>
        </div>
      </Section>

      <Section title="">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <img src={`${import.meta.env.BASE_URL}assets/TheLoneWayToCraftImage-1.png`}  alt="The Lone Way To Craft Image 1" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <img src={`${import.meta.env.BASE_URL}assets/TheLoneWayToCraftImage-2.png`}  alt="The Lone Way To Craft Image 2" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <img src={`${import.meta.env.BASE_URL}assets/TheLoneWayToCraftImage-3.png`}  alt="The Lone Way To Craft Image 3" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>
        </div>
      </Section>

      <Section title="Fonctionnalités">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
          <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
            <li>Inventaire & crafting</li>
            <li>HUD (vie, faim, endurance), barre d’actions</li>
            <li>Cycle jour/nuit & spawn de créatures</li>
            <li>Monde procédural en tuiles, sauvegarde JSON</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
