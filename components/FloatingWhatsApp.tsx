import { waLink } from "@/lib/business";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Namaste, mujhe borewell/pump service ke baare mein enquiry karni hai.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a] md:h-13 md:w-13"
    >
      <WhatsAppIcon className="h-7 w-7 fill-current md:h-6 md:w-6" />
    </a>
  );
}