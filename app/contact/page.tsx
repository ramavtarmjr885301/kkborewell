import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { business, waLink } from "@/lib/business";

export const metadata: Metadata = {
    title: "Contact Us | K.K. Borewell and Pumps",
    description:
        "Contact K.K. Borewell and Pumps in Rampur Jagir, Beta-1, Greater Noida — call, WhatsApp, email or send an enquiry form.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-(--color-paper-50) py-16">
                    <div className="mx-auto max-w-6xl px-5 md:px-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-rust-600)">
                            Get in touch
                        </p>
                        <h1 className="mt-3 max-w-xl font-display text-3xl font-bold text-(--color-well-900) sm:text-4xl">
                            Tell us what&apos;s wrong, or what you need installed
                        </h1>
                        <p className="mt-4 max-w-md font-body text-(--color-ink-900)/75">
                            Fill the form, WhatsApp us directly, or call —{" "}
                            {business.owner} picks up.
                        </p>
                    </div>
                </section>

                <section className="bg-(--color-paper-50) pb-20">
                    <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr]">
                        <div className="rounded-3xl border border-(--color-line) bg-white p-6 md:p-8">
                            <h2 className="mb-5 font-display text-lg font-semibold text-(--color-well-900)">
                                Send an enquiry
                            </h2>
                            <ContactForm />
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-3xl border border-(--color-line) bg-white p-6 md:p-8">
                                <h2 className="font-display text-lg font-semibold text-(--color-well-900)">
                                    Direct contact
                                </h2>
                                <ul className="mt-5 space-y-4 font-body text-sm text-(--color-ink-900)/80">
                                    <li className="flex items-center gap-3">
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-well-800)/10 text-(--color-well-800)">
                                            ☎
                                        </span>
                                        <a href={`tel:+91${business.phone}`} className="font-mono hover:text-(--color-rust-600)">
                                            {business.phoneDisplay}
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-well-800)/10 text-(--color-well-800)">
                                            ✉
                                        </span>
                                        <a href={`mailto:${business.email}`} className="break-all hover:text-(--color-rust-600)">
                                            {business.email}
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-well-800)/10 text-(--color-well-800)">
                                            ⌂
                                        </span>
                                        <span className="leading-relaxed">{business.address}</span>
                                    </li>
                                </ul>

                                <a
                                    href={waLink(
                                        "Namaste, mujhe borewell/pump service ke baare mein enquiry karni hai."
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                                >
                                    <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                                    Message on WhatsApp
                                </a>
                            </div>

                            <div className="overflow-hidden rounded-3xl border border-(--color-line)">
                                <iframe
                                    title="K.K. Borewell and Pumps location — Rampur Jagir, Beta-1, Greater Noida"
                                    src="https://www.google.com/maps?q=Rampur+Jagir+Beta+1+Greater+Noida&output=embed"
                                    className="h-72 w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}