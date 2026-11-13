// src/components/directory/Pagination.jsx
// ─── Simple numbered pagination (always) ─────────────────────────────────────

const ITEMS_PER_PAGE = 9;

export default function Pagination({ total, page, setPage }) {
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  if (total === 0 || totalPages <= 1) return null;

  const pages = buildPageNumbers(page, totalPages);

  const btnBase =
    "w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all border cursor-pointer";
  const btnActive =
    "bg-[#022448] text-white border-[#022448] dark:bg-[#fea520] dark:border-[#fea520] dark:text-white";
  const btnIdle =
    "border-slate-200 text-slate-600 hover:border-[#022448] hover:text-[#022448] bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-[#fea520] dark:hover:text-[#fea520]";
  const btnDisabled =
    "border-slate-100 text-slate-300 bg-white cursor-not-allowed dark:bg-slate-800 dark:border-slate-700 dark:text-slate-600";

  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-8 dark:text-slate-500">
        Page {page} of {totalPages}
      </p>
      <div className="flex items-center space-x-2">
        {/* Prev */}
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`${btnBase} ${page === 1 ? btnDisabled : btnIdle}`}
          aria-label="Previous page"
        >
          <span className="material-symbols-outlined text-lg">
            chevron_left
          </span>
        </button>

        {/* Page numbers */}
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`dot-${i}`}
              className="text-slate-300 dark:text-slate-600 px-1"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`${btnBase} ${p === page ? btnActive : btnIdle}`}
            >
              {p}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className={`${btnBase} ${page === totalPages ? btnDisabled : btnIdle}`}
          aria-label="Next page"
        >
          <span className="material-symbols-outlined text-lg">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

/* Build compact page number array, e.g. [1, 2, 3, "…", 26] */
function buildPageNumbers(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "…", total];
  if (current >= total - 2) return [1, "…", total - 2, total - 1, total];
  return [1, "…", current - 1, current, current + 1, "…", total];
}
