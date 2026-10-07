"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-[92svh] md:min-h-screen flex flex-col justify-between pt-24 md:pt-28 pb-8 md:pb-10 px-4 sm:px-6 md:px-12 overflow-hidden select-none"
    >
      {/* Lightweight accent wash behind the center image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[520px] h-[280px] md:h-[520px] bg-accent/6 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top kicker header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-30"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/70">
            Open for focused freelance work
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="hidden md:flex items-center gap-6 text-xs text-gray-500 font-medium">
          <span>Based in Bogor, ID</span>
          <span>•</span>
          <span>Interface Engineering × Visual Systems</span>
        </motion.div>
      </motion.div>

      {/* Main Center Stage: Huge Typography & Half-Body Center Photo */}
      <div className="relative max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center items-center my-6 md:my-10">
        {/* Layer 1: Background Oversized Editorial Typography */}
        <div className="w-full text-center z-10 pointer-events-none">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-accent mb-2 md:mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center justify-center leading-[0.82] tracking-[-0.05em]"
          >
            <span className="font-display font-900 text-[16vw] md:text-[13vw] lg:text-[11.5vw] text-foreground/90 block">
              MUHAMAD
            </span>
            <span className="font-display font-900 text-[16vw] md:text-[13vw] lg:text-[11.5vw] text-stroke block -mt-[2vw]">
              ZAIDAN
            </span>
          </motion.div>
        </div>

        {/* Layer 2: Centered Cutout Photo (Exact Reference Placement) */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 z-20 w-[235px] sm:w-[330px] md:w-[400px] lg:w-[430px] pointer-events-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.12)]"
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/zaidan-cutout.png"
              alt="Muhamad Zaidan - Creative Developer & Visual Designer"
              fill
              priority
              sizes="(max-width: 640px) 235px, (max-width: 768px) 330px, (max-width: 1024px) 400px, 430px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Layer 3: Floating Foreground Editorial Badges (Inspired by Reference) */}
        {/* Left Badge: Creative */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:block absolute left-2 sm:left-6 md:left-12 lg:left-24 top-[50%] -translate-y-1/2 z-30 pointer-events-auto"
        >
          <div className="surface-card flex flex-col items-start gap-1 p-3 sm:p-4 rounded-2xl hover:border-accent transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent">
              Direction
            </span>
            <span className="font-display font-800 text-sm sm:text-base md:text-xl tracking-tight text-foreground">
              Visual Designer
            </span>
            <span className="text-[11px] text-gray-500 hidden sm:inline-block">
              Branding & UI/UX
            </span>
          </div>
        </motion.div>

        {/* Right Badge: Developer */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden sm:block absolute right-2 sm:right-6 md:right-12 lg:right-24 top-[50%] -translate-y-1/2 z-30 pointer-events-auto"
        >
          <div className="surface-card flex flex-col items-end gap-1 p-3 sm:p-4 rounded-2xl hover:border-accent transition-colors text-right">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-accent">
              Engineering
            </span>
            <span className="font-display font-800 text-sm sm:text-base md:text-xl tracking-tight text-foreground">
              Creative Developer
            </span>
            <span className="text-[11px] text-gray-500 hidden sm:inline-block">
              Frontend Developer & Fullstack
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-[1400px] mx-auto w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 z-30 pt-4"
      >
        {/* CTAs */}
        <div className="flex flex-col items-stretch sm:items-start gap-4">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
            <a
              href="#work"
              className="magnetic-link min-h-11 px-4 sm:px-6 py-3 bg-foreground text-background text-center text-[11px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase hover:bg-accent hover:text-white rounded-full shadow-sm hover:shadow-md"
            >
              Explore Work ↓
            </a>
            <a
              href="#contact"
              className="magnetic-link min-h-11 px-4 sm:px-6 py-3 border border-foreground/30 text-foreground text-center text-[11px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase hover:border-accent hover:text-accent rounded-full"
            >
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.16em] uppercase text-gray-500">
            <span><span className="text-accent">●</span> Available for select projects</span>
            <span className="hidden sm:inline text-gray-300">/</span>
            <span>UI/UX · Branding · Web & App Development</span>
          </div>
        </div>

        {/* Scroll down prompt */}
        <a
          href="#work"
          className="group hidden sm:flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-gray-500 hover:text-accent transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="animate-scroll-bounce">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              className="text-accent"
            >
              <path
                d="M7 3V17M7 17L12 12M7 17L2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
