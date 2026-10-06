"use client";

import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 md:py-14 px-6 md:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <span className="font-display font-800 text-lg text-foreground tracking-tight">
                ZED<span className="text-accent">.</span>
              </span>
              <span className="text-xs text-gray-500">
                © {new Date().getFullYear()} Muhamad Zaidan. All rights reserved.
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs tracking-[0.15em] uppercase text-gray-500 hover:text-accent transition-colors font-medium"
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
