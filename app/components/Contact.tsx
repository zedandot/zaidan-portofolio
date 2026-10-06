"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    label: "Email",
    value: "muhamadzaidann@gmail.com",
    href: "mailto:muhamadzaidann@gmail.com",
    desc: "Get in touch directly",
  },
  {
    label: "Instagram",
    value: "@mmdzdn_",
    href: "https://instagram.com/mmdzdn_",
    desc: "Visual diary & updates",
  },
  {
    label: "LinkedIn",
    value: "Muhamad Zaidan",
    href: "https://www.linkedin.com/in/muhamad-zaidan30/",
    desc: "Professional network",
  },
  {
    label: "GitHub",
    value: "zedandot",
    href: "https://github.com/zedandot",
    desc: "Code repositories",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell py-24 md:py-40 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400">
              Get In Touch
            </span>
          </div>
        </ScrollReveal>

        {/* Big headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-900 text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.5vw] tracking-[-0.04em] leading-[0.88] text-foreground mb-8 md:mb-12">
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            <span className="text-accent">IMPACTFUL.</span>
          </h2>
        </ScrollReveal>

        {/* Supporting message */}
        <ScrollReveal delay={0.2}>
          <p className="text-base md:text-xl text-gray-600 max-w-xl leading-relaxed mb-16 md:mb-20">
            Available for freelance websites, interface polish, WebGIS builds, and collaborations where design and code need to meet properly.
          </p>
        </ScrollReveal>

        {/* Contact list / cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactLinks.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <motion.a
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="surface-card group block p-6 md:p-8 rounded-3xl hover:border-accent transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] tracking-[0.18em] uppercase text-gray-400 font-semibold">
                    {item.label}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-gray-400 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  >
                    <path
                      d="M3 11L11 3M11 3H4M11 3V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-lg md:text-xl text-foreground group-hover:text-accent transition-colors truncate">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
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
