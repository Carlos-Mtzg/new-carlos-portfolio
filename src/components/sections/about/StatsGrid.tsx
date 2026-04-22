interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="rounded-xl border border-light-purple/20 bg-light-purple/5 px-5 py-4"
        >
          <p className="text-3xl font-bold text-dark-purple">{value}</p>
          <p className="mt-1 text-sm text-text/60">{label}</p>
        </div>
      ))}
    </div>
  );
}
