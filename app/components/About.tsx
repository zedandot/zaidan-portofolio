"use client";

import ScrollReveal from "./ScrollReveal";

const designSkills = [
  "UI/UX Design",
  "Visual Branding",
  "Design Systems",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Motion & Prototyping",
];

const developmentSkills = [
  "Next.js & React",
  "TypeScript & JavaScript",
  "Tailwind CSS",
  "WebGIS & Leaflet",
  "PHP & Laravel",
  "PostgreSQL & MySQL",
  "Git & Modern Web APIs",
];

export default function About() {
  return (
    <section id="about" className="section-shell py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400">
              About Me
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.9] text-foreground mb-16 md:mb-24">
            ABOUT
          </h2>
        </ScrollReveal>

        {/* Bio content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Bio text */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.15}>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground font-display font-600 tracking-[-0.02em] mb-8">
                I&apos;m <span className="text-accent">Muhamad Zaidan</span>, a developer-designer who likes building interfaces that feel considered, useful, and visually grounded.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
                My background sits between multimedia, visual design, and software engineering. That mix helps me move from rough visual direction to production-ready digital products without losing the details.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                I care about typography, interaction rhythm, maintainable code, and small product decisions that make a website feel less generic.
              </p>
            </ScrollReveal>

            {/* Accent line */}
            <ScrollReveal delay={0.35}>
              <div className="w-16 h-[2px] bg-accent mt-10" />
            </ScrollReveal>
          </div>

          {/* Right — Skills */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Design Skills */}
            <ScrollReveal delay={0.2}>
              <div className="surface-card rounded-3xl p-6 md:p-8">
                <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-accent mb-6">
                  Design & Direction
                </h3>
                <ul className="space-y-3">
                  {designSkills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm md:text-base text-foreground/90 font-medium pb-2 border-b border-gray-200/80 hover:text-accent transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Development Skills */}
            <ScrollReveal delay={0.3}>
              <div className="surface-card rounded-3xl p-6 md:p-8">
                <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-accent mb-6">
                  Development & Tech
                </h3>
                <ul className="space-y-3">
                  {developmentSkills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm md:text-base text-foreground/90 font-medium pb-2 border-b border-gray-200/80 hover:text-accent transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
