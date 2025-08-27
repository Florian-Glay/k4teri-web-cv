const VideoCard = ({ id, title, onOpen }) => (
<button onClick={() => onOpen(id)} className="bg-neutral-900/60 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden text-left hover:scale-[1.01] transition">
<img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title} className="w-full aspect-video object-cover" />
<div className="p-4">
<h4 className="font-semibold">{title}</h4>
</div>
</button>
);
export default VideoCard;