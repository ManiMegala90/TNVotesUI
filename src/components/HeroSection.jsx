// src/components/detail/HeroSection.jsx
// ─── Constituency hero: big title + 4-tile bento stat grid ──────────────────

export default function HeroSection({ constituency: c }) {
  const title = c.nameTamil || c.name || "Constituency";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
      {/* Left — title block */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <span
            className="inline-block py-1 px-3 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4
            bg-orange-200 text-orange-950
            dark:bg-orange-900 dark:text-orange-200"
          >
            Constituency Profile
          </span>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none
            dark:text-white text-blue-950"
          >
            <span className="dark:text-amber-500 text-amber-800">{title}</span>
          </h1>
        </div>

        {/* Meta strip */}
        <div className="flex flex-wrap gap-8 py-6 border-t dark:border-white/10 border-slate-200">
          {[
            { label: "District", value: c.district },
            { label: "Region", value: c.region },
            { label: "Classification", value: c.classification },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 dark:text-slate-500 text-slate-500">
                {item.label}
              </p>
              <p className="text-xl font-bold dark:text-slate-100 text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — bento stats */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
        {/* Total Voters */}
        <div className="p-6 rounded-xl dark:bg-slate-800/50 bg-indigo-50">
          <span className="material-symbols-outlined dark:text-blue-300 text-blue-950 mb-2 block">
            groups
          </span>
          <p className="text-[10px] font-bold uppercase tracking-widest dark:text-slate-500 text-slate-500">
            Total Voters
          </p>
          <p className="text-2xl font-black dark:text-white text-blue-950">
            {c.totalVoters?.toLocaleString("en-IN") || "—"}
          </p>
        </div>

        {/* Gender Ratio */}
        <div className="p-6 rounded-xl dark:bg-slate-800/50 bg-indigo-50">
          <span className="material-symbols-outlined dark:text-blue-300 text-blue-950 mb-2 block">
            balance
          </span>
          <p className="text-[10px] font-bold uppercase tracking-widest dark:text-slate-500 text-slate-500">
            Gender Ratio
          </p>
          <p className="text-2xl font-black dark:text-white text-blue-950">
            {c.genderRatio || "—"}
          </p>
        </div>

        {/* Polling Stations — wide */}
        <div
          className="col-span-2 p-6 rounded-xl flex items-center justify-between
          dark:bg-[#1e3a5f] dark:text-blue-100
          bg-[#e0ecff] text-[#022448]"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
              Polling Stations
            </p>
            <p className="text-3xl font-black">{c.pollingStations || "—"}</p>
          </div>
          <span className="material-symbols-outlined text-5xl opacity-20">
            how_to_vote
          </span>
        </div>
      </div>
    </section>
  );
}
