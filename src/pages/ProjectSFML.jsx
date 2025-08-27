import Section from "../components/Section.jsx";

export default function ProjectSFML(){
  return (
    <>
      <Section title="Simulateur automobile — C++ / SFML" subtitle="Télécharge la version Windows et regarde la démo.">
        {/* Démo vidéo (remplace l'URL YouTube) */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/REPLACE_WITH_YOUR_VIDEO_ID"
            title="Démo Simulateur SFML"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Boutons d'action */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/downloads/SimuSFML-win64.zip"
            className="inline-flex items-center gap-2 bg-accent text-white rounded-xl px-5 py-2.5 hover:bg-accent-soft transition"
            download
          >
            ⬇️ Télécharger (Windows)
          </a>
          {/* Ajoute d'autres builds si besoin
          <a href="/downloads/SimuSFML-linux.tar.gz" className="inline-flex items-center gap-2 bg-white/10 rounded-xl px-5 py-2.5 hover:bg-white/20 transition" download>
            🐧 Télécharger (Linux)
          </a>
          */}
        </div>
      </Section>

      <Section title="Captures">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl" src={`${import.meta.env.BASE_URL}assets/sfml-screenshot.png`} alt="Capture 1" />
          {/* ajoute d'autres captures si tu veux */}
        </div>
      </Section>

      <Section title="Fiche technique">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <h4 className="font-semibold mb-2">Stack</h4>
            <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
              <li>C++17 · SFML 2.6</li>
              <li>Physique arcade (accélération, freinage, dérapage)</li>
              <li>Gestion collisions / checkpoints</li>
              <li>Éditeur de circuits simple (JSON)</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
            <h4 className="font-semibold mb-2">Contrôles</h4>
            <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
              <li>Flèches : direction</li>
              <li>Espace : frein</li>
              <li>R : reset voiture</li>
              {/* adapte à ton jeu */}
            </ul>
            <p className="text-neutral-400 text-sm mt-3">
              Un fichier <code>README.txt</code> est inclus dans l’archive.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
