"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const designSkills = [
  "UI/UX Systems & Prototyping",
  "Visual Identity & Branding",
  "Design System",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Micro-interactions & Motion Rhythm",
];

const developmentSkills = [
  "Next.js & React",
  "TypeScript & Modern JavaScript",
  "Tailwind CSS v4 & PostCSS",
  "Framer Motion",
  "Interactive Web & UI Components",
  "PHP & Laravel Ecosystem",
  "REST APIs, Git & Modern Web Standards",
];

const keyHighlights = [
  {
    kicker: "Education",
    title: "Software Engineering",
    desc: "IPB University Student",
  },
  {
    kicker: "Recognition",
    title: "Juara 1 Desain Grafis",
    desc: "Sudinpora Jakarta Utara 2026",
  },
  {
    kicker: "Core Focus",
    title: "Design × Engineering",
    desc: "Bespoke digital products & interfaces",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const reduced = useReducedMotion();

  // 3D Parallax motion transforms for the skills cards
  const card1RotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -6]);
  const card1RotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 5]);
  const card1Y = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -20]);

  const card2RotateX = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -8]);
  const card2RotateY = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);
  const card2Y = useTransform(scrollYProgress, [0, 0.5, 1], [44, 0, -32]);

  return (
    <section id="about" className="section-shell py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-bold">
              Background & Philosophy
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.9] text-foreground mb-12 md:mb-20">
            ABOUT
          </h2>
        </ScrollReveal>

        {/* Bio content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Bio text & Credibility Specimen */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <ScrollReveal delay={0.15}>
                <p className="text-xl md:text-2xl lg:text-3xl leading-snug text-foreground font-display font-bold tracking-[-0.02em] mb-6">
                  I&apos;m <span className="text-accent">Muhamad Zaidan</span>, an interface engineer and visual designer building digital products that feel grounded, tactile, and performant.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-5">
                  My practice sits at the convergence of graphic design, user experience design, and software engineering. That blend enables me to carry an aesthetic vision from initial Figma artboards straight into robust, production-ready code without losing typographic subtlety or interaction rhythm.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  I prioritize accessibility, intentional white space, responsive fluidity, and clean component architecture over ephemeral trends or generic AI templates.
                </p>
              </ScrollReveal>
            </div>

            {/* Credibility Specimen Grid */}
            <ScrollReveal delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-10 pt-8 border-t border-[#D4D1CA]">
                {keyHighlights.map((item) => (
                  <div key={item.kicker} className="surface-card p-4 rounded-2xl border border-[#D4D1CA]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent block mb-1">
                      {item.kicker}
                    </span>
                    <h3 className="font-display font-bold text-sm text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Skills */}
          <div
            ref={containerRef}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 [perspective:1200px]"
          >
            {/* Design Skills */}
            <ScrollReveal delay={0.2} className="h-full">
              <motion.div
                style={
                  reduced
                    ? {}
                    : {
                        rotateX: card1RotateX,
                        rotateY: card1RotateY,
                        y: card1Y,
                        transformStyle: "preserve-3d",
                      }
                }
                className="surface-card rounded-3xl p-6 md:p-7 border border-[#D4D1CA] h-full flex flex-col shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] will-change-transform"
              >
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D4D1CA]/80">
                  <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-accent">
                    Visual & UI/UX
                  </h3>
                  <span className="text-[10px] font-mono text-gray-400">01</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {designSkills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs md:text-sm text-foreground/90 font-medium pb-2 border-b border-[#D4D1CA]/50 hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Development Skills */}
            <ScrollReveal delay={0.28} className="h-full">
              <motion.div
                style={
                  reduced
                    ? {}
                    : {
                        rotateX: card2RotateX,
                        rotateY: card2RotateY,
                        y: card2Y,
                        transformStyle: "preserve-3d",
                      }
                }
                className="surface-card rounded-3xl p-6 md:p-7 border border-[#D4D1CA] h-full flex flex-col shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] will-change-transform"
              >
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D4D1CA]/80">
                  <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-accent">
                    Engineering & Stack
                  </h3>
                  <span className="text-[10px] font-mono text-gray-400">02</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {developmentSkills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs md:text-sm text-foreground/90 font-medium pb-2 border-b border-[#D4D1CA]/50 hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
