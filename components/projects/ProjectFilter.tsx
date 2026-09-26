"use client";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
};

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md max-w-xl mx-auto">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`
              relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2
              ${
                isActive
                  ? "bg-zinc-800 text-white shadow-sm border border-zinc-700/80"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }
            `}
          >
            <span>{cat}</span>
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                isActive
                  ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                  : "bg-zinc-800 text-zinc-500"
              }`}
            >
              {counts[cat] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
