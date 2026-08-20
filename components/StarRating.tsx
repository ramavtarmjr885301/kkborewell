export default function StarRating({ rating }: { rating: number }) {
    const rounded = Math.max(0, Math.min(5, Math.round(rating)));

    return (
        <div
            className="flex items-center gap-0.5"
            role="img"
            aria-label={`${rounded} out of 5 stars`}
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${i < rounded ? "text-(--color-rust-500)" : "text-(--color-line)"
                        }`}
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
                </svg>
            ))}
        </div>
    );
}