"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScrollTrigger);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, syncTouch: false }}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
