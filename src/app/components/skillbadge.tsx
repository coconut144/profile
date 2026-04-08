export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="text-xs px-3 py-1 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-400">
      {name}
    </span>
  );
}