import { useNavigate } from "react-router-dom";
import {
  StatusBadge,
  RegionBadge,
  PartyDot,
} from "@/components/Badge.jsx";
import Avatar from "@/components/Avatar.jsx";

export default function ConstituencyCard({ constituency: c }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/constituencies/${c.id}`)}
      className="
        rounded-xl p-6 flex flex-col cursor-pointer group
        transition-all duration-300
        dark:bg-[#1E293B] dark:border dark:border-slate-700 dark:hover:border-slate-600 dark:shadow-sm dark:hover:shadow-2xl
        bg-white border border-transparent hover:border-slate-200/60 shadow-sm hover:shadow-xl
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-black uppercase tracking-tighter mb-1 block dark:text-slate-500 text-[#74777f]">
            No. {String(c.id).padStart(3, "0")}
          </span>
          <h3 className="text-xl font-bold transition-colors dark:text-white dark:group-hover:text-[#fea520] text-[#022448] group-hover:text-[#865300]">
            {c.name}
          </h3>
        </div>
        <RegionBadge region={c.region} />
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <div className="font-bold text-[10px] uppercase tracking-widest dark:text-slate-500 text-[#74777f]/60">
            District
          </div>
          <div className="font-semibold dark:text-slate-100 text-[#022448]">
            {c.district}
          </div>
        </div>
        <div>
          <div className="font-bold text-[10px] uppercase tracking-widest dark:text-slate-500 text-[#74777f]/60">
            Candidates
          </div>
          <div className="font-semibold dark:text-slate-100 text-[#022448]">
            {c.candidates.length} Applicants
          </div>
        </div>
      </div>

      {/* Leading candidate box */}
      <div className="p-4 rounded-lg mb-6 dark:bg-[#0F172A] dark:border dark:border-slate-800 bg-[#f2f3ff]">
        <div className="font-bold text-[10px] uppercase tracking-widest mb-3 dark:text-slate-500 text-[#74777f]">
          Leading Candidate
        </div>
        <div className="flex items-center space-x-3">
          <Avatar
            name={c.leading.name}
            photoUrl={c.leading.photoUrl}
            partyColor={c.leading.partyColor}
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold leading-none truncate dark:text-white text-[#022448]">
              {c.leading.name}
            </span>
            <div className="flex items-center space-x-1 mt-1">
              <PartyDot color={c.leading.partyColor} />
              <span className="text-[10px] font-bold dark:text-slate-400 text-[#43474e]">
                {c.leading.party}
              </span>
            </div>
          </div>
          {c.votes > 0 && (
            <div className="ml-auto text-right flex-shrink-0">
              <div
                className="text-sm font-black"
                style={{ color: c.leading.partyColor }}
              >
                {c.votes.toLocaleString()}
              </div>
              <div className="text-[10px] dark:text-slate-500 text-[#74777f] font-bold">
                votes
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between">
        <StatusBadge status={c.status} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/constituencies/${c.id}`);
          }}
          className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all bg-transparent border-none cursor-pointer dark:text-slate-100 text-[#022448]"
        >
          View Details{" "}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
