import Section from "../components/Section.jsx";
import GameEmbed from "../components/GameEmbed.jsx";


export default function ProjectMarioKart(){
return (
<>
<Section title="Mario Kart 3D (JavaScript)" subtitle="Démo jouable intégrée — place ton build dans public/games/mariokart/">
<GameEmbed slug="mariokart" height={720} />
</Section>


<Section title="Détails techniques">
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