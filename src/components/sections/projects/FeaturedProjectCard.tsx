import type { Project } from "@/lib/data/projects";
import { ExternalLink, MoveUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectVideoEmbed from "./ProjectVideoEmbed";

const statusColors: Record<string, string> = {
  "In Production": "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  "In Development": "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Live: "border-light-purple/20 bg-light-purple/10 text-light-purple",
  "Open Source": "border-dark-purple/30 bg-dark-purple/10 text-dark-purple",
};

export default function FeaturedProjectCard({ project }: { project: Project }) {
  const hasLinks =
    project.links.repo || project.links.site || project.links.demo;

  return (
    <div className="overflow-hidden rounded-xl border border-light-purple/10 bg-light-purple/5 transition-colors duration-300 hover:border-light-purple/20 hover:bg-light-purple/8">
      {project.media.type === "video" && (
        <ProjectVideoEmbed
          youtubeId={project.media.youtubeId}
          alt={project.media.alt}
        />
      )}

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <a
              href={project.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-widest text-dark-purple transition-colors duration-200 hover:text-light-purple flex items-center gap-1"
            >
              <span>{project.company}</span> <MoveUpRight size={12}/>
            </a>
            <h3 className="mt-1 text-xl font-semibold text-text">
              {project.shortTitle}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.status.map((s) => (
              <span
                key={s}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${statusColors[s]}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <span className="mb-4 inline-block rounded-md border border-light-purple/15 bg-light-purple/5 px-2.5 py-1 text-xs text-light-purple/70">
          {project.sector}
        </span>

        <p className="mb-5 text-sm leading-relaxed text-text/60">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-light-purple/15 bg-light-purple/5 px-2.5 py-1 text-xs text-light-purple/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex gap-4">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text/60 transition-colors duration-200 hover:text-text"
              >
                <FaGithub size={15} /> Repo
              </a>
            )}
            {project.links.site && (
              <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text/60 transition-colors duration-200 hover:text-text"
              >
                <ExternalLink size={15} /> Live Site
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text/60 transition-colors duration-200 hover:text-text"
              >
                <ExternalLink size={15} /> Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
