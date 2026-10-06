export type GalleryCategory = "All" | "Work" | "Campus" | "Creative" | "Behind The Scenes";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  year: string;
  location: string;
  image: string;
  caption: string;
}

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Work",
  "Campus",
  "Creative",
  "Behind The Scenes",
];

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-competition-winner",
    title: "Graphic Design Competition",
    category: "Work",
    year: "2026",
    location: "North Jakarta",
    image: "/projects/socialmedia.jpg",
    caption:
      "Moment from the North Jakarta youth creativity competition, where I won 1st place in the graphic design category.",
  },
  {
    id: "gallery-153-creative",
    title: "153 Creative Work Session",
    category: "Work",
    year: "2026",
    location: "Remote",
    image: "/projects/branding.jpg",
    caption:
      "Visual production and design exploration for freelance graphic design and web development projects.",
  },
  {
    id: "gallery-ipb-campus",
    title: "Software Engineering Life",
    category: "Campus",
    year: "2024 — Now",
    location: "IPB University",
    image: "/foto gueh.jpeg",
    caption:
      "Campus life as a software engineering student, balancing code, design, organization work, and project deadlines.",
  },
  {
    id: "gallery-himavo",
    title: "Himavo Micro IT Community",
    category: "Campus",
    year: "2024 — 2025",
    location: "Indonesia",
    image: "/projects/uiux.jpg",
    caption:
      "Community moments, design responsibilities, and multimedia work for Himavo Micro IT Community activities.",
  },
  {
    id: "gallery-suarinara",
    title: "Suarinara Vol 1",
    category: "Behind The Scenes",
    year: "2026",
    location: "Argosari, Lumajang",
    image: "/projects/webgis.jpg",
    caption:
      "Behind the scenes from a 7-day community service program where I handled visual concepts and graphic design needs.",
  },
  {
    id: "gallery-creative-process",
    title: "Creative Process",
    category: "Creative",
    year: "Ongoing",
    location: "Studio / Desk",
    image: "/Personal Portfolio Website.jpg",
    caption:
      "Small fragments of design exploration, web interface experiments, visual references, and personal creative direction.",
  },
];
