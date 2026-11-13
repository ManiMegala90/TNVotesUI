// src/components/layout/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Constituencies", path: "/constituencies" },
  { label: "Candidates", path: "/candidates" },
  { label: "Elections", path: "/results" },
  { label: "Insights", path: "/about" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl
      dark:bg-slate-950/80 dark:shadow-none
      bg-white/80 shadow-sm"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter no-underline dark:text-white text-[#022448]"
        >
          TN Votes
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={[
                "font-medium no-underline transition-colors",
                isActive(link.path)
                  ? "font-bold border-b-2 dark:text-[#FEA520] dark:border-[#FEA520] text-[#865300] border-[#865300]"
                  : "dark:text-slate-400 dark:hover:text-white text-slate-600 hover:text-[#1E3A5F]",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Live Results pill */}
          <button
            className="hidden lg:flex items-center px-4 py-2 rounded-lg font-bold text-sm transition-transform hover:scale-100 scale-95
            dark:bg-[#1e3a5f] dark:text-blue-200
            bg-[#1e3a5f] text-white"
          >
            Live Results
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all
              dark:text-slate-300 dark:hover:bg-slate-800
              text-[#43474e] hover:bg-slate-100"
          >
            {isDark ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="4.5" />
                <path
                  strokeLinecap="round"
                  d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                />
              </svg>
            )}
          </button>

          {/* Notifications + Account */}
          <span className="material-symbols-outlined cursor-pointer dark:text-slate-400 text-[#43474e] hover:opacity-70 transition-opacity">
            notifications
          </span>
          <span className="material-symbols-outlined cursor-pointer dark:text-slate-400 text-[#43474e] hover:opacity-70 transition-opacity">
            account_circle
          </span>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all
              dark:text-slate-300 dark:hover:bg-slate-800
              text-[#43474e] hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t dark:bg-slate-950 dark:border-slate-800 bg-white border-slate-200 px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={[
                "block py-3 font-bold text-base border-b no-underline transition-colors",
                "dark:border-slate-800 border-slate-100",
                isActive(link.path)
                  ? "dark:text-[#FEA520] text-[#865300]"
                  : "dark:text-slate-400 text-slate-600 dark:hover:text-white hover:text-[#022448]",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
