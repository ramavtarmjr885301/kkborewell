"use client";

import { useState } from "react";
import PhotoSlot from "./PhotoSlot";
import VideoSlot from "./VideoSlot";

type PhotoItem = { alt: string; suggestedFile: string; src?: string };
type VideoItem = {
    alt: string;
    suggestedFile: string;
    src?: string;
    poster?: string;
};

export default function GalleryTabs({
    photos,
    videos,
}: {
    photos: PhotoItem[];
    videos: VideoItem[];
}) {
    const [tab, setTab] = useState<"photos" | "videos">("photos");

    const tabClass = (active: boolean) =>
        `rounded-full px-5 py-2 font-body text-sm font-semibold transition-colors ${active
            ? "bg-(--color-well-800) text-white"
            : "border border-(--color-line) text-(--color-ink-900)/70 hover:bg-white"
        }`;

    return (
        <div>
            <div className="mb-8 flex gap-3">
                <button
                    type="button"
                    onClick={() => setTab("photos")}
                    className={tabClass(tab === "photos")}
                    aria-pressed={tab === "photos"}
                >
                    Photos
                </button>
                <button
                    type="button"
                    onClick={() => setTab("videos")}
                    className={tabClass(tab === "videos")}
                    aria-pressed={tab === "videos"}
                >
                    Videos
                </button>
            </div>

            {tab === "photos" ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {photos.map((item) => (
                        <div
                            key={item.suggestedFile}
                            className="aspect-[4/3] overflow-hidden rounded-2xl border border-(--color-line)"
                        >
                            <PhotoSlot
                                src={item.src}
                                alt={item.alt}
                                suggestedFile={`/images/gallery/${item.suggestedFile}`}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((item) => (
                        <div
                            key={item.suggestedFile}
                            className="aspect-[4/3] overflow-hidden rounded-2xl border border-(--color-line) bg-(--color-well-900)"
                        >
                            <VideoSlot
                                src={item.src}
                                poster={item.poster}
                                alt={item.alt}
                                suggestedFile={`/videos/${item.suggestedFile}`}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}