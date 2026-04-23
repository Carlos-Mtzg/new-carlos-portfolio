"use client";

import { allProjects, projectDescriptionsEs } from "@/lib/data/projects";
import FeaturedProjectCard from "@/components/sections/projects/FeaturedProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = ui[lang].projects;

  return (
    <section
      className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_1%_contain_5%]"
      id="projects"
    >
      <div className="relative z-10 flex min-h-screen max-w-5xl xl:max-w-7xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          {t.badge}
        </span>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl">
          {t.heading}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              description={
                lang === "en"
                  ? project.description
                  : (projectDescriptionsEs[project.id] ?? project.description)
              }
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
