import Section from "../components/Section.jsx";
import { motion } from "framer-motion";

export default function ProjectSFML(){
  return (
    <>
      <Section title="Simulateur automobile — C++ / SFML" subtitle={" "}>
        {/* Démo vidéo locale */}
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            <video
              src={`${import.meta.env.BASE_URL}assets/Boulevard Vauban.mp4`}
              autoPlay
              muted
              playsInline
              loop
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </Section>

      <Section title="Captures">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            "sfml-screenshot.png",
            "voiture_1.png",
            "bus_1.png"
          ].map((img, i) => (
            <motion.div whileHover={{ scale: 1.02 }}
              key={i}
              className="w-full max-w-[400px] h-[250px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-center overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/${img}`}
                alt={`Capture ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Fiche technique">
        <div className="grid lg:grid-cols-1 gap-6">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <h4 className="font-semibold mb-2">Stack</h4>
            <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
              <li>C++17 · SFML 2.6</li>
              <li>Physique arcade (accélération, freinage, dérapage)</li>
              <li>Gestion collisions / checkpoints</li>
              <li>Éditeur de circuits simple (JSON)</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
