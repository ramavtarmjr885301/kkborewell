import { business, waLink } from "@/lib/business";
import BorewellCrossSection from "./BorewellCrossSection";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-(--color-paper-50)">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:px-8 md:pb-24 md:pt-16">
        <div className="animate-rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--color-line) bg-white px-3 py-1 font-mono text-xs tracking-wide text-(--color-well-800)">
            RAMPUR JAGIR · BETA-1 · GREATER NOIDA
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-(--color-well-900) sm:text-5xl">
            Whatever&apos;s below the surface, we bring the water up.
          </h1>
          <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-(--color-ink-900)/80">
            Submersible pump boring &amp; installation, automation, industrial
            &amp; mono block pumps, rainwater harvesting, earthing and repair —
            handled by one specialist team across Greater Noida.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(
                "Namaste, mujhe borewell/pump service ke baare mein enquiry karni hai."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-(--color-rust-500) px-6 py-3 font-body text-sm font-semibold text-white shadow-sm shadow-(--color-rust-500)/30 transition-transform hover:-translate-y-0.5 hover:bg-(--color-rust-600)"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36c1.46.8 3.11 1.22 4.83 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.86 14.2c-.25.7-1.45 1.33-2 1.42-.53.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.95-1.28-4.88-4.24-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4.002.57.01.18.008.43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.72-.17 1.42z" />
              </svg>
              WhatsApp Enquiry
            </a>
            <a
              href={waLink(
                "Namaste, mujhe borewell/pump service ke baare mein enquiry karni hai."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body text-sm font-semibold text-white shadow-sm shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
              WhatsApp Enquiry
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-(--color-line) pt-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-(--color-ink-900)/55">
                Response
              </dt>
              <dd className="font-display text-xl font-semibold text-(--color-well-900)">
                Same-day
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-(--color-ink-900)/55">
                Coverage
              </dt>
              <dd className="font-display text-xl font-semibold text-(--color-well-900)">
                Gr. Noida
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-(--color-ink-900)/55">
                Work
              </dt>
              <dd className="font-display text-xl font-semibold text-(--color-well-900)">
                Install + Repair
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <BorewellCrossSection />
        </div>
      </div>
    </section>
  );
}
