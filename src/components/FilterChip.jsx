// components/FilterChip.jsx
// ─── Reusable pill/chip button for filter bars ───────────────────────────────
//
// Supports two visual variants:
//   "chip"   – rounded-lg, used in ConstituencyFilterBar (region filters)
//   "pill"   – rounded-full, used in CandidateFilterBar (party filters)
//
// Both variants are fully themed for light + dark mode via Tailwind classes.

export default function FilterChip({
  label,
  active,
  onClick,
  variant = "chip", // "chip" | "pill"
}) {
  const base =
    "px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all border-none cursor-pointer whitespace-nowrap";

  const shape = variant === "pill" ? "rounded-full px-5" : "rounded-lg";

  const activeClass =
    "bg-amber-500 text-black dark:bg-amber-500 dark:text-black shadow-md";

  const inactiveClass =
    "bg-white text-slate-500 border border-slate-200 hover:border-[#022448] hover:text-[#022448] " +
    "dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white";

  return (
    <button
      onClick={onClick}
      className={[base, shape, active ? activeClass : inactiveClass].join(" ")}
    >
      {label}
    </button>
  );
}
