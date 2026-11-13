// src/pages/Results.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useConstituencies } from "@/hooks/useConstituencies.js";
import { STATS } from "@/constants/constants.js";
import SpotlightStrip from "@/components/SpotlightStrip.jsx";
import FilterBar from "@/components/FilterBar.jsx";
import ConstituencyCard from "@/components/ConstituencyCard.jsx";
import { LoadingSpinner, EmptyState } from "@/components/States.jsx";

const PAGE_SIZE = 9;
const bgImageBanner = "/images/Background_banner.png";


export default function Results() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const {
    filtered,
    total,
    loading,
    error,
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
    resetFilters,
    hasActiveFilters,
    setSearch: setGlobalSearch,
  } = useConstituencies();

  const handleSearch = () => {
    setGlobalSearch(search);
    setPage(1);
    document
      .getElementById("directory")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  return (
    <>

      {/*  Filter bar  */}
      <FilterBar
        filterDistrict={filterDistrict}
        setFilterDistrict={(v) => {
          setFilterDistrict(v);
          setPage(1);
        }}
        filterRegion={filterRegion}
        setFilterRegion={(v) => {
          setFilterRegion(v);
          setPage(1);
        }}
        filterParty={filterParty}
        setFilterParty={(v) => {
          setFilterParty(v);
          setPage(1);
        }}
        filterStatus={filterStatus}
        setFilterStatus={(v) => {
          setFilterStatus(v);
          setPage(1);
        }}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filteredCount={filtered.length}
        totalCount={total}
        resetFilters={() => {
          resetFilters();
          setPage(1);
        }}
        hasActiveFilters={hasActiveFilters}
      />

      {/*  Grid  */}
      <main id="directory" className="max-w-7xl mx-auto px-6 py-24">
        {loading ? (
          <LoadingSpinner message="Loading constituencies..." />
        ) : error ? (
          <EmptyState
            icon="⚠️"
            title="Failed to load data"
            subtitle={error}
            action={
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-lg font-bold text-sm transition-all
                  dark:border dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800
                  border border-slate-300 text-[#022448] hover:bg-slate-50"
              >
                Retry
              </button>
            }
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            icon="🔍"
            title="No constituencies found"
            subtitle="Try adjusting your search or filters"
            action={
              hasActiveFilters && (
                <button
                  onClick={() => {
                    resetFilters();
                    setPage(1);
                  }}
                  className="text-xs font-bold uppercase hover:underline dark:text-[#fea520] text-[#865300]"
                >
                  Clear all filters
                </button>
              )
            }
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((c) => (
                <ConstituencyCard key={c.id} constituency={c} />
              ))}
            </div>

            {hasMore && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setPage((p) => p + 1)}
                  className="px-10 py-4 rounded-full font-bold border transition-all
                    dark:bg-[#1E293B] dark:text-white dark:border-slate-700 dark:hover:bg-slate-800
                    bg-[#f2f3ff] text-[#022448] border-transparent hover:bg-[#e2e7ff]"
                >
                  Load More Constituencies
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
