// src/pages/CV.jsx
import React from "react";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800/60 px-3 py-1 text-sm text-neutral-200">
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <section className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl p-6 md:p-8">
    <h3 className="text-xl md:text-2xl font-semibold text-neutral-100 mb-4">{title}</h3>
    {children}
  </section>
);

export default function CV() {
  // IMPORTANT (GitHub Pages) : utilise BASE_URL pour référencer le PDF dans /public/
  const pdfHref = `${import.meta.env.BASE_URL}assets/CV_Florian_Glay_FR.pdf`;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <header className="bg-gradient-to-b from-neutral-900/70 to-neutral-900/30 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Bloc gauche : nom + description */}
            <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-50">
                Florian Glay
            </h1>
            <p className="mt-2 text-neutral-300">
                Étudiant ingénieur (ISEN Lille) — Dev Web & Jeux • C/C++ • JavaScript • Unity
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                <Badge>C, C++, Python</Badge>
                <Badge>JS / Three.js / Node</Badge>
                <Badge>Unity (C#)</Badge>
                <Badge>SQL / MAMP</Badge>
            </div>
            </div>

            {/* Bloc droite : photo de profil */}
            <div className="flex-shrink-0">
            <img
                src={`${import.meta.env.BASE_URL}assets/profile.png`}
                alt="Photo de profil"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-neutral-700 shadow-lg"
            />
            </div>

            {/* Bloc milieu : boutons en colonne */}
            <div className="flex flex-col items-start gap-3 md:items-center md:justify-center">
            <a
                href="mailto:florian.glay@student.junia.com"
                className="w-full rounded-xl border border-neutral-700 bg-neutral-800/70 px-4 py-2 text-center text-neutral-100 hover:bg-neutral-800 transition"
            >
                Me contacter
            </a>
            <a
                href={pdfHref}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl bg-accent text-white px-4 py-2 text-center hover:opacity-95 transition"
            >
                Télécharger le PDF
            </a>
            </div>

        </div>

        {/* Ligne bas */}
        <div className="mt-4 text-sm text-neutral-400">
            France • +33 7 67 43 04 62 •{" "}
            <a
            className="underline hover:text-neutral-200"
            href="https://github.com/Florian-Glay"
            target="_blank"
            rel="noreferrer"
            >
            github.com/Florian-Glay
            </a>
        </div>
      </header>


      {/* Formation & Expériences */}
      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Formation">
          <ul className="space-y-4">
            <li>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-neutral-100">
                    Cycle Ingénieur – Informatique & Réseaux Numériques (3ᵉ année)
                  </p>
                  <p className="text-neutral-300">ISEN Lille, France</p>
                </div>
                <span className="text-sm text-neutral-400">2023 — Présent</span>
              </div>
            </li>
            <li>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-neutral-100">
                    Baccalauréat Général — Mention Très Bien
                  </p>
                  <p className="text-neutral-300">
                    Institut de Genech — Spécialités Mathématiques, NSI
                  </p>
                </div>
                <span className="text-sm text-neutral-400">2020 — 2023</span>
              </div>
            </li>
          </ul>
        </Section>

        <Section title="Expériences professionnelles">
          <ul className="space-y-5">
            <li>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-neutral-100">Stagiaire — Support Opérationnel</p>
                  <p className="text-neutral-300">Norcap, Roubaix — 5 semaines</p>
                  <p className="mt-1 text-neutral-400 text-sm">
                    Aide aux opérations logistiques (préparation de commandes, rangement,
                    participation à la fluidité des opérations).
                  </p>
                </div>
                <span className="text-sm text-neutral-400">2024</span>
              </div>
            </li>

            <li>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-neutral-100">Stagiaire Développeur</p>
                  <p className="text-neutral-300">3Axes Institut, Tourcoing — 2 semaines</p>
                  <p className="mt-1 text-neutral-400 text-sm">
                    Contribution à un outil interne en C++ (première immersion pro).
                  </p>
                </div>
                <span className="text-sm text-neutral-400">2021</span>
              </div>
            </li>

            <li>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-neutral-100">Stage d’observation</p>
                  <p className="text-neutral-300">Eurobaut, Denain — 1 semaine</p>
                  <p className="mt-1 text-neutral-400 text-sm">
                    Découverte de l’organisation d’une entreprise et des métiers industriels.
                  </p>
                </div>
                <span className="text-sm text-neutral-400">2020</span>
              </div>
            </li>
          </ul>
        </Section>
      </div>

      {/* Compétences & Projets */}
      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Compétences techniques">
          <div className="space-y-3">
            <div>
              <p className="font-medium text-neutral-200 mb-2">Langages</p>
              <div className="flex flex-wrap gap-2">
                <Badge>C</Badge>
                <Badge>C++</Badge>
                <Badge>Python</Badge>
                <Badge>JavaScript</Badge>
                <Badge>C#</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>
            <div>
              <p className="font-medium text-neutral-200 mb-2">Web & Outils</p>
              <div className="flex flex-wrap gap-2">
                <Badge>HTML</Badge>
                <Badge>CSS / Tailwind</Badge>
                <Badge>Node.js</Badge>
                <Badge>Vite</Badge>
                <Badge>Three.js</Badge>
                <Badge>Cannon.js</Badge>
                <Badge>MAMP / MySQL</Badge>
                <Badge>Git / GitHub</Badge>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Projets marquants">
          <ul className="space-y-4">
            <li>
              <p className="font-medium text-neutral-100">Jeu 3D type Mario Kart (JavaScript)</p>
              <p className="text-neutral-400 text-sm">
                Mécaniques de drift/boost, terrains optimisés, HUD, caméra 3ᵉ personne.
              </p>
            </li>
            <li>
              <p className="font-medium text-neutral-100">
                Simulateur automobile (C++ / SFML)
              </p>
              <p className="text-neutral-400 text-sm">
                Simulation 2D/3D avec gestion entrée, physique simple et rendu temps réel.
              </p>
            </li>
            <li>
              <p className="font-medium text-neutral-100">Jeu 2D RPG (Unity/C#)</p>
              <p className="text-neutral-400 text-sm">
                Création d’un prototype jouable (systèmes de base, level design, VFX).
              </p>
            </li>
          </ul>
          <a
            href="https://github.com/Florian-Glay"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-accent underline hover:opacity-90"
          >
            Voir tous les projets sur GitHub →
          </a>
        </Section>
      </div>

      {/* Langues & Intérêts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Langues">
          <div className="flex flex-wrap gap-2">
            <Badge>Français — Natif</Badge>
            <Badge>Anglais — B2</Badge>
            <Badge>Allemand — A2</Badge>
            <Badge>Japonais — A1</Badge>
          </div>
        </Section>

        <Section title="Centres d’intérêt">
          <ul className="list-disc pl-5 text-neutral-300 space-y-1">
            <li>Jeux vidéo & design numérique (création, pixel art, dev)</li>
            <li>Course à pied (10 km : 50 min ; semi : 2h17)</li>
            <li>
              Musique électronique — chaîne YouTube{" "}
              <a
                className="underline"
                href="https://www.youtube.com/@K4TERI4music/videos"
                target="_blank"
                rel="noreferrer"
              >
                K4TERI4music
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
