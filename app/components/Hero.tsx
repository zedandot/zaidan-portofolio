"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const marqueeItems = [
  "Visual Designer",
  "★",
  "Interface Engineer",
  "★",
  "Creative Developer",
  "★",
  "Design Systems",
  "★",
  "Motion Design",
  "★",
  "Frontend Engineering",
  "★",
];

function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-3 border-y border-[#D4D1CA]/70 bg-white/40 mt-6 select-none">
      <motion.div
        className="inline-flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`text-xs md:text-sm tracking-[0.24em] uppercase font-bold shrink-0 ${
              item === "★" ? "text-accent text-[11px]" : "text-foreground/75"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: shouldReduceMotion ? 0 : 0.25,
      },
    },
  };

  return (
    <section
      id="top"
      aria-label="Hero and Introduction"
      className="relative min-h-[92svh] md:min-h-screen flex flex-col justify-between pt-24 md:pt-28 pb-4 md:pb-6 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[560px] h-[300px] md:h-[560px] bg-accent/6 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top kicker header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-30 px-4 sm:px-6 md:px-12"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/80">
            Open for focused freelance & engineering work
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="hidden md:flex items-center gap-6 text-xs text-gray-500 font-medium">
          <span>Based in Bogor, ID (GMT+7)</span>
          <span className="text-gray-300">•</span>
          <span>Interface Engineering × Visual Systems</span>
        </motion.div>
      </motion.div>

      {/* Main Center Stage: Oversized Editorial Typography & Center Photo */}
      <div className="relative max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center items-center my-6 md:my-10 px-4 sm:px-6">
        {/* Layer 1: Background Oversized Editorial Typography */}
        <div className="w-full text-center z-10 pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-accent mb-2 md:mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: 0.15 }}
            className="flex flex-col items-center justify-center leading-[0.84] tracking-[-0.05em]"
          >
            <span className="font-display font-black text-[17vw] sm:text-[14vw] md:text-[12.5vw] lg:text-[11vw] text-foreground/90 block">
              MUHAMAD
            </span>
            <span className="font-display font-black text-[17vw] sm:text-[14vw] md:text-[12.5vw] lg:text-[11vw] text-stroke block -mt-[1.8vw]">
              ZAIDAN
            </span>
          </motion.div>
        </div>

        {/* Layer 2: Centered Cutout Photo */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 z-20 w-[230px] sm:w-[320px] md:w-[390px] lg:w-[420px] pointer-events-none drop-shadow-[0_16px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/zaidan-cutout.png"
              alt="Portrait of Muhamad Zaidan - Creative Developer and Visual Designer"
              fill
              priority
              sizes="(max-width: 640px) 230px, (max-width: 768px) 320px, (max-width: 1024px) 390px, 420px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Layer 3: Floating Editorial Specimen Badges (Desktop & Tablet) */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.4 }}
          className="hidden sm:block absolute left-2 sm:left-6 md:left-10 lg:left-20 top-[52%] -translate-y-1/2 z-30 pointer-events-auto"
        >
          <div className="surface-card flex flex-col items-start gap-1 p-3.5 sm:p-4 rounded-2xl hover:border-accent hover:shadow-md transition-all duration-300">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Direction</span>
            <span className="font-display font-extrabold text-sm sm:text-base md:text-xl tracking-tight text-foreground">Visual Designer</span>
            <span className="text-[11px] text-gray-500 hidden sm:inline-block">Branding & UI/UX Systems</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.45 }}
          className="hidden sm:block absolute right-2 sm:right-6 md:right-10 lg:right-20 top-[52%] -translate-y-1/2 z-30 pointer-events-auto"
        >
          <div className="surface-card flex flex-col items-end gap-1 p-3.5 sm:p-4 rounded-2xl hover:border-accent hover:shadow-md transition-all duration-300 text-right">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent">Engineering</span>
            <span className="font-display font-extrabold text-sm sm:text-base md:text-xl tracking-tight text-foreground">Creative Developer</span>
            <span className="text-[11px] text-gray-500 hidden sm:inline-block">Frontend & Web Applications</span>
          </div>
        </motion.div>
      </div>

      {/* Mobile Special: Dual Specimen Pills */}
      <div className="sm:hidden flex items-center justify-center gap-2 mb-4 z-30 px-4">
        <span className="px-3 py-1.5 rounded-xl bg-white/70 border border-[#D4D1CA] text-[10px] font-bold uppercase tracking-wider text-foreground">Visual Designer</span>
        <span className="text-accent text-xs">×</span>
        <span className="px-3 py-1.5 rounded-xl bg-white/70 border border-[#D4D1CA] text-[10px] font-bold uppercase tracking-wider text-foreground">Creative Developer</span>
      </div>

      {/* Bottom CTA & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, delay: 0.55 }}
        className="max-w-[1400px] mx-auto w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 z-30 pt-2 px-4 sm:px-6 md:px-12"
      >
        <div className="flex flex-col items-stretch sm:items-start gap-3.5">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
            <a href="#work" className="magnetic-link min-h-11 px-5 sm:px-7 py-3 bg-foreground text-background text-center text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase hover:bg-accent hover:text-white rounded-full shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-accent">
              Explore Work ↓
            </a>
            <a href="#contact" className="magnetic-link min-h-11 px-5 sm:px-7 py-3 border border-foreground/35 text-foreground text-center text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase hover:border-accent hover:text-accent rounded-full focus-visible:ring-2 focus-visible:ring-accent">
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-gray-500 font-medium">
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Available for select projects</span>
            <span className="hidden sm:inline text-gray-300">/</span>
            <span>UI/UX · Visual Identity · Web & App Development</span>
          </div>
        </div>

        <a href="#work" className="group hidden sm:flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-gray-500 hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1">
          <span>Scroll to explore</span>
          <div className="animate-scroll-bounce">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-accent" aria-hidden="true">
              <path d="M7 3V17M7 17L12 12M7 17L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </a>
      </motion.div>

      <MarqueeStrip />
    </section>
  );
}
