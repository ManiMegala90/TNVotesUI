export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="mb-12 max-w-md">
      <div className="relative flex-grow">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name or district..."
          className="
            w-full rounded-xl py-4 pl-12 pr-10 text-sm font-medium outline-none
            transition-all duration-200
            dark:bg-slate-900 dark:border dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500
            dark:focus:ring-2 dark:focus:ring-amber-500 dark:focus:border-amber-500
            bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 shadow-sm
            focus:ring-2 focus:ring-[#022448] focus:border-[#022448]
          "
        />
        {value && (
          <button
            onClick={() => onClear?.()}
            className="absolute right-4 top-1/2 -translate-y-1/2 dark:text-slate-500 text-slate-400 hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"
            aria-label="Clear search"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        )}
      </div>
    </div>
  );
}
