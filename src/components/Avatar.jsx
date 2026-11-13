function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({
  name,
  photoUrl,
  partyColor,
  size = "w-10 h-10",
}) {
  if (photoUrl) {
    return (
      <div
        className={`${size} rounded-full border-2 dark:border-slate-800 border-white bg-slate-200 overflow-hidden flex-shrink-0`}
      >
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={`${size} rounded-full border-2 dark:border-slate-700 border-white flex-shrink-0 flex items-center justify-center text-xs font-black`}
      style={{
        background: (partyColor || "#94a3b8") + "33",
        color: partyColor || "#94a3b8",
      }}
    >
      {getInitials(name)}
    </div>
  );
}
