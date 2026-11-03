"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    label: "Email",
    value: "muhamadzaidann@gmail.com",
    href: "mailto:muhamadzaidann@gmail.com",
    desc: "Direct communication & project inquiries",
    copyable: true,
  },
  {
    label: "Instagram",
    value: "@mmdzdn_",
    href: "https://instagram.com/mmdzdn_",
    desc: "Visual diary, creative experiments & life",
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "Muhamad Zaidan",
    href: "https://www.linkedin.com/in/muhamad-zaidan30/",
    desc: "Professional background & career history",
    copyable: false,
  },
  {
    label: "GitHub",
    value: "zedandot",
    href: "https://github.com/zedandot",
    desc: "Open source code, repositories & builds",
    copyable: false,
  },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="contact"
      className="section-shell py-24 md:py-36 px-6 md:px-12"
      aria-label="Contact and Social Links"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-bold">
              Initiate Collaboration
            </span>
          </div>
        </ScrollReveal>

        {/* Big headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-[12vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.2vw] tracking-[-0.04em] leading-[0.88] text-foreground mb-8 md:mb-10">
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            <span className="text-accent">IMPACTFUL.</span>
          </h2>
        </ScrollReveal>

        {/* Supporting message */}
        <ScrollReveal delay={0.18}>
          <p className="text-base md:text-xl text-gray-700 max-w-xl leading-relaxed mb-14 md:mb-18 font-normal">
            Tersedia untuk proyek freelance, perancangan antarmuka &amp; design system, serta rekayasa frontend di mana desain dan kode perlu dieksekusi dengan standar tinggi.
          </p>
        </ScrollReveal>

        {/* Contact list / cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {contactLinks.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <motion.a
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="surface-card group relative block p-6 md:p-7 rounded-3xl border border-[#D4D1CA] hover:border-accent hover:shadow-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] tracking-[0.18em] uppercase text-gray-500 font-bold">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, item.value)}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white border border-[#D4D1CA] text-gray-600 hover:text-accent hover:border-accent transition-colors"
                        title="Copy email to clipboard"
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? "Tersalin!" : "Salin"}
                      </button>
                    )}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 11L11 3M11 3H4M11 3V10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl text-foreground group-hover:text-accent transition-colors truncate">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-600 mt-1.5 leading-normal">
                  {item.desc}
                </p>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
