"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeIntroProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export default function WelcomeIntro({ onComplete, forceShow = false }: WelcomeIntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const targetHandle = "@zedandot";

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("zed-intro-seen") === "true";
    setIsVisible(forceShow || !hasSeenIntro);
  }, [forceShow]);

  // Typewriter effect for handle badge
  useEffect(() => {
    if (!isVisible) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= targetHandle.length) {
        setTypedText(targetHandle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleDismiss = useCallback(() => {
    sessionStorage.setItem("zed-intro-seen", "true");
    setIsVisible(false);
    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 600);
    }
  }, [onComplete]);

  // Auto-dismiss intro after 1.8s (lightweight intro for mobile)
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(handleDismiss, 1800);

    return () => clearTimeout(timer);
  }, [handleDismiss, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4F1EA] overflow-hidden select-none cursor-pointer"
          onClick={handleDismiss}
        >
          {/* Lightweight ambient lights */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[460px] h-[280px] sm:h-[460px] bg-[#FF4D00]/[0.07] rounded-full blur-3xl pointer-events-none" />

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.1] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top Skip Button */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground bg-white/70 border border-foreground/10 transition-all duration-300"
            >
              Skip Intro ✕
            </button>
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
            {/* 3 Circular Glowing Icon Pills (matching Screenshot 1) */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10"
            >
              {/* Icon 1: Code </> */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/70 border border-accent/35 shadow-[0_0_14px_rgba(255,77,0,0.12)] flex items-center justify-center text-accent"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </motion.div>

              {/* Icon 2: Profile */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/70 border border-accent/35 shadow-[0_0_14px_rgba(255,77,0,0.12)] flex items-center justify-center text-accent"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </motion.div>

              {/* Icon 3: GitHub */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/70 border border-accent/35 shadow-[0_0_14px_rgba(255,77,0,0.12)] flex items-center justify-center text-accent"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Typography: Welcome To My */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="font-display font-800 text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-tight mb-2 sm:mb-3"
            >
              Welcome To My
            </motion.h1>

            {/* Typography: Portfolio Website (Glowing gradient) */}
            <motion.h2
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-900 text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight bg-gradient-to-r from-[#FF4D00] via-[#E85D04] to-[#B93800] bg-clip-text text-transparent mb-8 sm:mb-10"
            >
              Portfolio Website
            </motion.h2>

            {/* Pill Badge: 🌐 @zedandot | */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-accent/30 text-foreground/80 shadow-sm text-xs sm:text-sm font-medium tracking-wide"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{typedText}</span>
              <span className="w-1.5 h-3.5 bg-accent animate-pulse" />
            </motion.div>

            {/* Click to enter hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 text-[11px] tracking-[0.2em] uppercase text-foreground/40 font-medium"
            >
              Click anywhere to enter
            </motion.p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "linear" }}
              className="h-full bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
