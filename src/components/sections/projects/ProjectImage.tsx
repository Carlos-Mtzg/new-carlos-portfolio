"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon, Lock } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  title: string;
  /** Shown in the fallback when the project's data can't be displayed. */
  protectedNotice?: string;
  comingSoonLabel: string;
};

/**
 * Project screenshot or diagram. Until the file exists in /public, it falls
 * back to a branded panel, so a new image only needs to be dropped in place.
 */
export default function ProjectImage({
  src,
  alt,
  title,
  protectedNotice,
  comingSoonLabel,
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-light-purple/5">
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-size-[18px_18px] px-6 text-center"
        >
          <span className="text-3xl font-bold tracking-tight text-text/80 md:text-4xl">
            {title}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-text/50">
            {protectedNotice ? (
              <>
                <Lock size={12} aria-hidden /> {protectedNotice}
              </>
            ) : (
              <>
                <ImageIcon size={12} aria-hidden /> {comingSoonLabel}
              </>
            )}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
