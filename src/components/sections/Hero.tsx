"use client";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import TextType from "@reactbits/TextType";
import { heroPhrases, heroPhrasesEs, socialLinks } from "@/lib/data/hero";
import ScrollIndicator from "@ui/ScrollIndicator";
import Button from "@ui/Button";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n/translations";

const iconMap: Record<string, React.ElementType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = ui[lang].hero;
  const phrases = lang === "en" ? heroPhrases : heroPhrasesEs;

  return (
    <section className="relative h-screen" id="hero">
      <div className="relative z-10 flex h-full max-w-5xl flex-col  justify-center px-12 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple animate-fade-in-right">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-dark-purple" />
          {t.badge}
        </span>

        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-text md:text-7xl animate-fade-in-right animate-delay-100">
          {t.intro}
        </h1>

        <div className="mb-8 text-xl text-light-purple md:text-3xl animate-fade-in-right animate-delay-150">
          <TextType
            key={lang}
            text={phrases}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
        </div>

        <p className="mb-8 max-w-xl text-base leading-relaxed text-text/70 md:text-lg animate-fade-in-right animate-delay-250">
          {t.description}
        </p>

        <div className="flex gap-4 mb-10 animate-fade-in-right animate-delay-300">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.viewWork}
            </Button>
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <a href="/files/CV_CarlosMartinezGomez.pdf" download>
              <Button variant="ghost">{t.downloadCV}</Button>
            </a>
          </motion.div>
        </div>

        <div className="flex items-center gap-5 animate-fade-in-right animate-delay-350">
          {socialLinks.map(({ label, url }) => {
            const Icon = iconMap[label];
            return (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-light-purple transition-colors duration-200 hover:text-dark-purple"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>

      <ScrollIndicator targetId="about" />
    </section>
  );
}
