import Link from "next/link";
import { business, services, waLink } from "@/lib/business";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-(--color-ink-900) pt-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-(--color-aqua-500) font-display text-sm font-bold text-white">
                KK
              </span>
              <span className="font-display text-base font-semibold text-white">
                {business.name}
              </span>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/55">
              Submersible pump boring, installation, automation and repair —
              service-first, based in Greater Noida.
            </p>

            <a
              href={waLink(
                "Namaste, mujhe borewell/pump service ke baare mein enquiry karni hai."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-body text-xs font-semibold text-white transition-colors hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="font-body text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/55">
              <li>
                <a href={`tel:+91${business.phone}`} className="hover:text-white">
                  <span className="font-mono">{business.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="break-all hover:text-white">
                  {business.email}
                </a>
              </li>
              <li className="leading-relaxed">{business.address}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row md:text-left">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} {business.name}. Run by{" "}
            {business.owner}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/30">
            {business.address}
          </p>
        </div>
      </div>
    </footer>
  );
}