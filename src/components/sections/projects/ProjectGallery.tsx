"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD_PX = 40;

type Props = {
  images: { src: string; alt: string }[];
  title: string;
  labels: { previous: string; next: string; goTo: string };
};

/**
 * Screenshot carousel for projects that can't show a demo video.
 * Behaves like the video cards: advances on its own, but only while the card
 * is on screen, the user isn't interacting with it, and motion isn't reduced.
 */
export default function ProjectGallery({ images, title, labels }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const count = images.length;
  const go = (next: number) => setIndex(((next % count) + count) % count);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Depends on `index` so a manual change restarts the countdown.
  useEffect(() => {
    if (paused || !inView || reducedMotion || count < 2) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [index, paused, inView, reducedMotion, count]);

  const arrowClass =
    "absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 p-1.5 text-white/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-black/65 focus-visible:opacity-100 group-hover:opacity-100 pointer-coarse:hidden";

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={title}
      tabIndex={0}
      className="group relative aspect-video w-full overflow-hidden bg-light-purple/5 outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > SWIPE_THRESHOLD_PX) go(index + (dx < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      {images.map((image, i) => (
        <div
          key={image.src}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            unoptimized
            loading={i === 0 ? "eager" : "lazy"}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={labels.previous}
            onClick={() => go(index - 1)}
            className={`${arrowClass} left-3`}
          >
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={labels.next}
            onClick={() => go(index + 1)}
            className={`${arrowClass} right-3`}
          >
            <ChevronRight size={16} aria-hidden />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-1 bg-linear-to-t from-black/40 to-transparent pb-2 pt-6">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`${labels.goTo} ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className="flex h-5 items-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/45"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
