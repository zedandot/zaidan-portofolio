"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasImage = project.image && project.image.length > 0;
  const hasDescription = project.description && project.description.length > 0;
  const hasTools = project.tools && project.tools.length > 0;

  return (
    <ScrollReveal delay={index * 0.1}>
      <article className="group py-12 md:py-20 border-t border-gray-200 first:border-t-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            {/* Number and category */}
            <div className="flex items-center gap-4">
              <span className="font-display font-700 text-sm text-accent tracking-wide">
                {project.number}
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-gray-400">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display font-700 text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-tight text-foreground">
              {project.title}
            </h3>

            {/* Description — only show if available */}
            {hasDescription && (
              <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md">
                {project.description}
              </p>
            )}

            {/* Tools — only show if available */}
            {hasTools && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] tracking-[0.05em] px-3 py-1.5 border border-gray-200 text-gray-500 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {/* View Project link — only show if there's a real link */}
            {project.link && (
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-foreground group/link"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative">
                  View Project
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover/link:w-full transition-all duration-300" />
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-accent"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            )}
          </div>

          {/* Image or Placeholder */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="project-image-wrapper relative aspect-[16/10] rounded-sm overflow-hidden bg-gray-100">
              {hasImage ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    quality={90}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </>
              ) : (
                /* Empty placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-100">
                  {/* Placeholder icon */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="text-gray-300"
                  >
                    <rect
                      x="4"
                      y="8"
                      width="32"
                      height="24"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="14"
                      cy="17"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 28L14 20L22 26L28 22L36 28"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-gray-300 font-medium">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
