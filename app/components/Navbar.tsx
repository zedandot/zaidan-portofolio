"use client";

import { useState, useEffect, useCallback } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
            return section && section.getBoundingClientRect().top <= 160;
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

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

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector<HTMLElement>(href);
      if (el) {
        lenis?.scrollTo(el, { offset: -96 });
      }
    },
    [lenis]
  );

  return (
    <>
      {/* Top thin scroll progress indicator */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[60] h-[2.5px] origin-left bg-accent shadow-[0_0_8px_rgba(255,77,0,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f4f1ea]/90 backdrop-blur-md border-b border-[#D4D1CA]/80 py-3.5 shadow-[0_8px_30px_rgba(17,17,17,0.04)]"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              lenis?.scrollTo(0);
            }}
            className="group flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="ZED Portfolio Home"
          >
            <span className="font-display font-900 text-2xl md:text-3xl tracking-[-0.04em] text-foreground group-hover:text-accent transition-colors">
              ZED
            </span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-9" role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  className={`nav-link text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-accent font-bold"
                      : "text-foreground/80 hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Quick Contact CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="ml-2 px-4 py-2 text-[11px] font-bold tracking-[0.14em] uppercase rounded-full border border-foreground/30 text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <motion.span
              className="block w-6 h-[2px] bg-foreground origin-center"
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-foreground"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-foreground origin-center"
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-40 bg-[#f4f1ea] px-6 pt-24 pb-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex h-full w-full max-w-sm flex-col justify-between">
              <div className="space-y-2.5 pt-4">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
                  Navigation
                </span>
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`group flex min-h-14 items-center justify-between rounded-2xl border px-5 font-display text-2xl font-800 tracking-[-0.03em] transition-all duration-200 ${
                        isActive
                          ? "border-accent bg-accent/10 text-accent shadow-xs"
                          : "border-[#D4D1CA] bg-white/50 text-foreground hover:border-accent hover:text-accent"
                      }`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <span>{link.label}</span>
                      <span className="text-sm text-accent transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="pt-6 border-t border-[#D4D1CA] flex items-center justify-between text-xs text-gray-500"
              >
                <span>Bogor, ID</span>
                <span className="text-accent font-semibold">Muhamad Zaidan</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
