"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useLenis } from "lenis/react";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const active = [...navLinks]
          .reverse()
          .find((link) => {
            const section = document.querySelector<HTMLElement>(link.href);
            return section && section.getBoundingClientRect().top <= 150;
          });
        setActiveSection(active?.href ?? "");
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector<HTMLElement>(href);
    if (el) {
      lenis?.scrollTo(el, { offset: -96 });
    }
  };

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-background/95 border-b border-gray-200/70 py-3 shadow-[0_10px_28px_rgba(17,17,17,0.05)]"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              lenis?.scrollTo(0);
            }}
            className="font-display font-900 text-2xl md:text-3xl tracking-[-0.03em] text-foreground hover:text-accent transition-colors"
          >
            ZED<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                aria-current={activeSection === link.href ? "location" : undefined}
                className={`nav-link text-xs font-semibold tracking-[0.15em] uppercase text-foreground/80 hover:text-accent transition-colors duration-200 ${
                  activeSection === link.href ? "is-active" : ""
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-foreground origin-center"
              animate={
                mobileOpen
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-foreground"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-foreground origin-center"
              animate={
                mobileOpen
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background px-6 pt-28 pb-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
          >
            <div className="mx-auto flex h-full max-w-sm flex-col justify-between">
              <div className="space-y-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    aria-current={activeSection === link.href ? "location" : undefined}
                    className={`group flex min-h-16 items-center justify-between rounded-3xl border border-gray-200 bg-white/45 px-5 font-display text-3xl font-800 tracking-[-0.04em] text-foreground transition-colors hover:border-accent hover:text-accent ${
                      activeSection === link.href ? "border-accent text-accent" : ""
                    }`}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    transition={{ delay: i * 0.055, duration: 0.34 }}
                  >
                    <span>{link.label}</span>
                    <span className="text-base text-accent transition-transform group-hover:translate-x-1">→</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                className="text-center text-[11px] uppercase tracking-[0.18em] text-gray-400"
              >
                Tap a section to explore
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
