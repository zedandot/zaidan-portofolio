"use client";

import ScrollReveal from "./ScrollReveal";
import Timeline, { type TimelineItem } from "@/components/ui/timeline";

const experienceItems: TimelineItem[] = [
  {
    id: "ipb-student",
    date: "2024 — Present",
    title: "Software Engineering Student",
    description:
      "IPB University · Studying software engineering with a focus on web development, interface design, and digital product implementation.",
  },
  {
    id: "sudinpora-designer",
    date: "Jul 2026 · 1 mo",
    title: "Graphic Designer",
    description:
      "Sudinpora Jakarta Utara · Won 1st place in the 2026 North Jakarta youth creativity competition in the graphic design category.",
  },
  {
    id: "153-creative-designer",
    date: "Jun 2026 · 1 mo",
    title: "Graphic Designer",
    description:
      "PT 153 Creative · Remote freelance design work creating visual assets and creative materials with Canva and Adobe Photoshop.",
  },
  {
    id: "himavo-multimedia",
    date: "Dec 2024 — Dec 2025 · 1 yr 1 mo",
    title: "Multimedia Designer",
    description:
      "Himavo Micro IT Community · Created multimedia and visual design assets for community activities, publications, and event communications.",
  },
  {
    id: "immigration-junior-designer",
    date: "Apr 2023 — Jun 2023 · 3 mos",
    title: "Junior Graphic Designer",
    description:
      "Kantor Imigrasi Kelas I TPI Tanjung Priok · Completed field work practice in the multimedia department.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
              Background
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mb-8 font-display text-4xl font-800 leading-[0.9] tracking-[-0.04em] text-foreground sm:text-5xl md:mb-10 md:text-6xl lg:text-7xl">
            EXPERIENCE
          </h2>
        </ScrollReveal>

        <Timeline
          items={experienceItems}
          ariaLabel="Experience timeline"
        />
      </div>
    </section>
  );
}
