export default function ComingSoon({ title }) {
  return (
    <div className="pt-32 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="text-6xl mb-6">🚧</div>
      <h1 className="text-3xl font-black dark:text-white text-[#022448]">
        {title}
      </h1>
      <p className="mt-4 dark:text-slate-400 text-slate-500 max-w-sm">
        This section is coming soon.
      </p>
    </div>
  );
}
