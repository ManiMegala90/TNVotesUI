// components/CandidateFilterBar.jsx
// ─── Party filter chips + active filter summary ───────────────────────────────

import FilterChip from "@/components/FilterChip";
import { PARTIES } from "@/hooks/useCandidate.js";

export default function CandidateFilterBar({
  party,
  setParty,
  total,
  filtered,
  hasActive,
  onReset,
}) {
  return (
    <div className="mb-12 space-y-2">

      {/* Single wrapping row — meta group floats right when space allows */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

        {/* Label + party chips */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Filter by
          </span>
          {/* Scrollable on mobile, wraps on sm+ */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:overflow-visible no-scrollbar">
            {PARTIES.map((p) => (
              <FilterChip
                key={p}
                label={p}
                active={party === p}
                onClick={() => setParty(p)}
                variant="pill"
              />
            ))}
          </div>
        </div>

        {/* Count + clear — floats right when space allows, wraps as a unit */}
        {hasActive && (
          <div className="flex items-center gap-3 ml-auto shrink-0">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-500">
              <span className="font-bold text-slate-800 dark:text-white">{filtered}</span>
              {" "}of{" "}
              <span className="font-bold text-slate-800 dark:text-white">{total}</span>
            </p>
            <button
              onClick={onReset}
              className="text-[10px] font-bold uppercase tracking-widest text-[#865300] hover:underline dark:text-amber-500 bg-transparent border-none cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
