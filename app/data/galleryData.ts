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
    id: "gallery-photo-2",
    title: "Personal Gallery 02",
    category: "Creative",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/2.jpg",
    caption: "A moment from my personal gallery.",
  },
  {
    id: "gallery-photo-3",
    title: "Personal Gallery 03",
    category: "Creative",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/3.jpg",
    caption: "A moment from my personal gallery.",
  },
  {
    id: "gallery-photo-4",
    title: "Personal Gallery 04",
    category: "Creative",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/4.jpg",
    caption: "A moment from my personal gallery.",
  },
  {
    id: "gallery-photo-5",
    title: "Personal Gallery 05",
    category: "Creative",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/5.jpg",
    caption: "A moment from my personal gallery.",
  },
  {
    id: "gallery-photo-6",
    title: "Personal Gallery 06",
    category: "Creative",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/6.jpg",
    caption: "A moment from my personal gallery.",
  },
  {
    id: "gallery-photo-7",
    title: "Personal Gallery 07",
    category: "Creative",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/7.jpg",
    caption: "A moment from my personal gallery.",
  },
  {
    id: "gallery-dsc-6073",
    title: "Behind the Scenes",
    category: "Behind The Scenes",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/DSC_6073.JPG",
    caption: "A behind-the-scenes moment from my personal gallery.",
  },
  {
    id: "gallery-personal-portrait",
    title: "Personal Portrait",
    category: "Campus",
    year: "Ongoing",
    location: "Personal gallery",
    image: "/gallery/foto gueh.jpeg",
    caption: "A personal portrait from my gallery.",
  },
  {
    id: "gallery-himavo",
    title: "Himavo Micro IT",
    category: "Campus",
    year: "2024 — 2025",
    location: "IPB University",
    image: "/gallery/galleryhima.jpg",
    caption: "A moment from activities with the Himavo Micro IT community.",
  },
  {
    id: "gallery-juara-1",
    title: "Graphic Design Competition",
    category: "Work",
    year: "2026",
    location: "North Jakarta",
    image: "/gallery/galleryjuara1.jpg",
    caption: "A moment from the North Jakarta youth creativity competition.",
  },
];
