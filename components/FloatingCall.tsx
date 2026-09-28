import { telLink } from "@/lib/business";
import PhoneIcon from "./icons/PhoneIcon";

export default function FloatingCall() {
    return (
        <a href={telLink()} aria-label="Call us now" className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1d4ed8] text-white shadow-lg shadow-black/25 transition-transform hover:-translate-y-0.5 hover:bg-[#1e40af] md:h-12 md:w-12">
            <PhoneIcon className="h-6 w-6 fill-current md:h-5 md:w-5" />
        </a>
    );
}