type PhotoSlotProps = {
    /** Path relative to /public, e.g. "/images/gallery/boring-1.jpg". Leave empty until you add the real file. */
    src?: string;
    alt: string;
    /** Filename you should save into the folder mentioned in the placeholder, e.g. "boring-1.jpg" */
    suggestedFile: string;
    className?: string;
};

export default function PhotoSlot({
    src,
    alt,
    suggestedFile,
    className,
}: PhotoSlotProps) {
    if (src) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={className ?? "h-full w-full object-cover"}
            />
        );
    }

    return (
        <div
            className={
                className ??
                "flex h-full w-full flex-col items-center justify-center gap-2 bg-(--color-aqua-200)/50 p-4 text-center"
            }
        >
            <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-(--color-well-800)/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
            >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="10" r="1.5" />
                <path d="M3 17l5-5 4 4 3-3 6 6" />
            </svg>
            <p className="font-mono text-[11px] leading-snug text-(--color-well-900)/60">
                {alt}
                <br />
                <span className="text-(--color-rust-600)">add: {suggestedFile}</span>
            </p>
        </div>
    );
}