import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { services, waLink } from "@/lib/business";
import { equipmentIcons } from "@/components/icons/EquipmentIcons";

export const metadata: Metadata = {
    title: "Services & Equipment | K.K. Borewell and Pumps",
    description:
        "Full list of borewell and pump services — boring, installation, automation, industrial pumps, rainwater harvesting, earthing, deburring and repair — with the equipment used for each.",
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-(--color-well-900) py-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-aqua-400)">
                            Full list
                        </p>
                        <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                            Every service we do, and the equipment behind it
                        </h1>
                        <p className="mt-4 max-w-xl font-body text-white/70">
                            This is service work, not retail — each job below is carried
                            out on site with the equipment shown.
                        </p>
                    </div>
                </section>

                <section className="bg-(--color-paper-50) py-16">
                    <div className="mx-auto max-w-6xl space-y-10 px-5 md:px-8">
                        {services.map((s) => (
                            <div
                                key={s.slug}
                                id={s.slug}
                                className="scroll-mt-24 rounded-3xl border border-(--color-line) bg-white p-6 md:p-9"
                            >
                                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                                    <div>
                                        <span className="font-mono text-[11px] tracking-widest text-(--color-rust-600)">
                                            {s.tag}
                                        </span>
                                        <h2 className="mt-2 font-display text-2xl font-bold text-(--color-well-900)">
                                            {s.title}
                                        </h2>
                                        <p className="mt-3 font-body text-sm leading-relaxed text-(--color-ink-900)/75">
                                            {s.long}
                                        </p>

                                        <a
                                            href={waLink(
                                                `Namaste, mujhe "${s.title}" service ke baare mein enquiry karni hai.`
                                            )}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                                        >
                                            <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                                            Ask about this service
                                        </a>
                                    </div>

                                    <div>
                                        <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-(--color-ink-900)/45">
                                            Equipment used
                                        </p>
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                                            {s.equipment.map((eq) => {
                                                const item = equipmentIcons[eq];
                                                if (!item) return null;
                                                const Icon = item.Icon;
                                                return (
                                                    <div
                                                        key={eq}
                                                        className="flex flex-col items-center gap-2 rounded-xl border border-(--color-line) bg-(--color-paper-50) p-4 text-center"
                                                    >
                                                        <Icon className="h-12 w-12" />
                                                        <span className="font-body text-xs leading-snug text-(--color-ink-900)/70">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main >
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}