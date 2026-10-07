"use client";

import * as React from "react";

export interface CoverflowSlide {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  onSlideChange?: (index: number) => void;
  className?: string;
  cardWidth?: string;
  cardHeightRatio?: number;
  imageFit?: "cover" | "contain";
  rotate?: number;
  depth?: number;
  gap?: number;
  label?: string;
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function CoverflowCarousel({
  slides,
  onSlideChange,
  className = "",
  cardWidth = "clamp(170px, 58vw, 310px)",
  cardHeightRatio = 1,
  imageFit = "cover",
  rotate = 42,
  depth = 0.58,
  gap = 0.055,
  label = "Selected projects",
}: CoverflowCarouselProps) {
  const count = slides.length;
  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const positionRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const animationRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{
    pointerId: number;
    startX: number;
    startPosition: number;
    velocity: number;
    time: number;
  } | null>(null);
  const [selected, setSelected] = React.useState(0);

  const indexAt = React.useCallback(
    (position: number) => (count ? ((Math.round(position) % count) + count) % count : 0),
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width || !count) return;

    const pitch = width * (1 + gap);
    const position = positionRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - position;
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, 0.56);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = Math.min(1, Math.max(0, count / 2 - distance));
      card.style.opacity = String(Math.max(0, 1 - 0.1 * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
      card.style.pointerEvents = edge > 0 ? "auto" : "none";
    });
  }, [count, depth, gap, rotate]);

  const settle = React.useCallback(
    (nextTarget: number) => {
      if (!count) return;
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);

      targetRef.current = nextTarget;
      const nextIndex = indexAt(nextTarget);
      setSelected(nextIndex);
      onSlideChange?.(nextIndex);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        positionRef.current = nextTarget;
        paint();
        animationRef.current = null;
        return;
      }

      const step = () => {
        const remaining = nextTarget - positionRef.current;
        if (Math.abs(remaining) < 0.0004) {
          positionRef.current = nextTarget;
          paint();
          animationRef.current = null;
          return;
        }

        positionRef.current += remaining * 0.16;
        paint();
        animationRef.current = requestAnimationFrame(step);
      };

      animationRef.current = requestAnimationFrame(step);
    },
    [count, indexAt, onSlideChange, paint],
  );

  const nudge = React.useCallback(
    (amount: number) => settle(Math.round(targetRef.current) + amount),
    [settle],
  );

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame || !count) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [count, paint]);

  React.useEffect(
    () => () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    },
    [],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = positionRef.current;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startPosition: positionRef.current,
      velocity: 0,
      time: performance.now(),
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = positionRef.current;
    const rawPosition = drag.startPosition - (event.clientX - drag.startX) / pitch;
    positionRef.current = ((rawPosition % count) + count) % count;
    const delta = positionRef.current - previous;
    const wrappedDelta = delta > count / 2 ? delta - count : delta < -count / 2 ? delta + count : delta;
    drag.velocity = (wrappedDelta / Math.max(now - drag.time, 1)) * 1000;
    drag.time = now;

    const nextIndex = indexAt(positionRef.current);
    if (nextIndex !== selected) {
      setSelected(nextIndex);
      onSlideChange?.(nextIndex);
    }
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.velocity * 0.18));
    const destination = Math.round(positionRef.current + carried);
    settle(destination);
  };

  if (!count) return null;

  return (
    <div
      className={`w-full ${className}`}
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-9 outline-none focus-visible:ring-2 focus-visible:ring-accent active:cursor-grabbing sm:py-12"
          style={{
            perspective: "calc(var(--cf-card) * 3)",
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative mx-auto select-none"
            style={{
              height: `calc(var(--cf-card) * ${cardHeightRatio})`,
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={`${slide.title}-${index}`}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}: ${slide.title}`}
                aria-current={index === selected ? "true" : undefined}
                className="group absolute left-1/2 top-0 overflow-hidden rounded-2xl border border-[#D4D1CA] bg-[#E8E5DE] shadow-[0_24px_60px_rgba(17,17,17,0.16)] will-change-transform sm:rounded-3xl"
                style={{
                  width: "var(--cf-card)",
                  height: `calc(var(--cf-card) * ${cardHeightRatio})`,
                  aspectRatio: `${1 / cardHeightRatio} / 1`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className={`h-full w-full select-none ${
                    imageFit === "contain" ? "object-contain" : "object-cover"
                  } transition-transform duration-500 group-hover:scale-[1.035]`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Project sebelumnya"
          onClick={() => nudge(-1)}
          className="absolute left-1 top-1/2 z-[200] -translate-y-1/2 rounded-full border border-[#D4D1CA] bg-[#FFFAF0]/90 p-2.5 text-foreground shadow-md backdrop-blur transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-3 sm:p-3"
        >
          <svg viewBox="0 0 24 24" className="size-4 sm:size-5" fill="none" aria-hidden="true">
            <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Project berikutnya"
          onClick={() => nudge(1)}
          className="absolute right-1 top-1/2 z-[200] -translate-y-1/2 rounded-full border border-[#D4D1CA] bg-[#FFFAF0]/90 p-2.5 text-foreground shadow-md backdrop-blur transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-3 sm:p-3"
        >
          <svg viewBox="0 0 24 24" className="size-4 sm:size-5" fill="none" aria-hidden="true">
            <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div key={selected} className="mx-auto mt-1 max-w-2xl px-8 text-center animate-in fade-in duration-300 sm:px-12">
        <p className="font-display text-lg font-700 tracking-tight text-foreground sm:text-2xl">
          {slides[selected]?.title}
        </p>
        {slides[selected]?.subtitle && (
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">
            {slides[selected].subtitle}
          </p>
        )}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Pilih project">
        {slides.map((slide, index) => (
          <button
            key={`${slide.title}-pagination`}
            type="button"
            aria-label={`Lihat project ${index + 1}: ${slide.title}`}
            aria-current={index === selected ? "true" : undefined}
            onClick={() => {
              const current = selected;
              let destination = index + Math.round((targetRef.current - index) / count) * count;
              if (Math.abs(destination - targetRef.current) > count / 2) {
                destination += destination > targetRef.current ? -count : count;
              }
              if (current === index && !animationRef.current) return;
              settle(destination);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              index === selected ? "w-7 bg-accent" : "w-1.5 bg-[#B0ADA6] hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
        Geser untuk melihat project
      </p>
    </div>
  );
}
