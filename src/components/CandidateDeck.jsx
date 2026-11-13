// src/components/detail/CandidateDeck.jsx
// ─── 2026 candidates section with filter chips + card grid ──────────────────
import { useState } from "react";
import CandidateCard from "@/components/CandidateCard.jsx";
import CandidateDetailModal from "@/components/CandidateDetailModal.jsx";

export default function CandidateDeck({ candidates = [] }) {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Alphabetical");
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const parties = [
    "All",
    ...Array.from(new Set(candidates.map((c) => c.party))),
  ];

  const visible = candidates
    .filter((c) => filter === "All" || c.party === filter)
    .sort((a, b) => {
      if (sort === "Alphabetical") return a.name.localeCompare(b.name);
      if (sort === "Assets") return (b.assetsRaw || 0) - (a.assetsRaw || 0);
      return 0;
    });

  const chipClass = (active) =>
    [
      "px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer border-none",
      active
        ? "dark:bg-[#1e3a5f] dark:text-blue-200 bg-[#022448] text-white"
        : "dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 bg-[#e2e7ff] text-[#022448] hover:bg-[#dae2fd]",
    ].join(" ");

  return (
    <section className="mb-20">
      {/* Section header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-2 dark:text-slate-500 text-[#74777f]">
            Upcoming Contest
          </h2>
          <h3 className="text-3xl font-black dark:text-white text-[#022448]">
            2026 Candidates Deck
          </h3>
        </div>

        {/* Controls */}
        <div className="flex gap-2 flex-wrap">
          <div className="flex gap-1">
            {parties.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={chipClass(filter === p)}
              >
                {p === "All" ? "Filter: All" : p}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setSort(sort === "Alphabetical" ? "Assets" : "Alphabetical")
            }
            className={chipClass(false)}
          >
            Sort: {sort}
          </button>
        </div>
      </div>

      {/* Cards grid */}
      {visible.length === 0 ? (
        <div className="text-center py-16 dark:text-slate-500 text-[#74777f]">
          No candidates found for this filter.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((c) => (
              <CandidateCard
                key={c.id}
                candidate={c}
                onViewProfile={() => setSelectedCandidate(c)}
              />
            ))}
          </div>

          {selectedCandidate && (
            <CandidateDetailModal
              candidate={selectedCandidate}
              onClose={() => setSelectedCandidate(null)}
            />
          )}
        </>
      )}
    </section>
  );
}
