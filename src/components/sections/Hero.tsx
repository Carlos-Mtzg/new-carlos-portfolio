"use client";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import LightRays from "@reactbits/LightRays";
import TextType from "@reactbits/TextType";
import { heroPhrases, socialLinks } from "@/lib/data/hero";

const iconMap: Record<string, React.ElementType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
};

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#b583d3"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={2}
          saturation={1}
        />
      </div>

      <div className="relative z-10 flex h-full max-w-5xl flex-col justify-center px-12 md:px-24 lg:px-32">
        <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-light-purple/30 bg-light-purple/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-light-purple">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-dark-purple" />
          Full-Stack Developer
        </span>

        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-text md:text-7xl">
          Hi, I&apos;m Charlie
        </h1>

        <div className="mb-8 text-xl text-light-purple md:text-3xl">
          <TextType
            text={heroPhrases}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
        </div>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-text/70 md:text-lg">
          I build complete web systems — from secure REST APIs and robust
          backends to modern, responsive interfaces. Based in Mexico, open to
          remote opportunities worldwide.
        </p>

        <div className="flex items-center gap-5">
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
    </section>
  );
}
