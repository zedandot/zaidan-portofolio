import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhamad Zaidan — Creative Developer & Visual Designer",
  description:
    "Portfolio of Muhamad Zaidan, creative developer and visual designer based in Bogor, ID. Specializing in interface engineering, visual identity, and modern digital products.",
  keywords: [
    "Muhamad Zaidan",
    "creative developer",
    "visual designer",
    "portfolio",
    "UI/UX designer",
    "frontend engineer",
    "Next.js developer Indonesia",
  ],
  authors: [{ name: "Muhamad Zaidan", url: "https://github.com/zedandot" }],
  creator: "Muhamad Zaidan",
  openGraph: {
    title: "Muhamad Zaidan — Creative Developer & Visual Designer",
    description:
      "Selected works, certificates, and interface engineering projects by Muhamad Zaidan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen text-foreground bg-background selection:bg-accent selection:text-white">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:text-xs focus:font-bold focus:uppercase focus:tracking-wider focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
