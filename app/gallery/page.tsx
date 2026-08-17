import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PhotoSlot from "@/components/PhotoSlot";

export const metadata: Metadata = {
    title: "Work Gallery | K.K. Borewell and Pumps",
    description:
        "Photos from actual borewell drilling, pump installation and repair jobs by K.K. Borewell and Pumps in Greater Noida.",
};

// Once you have real photos, drop the files into /public/images/gallery/
// and add "src: '/images/gallery/<filename>.jpg'" to the matching item below.
const galleryItems: { alt: string; suggestedFile: string; src?: string }[] = [
    { alt: "Drill rig boring a new borehole", suggestedFile: "boring-1.jpg" },
    { alt: "Casing pipe being lowered into the shaft", suggestedFile: "boring-2.jpg" },
    { alt: "Submersible pump being fitted", suggestedFile: "installation-1.jpg" },
    { alt: "Control panel wiring for automation", suggestedFile: "automation-1.jpg" },
    { alt: "Earthing rod installation", suggestedFile: "earthing-1.jpg" },
    { alt: "Mono block pump fitted on site", suggestedFile: "monoblock-1.jpg" },
    { alt: "Rainwater harvesting recharge pit", suggestedFile: "harvesting-1.jpg" },
    { alt: "Pump repair in progress", suggestedFile: "repair-1.jpg" },
    { alt: "Completed installation, water running", suggestedFile: "completed-1.jpg" },
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
                            Photos from actual jobs
                        </h1>
                        <p className="mt-4 max-w-xl font-body text-white/70">
                            Real photos from our boring, installation and repair work go
                            here — not stock images.
                        </p>
                    </div>
                </section>

                <section className="bg-(--color-paper-50) py-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <div className="mb-8 rounded-2xl border border-(--color-rust-500)/30 bg-(--color-rust-500)/5 p-4 font-body text-sm text-(--color-ink-900)/75">
                            <strong className="text-(--color-rust-600)">Owner note:</strong>{" "}
                            these tiles are placeholders. Save your real job photos into{" "}
                            <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
                                /public/images/gallery/
                            </code>{" "}
                            using the filename shown on each tile, then set that tile&apos;s{" "}
                            <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
                                src
                            </code>{" "}
                            in <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">app/gallery/page.tsx</code> — the photo will replace the placeholder automatically.
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {galleryItems.map((item) => (
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
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}