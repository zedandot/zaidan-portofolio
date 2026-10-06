"use client";

import { useEffect } from "react";
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#D4D1CA] rounded-2xl shadow-2xl overflow-hidden z-10 text-foreground my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#EFECE6]/80">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
                {isProject ? "Project Details" : "Certificate Credential"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-gray-500 hover:text-foreground transition-colors text-sm font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Image Preview */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover"
                quality={92}
              />
            </div>

            {/* Title & Metadata */}
            <div>
              <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {isProject ? project?.category : certificate?.issuer}
                </span>
                {!isProject && certificate?.date && (
                  <span className="text-xs font-medium text-gray-500">
                    Issued: {certificate.date}
                  </span>
                )}
              </div>
              <h3 className="font-display font-800 text-2xl sm:text-3xl text-foreground tracking-tight leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed bg-white/80 p-5 rounded-xl border border-gray-200 shadow-sm">
              <p>{isProject ? project?.longDescription : certificate?.description}</p>
            </div>

            {/* Highlights or Skills */}
            {isProject && project?.highlights && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent">
                  Key Highlights & Architecture
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white/80 p-3 rounded-xl border border-gray-200"
                    >
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!isProject && certificate?.skills && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent">
                  Competencies & Skills Validated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {certificate.credentialId && (
                  <p className="text-xs text-gray-500 font-mono pt-2">
                    Credential ID: <span className="text-foreground font-semibold">{certificate.credentialId}</span>
                  </p>
                )}
              </div>
            )}

            {/* Tags (for projects) */}
            {isProject && project?.tags && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-md bg-white text-gray-600 border border-gray-200 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-foreground hover:bg-black/5 transition-colors"
              >
                Close
              </button>

              {isProject && project?.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Live Demo</span>
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

              {!isProject && certificate?.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-white shadow-md shadow-accent/20 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Verify Credential</span>
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
