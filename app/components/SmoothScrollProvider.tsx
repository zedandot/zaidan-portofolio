"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
