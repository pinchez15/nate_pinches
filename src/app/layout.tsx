import type { Metadata } from "next";
import { Fraunces, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LogoBackdrop } from "@/components/LogoBackdrop";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nate Pinches",
  description:
    "Strategy, analytics, and software for founder-led service businesses. Operator behind CappaWork.",
  metadataBase: new URL("https://natepinches.com"),
  openGraph: {
    title: "Nate Pinches",
    description:
      "Strategy, analytics, and software for founder-led service businesses.",
    url: "https://natepinches.com",
    siteName: "Nate Pinches",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {/* Without JS the IntersectionObserver never fires, so the scroll-reveal
            would leave the entire Work section invisible. Reveal it for no-JS. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <LogoBackdrop />
        {children}
      </body>
    </html>
  );
}
