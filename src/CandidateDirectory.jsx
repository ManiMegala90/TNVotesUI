// src/pages/CandidateDirectory.jsx
// ─── Candidate Directory page ─────────────────────────────────────────────────
// Route-only: no nav, no footer. Drop into your router as a <Route> element.

import { useState } from "react";
import { useCandidate } from "@/hooks/useCandidate.js";
import CandidateCard from "@/components/CandidateCard.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import CandidateFilterBar from "@/components/CandidateFilterBar.jsx";
import Pagination from "@/components/Pagination.jsx";
import MobileBottomNav from "@/layout/MobileBottomNav.jsx";
import { LoadingSpinner, EmptyState } from "@/components/States.jsx";
import CandidateDetailModal from "@/components/CandidateDetailModal.jsx";

// ── View variant toggle icons ─────────────────────────────────────────────────
const VIEW_OPTIONS = [
  {
    key: "small",
    label: "Compact",
    // 2×2 dense grid icon
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="1" y="1" width="6" height="6" rx="1.2" />
        <rect x="9" y="1" width="6" height="6" rx="1.2" />
        <rect x="1" y="9" width="6" height="6" rx="1.2" />
        <rect x="9" y="9" width="6" height="6" rx="1.2" />
      </svg>
    ),
  },
  {
    key: "medium",
    label: "Default",
    // 2-wide card rows icon
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="1" y="1" width="6" height="4" rx="1.2" />
        <rect x="9" y="1" width="6" height="4" rx="1.2" />
        <rect x="1" y="7" width="6" height="4" rx="1.2" />
        <rect x="9" y="7" width="6" height="4" rx="1.2" />
        <rect x="1" y="13" width="6" height="2.5" rx="1.2" />
        <rect x="9" y="13" width="6" height="2.5" rx="1.2" />
      </svg>
    ),
  },
  {
    key: "large",
    label: "Detailed",
    // 3-column grid icon
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <rect x="1"   y="1" width="4" height="14" rx="1.2" />
        <rect x="6"   y="1" width="4" height="14" rx="1.2" />
        <rect x="11"  y="1" width="4" height="14" rx="1.2" />
      </svg>
    ),
  },
];

// Grid column classes per variant
const GRID_COLS = {
  small:  "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
  medium: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
  large:  "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function CandidateDirectory() {
  const [cardVariant, setCardVariant] = useState("medium");
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const {
    paginated,
    filtered,
    loading,
    error,
    total,
    grandTotal,
    search,
    setSearch,
    party,
    setParty,
    page,
    setPage,
    resetFilters,
    hasActive,
  } = useCandidate();

  return (
    <>
      <main className="pt-32 pb-28 lg:pb-20 px-6 max-w-screen-2xl mx-auto min-h-screen">
        {/* ── Page Header ────────────────────────────────────────────── */}
        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none dark:text-white text-slate-900">
            Candidate{" "}
            <span className="dark:text-[#fea520] text-[#022448]">Directory</span>
          </h1>
          <p className="w-full text-lg font-medium leading-relaxed dark:text-slate-400 text-slate-600">
            Access verified civic data of Tamil Nadu's political candidates. A
            transparent ledger of financial declarations, legal standings, and
            electoral history to empower every vote.
          </p>
        </header>

        {/* ── Search ─────────────────────────────────────────────────── */}
        <SearchBar
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />

        {/* ── Filters + View Toggle ───────────────────────────────────── */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CandidateFilterBar
              party={party}
              setParty={setParty}
              total={grandTotal}
              filtered={total}
              hasActive={hasActive}
              onReset={resetFilters}
            />
          </div>

          {/* View toggle */}
          <div
            className="
              flex items-center gap-0.5 p-1 rounded-lg flex-shrink-0
              dark:bg-slate-800 dark:border-slate-700
              bg-slate-100 border border-slate-200
            "
            role="group"
            aria-label="Card view"
          >
            {VIEW_OPTIONS.map(({ key, label, icon }) => {
              const active = cardVariant === key;
              return (
                <button
                  key={key}
                  onClick={() => setCardVariant(key)}
                  title={label}
                  aria-pressed={active}
                  className={`
                    flex items-center justify-center w-7 h-7 rounded-md transition-all duration-150
                    ${active
                      ? "dark:bg-[#fea520] bg-[#022448] dark:text-slate-900 text-white shadow-sm"
                      : "dark:text-slate-400 text-slate-500 dark:hover:text-slate-200 hover:text-slate-700 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
                    }
                  `}
                >
                  {icon}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Grid ───────────────────────────────────────────────────── */}
        {loading ? (
          <LoadingSpinner message="Loading candidates..." />
        ) : error ? (
          <EmptyState
            icon="⚠️"
            title="Failed to load"
            subtitle={error}
            action={
              <button
                onClick={() => window.location.reload()}
                className="text-xs font-bold uppercase hover:underline dark:text-[#fea520] text-[#022448] bg-transparent border-none cursor-pointer"
              >
                Retry
              </button>
            }
          />
        ) : filtered.length === 0 || paginated.length === 0 ? (
          <EmptyState
            icon="🔍"
            title="No candidates found"
            subtitle="Try adjusting your search or filters"
            action={
              hasActive && (
                <button
                  onClick={resetFilters}
                  className="text-xs font-bold uppercase hover:underline dark:text-[#fea520] text-[#022448] bg-transparent border-none cursor-pointer"
                >
                  Clear filters
                </button>
              )
            }
          />
        ) : (
          <>
            <div className={`grid gap-8 mt-8 ${GRID_COLS[cardVariant]}`}>
              {paginated.map((c, i) => (
                <div
                  key={c.id}
                  style={{ animationDelay: `${(i % 9) * 60}ms` }}
                  className="animate-fadeInUp"
                >
                  <CandidateCard
                    candidate={c}
                    variant={cardVariant}
                    onViewProfile={() => setSelectedCandidate(c)}
                  />
                </div>
              ))}
            </div>

            {/* ── Pagination ─────────────────────────────────────────── */}
            <Pagination total={total} page={page} setPage={setPage} />
          </>
        )}
      </main>

      {selectedCandidate && (
        <CandidateDetailModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}

      {/* Mobile bottom nav */}
      <MobileBottomNav />
    </>
  );
}
