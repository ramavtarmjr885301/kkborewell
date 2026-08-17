import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "K.K. Borewell and Pumps | Submersible Pump Installation & Repair, Greater Noida",
  description:
    "K.K. Borewell and Pumps — submersible pump installation & boring, pump automation, industrial & mono block pumps, rainwater harvesting, earthing, deburring and pump repair in Rampur Jagir, Beta-1, Greater Noida. Call 9355101908.",
  keywords: [
    "borewell Greater Noida",
    "submersible pump installation",
    "pump repair Noida",
    "rain water harvesting Greater Noida",
    "pump automation",
    "K.K. Borewell and Pumps",
  ],
  openGraph: {
    title: "K.K. Borewell and Pumps",
    description:
      "Submersible pump installation, boring, automation, repair and rainwater harvesting services in Greater Noida.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
