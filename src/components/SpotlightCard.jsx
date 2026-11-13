// src/components/constituency/SpotlightCard.jsx
import { useNavigate } from "react-router-dom";

export default function SpotlightCard({ constituency: c }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/constituencies/${c.id}`)}
      className="min-w-[400px] rounded-xl overflow-hidden shadow-xl group cursor-pointer flex-shrink-0
        dark:bg-[#1E293B] dark:border dark:border-slate-700
        bg-white shadow-md"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative dark:bg-slate-800 bg-slate-100">
        {c.imageUrl ? (
          <img
            src={c.imageUrl}
            alt={c.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-10">🏛️</span>
          </div>
        )}
        {c.tag && (
          <div
            className="absolute top-4 left-4 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest
            dark:bg-slate-900/90 bg-[#022448]/90"
          >
            {c.tag}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 transition-colors
          dark:text-white dark:group-hover:text-[#fea520]
          text-[#022448] group-hover:text-[#865300]"
        >
          {String(c.id).padStart(3, "0")} - {c.name}
        </h3>
        <p className="text-sm mb-6 leading-relaxed line-clamp-2 dark:text-slate-400 text-[#43474e]">
          {c.description || `Constituency #${c.id} in ${c.district} district.`}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {c.leading.photoUrl ? (
              <img
                src={c.leading.photoUrl}
                alt={c.leading.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-black"
                style={{
                  background: (c.leading.partyColor || "#334155") + "33",
                  color: c.leading.partyColor,
                }}
              >
                {c.leading.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}
          </div>
          <span className="text-sm font-bold dark:text-[#fea520] text-[#865300]">
            View Analysis →
          </span>
        </div>
      </div>
    </div>
  );
}
