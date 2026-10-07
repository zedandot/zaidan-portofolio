"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem, CertificateItem } from "../data/showcaseData";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ProjectItem | CertificateItem | null;
  type: "project" | "certificate";
}

export default function ProjectModal({ isOpen, onClose, item, type }: ProjectModalProps) {
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isProject = type === "project";
  const project = isProject ? (item as ProjectItem) : null;
  const certificate = !isProject ? (item as CertificateItem) : null;

  const handleCopyCredential = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#DCD8D0] rounded-3xl shadow-2xl overflow-hidden z-10 text-foreground my-6 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/90 bg-[#F4F1EA]/90 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {isProject ? project?.category : certificate?.issuer}
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-gray-500">
                {isProject ? project?.year : certificate?.date}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-white/70 px-2 py-0.5 rounded border border-gray-200">
                ESC
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-gray-500 hover:text-foreground transition-colors text-sm font-bold"
                aria-label="Tutup jendela modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
            {/* Visual Hero */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-200/90 bg-[#E8E5DE] shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                  {isProject ? project?.clientOrContext : certificate?.issuer}
                </span>
                <span className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                  {isProject ? project?.timeline : certificate?.date}
                </span>
              </div>
            </div>

            {/* Title & Headline */}
            <div>
              <h2 className="font-display font-800 text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight leading-snug">
                {item.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                {isProject ? project?.description : certificate?.description}
              </p>
            </div>

            {/* Project Quick Specs Grid */}
            {isProject && project && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/70 border border-gray-200/90 shadow-2xs">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Peran
                  </span>
                  <p className="mt-1 font-display font-700 text-xs sm:text-sm text-foreground">
                    {project.role}
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Klien
                  </span>
                  <p className="mt-1 font-display font-700 text-xs sm:text-sm text-foreground truncate">
                    {project.clientOrContext}
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Tahun
                  </span>
                  <p className="mt-1 font-display font-700 text-xs sm:text-sm text-foreground">
                    {project.year}
                  </p>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    Durasi
                  </span>
                  <p className="mt-1 font-display font-700 text-xs sm:text-sm text-foreground">
                    {project.timeline}
                  </p>
                </div>
              </div>
            )}

            {/* Case Study Details: Challenge & Solution */}
            {isProject && project && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Challenge */}
                <div className="surface-card p-5 sm:p-6 rounded-2xl border border-gray-200/90">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <h4 className="font-display font-700 text-sm uppercase tracking-[0.12em] text-foreground">
                      Konteks
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Solution */}
                <div className="surface-card p-5 sm:p-6 rounded-2xl border border-gray-200/90">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <h4 className="font-display font-700 text-sm uppercase tracking-[0.12em] text-foreground">
                      Pendekatan
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Deliverables / Scope of Work */}
            {isProject && project?.deliverables && project.deliverables.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-800 text-sm sm:text-base uppercase tracking-[0.12em] text-foreground">
                    Yang dikerjakan
                  </h4>
                  <span className="text-[11px] font-mono text-gray-400">
                    {project.deliverables.length} item
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/70 border border-gray-200/80 hover:border-accent/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="font-mono text-[11px] font-bold text-accent px-1.5 py-0.5 rounded bg-accent/10">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h5 className="font-display font-700 text-xs sm:text-sm text-foreground">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pl-7">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certificate Details View */}
            {!isProject && certificate && (
              <div className="space-y-6">
                {certificate.credentialId && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white/70 border border-gray-200/90">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                        Nomor sertifikat
                      </span>
                      <p className="mt-1 font-mono text-sm sm:text-base font-bold text-foreground">
                        {certificate.credentialId}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyCredential(certificate.credentialId!)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#E8E5DE] hover:bg-foreground hover:text-background text-foreground transition-all duration-200"
                    >
                      {copiedId ? (
                        <>
                          <span className="text-emerald-600">✓</span>
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          <span>Salin nomor</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Competencies Validated */}
                {certificate.competencies && certificate.competencies.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-display font-700 text-xs uppercase tracking-[0.16em] text-accent">
                      Standar Kompetensi yang Diuji
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {certificate.competencies.map((comp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-gray-200/80 text-xs text-gray-700"
                        >
                          <span className="text-accent font-bold mt-0.5">•</span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tags & Tools */}
            <div className="space-y-2.5 pt-2 border-t border-gray-200/80">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                {isProject ? "Tools" : "Keahlian"}
              </span>
              <div className="flex flex-wrap gap-2">
                {(isProject ? project?.tags : certificate?.skills)?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-white/80 text-gray-700 border border-gray-200 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer Bar */}
          <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-gray-200/90 bg-[#F4F1EA]/90 shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-foreground hover:bg-black/5 transition-colors"
            >
              Tutup
            </button>

            <div className="flex items-center gap-2.5">
              {/* GitHub Link */}
              {isProject && project?.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border border-gray-300 bg-white/80 hover:bg-foreground hover:text-background text-foreground transition-all duration-200 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Repository</span>
                </a>
              )}

              {/* Live or External Showcase */}
              {isProject && project?.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20 transition-all duration-200 flex items-center gap-2"
                >
                  <span>{project.liveLabel ?? "Live Preview"}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}

              {/* Certificate Verification Link */}
              {!isProject && certificate?.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Verifikasi Kredensial</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
