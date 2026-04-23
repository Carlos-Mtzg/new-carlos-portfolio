import { getYouTubeEmbedUrl } from "@/lib/data/projects";

type Props = {
  youtubeId: string;
  alt: string;
};

export default function ProjectVideoEmbed({ youtubeId, alt }: Props) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-light-purple/5">
      <iframe
        src={getYouTubeEmbedUrl(youtubeId)}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; encrypted-media"
        title={alt}
      />
      {/* Overlay — absorbs all pointer events so the user can't interact with the player */}
      <div className="absolute inset-0 z-10 cursor-default" />
    </div>
  );
}
