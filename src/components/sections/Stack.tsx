"use client";

import { stack } from "@/lib/data/stack";
import {
  SiSpring,
  SiSymfony,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiNginx,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiPhp,
  SiKeycloak,
  SiOpenai,
  SiGooglegemini,
  SiGithubcopilot,
  SiApple,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { ScanSearch, ScrollText, Bot } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, IconType | LucideIcon> = {
  java: FaJava,
  springboot: SiSpring,
  springsecurity: SiSpring,
  keycloak: SiKeycloak,
  log4j2: ScrollText,
  php: SiPhp,
  symfony: SiSymfony,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  framermotion: SiFramer,
  mysql: SiMysql,
  mongodb: SiMongodb,
  docker: SiDocker,
  nginx: SiNginx,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  postman: SiPostman,
  swagger: SiSwagger,
  sonarqube: ScanSearch,
  figma: SiFigma,
  vscode: VscVscode,
  windows: FaWindows,
  mac: SiApple,
  claude: Bot,
  chatgpt: SiOpenai,
  gemini: SiGooglegemini,
  copilot: SiGithubcopilot,
};

export default function Stack() {
  return (
    <section
      className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]"
      id="stack"
    >
      <div className="relative z-10 flex min-h-screen max-w-5xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          Tech Stack
        </span>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl">
          Technologies
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {stack.map(({ category, items }) => (
            <div key={category}>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-light-purple/60">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, icon }) => {
                  const Icon = iconMap[icon];
                  return (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-lg border border-light-purple/15 bg-light-purple/5 px-3 py-1.5 text-sm text-text/70 transition-colors duration-200 hover:border-light-purple/30 hover:text-text"
                    >
                      {Icon && <Icon size={14} className="shrink-0" />}
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
