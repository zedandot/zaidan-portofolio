import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zaidan — Creative Developer & Visual Designer",
  description:
    "Portfolio of Muhamad Zaidan — a creative developer and visual designer specializing in digital experiences, branding, UI/UX, and web development.",
  keywords: [
    "creative developer",
    "visual designer",
    "portfolio",
    "UI/UX",
    "web development",
    "frontend developer",
    "Zaidan",
  ],
  authors: [{ name: "Muhamad Zaidan" }],
  openGraph: {
    title: "Zaidan — Creative Developer & Visual Designer",
    description: "I design visual experiences and build digital products.",
    type: "website",
    locale: "en_US",
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
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
