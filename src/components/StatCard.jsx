const StatCard = ({ label, value, hint }) => (
<div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-6">
<p className="text-neutral-400 text-xs">{label}</p>
<p className="text-2xl font-bold">{value}</p>
{hint && <p className="text-neutral-500 text-xs mt-1">{hint}</p>}
</div>
);
export default StatCard;