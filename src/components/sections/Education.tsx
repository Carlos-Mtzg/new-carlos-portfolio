import { education } from "@/lib/data/education";
import { MoveUpRight } from "lucide-react";

const statusColors = {
  Graduated: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  "In Progress": "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

export default function Education() {
  return (
    <section
      className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]"
      id="education"
    >
      <div className="relative z-10 flex min-h-screen max-w-5xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          Education
        </span>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl">
          Where I studied
        </h2>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-0 top-3 h-full w-px bg-light-purple/15" />

          {education.map((entry, i) => (
            <div key={i} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-1 top-3 h-2 w-2 rounded-full border-2 border-dark-purple bg-bg" />

              <div className="rounded-xl border border-light-purple/10 bg-light-purple/5 p-6 transition-colors duration-300 hover:border-light-purple/20 hover:bg-light-purple/8">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <a
                      href={entry.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium uppercase tracking-widest text-dark-purple transition-colors duration-200 hover:text-light-purple flex items-center gap-1"
                    >
                      <span>{entry.institution}</span> <MoveUpRight size={12} />
                    </a>
                    <h3 className="mt-1 text-lg font-semibold text-text">
                      {entry.degree}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${statusColors[entry.status]}`}
                  >
                    {entry.status === "In Progress" ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                        In Progress
                      </span>
                    ) : (
                      entry.status
                    )}
                  </span>
                </div>

                <p className="mb-4 text-xs text-text/50">
                  {entry.startDate} — {entry.endDate}
                </p>

                <p className="text-sm leading-relaxed text-text/60">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
