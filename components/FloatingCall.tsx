import { telLink } from "@/lib/business";
import PhoneIcon from "./icons/PhoneIcon";

export default function FloatingCall() {
    return (

        <a href={telLink()}
            aria-label="Call us now"
            className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-(--color-well-800) text-white shadow-lg shadow-black/25 ring-2 ring-white transition-transform hover:-translate-y-0.5 hover:bg-(--color-well-700) md:h-13 md:w-13"
        >
            <span className="absolute inset-0 animate-ping rounded-full bg-(--color-well-800)/40" />
            <PhoneIcon className="relative h-6 w-6 fill-current md:h-5 md:w-5" />
        </a >
    );
}


