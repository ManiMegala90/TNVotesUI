// src/pages/Home.jsx
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

export default function Home() {
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
      {/*  Hero */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background watermark image */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImageBanner})` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight
            dark:text-white text-[#022448]"
          >
            Know Your Constituency.
            <br />
            Know Your Candidate.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed dark:text-slate-400 text-[#43474e]">
            Explore all 234 Tamil Nadu Assembly Constituencies — candidate
            profiles, election results, affidavit details and more.
          </p>

          {/* Search bar */}
          <div className="max-w-3xl mx-auto mb-10">
            <div
              className="relative flex items-center rounded-xl p-2 border
              dark:bg-[#1E293B] dark:border-slate-700 dark:shadow-2xl dark:shadow-black/20
              bg-white border-slate-200/40 shadow-xl shadow-blue-900/5"
            >
              <span className="material-symbols-outlined ml-4 dark:text-slate-500 text-[#74777f]">
                search
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search by constituency name, candidate, or district..."
                className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-lg outline-none
                  dark:text-slate-100 dark:placeholder:text-slate-500
                  text-[#131b2e] placeholder:text-[#74777f]/60"
              />
              <button
                onClick={handleSearch}
                className="px-8 py-4 rounded-lg font-bold tracking-tight flex-shrink-0 transition-all hover:opacity-90
                  dark:bg-[#1e3a5f] dark:text-white
                  bg-[#022448] text-white"
              >
                Search
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("directory")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform active:scale-95
                bg-gradient-to-br from-[#865300] to-[#fea520]
                dark:text-black text-white dark:shadow-black/20 shadow-orange-900/20"
            >
              Browse All Constituencies
            </button>
            <button
              onClick={() => navigate("/results")}
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all border-2
                dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800
                border-[#022448] text-[#022448] hover:bg-[#022448]/5"
            >
              View 2026 Results
            </button>
          </div>
        </div>
      </header>

      {/*  Stats strip  */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-xl text-center border
              dark:bg-[#1E293B] dark:border-slate-700 dark:shadow-sm
              bg-white border-slate-200/60 shadow-sm"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black dark:text-white text-[#022448]">
                {s.value}
              </div>
              <div className="text-sm font-bold tracking-widest uppercase dark:text-slate-400 text-[#74777f]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Spotlight  */}
      <SpotlightStrip />
    </>
  );
}
