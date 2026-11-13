// src/components/ui/Badge.jsx

// ── Region badge ──────────────────────────────────────────────────────────────
// Dark:  coloured dark bg + light text (original design)
// Light: pastel bg + dark text (new light design)
const REGION_DARK = {
  North: "dark:bg-blue-900/50 dark:text-blue-200",
  South: "dark:bg-green-900/50 dark:text-green-200",
  Central: "dark:bg-purple-900/50 dark:text-purple-200",
  West: "dark:bg-orange-900/50 dark:text-orange-200",
  East: "dark:bg-cyan-900/50 dark:text-cyan-200",
};
const REGION_LIGHT = {
  North: "bg-blue-100 text-blue-900",
  South: "bg-green-100 text-green-900",
  Central: "bg-purple-100 text-purple-900",
  West: "bg-orange-100 text-orange-900",
  East: "bg-cyan-100 text-cyan-900",
};

export function RegionBadge({ region }) {
  return (
    <span
      className={[
        "text-[10px] font-black uppercase px-2 py-1 rounded-md tracking-wider",
        REGION_DARK[region] || "dark:bg-slate-800 dark:text-slate-400",
        REGION_LIGHT[region] || "bg-slate-100 text-slate-700",
      ].join(" ")}
    >
      {region}
    </span>
  );
}

export function StatusBadge({ status }) {
  const styles = {
    Won: {
      dark: "dark:bg-[#064e3b] dark:text-[#7efba4]",
      light: "bg-[#7efba4] text-[#00210c]",
    },
    Pending: {
      dark: "dark:bg-[#663e00] dark:text-[#ffddb9]",
      light: "bg-[#ffddb9] text-[#2b1700]",
    },
    Live: {
      dark: "dark:bg-[#1e1b4b] dark:text-[#a5b4fc]",
      light: "bg-indigo-100 text-indigo-900",
    },
    "Not Started": {
      dark: "dark:bg-slate-800 dark:text-slate-400",
      light: "bg-slate-100 text-slate-600",
    },
  };

  const s = styles[status] || styles["Not Started"];

  return (
    <span
      className={[
        "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5",
        s.dark,
        s.light,
      ].join(" ")}
    >
      {status === "Live" && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {status}
    </span>
  );
}

// ── Party dot ─────────────────────────────────────────────────────────────────
export function PartyDot({ color }) {
  return (
    <span
      className="w-2 h-2 rounded-full flex-shrink-0 inline-block"
      style={{ background: color }}
    />
  );
}
