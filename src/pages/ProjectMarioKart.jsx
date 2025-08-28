import Section from "../components/Section.jsx";
import GameEmbed from "../components/GameEmbed.jsx";


export default function ProjectMarioKart(){
    return (
    <>
        <Section title="Mario Kart 3D (JavaScript)" subtitle="Démo jouable intégrée (PC)">
        <GameEmbed slug="mariokart" height={720} />
        </Section>

        <Section title="Voici un jeu vidéo disponible sur navigateur et qui n'a pas de but commercial" subtitle=" ">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl p-6">
                    <h4 className="font-semibold mb-2">Jouer entre 1 et 4 joueurs avec ces commandes</h4>
                    <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
                        <li>"ZQSD"</li>
                        <li>"OKLM"</li>
                        <li>"GVBN"</li>
                        <li>"←↑→↓"</li>
                        <li>Dérape avec un double appuie sur l'une des touches pour tourner</li>
                    </ul>
                </div>
                <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl p-6">
                    <h4 className="font-semibold mb-2">Controles Manettes Bluetooth</h4>
                    <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
                        <li>La première manette connectée peut controller un curseur</li>
                        <li>Pour se diriger, utilise le Joystick</li>
                        <li>Pour avancer appuie sur le bouton de droite (A)</li>
                        <li>Utilise la gachette de droite pour dérapager lors d'un virage</li>
                    </ul>
                </div>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl p-6">
                    <h4 className="font-semibold mb-2">IA en folie</h4>
                    <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
                        <li>Les courses sont de vrai courses contres des IAs</li>
                        <li>Ces IAs ne sont pas très intelligentes mais elles arrivent à distinguer la route du hors-piste et savent déraper</li>
                    </ul>
                </div>
            </div>
        </Section>

        <Section title="Détails techniques" subtitle=" ">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl p-6">
                    <h4 className="font-semibold mb-2">Stack</h4>
                    <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
                        <li>JavaScript ES modules, Vite</li>
                        <li>Three.js pour la 3D, Cannon-es pour la physique</li>
                        <li>Gestion caméra : suivi 3ème personne + caméras alternatives</li>
                        <li>UI responsive (hud vitesse, tours, drift/boost)</li>
                    </ul>
                </div>
                <div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl p-6">
                    <h4 className="font-semibold mb-2">Fonctionnalités clés</h4>
                    <ul className="list-disc pl-5 text-neutral-300 text-sm space-y-1">
                        <li>Drift avec accumulation de boost</li>
                        <li>Terrain, bordures, obstacles et skybox optimisés</li>
                        <li>Système de checkpoints & tours</li>
                        <li>Support manette (optionnel)</li>
                    </ul>
                </div>
            </div>
        </Section>
    </>
);
}