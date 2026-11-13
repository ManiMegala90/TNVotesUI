// src/components/layout/MobileBottomNav.jsx
// ─── Fixed mobile bottom nav bar (lg:hidden) ─────────────────────────────────
// Dark:  bg-[#0F172A]/90 border-slate-800, amber active
// Light: bg-white/90 border-slate-200, primary active

import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { icon: "home", label: "Home", path: "/" },
  { icon: "explore", label: "Explore", path: "/constituencies" },
  { icon: "analytics", label: "Results", path: "/results" },
  { icon: "person", label: "Profile", path: "/profile" },
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <footer
      className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-4 px-6
      dark:bg-[#0F172A]/90 dark:backdrop-blur-lg dark:border-t dark:border-slate-800
      bg-white/90 backdrop-blur-lg border-t border-slate-200"
    >
      {NAV_ITEMS.map((item) => {
        const active = isActive(item.path);
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center no-underline active:opacity-70 transition-opacity"
          >
            <span
              className={[
                "material-symbols-outlined",
                active
                  ? "dark:text-amber-500 text-[#022448]"
                  : "dark:text-slate-400 text-slate-400",
              ].join(" ")}
            >
              {item.icon}
            </span>
            <span
              className={[
                "text-[10px] uppercase tracking-widest font-bold mt-0.5",
                active
                  ? "dark:text-amber-500 text-[#022448]"
                  : "dark:text-slate-400 text-slate-400",
              ].join(" ")}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </footer>
  );
}
