// src/components/ui/States.jsx
export function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-10 h-10 rounded-full border-2 dark:border-slate-700 border-slate-200 dark:border-t-orange-400 border-t-orange-600 animate-spin" />
      <p className="text-sm font-semibold uppercase tracking-widest dark:text-slate-500 text-[#74777f]">
        {message}
      </p>
    </div>
  );
}

export function EmptyState({ icon = "🔍", title, subtitle, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <div className="text-5xl">{icon}</div>
      <div className="text-xl font-black dark:text-white text-[#022448]">
        {title}
      </div>
      {subtitle && (
        <p className="text-sm dark:text-slate-500 text-[#74777f] max-w-sm">
          {subtitle}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
