// components/CandidateSearchBar.jsx
// ─── Search input with clear button ──────────────────────────────────────────

export default function CandidateSearchBar({ value, onChange, onClear }) {
  return (
    <div className="relative mb-6 flex flex-col gap-4 md:flex-row">
      <div className="relative flex-grow">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name, constituency, or party..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-4 pl-12 pr-10 text-white placeholder-slate-500 outline-none focus:border-[#fea520]/50 focus:ring-2 focus:ring-[#fea520]/20 dark:bg-slate-800/50"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        )}
      </div>

      <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-700">
        <span className="material-symbols-outlined">tune</span>
        Advanced Filter
      </button>
    </div>
  );
}
