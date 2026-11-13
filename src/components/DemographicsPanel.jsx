// src/components/detail/DemographicsPanel.jsx
// ─── Voter demographics: urban/rural split + age group bar chart ─────────────

export default function DemographicsPanel({ demographics: d }) {
  if (!d) return null;

  const ageGroups = d.ageGroups || [
    { label: "18-25", pct: 40 },
    { label: "26-40", pct: 70 },
    { label: "41-55", pct: 100 },
    { label: "56-70", pct: 55 },
    { label: "70+", pct: 25 },
  ];

  return (
    <div className="lg:col-span-8 rounded-xl p-8 dark:bg-slate-800/30 dark:border dark:border-slate-700/50 bg-[#f2f3ff]">
      <div className="flex justify-between items-start mb-10">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] dark:text-slate-500 text-[#74777f]">
          Voter Demographics
        </h2>
        <span className="material-symbols-outlined text-4xl opacity-10 dark:text-white text-[#022448]">
          analytics
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Urban vs Rural split */}
        <div>
          <p className="text-xs font-bold mb-4 flex items-center gap-2 dark:text-slate-400 text-[#43474e]">
            <span className="w-2 h-2 rounded-full bg-[#865300]" />
            Urban vs Rural Split
          </p>
          <div className="flex h-12 rounded-lg overflow-hidden">
            <div
              className="flex items-center justify-center text-[10px] font-black text-white bg-[#022448]"
              style={{ width: `${d.urbanPct || 85}%` }}
            >
              {d.urbanPct || 85}% URBAN
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-black text-[#022448] bg-[#fea520]"
              style={{ width: `${100 - (d.urbanPct || 85)}%` }}
            >
              {100 - (d.urbanPct || 85)}% RURAL
            </div>
          </div>
        </div>

        {/* Age groups bar chart */}
        <div>
          <p className="text-xs font-bold mb-4 dark:text-slate-400 text-[#43474e]">
            Age Groups Distribution
          </p>
          <div className="flex gap-2 items-end h-16">
            {ageGroups.map((ag) => (
              <div
                key={ag.label}
                className="flex-1 rounded-t-sm dark:bg-blue-400 bg-[#022448]"
                style={{ height: `${ag.pct}%`, opacity: ag.pct / 100 + 0.15 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[8px] font-bold tracking-tighter dark:text-slate-500 text-[#74777f]">
            {ageGroups.map((ag) => (
              <span key={ag.label}>{ag.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
