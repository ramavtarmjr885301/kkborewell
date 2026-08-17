import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GalleryTabs from "@/components/GalleryTabs";

export const metadata: Metadata = {
    title: "Work Gallery | K.K. Borewell and Pumps",
    description:
        "Photos and videos from actual borewell drilling, pump installation and repair jobs by K.K. Borewell and Pumps in Greater Noida.",
};

const photoItems: { alt: string; suggestedFile: string; src?: string }[] = [
    {
        alt: "Drill rig boring a new borehole",
        suggestedFile: "boring-3.jpg",
        src: "/images/gallery/boring-3.jpeg",
    },
    {
        alt: "Drill rig boring a new borehole",
        suggestedFile: "boring-4.jpg",
        src: "/images/gallery/boring-4.jpeg",
    },
    {
        alt: "Drill rig boring a new borehole",
        suggestedFile: "boring-5.jpg",
        src: "/images/gallery/boring-5.jpeg",
    },
    {
        alt: "Drill rig boring a new borehole",
        suggestedFile: "boring-1.jpg",
        src: "/images/gallery/boring-1.jpg",
    },
    {
        alt: "Casing pipe being lowered into the shaft",
        suggestedFile: "boring-2.jpg",
        src: "/images/gallery/boring-2.jpg",
    },
    {
        alt: "Submersible pump being fitted",
        suggestedFile: "installation-1.jpg",
        src: "/images/gallery/installation-1.jpg",
    },
    {
        alt: "Control panel wiring for automation",
        suggestedFile: "automation-1.jpg",
        src: "/images/gallery/automation-1.jpg",
    },
    {
        alt: "Earthing rod installation",
        suggestedFile: "earthing-1.jpg",
        src: "/images/gallery/earthing-1.jpg",
    },
    {
        alt: "Mono block pump fitted on site",
        suggestedFile: "monoblock-1.jpg",
        src: "/images/gallery/monoblock-1.jpg",
    },
    {
        alt: "Rainwater harvesting recharge pit",
        suggestedFile: "harvesting-1.jpg",
        src: "/images/gallery/harvesting-1.jpg",
    },
    {
        alt: "Pump repair in progress",
        suggestedFile: "repair-1.jpg",
        src: "/images/gallery/repair-1.jpg",
    },
    {
        alt: "Completed installation, water running",
        suggestedFile: "completed-1.jpg",
        src: "/images/gallery/completed-1.jpg",
    },
];

const videoItems: {
    alt: string;
    suggestedFile: string;
    src?: string;
    poster?: string;
}[] = [
        {
            alt: "Borewell drilling in progress", suggestedFile: "boring-1.mp4",
            src: "/videos/boring-1.mp4",
        },
        {
            alt: "Submersible pump installation", suggestedFile: "installation-1.mp4",
            src: "/videos/installation-1.mp4",
        },
        {
            alt: "Pump automation wiring & testing", suggestedFile: "automation-1.mp4",
            src: "/videos/automation-1.mp4",
        },
        {
            alt: "Pump repair walkthrough", suggestedFile: "repair-1.mp4",
            src: "/videos/repair-1.mp4",
        },
    ];

export default function GalleryPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-(--color-well-900) py-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-aqua-400)">
                            Gallery
                        </p>
                        <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                            Photos and videos from actual jobs
                        </h1>
                        <p className="mt-4 max-w-xl font-body text-white/70">
                            Real media from our boring, installation and repair work goes
                            here — not stock content.
                        </p>
                    </div>
                </section>

                <section className="bg-(--color-paper-50) py-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <GalleryTabs photos={photoItems} videos={videoItems} />
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}