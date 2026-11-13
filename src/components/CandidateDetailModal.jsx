import { PartyDot, StatusBadge } from "@/components/Badge.jsx";

const getCandidateImage = (id) =>
  new URL(`../assets/images/candidates/${id}.jpeg`, import.meta.url).href;

const defaultCandidateImage = "/images/default-candidate.png";

export default function CandidateDetailModal({ candidate, onClose }) {
  if (!candidate) return null;

  // Normalize candidate structure to handle differences between candidates.json and constituencyDetails.js
  const name = candidate.name;
  const age = candidate.age || "N/A";
  const gender = candidate.gender || "N/A";
  const constituency = candidate.constituency || "N/A";
  const party = candidate.party || candidate.partyShort || "IND";
  const partyFull = candidate.partyFull || "Independent";
  const partyColor = candidate.partyColor || "#94a3b8";
  const education = candidate.education || "Not Declared";
  const profession = candidate.profession || "Not Declared";
  
  const movableAssets = candidate.movableAssets || candidate.assets || "Not Declared";
  const immovableAssets = candidate.immovableAssets || "Not Declared";
  
  const criminalCases = candidate.criminalCasesCount !== undefined 
    ? candidate.criminalCasesCount 
    : (candidate.criminalCases !== undefined ? parseInt(candidate.criminalCases) || 0 : 0);

  const verificationStatus = candidate.verificationStatus || "Pending";
  const sourceUrl = candidate.sourceUrl;
  const symbol = candidate.symbol;



  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl transition-all
          dark:bg-slate-900/95 dark:border-slate-800 dark:shadow-black/50
          bg-white border-slate-200/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Party Strip */}
        <div 
          className="h-2 w-full" 
          style={{ backgroundColor: partyColor }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full transition-all hover:scale-105
            dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white
            bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {/* Header Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 border-b pb-6 dark:border-slate-800 border-slate-100">
            {/* Image */}
            <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 border-2 dark:bg-slate-950 dark:border-slate-800 bg-slate-100 border-slate-200 shadow-lg">
              <img
                src={candidate.photoUrl ? candidate.photoUrl : getCandidateImage(candidate.id)}
                alt={name}
                onError={(e) => { e.currentTarget.src = defaultCandidateImage; }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left flex-grow">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2 items-center">
                <span className="text-[10px] px-2 py-0.5 rounded font-black tracking-widest uppercase border dark:border-indigo-500/30 dark:bg-indigo-600/10 dark:text-indigo-400 border-indigo-200 bg-indigo-50 text-indigo-600">
                  {constituency}
                </span>
                <StatusBadge status={verificationStatus === "verified" ? "Won" : (verificationStatus === "pending" ? "Pending" : "Not Started")} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 leading-tight mb-2">
                {name}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-1">
                <PartyDot color={partyColor} />
                <span className="text-sm font-bold dark:text-slate-300 text-slate-700">
                  {partyFull} ({party})
                </span>
                {symbol && (
                  <span className="text-xs dark:text-slate-500 text-slate-400 font-semibold">
                    • Symbol: {symbol}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left: General & Professional */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-3">
                  Electoral Profile
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg dark:text-slate-500 text-slate-400">cake</span>
                    <div>
                      <div className="text-[10px] uppercase font-bold dark:text-slate-500 text-slate-400">Age</div>
                      <div className="text-sm font-bold dark:text-white text-slate-800">{age} Years</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg dark:text-slate-500 text-slate-400">wc</span>
                    <div>
                      <div className="text-[10px] uppercase font-bold dark:text-slate-500 text-slate-400">Gender</div>
                      <div className="text-sm font-bold dark:text-white text-slate-800">{gender}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-3">
                  Background
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg dark:text-slate-500 text-slate-400">school</span>
                    <div>
                      <div className="text-[10px] uppercase font-bold dark:text-slate-500 text-slate-400">Education</div>
                      <div className="text-sm font-bold dark:text-white text-slate-800 line-clamp-2">{education}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg dark:text-slate-500 text-slate-400">work</span>
                    <div>
                      <div className="text-[10px] uppercase font-bold dark:text-slate-500 text-slate-400">Profession</div>
                      <div className="text-sm font-bold dark:text-white text-slate-800 line-clamp-2">{profession}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Assets & Legal */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-3">
                  Financial Declaration
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg dark:text-slate-500 text-slate-400">payments</span>
                    <div>
                      <div className="text-[10px] uppercase font-bold dark:text-slate-500 text-slate-400">Movable Assets</div>
                      <div className="text-sm font-bold dark:text-white text-slate-800">{movableAssets}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg dark:text-slate-500 text-slate-400">domain</span>
                    <div>
                      <div className="text-[10px] uppercase font-bold dark:text-slate-500 text-slate-400">Immovable Assets</div>
                      <div className="text-sm font-bold dark:text-white text-slate-800">{immovableAssets}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest dark:text-slate-500 text-slate-400 mb-3">
                  Legal Standing
                </h4>
                <div className="p-3.5 rounded-xl border flex items-start gap-3.5
                  dark:bg-slate-950/40 dark:border-slate-800 bg-slate-50 border-slate-100">
                  <span className={`material-symbols-outlined text-2xl mt-0.5
                    ${criminalCases === 0 ? "text-emerald-500" : "text-rose-500"}`}>
                    {criminalCases === 0 ? "check_circle" : "warning"}
                  </span>
                  <div>
                    <div className="text-[10px] uppercase font-black tracking-wider dark:text-slate-400 text-slate-500">
                      Pending Criminal Cases
                    </div>
                    <div className={`text-base font-black mt-0.5 
                      ${criminalCases === 0 ? "text-emerald-500" : "text-rose-500"}`}>
                      {criminalCases === 0 ? "Clean Record" : `${criminalCases} Case${criminalCases > 1 ? "s" : ""} Pending`}
                    </div>
                    <p className="text-[10px] font-medium dark:text-slate-500 text-slate-400 mt-1 leading-relaxed">
                      {criminalCases === 0 
                        ? "No pending legal issues declared under affidavit." 
                        : "Declarations verified against official ECI filings."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t dark:bg-slate-900/50 dark:border-slate-800 bg-slate-50 border-slate-100">
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg font-bold text-sm tracking-tight transition-all text-white bg-[#022448] hover:opacity-90 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Verify on MyNeta
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-lg font-bold text-sm border transition-all
              dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700
              bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}
