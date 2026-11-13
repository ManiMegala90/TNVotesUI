// components/ConstituencyFilterBar.jsx
// ─── Region filter chips + sort selector ─────────────────────────────────────

import FilterChip from "@/components/FilterChip";

const REGIONS = ["All", "North", "South", "Central", "West", "East"];

const SORT_OPTS = [
  { value: "name",   label: "Name A–Z"       },
  { value: "voters", label: "Most Voters"    },
  { value: "id",     label: "Constituency #" },
];

export default function ConstituencyFilterBar({
  region,
  setRegion,
  sortBy,
  setSortBy,
  total,
  filtered,
  onReset,
  hasActive,
}) {
  return (
    <div className="mb-10 space-y-2">

      {/* Single wrapping row — sort group stays together and wraps as a unit */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

        {/* Region label + chips */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Region
          </span>
          {/* Scrollable on mobile, wraps on sm+ */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:overflow-visible no-scrollbar">
            {REGIONS.map((r) => (
              <FilterChip
                key={r}
                label={r}
                active={region === r}
                onClick={() => setRegion(r)}
                variant="chip"
              />
            ))}
          </div>
        </div>

        {/* Sort + meta — stays as one unit, floats right when space allows */}
        <div className="flex items-center gap-3 ml-auto shrink-0">

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Sort
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                text-xs font-bold rounded-lg px-3 py-2 outline-none cursor-pointer border-none
                bg-white text-slate-600 border border-slate-200 shadow-sm
                dark:bg-slate-800 dark:text-slate-300
              "
            >
              {SORT_OPTS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {hasActive && (
            <button
              onClick={onReset}
              className="text-[10px] font-black uppercase tracking-wider text-[#865300] hover:underline dark:text-amber-500 bg-transparent border-none cursor-pointer"
            >
              Clear all
            </button>
          )}

          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            {filtered} of {total}
          </span>

        </div>
      </div>

    </div>
  );
}
