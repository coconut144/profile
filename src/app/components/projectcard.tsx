type Color = "violet" | "teal" | "amber" | "coral";

const colorMap: Record<Color, string> = {
  violet: "bg-violet-50 dark:bg-violet-900/20",
  teal:   "bg-teal-50 dark:bg-teal-900/20",
  amber:  "bg-amber-50 dark:bg-amber-900/20",
  coral:  "bg-orange-50 dark:bg-orange-900/20",
};

interface Props {
  title: string;
  description: string;
  tags: string[];
  color: Color;
  emoji: string;
  href?: string;
}

export default function ProjectCard({ title, description, tags, color, emoji, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
    >
      <div className={`${colorMap[color]} h-28 flex items-center justify-center text-3xl`}>
        {emoji}
      </div>
      <div className="p-4">
        <h2 className="font-medium text-sm mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {title}
        </h2>
        <p className="text-xs text-zinc-500 leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}