import type { Project } from "@/lib/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const statusColors: Record<string, string> = {
  "In Production": "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  "In Development": "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Live: "border-light-purple/20 bg-light-purple/10 text-light-purple",
  "Open Source": "border-dark-purple/30 bg-dark-purple/10 text-dark-purple",
};

const MAX_STACK = 5;

export default function ProjectMiniCard({ project }: { project: Project }) {
  const hasLinks =
    project.links.repo || project.links.site || project.links.demo;
  const extraStack = project.stack.length - MAX_STACK;

  return (
    <div className="flex flex-col rounded-xl border border-light-purple/10 bg-light-purple/5 p-5 transition-colors duration-300 hover:border-light-purple/20 hover:bg-light-purple/8">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <a
          href={project.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium uppercase tracking-widest text-dark-purple transition-colors duration-200 hover:text-light-purple"
        >
          {project.company} ↗
        </a>
        <div className="flex flex-wrap gap-1.5">
          {project.status.map((s) => (
            <span
              key={s}
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[s]}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mb-2 text-base font-semibold text-text">
        {project.shortTitle}
      </h3>

      <p className="mb-4 flex-1 line-clamp-2 text-sm leading-relaxed text-text/60">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, MAX_STACK).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-light-purple/15 bg-light-purple/5 px-2 py-0.5 text-xs text-light-purple/80"
          >
            {tech}
          </span>
        ))}
        {extraStack > 0 && (
          <span className="px-2 py-0.5 text-xs text-text/40">
            +{extraStack}
          </span>
        )}
      </div>

      {hasLinks && (
        <div className="flex gap-3">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text/60 transition-colors duration-200 hover:text-text"
            >
              <FaGithub size={13} /> Repo
            </a>
          )}
          {project.links.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text/60 transition-colors duration-200 hover:text-text"
            >
              <ExternalLink size={13} /> Live Site
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text/60 transition-colors duration-200 hover:text-text"
            >
              <ExternalLink size={13} /> Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
