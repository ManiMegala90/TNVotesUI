import { useNavigate } from "react-router-dom";

const getConstituencyImage = (id) =>
  new URL(`../assets/images/constituency/${id}.jpeg`, import.meta.url)
    .href;
const defaultConstituencyImage = "/images/default-constituency.png";


export default function DirectoryCard({ constituency: c }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/constituencies/${c.id}`);

  return (
    <div
      onClick={handleClick}
      className="
        group relative overflow-hidden cursor-pointer
        flex flex-col h-full
        transition-all duration-300
        hover:-translate-y-2
        dark:bg-[#1E293B] dark:rounded-xl dark:border dark:border-slate-800 dark:hover:border-slate-700 dark:hover:shadow-2xl
        bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl
      "
    >
      {/* ── Hero Image ── */}
      <div className="h-64 overflow-hidden relative">
        <img
          src={getConstituencyImage(c.id)}
          alt={c.imageAlt || c.name}
          onError={(e) => {
            e.currentTarget.src = defaultConstituencyImage;
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay — dark fades to card bg, light fades to white */}
        <div className="absolute inset-0 bg-gradient-to-t dark:from-[#1E293B] from-white via-transparent to-transparent dark:opacity-80 opacity-60 pointer-events-none" />

        {/* Zone badge */}
        <div className="absolute bottom-4 left-6">
          <span
            className="
            text-[10px] px-2 py-1 rounded font-bold tracking-widest uppercase text-white
            dark:bg-indigo-600
            bg-[#022448] shadow-lg shadow-[#022448]/20
          "
          >
            {c.zone}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-3 dark:text-white text-slate-900">
          {c.name}
        </h3>
        <p className="text-sm leading-relaxed mb-6 font-medium dark:text-slate-400 text-slate-600 line-clamp-3">
          {c.description}
        </p>

        {/* Footer row — pushed to bottom */}
        <div className="mt-auto flex items-center justify-between border-t pt-6 dark:border-slate-700/50 border-slate-100">
          {/* Meta tag */}
          <div className="flex items-center space-x-2 dark:text-slate-500 text-slate-400">
            <span className="material-symbols-outlined text-sm">
              {c.zoneIcon || "place"}
            </span>
            <span className="text-xs font-bold tracking-wider uppercase">
              {c.zoneMeta || c.district}
            </span>
          </div>

          {/* CTA link */}
          <button
            onClick={handleClick}
            className="flex items-center font-bold text-sm tracking-tight transition-all border-none bg-transparent cursor-pointer
              dark:text-[#fea520] dark:hover:underline
              text-[#022448] hover:text-[#022448]/80"
          >
            View Profile
            <span className="material-symbols-outlined ml-1 text-sm">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
