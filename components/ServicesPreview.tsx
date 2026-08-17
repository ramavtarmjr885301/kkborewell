import Link from "next/link";
import { services } from "@/lib/business";
import { equipmentIcons } from "./icons/EquipmentIcons";

export default function ServicesPreview() {
    const featured = services.slice(0, 6);

    return (
        <section className="bg-(--color-well-900) py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-(--color-aqua-400)">
                            What we do
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                            Services, not sales
                        </h2>
                        <p className="mt-4 font-body text-white/70">
                            We don&apos;t sell pumps off a shelf — we install, automate,
                            wire and repair them at your site.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white hover:text-(--color-well-900)"
                    >
                        View all services →
                    </Link>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((s) => {
                        const primaryEquip = equipmentIcons[s.equipment[0]];
                        const Icon = primaryEquip.Icon;
                        return (
                            <Link
                                key={s.slug}
                                href={`/services#${s.slug}`}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-(--color-aqua-400)/50 hover:bg-white/[0.06]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[11px] tracking-widest text-(--color-rust-400)">
                                        {s.tag}
                                    </span>
                                    <div className="rounded-lg bg-white/90 p-1.5">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                </div>
                                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                                    {s.title}
                                </h3>
                                <p className="mt-2 font-body text-sm leading-relaxed text-white/65">
                                    {s.short}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}