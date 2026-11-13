
const getCandidateImage = (id) =>
  new URL(`../assets/images/candidates/${id}.jpeg`, import.meta.url).href;
const defaultCandidateImage = "/images/default-candidate.png";

// ── Small variant ─────────────────────────────────────────────────────────────
function SmallCard({ candidate, onViewProfile }) {
  const {
    name,
    constituency,
    party,
    partyColor,
    movableAssets,
    immovableAssets,
    photoUrl,
  } = candidate;

  return (
    <div className="
      group relative rounded-xl border p-6 flex gap-6
      transition-all duration-300
      dark:bg-[#1E293B] dark:border-slate-800 dark:hover:border-slate-700
      bg-white border-transparent hover:border-slate-200/60 shadow-sm hover:shadow-xl
    ">
      {/* Photo */}
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border dark:bg-slate-900 dark:border-slate-800 bg-slate-100 border-slate-200">
        <img
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={photoUrl ? photoUrl : getCandidateImage(candidate.id)}
          alt={name}
          onError={(e) => { e.currentTarget.src = defaultCandidateImage; }}
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          {/* Name + constituency */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-black transition-colors dark:text-white dark:group-hover:text-amber-500 text-[#022448] group-hover:text-[#865300]">
              {name}
            </h3>
            <span className="text-[9px] px-2 py-1 rounded font-bold tracking-widest uppercase border dark:bg-indigo-600/10 dark:text-indigo-400 dark:border-indigo-600/20 bg-indigo-50 text-indigo-600 border-indigo-200">
              {constituency}
            </span>
          </div>

          {/* Asset pills */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-1 dark:text-slate-400 text-[#74777f]">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Movable: {movableAssets}
              </span>
            </div>
            <div className="flex items-center gap-1 dark:text-slate-400 text-[#74777f]">
              <span className="material-symbols-outlined text-sm">domain</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Immovable: {immovableAssets}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4 dark:border-slate-700/50 border-slate-100">
          <div className="flex items-center space-x-2 dark:text-slate-500 text-[#74777f]">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black text-white"
              style={{ backgroundColor: partyColor || "#94a3b8" }}
            >
              {party ? party[0] : ""}
            </div>
            <span className="text-[10px] font-bold tracking-wider uppercase">
              {party} Party
            </span>
          </div>
          <button
            onClick={onViewProfile}
            className="flex items-center font-bold text-[11px] tracking-widest uppercase hover:underline text-[#fea520] bg-transparent border-none cursor-pointer"
          >
            View Profile
            <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Medium variant ────────────────────────────────────────────────────────────
function MediumCard({ candidate, onViewProfile }) {
  const {
    name,
    constituency,
    party,
    partyColor,
    movableAssets,
    immovableAssets,
    criminalCasesCount: criminalCases,
    photoUrl,
  } = candidate;

  return (
    <div className="
      group relative flex flex-col overflow-hidden rounded-xl border
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      dark:bg-[#1E293B] dark:border-slate-800 dark:hover:border-slate-700
      bg-white border-transparent hover:border-slate-200/60 shadow-sm
    ">
      <div className="flex gap-5 p-6">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border dark:border-slate-700 border-slate-200">
          <img
            src={photoUrl ? photoUrl : getCandidateImage(candidate.id)}
            alt={name}
            onError={(e) => { e.currentTarget.src = defaultCandidateImage; }}
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="flex-grow">
          <div className="mb-1 inline-block rounded border px-2 py-0.5 text-[9px] font-black uppercase tracking-widest dark:border-indigo-500/30 dark:bg-indigo-600/20 dark:text-indigo-400 border-indigo-200 bg-indigo-50 text-indigo-600">
            {constituency}
          </div>
          <h3 className="text-base font-bold leading-tight transition-colors dark:text-white dark:group-hover:text-amber-500 text-[#022448] group-hover:text-[#865300]">
            {name}
          </h3>
          <p className="mt-0.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider dark:text-slate-500 text-[#74777f]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: partyColor }} />
            {party}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t px-6 py-4 dark:border-slate-700/50 dark:bg-slate-900/30 border-slate-100 bg-slate-50/60">
        <div className="flex gap-5 text-[10px] font-bold uppercase tracking-wider dark:text-slate-400 text-[#74777f]">
          <span>
            Mov: <span className="dark:text-white text-[#022448]">{movableAssets}</span>
          </span>
          <span>
            Immov: <span className="dark:text-white text-[#022448]">{immovableAssets}</span>
          </span>
          <span className={criminalCases === 0 ? "text-[#fea520]" : "text-red-500"}>
            {criminalCases === 0 ? "Clean" : `${criminalCases} Case${criminalCases > 1 ? "s" : ""}`}
          </span>
        </div>
        <button
          onClick={onViewProfile}
          className="flex items-center text-[11px] font-bold uppercase tracking-widest text-[#fea520] hover:underline bg-transparent border-none cursor-pointer"
        >
          Profile
          <span className="material-symbols-outlined ml-0.5 text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

// ── Large variant ─────────────────────────────────────────────────────────────
function LargeCard({ candidate, onViewProfile }) {
  const {
    name,
    constituency,
    party,
    partyColor,
    education,
    age,
    movableAssets,
    immovableAssets,
    criminalCasesCount: criminalCases,
    photoUrl,
  } = candidate;

  return (
    <div className="
      group relative flex flex-col overflow-hidden rounded-xl border
      transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
      dark:bg-[#1E293B] dark:border-slate-800 dark:hover:border-slate-700
      bg-white border-transparent hover:border-slate-200/60 shadow-sm
    ">
      {/* Top */}
      <div className="p-8 pb-4">
        <div className="mb-6 flex items-start gap-6">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 dark:border-slate-700 border-slate-200">
            <img
              src={photoUrl ? photoUrl : getCandidateImage(candidate.id)}
              alt={name}
              onError={(e) => { e.currentTarget.src = defaultCandidateImage; }}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="mb-2 inline-block rounded border px-2 py-0.5 text-[9px] font-black uppercase tracking-widest dark:border-indigo-500/30 dark:bg-indigo-600/20 dark:text-indigo-400 border-indigo-200 bg-indigo-50 text-indigo-600">
              {constituency}
            </div>
            <h3 className="text-xl font-bold leading-tight dark:text-white text-[#022448]">
              {name}
            </h3>
            <p className="mt-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wider dark:text-slate-500 text-[#74777f]">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: partyColor }} />
              {party} Candidate
            </p>
          </div>
        </div>

        <div className="mb-6 space-y-2">
          <div className="flex items-center gap-3 text-sm dark:text-slate-400 text-[#43474e]">
            <span className="material-symbols-outlined text-lg dark:text-slate-500 text-[#74777f]">school</span>
            <span className="font-medium">{education}</span>
          </div>
          <div className="flex items-center gap-3 text-sm dark:text-slate-400 text-[#43474e]">
            <span className="material-symbols-outlined text-lg dark:text-slate-500 text-[#74777f]">person</span>
            <span className="font-medium">Age: {age}</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-auto border-t p-8 pt-6 dark:border-slate-700/50 dark:bg-slate-900/30 border-slate-100 bg-slate-50/60">
        <div className="mb-6 grid grid-cols-2 gap-y-4">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest dark:text-slate-500 text-[#74777f]/60">
              Movable Assets
            </p>
            <p className="text-sm font-black dark:text-white text-[#022448]">{movableAssets}</p>
          </div>
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest dark:text-slate-500 text-[#74777f]/60">
              Immovable Assets
            </p>
            <p className="text-sm font-black dark:text-white text-[#022448]">{immovableAssets}</p>
          </div>
          <div className="col-span-2">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest dark:text-slate-500 text-[#74777f]/60">
              Criminal Cases
            </p>
            <p className={`text-sm font-black ${criminalCases === 0 ? "text-[#fea520]" : "text-red-500"}`}>
              {criminalCases === 0 ? "0 Pending" : `${criminalCases} Pending`}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 dark:text-slate-500 text-[#74777f]">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Verified Data</span>
          </div>
          <button
            onClick={onViewProfile}
            className="flex items-center text-sm font-bold tracking-tight text-[#fea520] transition-all hover:underline bg-transparent border-none cursor-pointer"
          >
            View Profile
            <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Root export ───────────────────────────────────────────────────────────────
export default function CandidateCard({ candidate, variant = "small", onViewProfile }) {
  if (variant === "small") return <SmallCard candidate={candidate} onViewProfile={onViewProfile} />;
  if (variant === "medium") return <MediumCard candidate={candidate} onViewProfile={onViewProfile} />;
  return <LargeCard candidate={candidate} onViewProfile={onViewProfile} />;
}
