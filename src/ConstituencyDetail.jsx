import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { constituencyService } from "@/services/constituencyService.jsx";
import { LoadingSpinner } from "@/components/States.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import IncumbentCard from "@/components/IncumbentCard.jsx";
import DemographicsPanel from "@/components/DemographicsPanel.jsx";
import CandidateDeck from "@/components/CandidateDeck.jsx";
import HistoricalTimeline from "@/components/HistoricalTimeline.jsx";

export default function ConstituencyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    constituencyService
      .getConstituencyDetail(id)
      .then((d) => {
        if (!cancelled) {
          setData(d);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading)
    return (
      <div className="pt-24 min-h-screen dark:bg-[#0F172A] bg-[#faf8ff]">
        <LoadingSpinner message="Loading constituency..." />
      </div>
    );

  if (error || !data)
    return (
      <div className="pt-32 min-h-screen dark:bg-[#0F172A] bg-[#faf8ff] flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-5xl mb-4">⚠️</div>
          <p className="text-xl font-black dark:text-white text-[#022448] mb-4">
            {error || "Constituency not found"}
          </p>
          <button
            onClick={() => navigate("/")}
            className="font-bold hover:underline dark:text-[#fea520] text-[#865300] bg-transparent border-none cursor-pointer"
          >
            ← Back to Directory
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen dark:bg-[#0F172A] bg-[#faf8ff] dark:text-slate-100 text-[#131b2e]">
      <main className="pt-24 pb-12 max-w-screen-2xl mx-auto px-6">
        {/* ── Breadcrumb ─────────────────────────────────────────────── */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest dark:text-slate-500 text-[#74777f]">
          <Link
            to="/"
            className="hover:dark:text-white hover:text-[#022448] transition-colors no-underline dark:text-slate-500 text-[#74777f]"
          >
            Home
          </Link>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <Link
            to="/"
            className="hover:dark:text-white hover:text-[#022448] transition-colors no-underline dark:text-slate-500 text-[#74777f]"
          >
            Constituencies
          </Link>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <span className="font-black dark:text-white text-[#022448]">
            {data.number} - {data.name}
          </span>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <HeroSection constituency={data} />

        {/* ── Incumbent + Demographics ────────────────────────────────── */}
        {(data.incumbent || data.demographics) && (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {data.incumbent && (
              <div className="lg:col-span-4">
                <IncumbentCard incumbent={data.incumbent} />
              </div>
            )}
            {data.demographics && (
              <DemographicsPanel demographics={data.demographics} />
            )}
          </section>
        )}

        {/* ── Candidates Deck ─────────────────────────────────────────── */}
        {data.candidates && data.candidates.length > 0 && (
          <CandidateDeck candidates={data.candidates} />
        )}

        {/* ── Historical Timeline ─────────────────────────────────────── */}
        {data.history && data.history.length > 0 && (
          <HistoricalTimeline history={data.history} />
        )}
      </main>
    </div>
  );
}
