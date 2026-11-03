"use client";

import ScrollReveal from "./ScrollReveal";
import Timeline, { type TimelineItem } from "@/components/ui/timeline";

const experienceItems: TimelineItem[] = [
  {
    id: "ipb-student",
    date: "2024 — Present",
    title: "Software Engineering Student",
    description:
      "IPB University · Studying software engineering with an active focus on web development, modern interface engineering, and robust digital product implementation.",
  },
  {
    id: "sudinpora-designer",
    date: "Jul 2026 · 1 mo",
    title: "Graphic Designer",
    description:
      "Sudinpora Jakarta Utara · 1st Place Winner in the 2026 North Jakarta youth creativity competition in the Graphic Design category.",
  },
  {
    id: "153-creative-designer",
    date: "Jun 2026 · 1 mo",
    title: "Graphic Designer",
    description:
      "PT 153 Creative · Remote freelance design work developing digital visual assets and creative identity systems using Adobe Photoshop & Figma.",
  },
  {
    id: "himavo-multimedia",
    date: "Dec 2024 — Dec 2025 · 1 yr 1 mo",
    title: "Multimedia Designer",
    description:
      "Himavo Micro IT Community · Designed multimedia and visual systems for campus-wide community activities, technical publications, and event campaigns.",
  },
  {
    id: "immigration-junior-designer",
    date: "Apr 2023 — Jun 2023 · 3 mos",
    title: "Junior Graphic Designer",
    description:
      "Kantor Imigrasi Kelas I TPI Tanjung Priok · Completed practical internship in the multimedia department producing official public service media.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold">
              Career & Milestones
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
            <h2 className="font-display text-4xl font-black leading-[0.9] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              EXPERIENCE
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-md leading-relaxed font-normal">
              Rekam jejak profesional, kompetisi desain, dan pengalaman pengembangan teknologi antarmuka.
            </p>
          </div>
        </ScrollReveal>

        <Timeline
          items={experienceItems}
          ariaLabel="Experience timeline"
        />
      </div>
    </section>
  );
}
