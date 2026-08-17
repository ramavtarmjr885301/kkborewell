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
