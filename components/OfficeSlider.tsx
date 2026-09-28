"use client";

import { useCallback, useEffect, useState } from "react";
import PhotoSlot from "@/components/PhotoSlot"; // apna actual import path rakho

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
    { src: "/images/gallery/boring-3.jpeg", alt: "K.K. Borewell workshop" },
    { src: "/images/gallery/boring-5.jpeg", alt: "Pumps and equipment" },
    { src: "/images/gallery/boring-1.jpg", alt: "Borewell rig at work" },
    { src: "/images/gallery/boring-4.jpeg", alt: "K.K. Borewell and Pumps office front" },
    { src: "/images/gallery/completed-1.jpg", alt: "Our team" },
];

const INTERVAL_MS = 3500;

export default function OfficeSlider({ slides = SLIDES }: { slides?: Slide[] }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(
        () => setIndex((i) => (i + 1) % slides.length),
        [slides.length]
    );
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(next, INTERVAL_MS);
        return () => clearInterval(id);
    }, [paused, next, index]); // index dependency: manual click par timer reset ho jayega

    return (
        <div
            className="relative aspect-[18/9] w-full overflow-hidden rounded-2xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {slides.map((s, i) => (
                <div
                    key={s.src}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <PhotoSlot src={s.src} alt={s.alt} suggestedFile={s.src} />
                </div>
            ))}

            {/* Arrows */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            >
                ‹
            </button>
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2.5 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}