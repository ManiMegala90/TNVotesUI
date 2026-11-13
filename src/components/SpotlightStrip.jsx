// src/components/constituency/SpotlightStrip.jsx
import { useRef } from "react";
import { useSpotlight } from "@/hooks/useConstituencies.js";
import SpotlightCard from "./SpotlightCard.jsx";
import { LoadingSpinner } from "@/components/States.jsx";

export default function SpotlightStrip() {
  const { spotlight, loading } = useSpotlight();
  const scrollRef = useRef(null);
  const scroll = (dir) =>
    scrollRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });

  return (
    <section className="py-20 mt-20 dark:bg-[#0F172A] bg-[#f2f3ff]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="font-bold tracking-widest text-xs uppercase dark:text-[#fea520] text-[#865300]">
              Curated Insight
            </span>
            <h2 className="text-3xl font-black mt-1 dark:text-white text-[#022448]">
              Constituencies to Watch
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="p-2 rounded-full shadow transition-all
                dark:bg-[#1E293B] dark:border dark:border-slate-700 dark:hover:bg-slate-800 dark:text-white
                bg-white hover:bg-[#eaedff] text-[#022448]"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="p-2 rounded-full shadow transition-all
                dark:bg-[#1E293B] dark:border dark:border-slate-700 dark:hover:bg-slate-800 dark:text-white
                bg-white hover:bg-[#eaedff] text-[#022448]"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Scroll track */}
        {loading ? (
          <LoadingSpinner message="Loading spotlight..." />
        ) : (
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide"
          >
            {spotlight.map((c) => (
              <SpotlightCard key={c.id} constituency={c} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
