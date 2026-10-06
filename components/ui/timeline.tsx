"use client";

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
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

export function Timeline({
  items,
  ariaLabel = "Timeline",
  imageUrl,
  imageAlt = "",
  className = "",
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track || reducedMotion) return;

    const context = gsap.context(() => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

      gsap.to(track, {
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
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
      context.revert();
    };
  }, [items.length, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`relative flex min-h-[34rem] w-full flex-col justify-center overflow-hidden py-8 ${className}`}
      aria-label={ariaLabel}
    >
      <div
        ref={viewportRef}
        className={`h-[min(72svh,42rem)] min-h-[31rem] w-full touch-pan-x ${reducedMotion ? "overflow-x-auto" : "overflow-hidden"}`}
      >
        <div
          ref={trackRef}
          className="relative flex h-full w-max items-stretch px-[6vw]"
        >
          {imageUrl && (
            <div className="relative mr-[5vw] h-full w-[78vw] max-w-[34rem] shrink-0 overflow-hidden rounded-[1.5rem] border border-gray-200 bg-gray-100 sm:w-[42vw]">
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
                key={item.id}
                className="relative h-full w-[78vw] max-w-[27rem] shrink-0 px-3 sm:w-[48vw] lg:w-[34vw]"
              >
                <span
                  className="absolute left-1/2 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-[#f4f1ea]"
                  aria-hidden="true"
                />
                <span
                  className={`absolute left-1/2 z-0 h-8 w-px -translate-x-1/2 bg-accent ${above ? "bottom-1/2" : "top-1/2"}`}
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
