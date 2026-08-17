type VideoSlotProps = {
    /** Path relative to /public, e.g. "/videos/boring-1.mp4". Leave empty until you add the real file. */
    src?: string;
    /** Optional thumbnail shown before play, path relative to /public, e.g. "/images/gallery/boring-1-poster.jpg" */
    poster?: string;
    alt: string;
    /** Filename you should save into /public/videos/, e.g. "boring-1.mp4" */
    suggestedFile: string;
    className?: string;
};

export default function VideoSlot({
    src,
    poster,
    alt,
    suggestedFile,
    className,
}: VideoSlotProps) {
    if (src) {
        return (
            <video
                src={src}
                poster={poster}
                controls
                playsInline
                preload="metadata"
                className={className ?? "h-full w-full object-cover"}
                aria-label={alt}
            />
        );
    }

    return (
        <div
            className={
                className ??
                "flex h-full w-full flex-col items-center justify-center gap-2 bg-(--color-well-900)/90 p-4 text-center"
            }
        >
            <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-white/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
            >
                <rect x="3" y="5" width="14" height="14" rx="2" />
                <path d="M17 9l4-2v10l-4-2" />
            </svg>
            <p className="font-mono text-[11px] leading-snug text-white/70">
                {alt}
                <br />
                <span className="text-(--color-rust-400)">add: {suggestedFile}</span>
            </p>
        </div>
    );
}