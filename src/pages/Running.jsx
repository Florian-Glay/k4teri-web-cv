import Section from "../components/Section.jsx";
import { useLang, useLocaleLink } from "../lib/lang";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { yearTotals } from "../data/running.js";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTHS_FR = ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];

// {year, month, km} -> {date, dateISO, km, year, monthIndex}
function normalizeData(rows) {
  const idx = (m) => MONTHS.indexOf(m);
  const out = rows.map(({ year, month, km }) => {
    const y = Number(year);
    const mi = idx(month);
    const d = new Date(y, mi, 1);
    return {
      date: d,
      dateISO: d.toISOString(),
      km: Number(km || 0),
      year: y,
      monthIndex: mi,
    };
  });
  out.sort((a, b) => a.date - b.date);
  return out;
}

const data = normalizeData(yearTotals);

// Lignes "année" = chaque janvier
const yearMarkers = Array.from(
  new Map(
    data
      .filter(d => d.monthIndex === 0) // Jan
      .map(d => [d.year, d])           // dédoublonne
  ).values()
).map(d => ({ year: d.year, x: d.dateISO }));

// Lignes pointillées pour mars, septembre, novembre
const dottedMonthsIdx = [2, 8, 10]; // Mar, Sep, Nov
const dottedMarkers = data
  .filter(d => dottedMonthsIdx.includes(d.monthIndex))
  .map(d => ({ x: d.dateISO }));

const StatCard = ({ label, value, hint }) => (
  <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-5">
    <p className="text-neutral-400 text-xs">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
    {hint && <p className="text-neutral-500 text-xs mt-1">{hint}</p>}
  </div>
);

export default function Running() {
  const totalKm = data.reduce((s, r) => s + r.km, 0);
  const thisYear = new Date().getFullYear();
  const currentYearKm = data.filter(d => d.year === thisYear).reduce((s, r) => s + r.km, 0);
  const { t, lang } = useLang();
  const link = useLocaleLink();

  return (
    <>
      <Section title={t("running.runningTitle")} subtitle={t("running.cumulatedVolume")}>
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard label={t("running.totalDistance")} value={`${Math.round(totalKm)} km`} />
          <StatCard label={`${t("running.year")} ${thisYear}`} value={`${Math.round(currentYearKm)} km`} />
          <StatCard
            label={t("running.avgMonth")}
            value={`${Math.round((totalKm / Math.max(1, data.length)) * 100) / 100} km`}
            hint={t("running.ind")}
          />
        </div>
      </Section>

      <Section title={t("running.monthlyVolume")}>
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-4 h-[420px] text-accent">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 36, right: 20, bottom: 16, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.15)" />

              <XAxis
                dataKey="dateISO"
                tickFormatter={(iso) => {
                  const d = new Date(iso);
                  return (lang === "fr" ? MONTHS_FR : MONTHS)[d.getMonth()];
                }}
                tick={{ fill: "rgba(229,229,229,0.85)" }}
                tickMargin={8}
                interval="preserveStartEnd"
              />

              <YAxis
                tick={{ fill: "rgba(229,229,229,0.85)" }}
                width={40}
                allowDecimals={false}
              />

              {/* Tooltip sombre */}
              <Tooltip
                cursor={{ stroke: "rgba(255,255,255,0.25)", strokeDasharray: 4 }}
                contentStyle={{
                  background: "rgba(20,20,20,0.9)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  color: "#e5e5e5",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.35)",
                  padding: "8px 10px",
                }}
                labelFormatter={(iso) => {
                  const d = new Date(iso);
                  return `${(lang === "fr" ? MONTHS_FR : MONTHS)[d.getMonth()]} ${d.getFullYear()}`;
                }}
                formatter={(v) => [`${v} km`, "km"]}
              />

              {/* Dégradé sous la courbe */}
              <defs>
                <linearGradient id="kmFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Lignes d'année (janvier) avec label *dans* le chart */}
              {yearMarkers.map(m => (
                <ReferenceLine
                  key={`y-${m.year}`}
                  x={m.x}
                  stroke="rgba(255,255,255,0.25)"
                  strokeDasharray="3 3"
                  label={{
                    value: String(m.year),
                    position: "insideTop",
                    dy: 6,
                    fill: "#e5e5e5",
                    fontSize: 12,
                  }}
                />
              ))}

              {/* Pointillés pour mars / septembre / novembre */}
              {dottedMarkers.map((m, i) => (
                <ReferenceLine
                  key={`d-${i}`}
                  x={m.x}
                  stroke="rgba(255,255,255,0.25)"
                  strokeDasharray="1 6"
                />
              ))}

              <Area
                type="monotone"
                dataKey="km"
                stroke="currentColor"
                strokeWidth={3}
                fill="url(#kmFill)"
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Section>
    </>
  );
}
