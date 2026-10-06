"use client";

import * as React from "react";

export interface WorksWheelItem {
  title: string;
  image: string;
  subtitle?: string;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[];
  label?: string;
}

const CARD_RATIO = 1.45;
const CARD_HEIGHT = 0.48;
const CARD_MAX_WIDTH = 0.5;
const STEP = 40;
const DRUM = 2.1;
const LENS = 2.7;
const RING = 1.14;
const BOW = 1.82;
const CULL = 1.6;
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
const lerp = (a: number, b: number, amount: number) => a + (b - a) * amount;
const rad = (degrees: number) => (degrees * Math.PI) / 180;

function place(ringDeg: number, drumDeg: number, ringRadius: number, drumRadius: number, bow: number, mix: number) {
  const bowOffset = -bow * (1 - Math.cos(rad(drumDeg)));
  return `translateX(${mix * bowOffset}px) rotateZ(${(1 - mix) * ringDeg}deg) translateY(${-(1 - mix) * ringRadius}px) rotateX(${mix * drumDeg}deg) translateZ(${mix * drumRadius}px)`;
}

export function WorksWheel({ items, label = "Works", className = "", ...props }: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardsRef = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const turn = React.useRef(0);
  const target = React.useRef(0);
  const dragY = React.useRef<number | null>(null);
  const settleTimer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [active, setActive] = React.useState(0);
  const [stage, setStage] = React.useState({ width: 0, height: 0 });
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const last = Math.max(items.length - 1, 0);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReducedMotion(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const element = stageRef.current;
    if (!element) return;
    const read = () => setStage({ width: element.clientWidth, height: element.clientHeight });
    read();
    const observer = new ResizeObserver(read);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const metrics = React.useMemo(() => {
    const width = Math.min(stage.height * CARD_HEIGHT * CARD_RATIO, stage.width * CARD_MAX_WIDTH);
    const height = width / CARD_RATIO;
    const ringRadius = height * RING;
    return {
      width,
      height,
      ringRadius,
      ringScale: items.length ? clamp((((2 * Math.PI * ringRadius) / items.length) * 0.82) / (width || 1), 0.16, 1) : 1,
      drumRadius: height * DRUM,
      bow: height * BOW,
      depth: height * LENS,
      title: height * 0.12,
      index: Math.max(10, height * 0.04),
    };
  }, [items.length, stage]);

  const goTo = React.useCallback((next: number) => {
    target.current = clamp(next, 0, last + 1);
  }, [last]);

  React.useEffect(() => {
    if (!stage.height) return;
    let frame = 0;
    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reducedMotion ? 1 : 0.12);
      const current = turn.current;
      const mix = clamp(current, 0, 1);
      const position = Math.max(0, current - 1);
      if (wheelRef.current) wheelRef.current.style.transform = `translateZ(${-mix * metrics.drumRadius}px)`;
      items.forEach((_, index) => {
        const distance = index - position;
        const card = cardsRef.current[index];
        if (!card) return;
        card.style.transform = place(distance * (360 / items.length), distance * STEP, metrics.ringRadius, metrics.drumRadius, metrics.bow, mix);
        card.style.opacity = mix > 0.5 && Math.abs(distance) > CULL ? "0" : "1";
        card.style.zIndex = String(Math.round(100 - Math.abs(distance) * 2));
        const face = card.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(metrics.ringScale, 1, mix)})`;
      });
      if (labelRef.current) labelRef.current.style.opacity = String(1 - mix);
      if (titleRef.current) titleRef.current.style.opacity = String(mix);
      const nextActive = clamp(Math.round(position), 0, last);
      setActive((previous) => previous === nextActive ? previous : nextActive);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [items, last, metrics, reducedMotion, stage.height]);

  React.useEffect(() => {
    const element = stageRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / 900;
      if (next > 0 && next < last + 1) event.preventDefault();
      goTo(next);
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => goTo(Math.round(target.current)), 140);
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", onWheel);
      window.clearTimeout(settleTimer.current);
    };
  }, [goTo, last]);

  if (!items.length) return null;

  return (
    <section aria-label={label} className={`relative h-full min-h-[34rem] w-full overflow-hidden select-none text-foreground ${className}`} {...props}>
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        className="absolute inset-0 cursor-grab touch-pan-x outline-none focus-visible:outline-2 focus-visible:outline-accent active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => { dragY.current = event.clientY; event.currentTarget.setPointerCapture(event.pointerId); }}
        onPointerMove={(event) => {
          if (dragY.current === null) return;
          goTo(target.current + (dragY.current - event.clientY) / 420);
          dragY.current = event.clientY;
        }}
        onPointerUp={() => { dragY.current = null; if (target.current > 1) goTo(Math.round(target.current)); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowRight") goTo(Math.round(target.current) + 1);
          else if (event.key === "ArrowUp" || event.key === "ArrowLeft") goTo(Math.round(target.current) - 1);
          else return;
          event.preventDefault();
        }}
      >
        <div ref={wheelRef} className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]">
          {items.map((item, index) => (
            <div
              id={`works-wheel-${index}`}
              key={`${item.title}-${index}`}
              role="option"
              aria-selected={index === active}
              ref={(node) => { cardsRef.current[index] = node; }}
              className="absolute [backface-visibility:hidden]"
              style={{ width: metrics.width, height: metrics.height, marginLeft: -metrics.width / 2, marginTop: -metrics.height / 2 }}
            >
              <div className="relative block size-full overflow-hidden rounded-xl border border-white/70 bg-muted shadow-[0_18px_40px_-18px_rgba(17,17,17,0.45)]">
                <img src={item.image} alt="" draggable={false} className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  {item.subtitle && <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/75">{item.subtitle}</p>}
                  <h3 className="font-display text-lg font-semibold leading-tight sm:text-2xl">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={labelRef} className="pointer-events-none absolute inset-0 grid place-items-center font-display font-semibold tracking-[-0.04em] text-foreground" style={{ fontSize: metrics.title }}>{label}</div>
      <div ref={titleRef} className="pointer-events-none absolute left-[7%] top-1/2 max-w-[48%] -translate-y-1/2 font-display font-semibold leading-tight tracking-[-0.04em] text-foreground opacity-0" style={{ fontSize: metrics.title }}>
        {items[active]?.title}
        <span className="mt-2 block font-sans text-[0.28em] font-medium tracking-[0.08em] text-gray-500">{items[active]?.subtitle}</span>
      </div>

      <ol className="absolute right-[3%] top-[6%] z-10 space-y-1 text-right leading-relaxed text-gray-500" style={{ fontSize: metrics.index }}>
        {items.map((item, index) => (
          <li key={`${item.title}-index-${index}`}>
            <button type="button" onClick={() => goTo(index + 1)} className={`cursor-pointer text-right transition-colors focus-visible:outline focus-visible:outline-accent ${index === active ? "font-semibold text-foreground" : "hover:text-foreground"}`}>
              <span className="mr-2 font-mono text-[0.75em] opacity-60">0{index + 1}</span>{item.title}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorksWheel;
