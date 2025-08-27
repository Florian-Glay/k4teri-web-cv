import Section from "../components/Section.jsx";
import GameEmbed from "../components/GameEmbed.jsx";

export default function ProjectUnity(){
  return (
    <>
      <Section
        title="RPG 2D (Unity/C#) — Démo WebGL"
        subtitle="Le build WebGL est chargé directement dans la page (iframe)."
      >
        {/* Charge /public/games/unity/index.html */}
        <GameEmbed slug="unity" height={720} />
        <p className="text-neutral-400 text-sm mt-3">
          Si la démo ne s’affiche pas : vérifie que <code>/public/games/unity/index.html</code> existe,
          que les chemins sont <em>relatifs</em> (ex. <code>./Build/...)</code> et que
          “Decompression Fallback” est activé dans Unity.
        </p>
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
