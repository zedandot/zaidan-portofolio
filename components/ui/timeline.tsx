"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  ariaLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Timeline({
  items,
  ariaLabel = "Timeline",
  imageUrl,
  imageAlt = "",
  className = "",
}: TimelineProps) {
  const desktopSectionRef = useRef<HTMLElement>(null);
  const desktopViewportRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [mobileViewMode, setMobileViewMode] = useState<"swipe" | "list">("swipe");

  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );

  // GSAP animation for Desktop screens (min-width: 768px)
  useIsomorphicLayoutEffect(() => {
    const section = desktopSectionRef.current;
    const viewport = desktopViewportRef.current;
    const track = desktopTrackRef.current;
    if (!section || !viewport || !track || reducedMotion) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

      const anim = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(distance(), window.innerHeight * 0.75)}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        anim.kill();
      };
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
      mm.revert();
    };
  }, [items.length, reducedMotion]);

  // Mobile scroll handler to track active card
  const handleMobileScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.82;
    if (cardWidth > 0) {
      const newIndex = Math.min(
        items.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth)),
      );
      if (newIndex !== activeMobileIndex) {
        setActiveMobileIndex(newIndex);
      }
    }
  };

  const scrollToMobileItem = (index: number) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const targetChild = container.children[index] as HTMLElement;
    if (targetChild) {
      targetChild.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveMobileIndex(index);
    }
  };

  const handlePrev = () => {
    if (activeMobileIndex > 0) {
      scrollToMobileItem(activeMobileIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeMobileIndex < items.length - 1) {
      scrollToMobileItem(activeMobileIndex + 1);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* ---------------- MOBILE VIEW (< 768px) ---------------- */}
      <div className="block md:hidden w-full">
        {/* Mobile controls bar */}
        <div className="flex items-center justify-between gap-3 mb-6 px-1">
          {/* Mode Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#E8E5DE] border border-[#D4D1CA] text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setMobileViewMode("swipe")}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                mobileViewMode === "swipe"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-gray-500 hover:text-foreground"
              }`}
            >
              Swipe
            </button>
            <button
              type="button"
              onClick={() => setMobileViewMode("list")}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                mobileViewMode === "list"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-gray-500 hover:text-foreground"
              }`}
            >
              List
            </button>
          </div>

          {/* Indicator & Arrow controls (visible in swipe mode) */}
          {mobileViewMode === "swipe" && (
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-accent">
                {String(activeMobileIndex + 1).padStart(2, "0")}
                <span className="text-gray-400 font-normal"> / {String(items.length).padStart(2, "0")}</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeMobileIndex === 0}
                  aria-label="Previous experience"
                  className="w-7 h-7 rounded-full flex items-center justify-center border border-[#D4D1CA] bg-white/60 text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="10 12 6 8 10 4" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeMobileIndex === items.length - 1}
                  aria-label="Next experience"
                  className="w-7 h-7 rounded-full flex items-center justify-center border border-[#D4D1CA] bg-white/60 text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 12 10 8 6 4" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {mobileViewMode === "swipe" ? (
          /* Mobile Horizontal Swipe Container */
          <div>
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex w-full items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-2 -mx-2 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, index) => (
                <div
                  key={`mobile-${item.id}`}
                  className="w-[84vw] max-w-[21rem] shrink-0 snap-center flex flex-col"
                >
                  {/* Timeline node & line */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-gray-200" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">
                      {item.date}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="surface-card flex-1 flex flex-col justify-between p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                    {item.image && (
                      <div className="relative h-32 w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display text-lg font-700 leading-snug tracking-[-0.02em] text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots & hint */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="flex items-center justify-center gap-1.5">
                {items.map((item, i) => (
                  <button
                    key={`dot-${item.id}`}
                    type="button"
                    onClick={() => scrollToMobileItem(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeMobileIndex
                        ? "w-6 bg-accent"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                Geser ke samping untuk melihat pengalaman
              </p>
            </div>
          </div>
        ) : (
          /* Mobile Vertical List Mode */
          <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-gray-300 before:to-gray-200">
            {items.map((item) => (
              <div key={`list-${item.id}`} className="relative group">
                {/* Dot on line */}
                <span
                  className="absolute -left-[19px] top-1.5 size-3 rounded-full bg-accent ring-4 ring-[#f4f1ea]"
                  aria-hidden="true"
                />
                <div className="surface-card p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-accent mb-1.5">
                    {item.date}
                  </span>
                  <h3 className="font-display text-lg font-700 leading-snug tracking-[-0.02em] text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------------- DESKTOP VIEW (>= 768px) ---------------- */}
      <section
        ref={desktopSectionRef}
        className="hidden md:flex relative min-h-[34rem] w-full flex-col justify-center overflow-hidden py-8"
        aria-label={ariaLabel}
      >
        <div
          ref={desktopViewportRef}
          className={`h-[min(72svh,42rem)] min-h-[31rem] w-full touch-pan-x ${
            reducedMotion ? "overflow-x-auto" : "overflow-hidden"
          }`}
        >
          <div
            ref={desktopTrackRef}
            className="relative flex h-full w-max items-stretch px-[6vw]"
          >
            {imageUrl && (
              <div className="relative mr-[5vw] h-full w-[42vw] max-w-[34rem] shrink-0 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-100">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-300" />

            {items.map((item, index) => {
              const above = index % 2 === 0;
              return (
                <article
                  key={`desktop-${item.id}`}
                  className="relative h-full w-[48vw] lg:w-[34vw] max-w-[27rem] shrink-0 px-3"
                >
                  <span
                    className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-[#f4f1ea]"
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute left-1/2 z-0 h-8 w-px -translate-x-1/2 bg-accent ${
                      above ? "bottom-1/2" : "top-1/2"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="grid h-full grid-rows-2">
                    <div className={`flex min-h-0 ${above ? "items-end pb-10" : ""}`}>
                      {above && <TimelineCard item={item} />}
                    </div>
                    <div className={`flex min-h-0 ${above ? "" : "items-start pt-10"}`}>
                      {!above && <TimelineCard item={item} />}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <p className="mt-3 px-6 text-center text-[10px] uppercase tracking-[0.16em] text-gray-400">
          {reducedMotion ? "Scroll horizontally to explore" : "Keep scrolling to follow the timeline"}
        </p>
      </section>
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="surface-card w-full overflow-hidden rounded-2xl">
      {item.image && (
        <div className="relative h-28 overflow-hidden bg-gray-100 sm:h-36">
          <img
            src={item.image}
            alt={item.imageAlt ?? ""}
            draggable={false}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-accent sm:text-xs">
          {item.date}
        </p>
        <h3 className="font-display text-lg font-700 leading-tight tracking-[-0.03em] text-foreground sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-600 sm:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Timeline;
