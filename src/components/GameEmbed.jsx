// Embeds a standalone HTML game placed under public/games/<slug>/index.html
const GameEmbed = ({ slug, height = 720 }) => (
<div className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
<iframe
title={slug}
src={`${process.env.NODE_ENV === "production" ? import.meta.env.BASE_URL : ""}/games/${slug}/index.html`}
className="w-full"
style={{ height }}
allowFullScreen
/>
</div>
);
export default GameEmbed;