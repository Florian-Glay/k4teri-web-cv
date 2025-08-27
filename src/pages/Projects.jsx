import Section from "../components/Section.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects(){
  const Card = ({ to, img, title, subtitle }) => (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Link to={to} className="block rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-tr from-accent via-purple-600 to-pink-500 p-[2px] rounded-2xl">
          <div className="bg-neutral-950 rounded-2xl">
            <img src={img} alt={title} className="w-full aspect-video object-cover rounded-t-2xl" />
            <div className="p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-neutral-400">{subtitle}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <>
      <Section title="Projets – Conception d'apps & jeux" subtitle="Sélectionne un projet pour voir la démo et les détails techniques.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card to="/projects/mariokart" img={`${import.meta.env.BASE_URL}assets/mk-track.png`} title="Mario Kart 3D — JavaScript" subtitle="Three.js · Physique · Drifts & Boosts" />
          <Card to="/projects/sfml" img={`${import.meta.env.BASE_URL}assets/sfml-screenshot.png`} title="Simulateur automobile — C++/SFML" subtitle="Physique arcade · Gestion collisions" />
          <Card to="/projects/unity" img={`${import.meta.env.BASE_URL}assets/rpg-menu.png`} title="RPG 2D — Unity/C#" subtitle="HUD, crafting, monde procédural" />
        </div>
      </Section>
    </>
  );
}
