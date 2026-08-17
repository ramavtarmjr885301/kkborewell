import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />

        <section className="bg-(--color-paper-50) py-20">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="font-display text-2xl font-bold text-(--color-well-900) sm:text-3xl">
              Want to see the equipment or actual job photos first?
            </h2>
            <p className="mx-auto mt-3 max-w-md font-body text-(--color-ink-900)/70">
              Check the full service list with equipment, or browse photos
              from our boring and installation work.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="rounded-full bg-(--color-well-800) px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-(--color-well-700)"
              >
                Browse services & equipment
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-(--color-well-800) px-6 py-3 font-body text-sm font-semibold text-(--color-well-900) transition-colors hover:bg-(--color-well-800) hover:text-white"
              >
                See work photos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}