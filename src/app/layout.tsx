import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kishore-portfolio.local"),
  title: {
    default: "Satya Kishore Gollapalli | Software Developer & Cybersecurity",
    template: "%s | Satya Kishore Gollapalli",
  },
  description:
    "Official portfolio of Satya Kishore Gollapalli (Kishore) — Information Technology student at Vishnu Institute of Technology, building scalable software, defensive cybersecurity systems, and AI automation.",
  keywords: [
    "Satya Kishore Gollapalli",
    "Kishore",
    "Cybersecurity Enthusiast",
    "Software Developer",
    "AI Automation",
    "VOICERA AI",
    "Vedic Resonance",
    "voicera.in",
    "Vishnu Institute of Technology",
  ],
  authors: [{ name: "Satya Kishore Gollapalli" }],
  creator: "Satya Kishore Gollapalli",
  openGraph: {
    title: "Satya Kishore Gollapalli | Software Developer & Cybersecurity",
    description:
      "Official portfolio of Satya Kishore Gollapalli (Kishore) — Information Technology student at Vishnu Institute of Technology.",
    type: "website",
    locale: "en_US",
    siteName: "Satya Kishore Gollapalli Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satya Kishore Gollapalli | Software Developer & Cybersecurity",
    description:
      "Building at the intersection of Cybersecurity, Software & AI. Student at Vishnu Institute of Technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[#050507] text-[#F2F3F7] font-sans antialiased selection:bg-[#3D5AFE] selection:text-white">
        <LanguageProvider>
          <Preloader />
          <CustomCursor />
          <GrainOverlay />
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
