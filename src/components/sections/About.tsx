import { aboutContent } from "@/lib/data/about";
import StatsGrid from "@/components/sections/about/StatsGrid";
import CurrentRoles from "@/components/sections/about/CurrentRoles";

export default function About() {
  return (
    <section className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]" id="about">
      <div className="relative z-10 flex min-h-screen max-w-5xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          {aboutContent.title}
        </span>

        <div className="mb-12 flex flex-col gap-4 max-w-2xl">
          {aboutContent.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-text/70 md:text-lg"
            >
              {p}
            </p>
          ))}
        </div>

        <StatsGrid stats={aboutContent.stats} />
        <CurrentRoles roles={aboutContent.currentRoles} />
      </div>
    </section>
  );
}
