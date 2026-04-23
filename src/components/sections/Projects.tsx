import { allProjects } from "@/lib/data/projects";
import FeaturedProjectCard from "@/components/sections/projects/FeaturedProjectCard";

export default function Projects() {
  return (
    <section
      className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_1%_contain_5%]"
      id="projects"
    >
      <div className="relative z-10 flex min-h-screen max-w-5xl xl:max-w-7xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          Projects
        </span>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl">
          What I build
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
