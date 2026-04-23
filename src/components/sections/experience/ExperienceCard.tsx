import type { ExperienceEntry } from "@/lib/data/experience";
import type { ui } from "@/lib/i18n/translations";
import { MoveUpRight } from "lucide-react";

interface Props {
  entry: ExperienceEntry;
  t: typeof ui.en.experience;
}

export default function ExperienceCard({ entry, t }: Props) {
  return (
    <div className="group rounded-xl border border-light-purple/10 bg-light-purple/5 p-6 transition-colors duration-300 hover:border-light-purple/20 hover:bg-light-purple/8">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest text-dark-purple transition-colors duration-200 hover:text-light-purple flex items-center gap-1"
          >
            <span>{entry.company}</span> <MoveUpRight size={12} />
          </a>
          <h3 className="mt-1 text-lg font-semibold text-text">{entry.role}</h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-light-purple/20 bg-light-purple/10 px-3 py-1 text-xs font-medium text-light-purple">
            {t.types[entry.type] ?? entry.type}
          </span>
          <span className="rounded-full border border-light-purple/15 px-3 py-1 text-xs text-text/50">
            {t.locationTypes[entry.locationType] ?? entry.locationType}
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-text/50">
        <span>{entry.location}</span>
        <span className="h-px w-4 bg-light-purple/20" />
        <span>
          {entry.startDate} —{" "}
          {entry.current ? (
            <span className="inline-flex items-center gap-1.5 text-dark-purple">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-dark-purple" />
              {t.present}
            </span>
          ) : (
            entry.endDate
          )}
        </span>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-text/60">
        {entry.description}
      </p>

      <ul className="mb-6 flex flex-col gap-2">
        {entry.achievements.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-sm text-text/70">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dark-purple" />
            {achievement.text}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {entry.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-light-purple/15 bg-light-purple/5 px-2.5 py-1 text-xs text-light-purple/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
