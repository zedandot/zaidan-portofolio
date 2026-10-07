"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ProjectModal from "./ProjectModal";
import CoverflowCarousel from "./CoverflowCarousel";
import {
  projectsData,
  certificatesData,
  techStackData,
  ProjectItem,
  CertificateItem,
} from "../data/showcaseData";

type TabType = "projects" | "certificates" | "tech";

// High-fidelity Tech Logos matching user's reference image
function TechLogo({ type }: { type: string }) {
  switch (type) {
    case "html":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#E44D26" d="M19.1 113.8L8.3 0h111.4l-10.8 113.8L64 128" />
          <path fill="#F16529" d="M64 117.8l37.8-10.5 9-95.2H64" />
          <path fill="#EBEBEB" d="M64 52.6H46.8l-1.2-13.4H64V26.9H32.2l3.6 40H64zm0 35.8l-.2.1-15.8-4.3-1-11.4H33.6l2 22.8L64 102.8" />
          <path fill="#FFF" d="M64 52.6h17.2l-1.6 18.2L64 75.2v13.2l28.4-7.9 3.8-42.6H64zm0-25.7h31.8l.3-13.4H64" />
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#1572B6" d="M19.1 113.8L8.3 0h111.4l-10.8 113.8L64 128" />
          <path fill="#33A9DC" d="M64 117.8l37.8-10.5 9-95.2H64" />
          <path fill="#FFF" d="M64 26.9h31.8l-.3 13.4H64zm0 25.7h29.8l-2.8 31.3L64 91.5v13.2l28.4-7.9 3.8-42.6H64" />
          <path fill="#EBEBEB" d="M64 26.9H32.2l3.6 40H64zm0 25.7H46.8l-1.2-13.4H64zm0 35.8l-.2.1-15.8-4.3-1-11.4H33.6l2 22.8L64 102.8" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
          <rect width="128" height="128" fill="#F7DF1E" />
          <path d="M67.3 100.8c2.4 3.9 5.8 6.4 11.2 6.4 4.7 0 7.7-2.3 7.7-5.5 0-3.8-3.1-5.1-8.2-7.4l-2.8-1.2c-8.2-3.5-13.6-7.9-13.6-17.3 0-8.6 6.6-15.2 16.9-15.2 7.3 0 12.6 2.6 16.3 9.1l-6.8 4.4c-1.9-3.2-4.1-4.5-8.6-4.5-3.8 0-6.1 2.3-6.1 5.2 0 3.3 2.5 4.6 7.4 6.8l2.8 1.2c9.7 4.2 14.6 8.3 14.6 17.8 0 10.2-8 16-18.9 16-10.6 0-16.9-5.1-20.3-11.7l8.4-4.5zM27 101.4c1.8 3.1 4 5.3 8.3 5.3 4.2 0 6.9-1.7 6.9-8.3V61.5h10.4v37c0 11.8-6.9 17.1-16.7 17.1-7.8 0-12.8-4.1-15.1-9.5l6.2-4.7z" fill="#000" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M64 36c-18.4 0-27.6 9.2-27.6 27.6 0 4.6 1.1 9.2 3.4 13.8C42.1 82 46.7 82 50.2 72.8c2.3-6.1 4.6-9.2 6.9-9.2 4.6 0 6.9 6.1 11.5 13.8 4.6 7.7 11.5 13.8 23 13.8 18.4 0 27.6-9.2 27.6-27.6 0-4.6-1.1-9.2-3.4-13.8-2.3-4.6-6.9-4.6-10.3 4.6-2.3 6.1-4.6 9.2-6.9 9.2-4.6 0-6.9-6.1-11.5-13.8C82.5 42.1 75.5 36 64 36zm-36.8 27.6c-18.4 0-27.6 9.2-27.6 27.6 0 4.6 1.1 9.2 3.4 13.8C5.3 109.6 9.9 109.6 13.4 100.4c2.3-6.1 4.6-9.2 6.9-9.2 4.6 0 6.9 6.1 11.5 13.8 4.6 7.7 11.5 13.8 23 13.8 18.4 0 27.6-9.2 27.6-27.6 0-4.6-1.1-9.2-3.4-13.8-2.3-4.6-6.9-4.6-10.3 4.6-2.3 6.1-4.6 9.2-6.9 9.2-4.6 0-6.9-6.1-11.5-13.8-4.6-7.7-11.6-13.8-23.1-13.8z" fill="#06B6D4" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <circle cx="64" cy="64" r="11" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="6" fill="none">
            <ellipse cx="64" cy="64" rx="54" ry="21" />
            <ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(60 64 64)" />
            <ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(120 64 64)" />
          </g>
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M120.6 18.5L66.7 118a3.5 3.5 0 01-6.1.1L7.4 18.5a3.5 3.5 0 013-5.2h107.1a3.5 3.5 0 013.1 5.2z" fill="url(#vite-grad)" />
          <path d="M83.6 15.3L64 53.6l-9.8-19.2L35.8 15.3a2 2 0 00-1.8 2.8l28.2 56.6a2 2 0 003.6 0l29.6-56.6a2 2 0 00-1.8-2.8z" fill="#BD34FE" />
          <path d="M68.5 37.8L53.2 67.5h14.2L55.5 98.4 81 57.6H66.8l10.4-19.8h-8.7z" fill="#FFD62E" />
          <defs>
            <linearGradient id="vite-grad" x1="12" y1="13" x2="80" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "nodejs":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M64 8l52 30v60L64 128 12 98V38L64 8z" fill="#339933" />
          <path d="M64 42c-12 0-18 6-18 16 0 16 22 13 22 22 0 4-4 6-9 6-8 0-11-4-12-9l-8 4c2 8 8 13 20 13 12 0 18-6 18-16 0-16-22-13-22-22 0-3 3-5 8-5 7 0 10 3 11 8l8-4c-2-8-8-13-18-13z" fill="#FFF" />
        </svg>
      );
    case "bootstrap":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
          <rect width="128" height="128" rx="28" fill="#7952B3" />
          <path d="M47 36h21.4c12.2 0 19.6 6 19.6 15.6 0 7.3-4.5 12.3-11.4 14v.4c8.4 1.4 13.9 7 13.9 15.6 0 11.2-8.6 17.6-22.3 17.6H47V36zm14.2 21.2h6.4c5.2 0 8.4-2.7 8.4-6.8 0-4.3-3.2-6.8-8.4-6.8h-6.4v13.6zm0 29.6h7.6c5.8 0 9.4-2.8 9.4-7.4 0-4.8-3.6-7.5-9.4-7.5h-7.6v14.9z" fill="#FFF" />
        </svg>
      );
    case "firebase":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M22.8 96.6L44.4 18.5a3.5 3.5 0 016.7-.4l15 28.2-43.3 50.3z" fill="#FFC24A" />
          <path d="M22.8 96.6L36.3 35.8a3.5 3.5 0 016.5-1.1l4.3 8.3L22.8 96.6z" fill="#FFA000" />
          <path d="M72.2 60.1l14.8-28a3.5 3.5 0 016.4.5l22.4 64-43.6-36.5z" fill="#F57C00" />
          <path d="M22.8 96.6l41.2 23.3a3.5 3.5 0 003.5 0l48.3-23.3-43.6-36.5-49.4 36.5z" fill="#FFCA28" />
        </svg>
      );
    case "mui":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M64 28l28 16v32l-28-16V28z" fill="#00B0FF" />
          <path d="M64 28L36 44v32l28-16V28z" fill="#0081CB" />
          <path d="M92 44l28 16v32l-28-16V44z" fill="#0081CB" />
          <path d="M64 60l28 16v32l-28-16V60z" fill="#00B0FF" />
          <path d="M36 76l28 16v32L36 92V76z" fill="#00B0FF" />
          <path d="M8 60l28 16v32L8 92V60z" fill="#0081CB" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12 rounded-xl bg-black flex items-center justify-center p-2.5 shadow-sm">
          <path d="M64 24L112 104H16L64 24z" fill="#FFF" />
        </svg>
      );
    case "sweetalert":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <circle cx="64" cy="64" r="54" fill="#F8BB86" />
          <circle cx="64" cy="64" r="48" fill="#FFF" />
          <circle cx="64" cy="64" r="44" fill="#FEE9D7" />
          <path d="M64 36v34" stroke="#F8BB86" strokeWidth="10" strokeLinecap="round" />
          <circle cx="64" cy="88" r="6" fill="#F8BB86" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <circle cx="64" cy="64" r="60" fill="#000" />
          <path d="M88.5 94.5L50.4 46H42v36h7.5V56.2l34.2 43.1c1.7-1.5 3.3-3.1 4.8-4.8z" fill="#FFF" />
          <path d="M78 46h7.5v36H78z" fill="#FFF" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
          <rect width="128" height="128" fill="#3178C6" />
          <path d="M41 85.5c2.4 2.8 6.5 4.7 11.2 4.7 6.8 0 10.9-3.6 10.9-8.9 0-5.7-4.2-7.9-11.4-11-9.6-4.1-14.7-8.9-14.7-18.4 0-10.4 8.4-17.9 21.6-17.9 7.6 0 13.5 2.5 17.5 6.7l-6.2 6.8c-2.8-2.8-6.5-4.4-11.3-4.4-6.3 0-9.8 3.5-9.8 7.8 0 5 3.9 7.2 11.1 10.3 10.4 4.5 15.1 9.4 15.1 19.1 0 11.3-8.8 18.7-22.9 18.7-9.4 0-16.7-3.5-20.7-8.5l6.7-6zM88 44.5h-16v-9.5h43v9.5h-16V98H88v-53.5z" fill="#FFF" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M42 128c12.1 0 22-9.9 22-22V84H42c-12.1 0-22 9.9-22 22s9.9 22 22 22z" fill="#0ACF83" />
          <path d="M20 62c0-12.1 9.9-22 22-22h22v44H42c-12.1 0-22-9.9-22-22z" fill="#A259FF" />
          <path d="M20 18c0-12.1 9.9-22 22-22h22v44H42c-12.1 0-22-9.9-22-22z" fill="#F24E1E" />
          <path d="M64 -4h22c12.1 0 22 9.9 22 22s-9.9 22-22 22H64V-4z" fill="#FF7262" />
          <circle cx="86" cy="62" r="22" fill="#1ABCFE" />
        </svg>
      );
    case "photoshop":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
          <rect width="128" height="128" fill="#001E36" />
          <path d="M34 38h19c11.5 0 18 6.5 18 16.5s-6.5 16.5-18 16.5H45v20H34V38zm11 23.5h7c5.5 0 8.5-2.8 8.5-7.5s-3-7.5-8.5-7.5h-7v15zM76.5 73.5c3.5 2.5 8 4 13 4 5 0 7.5-2 7.5-5 0-3.5-3.5-4.5-9.5-6.5-9-3-13-6.5-13-14 0-8 6.5-13.5 16.5-13.5 6 0 10.5 1.5 14 4l-4 8c-3-2-6.5-3-10-3-4 0-6.5 1.8-6.5 4.5 0 3 3 4.2 9 6.2 9 3 13.5 6.5 13.5 14.5 0 8.5-6.5 14-17 14-6.5 0-12.5-2-16.5-5l3-8.2z" fill="#31A8FF" />
        </svg>
      );
    case "illustrator":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
          <rect width="128" height="128" fill="#330000" />
          <path d="M52 38l18 53H58l-3.5-11H39.5L36 91H26l18-53h8zm.5 33L47 53.5 41.5 71h11zM78 40h11v11H78V40zm0 17h11v34H78V57z" fill="#FF9A00" />
        </svg>
      );
    case "laravel":
      return (
        <svg viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M112 36.5L96 27.2l-22.3 13 16 9.3 22.3-13zM67.7 44.5L51.8 35.3 29.5 48.2l16 9.2 22.2-12.9zM88.7 56.7L72.8 47.5 48.5 61.5l16 9.3 24.2-14.1zM42.8 69.8L27 60.5 16 66.9v18.5l16 9.3 10.8-6.3V69.8zM63.8 82L48 72.8 37.2 79v18.6l16 9.3 10.6-6.2V82z" fill="#FF2D20" />
          <path d="M109 43.8L93.2 53v24.8l15.8-9.2V43.8zM88.7 63.8L72.8 73v24.8l15.9-9.2V63.8z" fill="#FF2D20" />
        </svg>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center font-display font-800 text-foreground">
          {type.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [selectedModalItem, setSelectedModalItem] = useState<ProjectItem | CertificateItem | null>(null);
  const [modalType, setModalType] = useState<"project" | "certificate">("project");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(0);

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedModalItem(project);
    setModalType("project");
  };

  const openCertificateDetails = (cert: CertificateItem) => {
    setSelectedModalItem(cert);
    setModalType("certificate");
  };

  const closeModal = () => {
    setSelectedModalItem(null);
  };

  // Animation variants for the Tech Stack popping in
  const techContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05,
      },
    },
  };

  const techCardVariants = {
    hidden: { opacity: 0, scale: 0.65, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 380,
        damping: 22,
      },
    },
  };

  const cardGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  return (
    <section id="work" className="section-shell py-16 md:py-32 px-4 sm:px-6 md:px-12 text-foreground relative overflow-hidden">
      {/* Subtle warm accent radial background glow matching cream theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-accent/4 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-6 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400">
              Portfolio
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
            <h2 className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.05em] leading-[0.88] text-foreground">
              SELECTED
              <br />
              WORK
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
              Kompilasi proyek terkurasi, sertifikasi profesional, dan daftar keahlian teknologi dalam perancangan antarmuka & rekayasa perangkat lunak.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Part Segmented Tab Bar (Styled for Cream & Orange Theme) */}
        <ScrollReveal delay={0.15}>
          <div className="mb-9 md:flex md:justify-center md:mb-16">
            <div className="grid w-full grid-cols-3 items-center gap-1 rounded-2xl bg-[#E8E5DE] border border-[#D4D1CA] p-1 shadow-sm md:inline-grid md:w-auto md:p-1.5">
              {/* Tab 1: Projects */}
              <button
                onClick={() => setActiveTab("projects")}
                className={`relative flex min-h-11 items-center justify-center gap-1 px-1.5 py-2.5 rounded-xl text-[9px] sm:text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 whitespace-nowrap sm:gap-2 sm:px-8 sm:py-3 sm:tracking-wider ${activeTab === "projects"
                    ? "text-background shadow-md"
                    : "text-gray-500 hover:text-foreground hover:bg-black/5"
                  }`}
              >
                {activeTab === "projects" && (
                  <motion.div
                    layoutId="activeThemeTab"
                    className="absolute inset-0 bg-foreground rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={activeTab === "projects" ? "text-accent" : "text-gray-400"}
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>Projects</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold sm:text-[10px] sm:px-2 ${activeTab === "projects" ? "bg-accent text-white" : "bg-gray-300/80 text-gray-600"
                    }`}>
                    {projectsData.length}
                  </span>
                </span>
              </button>

              {/* Tab 2: Certificates */}
              <button
                onClick={() => setActiveTab("certificates")}
                className={`relative flex min-h-11 items-center justify-center gap-1 px-1.5 py-2.5 rounded-xl text-[9px] sm:text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 whitespace-nowrap sm:gap-2 sm:px-8 sm:py-3 sm:tracking-wider ${activeTab === "certificates"
                    ? "text-background shadow-md"
                    : "text-gray-500 hover:text-foreground hover:bg-black/5"
                  }`}
              >
                {activeTab === "certificates" && (
                  <motion.div
                    layoutId="activeThemeTab"
                    className="absolute inset-0 bg-foreground rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={activeTab === "certificates" ? "text-accent" : "text-gray-400"}
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  <span className="hidden min-[380px]:inline sm:inline">Certificates</span>
                  <span className="inline min-[380px]:hidden sm:hidden">Certs</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold sm:text-[10px] sm:px-2 ${activeTab === "certificates" ? "bg-accent text-white" : "bg-gray-300/80 text-gray-600"
                    }`}>
                    {certificatesData.length}
                  </span>
                </span>
              </button>

              {/* Tab 3: Tech Stack */}
              <button
                onClick={() => setActiveTab("tech")}
                className={`relative flex min-h-11 items-center justify-center gap-1 px-1.5 py-2.5 rounded-xl text-[9px] sm:text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 whitespace-nowrap sm:gap-2 sm:px-8 sm:py-3 sm:tracking-wider ${activeTab === "tech"
                    ? "text-background shadow-md"
                    : "text-gray-500 hover:text-foreground hover:bg-black/5"
                  }`}
              >
                {activeTab === "tech" && (
                  <motion.div
                    layoutId="activeThemeTab"
                    className="absolute inset-0 bg-foreground rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={activeTab === "tech" ? "text-accent" : "text-gray-400"}
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  <span className="hidden min-[380px]:inline sm:inline">Tech</span>
                  <span className="inline min-[380px]:hidden sm:hidden">Tech</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold sm:text-[10px] sm:px-2 ${activeTab === "tech" ? "bg-accent text-white" : "bg-gray-300/80 text-gray-600"
                    }`}>
                    {techStackData.length}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {/* 1. PROJECTS TAB */}
          {activeTab === "projects" && (
            <motion.div
              key="projects-coverflow"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -15 }}
              variants={cardGridVariants}
              className="mx-auto max-w-5xl"
            >
              <CoverflowCarousel
                slides={projectsData.map((project) => ({
                  src: project.image,
                  alt: project.title,
                  title: project.title,
                  subtitle: `${project.category} · ${project.year}`,
                }))}
                onSlideChange={setSelectedProjectIndex}
                cardWidth="clamp(180px, 54vw, 340px)"
                label="Portfolio project carousel"
              />

              {projectsData[selectedProjectIndex] && (
                <motion.article
                  key={projectsData[selectedProjectIndex].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="surface-card mx-auto mt-7 max-w-2xl rounded-2xl p-5 text-center sm:mt-9 sm:rounded-3xl sm:p-7"
                >
                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {projectsData[selectedProjectIndex].description}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {projectsData[selectedProjectIndex].tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-200 bg-background px-2.5 py-1 text-[10px] font-medium tracking-wide text-gray-600 sm:text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    {projectsData[selectedProjectIndex].liveUrl && (
                      <a
                        href={projectsData[selectedProjectIndex].liveUrl}
                        target={projectsData[selectedProjectIndex].liveUrl?.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#D4D1CA] bg-background px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        Lihat project <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    <button
                      onClick={() => openProjectDetails(projectsData[selectedProjectIndex])}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <span>Lihat detail project</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </motion.article>
              )}
            </motion.div>
          )}

          {/* 2. CERTIFICATES TAB */}
          {activeTab === "certificates" && (
            <motion.div
              key="certificates-coverflow"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -15 }}
              variants={cardGridVariants}
              className="mx-auto max-w-5xl"
            >
              <CoverflowCarousel
                slides={certificatesData.map((cert) => ({
                  src: cert.image,
                  alt: cert.title,
                  title: cert.title,
                  subtitle: `${cert.issuer} · ${cert.date}`,
                }))}
                onSlideChange={setSelectedCertificateIndex}
                cardWidth="clamp(220px, 68vw, 460px)"
                cardHeightRatio={0.75}
                imageFit="contain"
                label="Certificates carousel"
              />

              {certificatesData[selectedCertificateIndex] && (
                <motion.article
                  key={certificatesData[selectedCertificateIndex].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="surface-card mx-auto mt-7 max-w-2xl rounded-2xl p-5 text-center sm:mt-9 sm:rounded-3xl sm:p-7"
                >
                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {certificatesData[selectedCertificateIndex].description}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {certificatesData[selectedCertificateIndex].skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-gray-200 bg-background px-2.5 py-1 text-[10px] font-medium tracking-wide text-gray-600 sm:text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    {certificatesData[selectedCertificateIndex].credentialUrl && (
                      <a
                        href={certificatesData[selectedCertificateIndex].credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#D4D1CA] bg-background px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        Lihat credential <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    <button
                      onClick={() => openCertificateDetails(certificatesData[selectedCertificateIndex])}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <span>Lihat detail sertifikat</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </motion.article>
              )}
            </motion.div>
          )}

          {/* 3. TECH STACK TAB (Exact grid layout matching user's Image 2 with animated entrance) */}
          {activeTab === "tech" && (
            <motion.div
              key="tech-cream-grid"
              variants={techContainerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -15, transition: { duration: 0.2 } }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6"
            >
              {techStackData.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={techCardVariants}
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.96 }}
                  className="surface-card group flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl hover:border-accent transition-all duration-300 cursor-pointer text-center aspect-square"
                >
                  {/* High-resolution colorful Tech Logo */}
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    <TechLogo type={tech.iconType} />
                  </div>

                  {/* Name Label */}
                  <h4 className="font-display font-700 text-xs sm:text-sm text-foreground group-hover:text-accent transition-colors leading-tight">
                    {tech.name}
                  </h4>

                  {/* Subtle category */}
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Details Modal Dialog */}
      <ProjectModal
        isOpen={!!selectedModalItem}
        onClose={closeModal}
        item={selectedModalItem}
        type={modalType}
      />
    </section>
  );
}
