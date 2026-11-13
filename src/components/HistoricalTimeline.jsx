// src/components/detail/HistoricalTimeline.jsx
// ─── Vertical timeline of election history ────────────────────────────────────

function TimelineRow({ entry, isLatest }) {
  const year = entry?.year || "—";
  const winner = entry?.winner || "—";
  const party = entry?.party || "—";
  const margin = entry?.margin || "—";

  return (
    <div className="relative flex items-center gap-8 md:gap-12 group">
      {/* Year bubble */}
      <div
        className={[
          "w-12 h-12 rounded-full flex items-center justify-center font-black text-sm z-10 flex-shrink-0",
          isLatest
            ? "bg-[#fea520] text-[#022448]"
            : "border dark:border-white/20 dark:bg-white/10 dark:text-white border-slate-300 bg-slate-100 text-slate-600",
        ].join(" ")}
      >
        {String(year).slice(2)}
      </div>

      {/* Row data */}
      <div
        className={[
          "flex-1 grid grid-cols-2 md:grid-cols-4 items-center gap-4",
          isLatest
            ? ""
            : "opacity-70 group-hover:opacity-100 transition-opacity",
        ].join(" ")}
      >
        <div className="font-black text-2xl dark:text-white text-blue-950">
          {year}
        </div>
        <div className="text-lg font-bold dark:text-slate-200 text-slate-900">
          {winner}
        </div>
        <div className="dark:text-blue-300/70 text-slate-600 font-medium">
          {party}
        </div>
        <div
          className={[
            "text-right font-black",
            isLatest ? "dark:text-amber-500 text-amber-800" : "dark:text-slate-300 text-slate-900",
          ].join(" ")}
        >
          {margin}
        </div>
      </div>
    </div>
  );
}

export default function HistoricalTimeline({ history = [] }) {
  if (!history.length) return null;

  return (
    <section className="rounded-2xl p-8 md:p-12 border dark:border-slate-800 dark:bg-slate-900 bg-white border-slate-200/80 dark:text-slate-100 text-slate-800">
      <h2 className="text-sm font-black uppercase tracking-[0.2em] dark:text-blue-300/70 text-slate-500 mb-12">
        Historical Election Data
      </h2>

      <div className="relative max-w-4xl space-y-12">
        {/* Vertical connector line */}
        <div className="absolute left-6 top-0 bottom-0 w-px dark:bg-white/10 bg-slate-200" />

        {history.map((entry, i) => (
          <TimelineRow key={`${entry?.year || i}-${i}`} entry={entry} isLatest={i === 0} />
        ))}
      </div>
    </section>
  );
}
