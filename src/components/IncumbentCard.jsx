// src/components/detail/IncumbentCard.jsx
// ─── Current MLA representative card ────────────────────────────────────────

export default function IncumbentCard({ incumbent: rep }) {
  if (!rep) return null;

  return (
    <div>
      <div
        className="relative group rounded-xl p-6 shadow-sm overflow-hidden
        dark:bg-slate-800/40 dark:border dark:border-slate-700/50
        bg-white border border-transparent"
      >
        <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-6 dark:text-slate-500 text-slate-500">
          Current Representative
        </h2>

        {/* Photo + name row */}
        <div className="flex items-start gap-6">
          <img
            src={rep.photoUrl}
            alt={rep.name}
            className="w-24 h-32 object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500
              dark:border-2 dark:border-slate-700 border-2 border-slate-200"
          />
          <div>
            <p className="text-xl font-bold leading-tight mb-1 dark:text-white text-blue-950">
              {rep.name}
            </p>
            <p className="text-sm font-bold mb-4 dark:text-amber-500 text-amber-800">{rep.party}</p>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs dark:text-slate-500 text-slate-500">
                  calendar_today
                </span>
                <span className="text-xs font-medium dark:text-slate-400 text-slate-600">
                  Term: {rep.termStart} — {rep.termEnd || "Present"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs dark:text-slate-500 text-slate-500">
                  history_edu
                </span>
                <span className="text-xs font-medium dark:text-slate-400 text-slate-600">
                  {rep.consecutiveTerms}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Margin bar */}
        <div className="mt-6 pt-6 border-t dark:border-slate-700/50 border-slate-100">
          <div className="flex justify-between items-center text-xs font-bold mb-2 dark:text-slate-500 text-slate-500">
            <span>{rep.lastElectionYear} Margin</span>
            <span className="font-black dark:text-emerald-400 text-emerald-600">
              {rep.marginPercent}
            </span>
          </div>
          <div className="w-full h-1 rounded-full overflow-hidden dark:bg-slate-700 bg-slate-200">
            <div
              className="h-full bg-emerald-400 rounded-full"
              style={{ width: rep.marginBarWidth }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
