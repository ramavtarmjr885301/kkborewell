import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PhotoSlot from "@/components/PhotoSlot";
import { business } from "@/lib/business";

export const metadata: Metadata = {
    title: "About Us | K.K. Borewell and Pumps",
    description:
        "K.K. Borewell and Pumps is run by Kishan Kumar from Rampur Jagir, Beta-1, Greater Noida — a service-first borewell and pump specialist.",
};

const points = [
    {
        title: "Boring specialist, not a generalist",
        desc: "Submersible pump boring and installation is what we specialise in — it's named first on our card for a reason.",
    },
    {
        title: "One team, full job",
        desc: "Boring, pump fitting, automation, earthing and deburring are all done by us — no separate contractors to coordinate.",
    },
    {
        title: "Local to Greater Noida",
        desc: "Based in Rampur Jagir, Beta-1 — we know the local soil and water table conditions across G.B. Nagar.",
    },
    {
        title: "Repairs, not just new installs",
        desc: "We service pumps that already exist on your property, whatever brand they are.",
    },
];

const steps = [
    {
        n: "01",
        title: "Site visit & water table check",
        desc: "We inspect your site and assess the ground and expected water table before quoting.",
    },
    {
        n: "02",
        title: "Boring / drilling",
        desc: "Borehole is drilled to the required depth and cased properly for a stable shaft.",
    },
    {
        n: "03",
        title: "Pump selection & installation",
        desc: "Right submersible, mono block or industrial pump is chosen and installed with correct fittings, earthing and deburred piping.",
    },
    {
        n: "04",
        title: "Testing, automation & handover",
        desc: "Flow is tested, automation is set up if needed, and the system is explained to you before we leave.",
    },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-(--color-paper-50) py-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-rust-600)">
                            About us
                        </p>
                        <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold text-(--color-well-900) sm:text-4xl">
                            Run by {business.owner}, on the ground
                        </h1>
                        <p className="mt-4 max-w-xl font-body text-(--color-ink-900)/75">
                            {business.name} is a service-first outfit — we come to your
                            site, we do the physical work, and we stand by it if something
                            needs a follow-up visit.
                        </p>
                    </div>
                </section>

                {/* Office photo */}
                <section className="bg-(--color-paper-50) pb-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <div className="aspect-[16/7] overflow-hidden rounded-3xl border border-(--color-line)">
                            <PhotoSlot
                                alt="K.K. Borewell and Pumps office / workshop"
                                suggestedFile="/images/office/office-front.jpg"
                            />
                        </div>
                    </div>
                </section>

                {/* Why us */}
                <section id="why-us" className="bg-(--color-aqua-200)/40 py-20">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                            {points.map((p) => (
                                <div key={p.title} className="border-l-2 border-(--color-well-800) pl-5">
                                    <h3 className="font-display text-base font-semibold text-(--color-well-900)">
                                        {p.title}
                                    </h3>
                                    <p className="mt-1.5 font-body text-sm leading-relaxed text-(--color-ink-900)/70">
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section id="process" className="bg-(--color-paper-50) py-20">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-rust-600)">
                            How a job runs
                        </p>
                        <h2 className="mt-3 max-w-lg font-display text-3xl font-bold text-(--color-well-900) sm:text-4xl">
                            Four steps from dry site to running water
                        </h2>

                        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            <div
                                className="absolute left-0 right-0 top-[22px] hidden h-px bg-(--color-line) lg:block"
                                aria-hidden="true"
                            />
                            {steps.map((s) => (
                                <div key={s.n} className="relative">
                                    <span className="font-mono text-sm font-bold text-(--color-rust-500)">
                                        {s.n}
                                    </span>
                                    <div className="mt-3 h-2 w-2 rounded-full bg-(--color-well-800)" />
                                    <h3 className="mt-4 font-display text-lg font-semibold text-(--color-well-900)">
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 font-body text-sm leading-relaxed text-(--color-ink-900)/70">
                                        {s.desc}
                                    </p>
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