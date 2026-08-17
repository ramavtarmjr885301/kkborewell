"use client";

import { useState } from "react";
import { waLink, mailLink } from "@/lib/business";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [touched, setTouched] = useState(false);

    const isValid = name.trim() !== "" && phone.trim() !== "" && message.trim() !== "";

    const composed = [
        `Naam: ${name || "-"}`,
        `Phone: ${phone || "-"}`,
        service ? `Service: ${service}` : null,
        `Message: ${message || "-"}`,
    ]
        .filter(Boolean)
        .join("\n");

    function handleSubmit(channel: "whatsapp" | "email") {
        setTouched(true);
        if (!isValid) return;

        if (channel === "whatsapp") {
            window.open(waLink(composed), "_blank", "noopener,noreferrer");
        } else {
            window.location.href = mailLink(
                `Enquiry from website — ${service || "General"}`,
                composed
            );
        }
    }

    const inputClass =
        "w-full rounded-lg border border-(--color-line) bg-white px-4 py-2.5 font-body text-sm text-(--color-ink-900) placeholder:text-(--color-ink-900)/35 focus:border-(--color-well-800) focus:outline-none";

    return (
        <form className="space-y-4" noValidate>
            <div>
                <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-(--color-ink-900)">
                    Your name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className={inputClass}
                />
                {touched && name.trim() === "" && (
                    <p className="mt-1 font-body text-xs text-(--color-rust-600)">Naam likhna zaroori hai.</p>
                )}
            </div>

            <div>
                <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-medium text-(--color-ink-900)">
                    Phone number
                </label>
                <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98xxxxxxxx"
                    className={inputClass}
                />
                {touched && phone.trim() === "" && (
                    <p className="mt-1 font-body text-xs text-(--color-rust-600)">Phone number zaroori hai.</p>
                )}
            </div>

            <div>
                <label htmlFor="service" className="mb-1.5 block font-body text-sm font-medium text-(--color-ink-900)">
                    Service needed (optional)
                </label>
                <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={inputClass}
                >
                    <option value="">Select a service</option>
                    <option>Submersible Pump Boring & Installation</option>
                    <option>Pump Automation</option>
                    <option>Mono Block & Industrial Pumps</option>
                    <option>Rain Water Harvesting</option>
                    <option>Earthing</option>
                    <option>Deburring</option>
                    <option>Pump Repairing</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-(--color-ink-900)">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Apni location aur problem/requirement batayein"
                    className={inputClass}
                />
                {touched && message.trim() === "" && (
                    <p className="mt-1 font-body text-xs text-(--color-rust-600)">Message likhna zaroori hai.</p>
                )}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
                <button
                    type="button"
                    onClick={() => handleSubmit("whatsapp")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
                >
                    <WhatsAppIcon className="h-4 w-4 fill-current" />
                    Send on WhatsApp
                </button>
                <button
                    type="button"
                    onClick={() => handleSubmit("email")}
                    className="inline-flex items-center gap-2 rounded-full border border-(--color-well-800) px-6 py-3 font-body text-sm font-semibold text-(--color-well-900) transition-colors hover:bg-(--color-well-800) hover:text-white"
                >
                    Send by Email
                </button>
            </div>
            <p className="font-body text-xs text-(--color-ink-900)/50">
                Submit karne par yeh details WhatsApp ya aapke email app mein pre-filled ho jayengi — aapko bas bhejna hoga.
            </p>
        </form>
    );
}