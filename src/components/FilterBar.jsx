// src/components/constituency/FilterBar.jsx
import {
  DISTRICTS,
  REGIONS,
  PARTIES,
  SORT_OPTIONS,
} from "@/constants/constants";

export default function FilterBar({
  filterDistrict,
  setFilterDistrict,
  filterRegion,
  setFilterRegion,
  filterParty,
  setFilterParty,
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
  filteredCount,
  totalCount,
  resetFilters,
  hasActiveFilters,
}) {
  const selectClass = `
    rounded-lg text-sm font-semibold px-4 py-2 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-blue-500/20
    dark:bg-[#1E293B] dark:border dark:border-slate-700 dark:text-slate-100
    bg-[#f2f3ff] border-0 text-[#022448]
  `;

  return (
    <div className="sticky top-[72px] z-40 dark:bg-[#0F172A] bg-white dark:border-y dark:border-slate-800 border-y border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
        {/* Label */}
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined dark:text-slate-500 text-[#74777f]">
            filter_list
          </span>
          <span className="font-bold text-sm tracking-widest uppercase dark:text-slate-500 text-[#74777f]">
            Filters
          </span>
        </div>

        <select
          value={filterDistrict}
          onChange={(e) => setFilterDistrict(e.target.value)}
          className={selectClass}
        >
          {DISTRICTS.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>

        <select
          value={filterRegion}
          onChange={(e) => setFilterRegion(e.target.value)}
          className={selectClass}
        >
          {REGIONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>

        <select
          value={filterParty}
          onChange={(e) => setFilterParty(e.target.value)}
          className={selectClass}
        >
          {PARTIES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={selectClass}
        >
          {["All", "Won", "Pending", "Live"].map((s) => (
            <option key={s} value={s}>
              {s === "All" ? "Status (All)" : s}
            </option>
          ))}
        </select>

        <div className="h-6 w-px dark:bg-slate-800 bg-slate-200 hidden md:block" />

        {/* Sort */}
        <div className="flex items-center space-x-2 ml-auto">
          <span className="text-xs font-bold uppercase tracking-wider dark:text-slate-500 text-[#74777f]">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none text-sm font-bold focus:outline-none cursor-pointer dark:text-white text-[#022448]"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter chips */}
      <div className="max-w-7xl mx-auto px-6 pb-3 flex flex-wrap gap-2 items-center">
        {filterRegion !== "Region (All)" && (
          <Chip
            label={`Region: ${filterRegion}`}
            onRemove={() => setFilterRegion("Region (All)")}
          />
        )}
        {filterDistrict !== "District (38)" && (
          <Chip
            label={`District: ${filterDistrict}`}
            onRemove={() => setFilterDistrict("District (38)")}
          />
        )}
        {filterParty !== "Party (All)" && (
          <Chip
            label={`Party: ${filterParty}`}
            onRemove={() => setFilterParty("Party (All)")}
          />
        )}
        {filterStatus !== "All" && (
          <Chip
            label={`Status: ${filterStatus}`}
            onRemove={() => setFilterStatus("All")}
          />
        )}
        {!hasActiveFilters && (
          <>
            <Chip label="Region: All" onRemove={() => {}} />
            <Chip label="Status: All" onRemove={() => {}} />
          </>
        )}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs font-bold uppercase hover:underline bg-transparent border-none cursor-pointer dark:text-[#fea520] text-[#865300]"
          >
            Clear all
          </button>
        )}
        <span className="ml-auto text-xs font-bold dark:text-slate-500 text-[#74777f]">
          Showing{" "}
          <span className="dark:text-white text-[#022448]">
            {filteredCount}
          </span>{" "}
          of {totalCount}
        </span>
      </div>
    </div>
  );
}

function Chip({ label, onRemove }) {
  return (
    <span
      className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2
      dark:bg-[#334155] dark:text-slate-100
      bg-[#e2e7ff] text-[#022448]"
    >
      {label}
      <button
        onClick={onRemove}
        className="bg-transparent border-none cursor-pointer leading-none dark:text-slate-400 text-[#74777f] hover:text-current"
        aria-label={`Remove ${label}`}
      >
        <span className="material-symbols-outlined text-sm leading-none">
          close
        </span>
      </button>
    </span>
  );
}
