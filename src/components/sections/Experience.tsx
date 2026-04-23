"use client";

import { experience, experienceEs } from "@/lib/data/experience";
import ExperienceCard from "@/components/sections/experience/ExperienceCard";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = ui[lang].experience;
  const entries = lang === "en" ? experience : experienceEs;

  return (
    <section
      className="relative min-h-screen timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_15%]"
      id="experience"
    >
      <div className="relative z-10 flex min-h-screen max-w-5xl flex-col justify-center px-12 py-24 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 rounded-full bg-dark-purple" />
          {t.badge}
        </span>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl">
          {t.heading}
        </h2>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-0 top-3 h-full w-px bg-light-purple/15" />

          {entries.map((entry, i) => (
            <div key={i} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-1 top-3 h-2 w-2 rounded-full border-2 border-dark-purple bg-bg" />
              <ExperienceCard entry={entry} t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
