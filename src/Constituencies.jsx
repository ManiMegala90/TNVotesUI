// src/pages/Constituencies.jsx
// ─── Constituency Directory page — editorial style ────────────────────────────
// Matches dark mode (2__constituency_dark.html) and light mode (2__constituency.html)
// exactly: same layout, same card design, same header, search, filters, pagination.

import { useDirectory } from "@/hooks/useDirectory.js";
import DirectoryCard from "@/components/DirectoryCard.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import ConstituencyFilterBar from "@/components/ConstituencyFilterBar.jsx";
import Pagination from "@/components/Pagination.jsx";
import MobileBottomNav from "@/layout/MobileBottomNav.jsx";
import { LoadingSpinner, EmptyState } from "@/components/States.jsx";

export default function Constituencies() {
  const {
    paginated,
    filtered,
    loading,
    error,
    search,
    setSearch,
    region,
    setRegion,
    sortBy,
    setSortBy,
    page,
    setPage,
    resetFilters,
    hasActive,
    total,
    grandTotal,
  } = useDirectory();

  return (
    <>
      <main className="pt-32 pb-28 lg:pb-20 px-6 max-w-screen-2xl mx-auto">
        {/*  Page Header  */}
        <header className="mb-16">
          {/* Eyebrow tag */}
          {/* <div className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6 border
            dark:bg-[#fea520]/10 dark:text-[#fea520] dark:border-[#fea520]/20
            bg-[#022448]/10 text-[#022448] border-[#022448]/20">
            TN VOTES 2026
          </div> */}

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none dark:text-white text-slate-900">
            Constituency{" "}
            <span className="dark:text-[#fea520] text-[#022448]">
              Directory
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg w-full font-medium leading-relaxed dark:text-slate-400 text-slate-600">
            An authoritative editorial archive of Tamil Nadu's 234 assembly
            constituencies. Explore the demographic shifts, socio-economic
            landscapes, and historical political leanings.
          </p>
        </header>

        {/*  Search  */}
        <SearchBar
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />

        {/*  Filters  */}
        <ConstituencyFilterBar
          region={region}
          setRegion={setRegion}
          sortBy={sortBy}
          setSortBy={setSortBy}
          total={grandTotal}
          filtered={total}
          onReset={resetFilters}
          hasActive={hasActive}
        />

        {/* ── Grid ──────────────────────────────────────────────────── */}
        {loading ? (
          <LoadingSpinner message="Loading constituencies..." />
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
            title="No constituencies found"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginated.map((c, i) => (
                <div
                  key={c.id}
                  style={{ animationDelay: `${(i % 9) * 60}ms` }}
                  className="animate-fadeInUp"
                >
                  <DirectoryCard constituency={c} />
                </div>
              ))}
            </div>

            {/* ─ Pagination ─ */}
            <Pagination total={total} page={page} setPage={setPage} />
          </>
        )}
      </main>

      {/* Mobile bottom nav */}
      <MobileBottomNav />
    </>
  );
}
