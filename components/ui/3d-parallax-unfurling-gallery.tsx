"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export interface UnfurlingGalleryItem {
  id: string;
  image: string;
  title: string;
}

interface UnfurlingGalleryProps {
  items: UnfurlingGalleryItem[];
}

function ImageCard({ item }: { item: UnfurlingGalleryItem }) {
  return (
    <div className="relative h-[190px] w-full shrink-0 cursor-pointer overflow-hidden bg-gray-200 transition-transform duration-300 hover:scale-[1.02] sm:h-[280px] lg:h-[360px]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 767px) 36vw, (max-width: 1279px) 25vw, 22vw"
        className="object-cover transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

function repeatedColumns(items: UnfurlingGalleryItem[], count: number) {
  return Array.from({ length: count }, (_, column) => {
    const base = items.filter((_, index) => index % count === column);
    return base.length ? [...base, ...base, ...base] : [];
  });
}

export default function ThreeDParallaxUnfurlingGallery({
  items,
}: UnfurlingGalleryProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Keep all transforms on the same raw page-scroll progress so the grid
  // remains aligned with the scroll position, including when scrolling slowly.
  const bannerWidth = useTransform(scrollYProgress, [0, 0.16], ["90vw", "100vw"]);
  const bannerHeight = useTransform(scrollYProgress, [0, 0.16], ["75dvh", "100dvh"]);
  const bannerRadius = useTransform(scrollYProgress, [0, 0.16], ["28px", "0px"]);
  const bannerBorderWidth = useTransform(scrollYProgress, [0, 0.16], ["3px", "0px"]);

  const rotateY = useTransform(scrollYProgress, [0.16, 1], [-38, -5]);
  const rotateX = useTransform(scrollYProgress, [0.16, 1], [20, 2]);
  const rotateZ = useTransform(scrollYProgress, [0.16, 1], [10, 1]);
  const translateZ = useTransform(scrollYProgress, [0.16, 1], [-620, 0]);

  const yMobile = [
    useTransform(scrollYProgress, [0.16, 1], ["0%", "-28%"]),
    useTransform(scrollYProgress, [0.16, 1], ["-28%", "8%"]),
    useTransform(scrollYProgress, [0.16, 1], ["0%", "-28%"]),
  ];
  const yDesktop = [
    useTransform(scrollYProgress, [0.16, 1], ["0%", "-34%"]),
    useTransform(scrollYProgress, [0.16, 1], ["-34%", "8%"]),
    useTransform(scrollYProgress, [0.16, 1], ["0%", "-34%"]),
    useTransform(scrollYProgress, [0.16, 1], ["-26%", "12%"]),
  ];

  const mobileColumns = useMemo(() => repeatedColumns(items, 3), [items]);
  const desktopColumns = useMemo(() => repeatedColumns(items, 4), [items]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.16], [1, 0.7, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.16], [0, -20]);

  return (
    <section
      id="gallery"
      ref={containerRef}
      aria-label="Personal gallery"
      className="relative h-[320vh] w-full bg-background text-foreground selection:bg-accent selection:text-white md:h-[400vh]"
    >
      <div className="sticky top-0 flex h-dvh w-full items-center justify-center overflow-hidden md:h-svh">
        {/* Gallery Title in the white/cream area above the banner */}
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="pointer-events-none absolute top-3 sm:top-5 md:top-6 inset-x-0 z-30 px-5 text-center"
        >
          <p className="mb-2 text-[9px] uppercase tracking-[0.28em] text-gray-500 sm:text-[11px]">
            Personal Gallery · All Moments
          </p>
          <h2 className="font-display text-2xl font-800 leading-none tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            LIFE IN FRAMES
          </h2>
        </motion.div>

        <motion.div
          style={{
            width: bannerWidth,
            height: bannerHeight,
            borderRadius: bannerRadius,
            borderWidth: bannerBorderWidth,
            borderColor: "#d4d1ca",
          }}
          className="relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden border-solid bg-background"
        >

          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{ perspective: "1000px" }}
          >
            <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_50px_70px_-45px_rgba(17,17,17,0.14),inset_0_-50px_70px_-45px_rgba(17,17,17,0.14)] sm:shadow-[inset_0_80px_100px_-50px_rgba(17,17,17,0.16),inset_0_-80px_100px_-50px_rgba(17,17,17,0.16)]" />
            <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_35px_0_45px_-30px_rgba(17,17,17,0.1),inset_-35px_0_45px_-30px_rgba(17,17,17,0.1)] sm:shadow-[inset_100px_0_110px_-50px_rgba(17,17,17,0.12),inset_-100px_0_110px_-50px_rgba(17,17,17,0.12)]" />

            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                z: translateZ,
                transformStyle: "preserve-3d",
              }}
              className="flex h-[125dvh] w-[125vw] origin-center items-center justify-center gap-3 will-change-transform sm:h-[145vh] sm:gap-5 md:w-[120vw]"
            >
              <motion.div
                style={{ y: yMobile[0] }}
                className="flex w-[37vw] min-w-[118px] flex-col gap-3 md:hidden"
              >
                {mobileColumns[0]?.map((item, index) => (
                  <ImageCard key={`mobile-a-${item.id}-${index}`} item={item} />
                ))}
              </motion.div>
              <motion.div
                style={{ y: yMobile[1] }}
                className="flex w-[37vw] min-w-[118px] flex-col gap-3 md:hidden"
              >
                {mobileColumns[1]?.map((item, index) => (
                  <ImageCard key={`mobile-b-${item.id}-${index}`} item={item} />
                ))}
              </motion.div>
              <motion.div
                style={{ y: yMobile[2] }}
                className="flex w-[37vw] min-w-[118px] flex-col gap-3 md:hidden"
              >
                {mobileColumns[2]?.map((item, index) => (
                  <ImageCard key={`mobile-c-${item.id}-${index}`} item={item} />
                ))}
              </motion.div>

              {desktopColumns.map((column, columnIndex) => (
                <motion.div
                  key={`desktop-column-${columnIndex}`}
                  style={{ y: yDesktop[columnIndex] }}
                  className="hidden w-[22vw] min-w-[150px] flex-col gap-4 md:flex md:gap-6"
                >
                  {column.map((item, index) => (
                    <ImageCard key={`desktop-${item.id}-${index}`} item={item} />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
