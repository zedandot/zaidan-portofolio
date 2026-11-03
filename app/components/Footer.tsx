"use client";

import ScrollReveal from "./ScrollReveal";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="border-t border-[#D4D1CA] py-10 md:py-14 px-6 md:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <span className="font-display font-black text-xl text-foreground tracking-tight">
                ZED<span className="text-accent">.</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">
                © {new Date().getFullYear()} Muhamad Zaidan. All rights reserved.
              </span>
            </div>

            {/* Middle: Location & Time */}
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Bogor, ID (GMT+7)</span>
              <span className="text-gray-300">•</span>
              <span>Crafted with Next.js & Tailwind</span>
            </div>

            {/* Right: Back to Top */}
            <div className="flex items-center gap-6">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  lenis?.scrollTo(0);
                }}
                className="text-xs tracking-[0.16em] uppercase text-gray-600 hover:text-accent transition-colors font-bold focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1 px-2"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
