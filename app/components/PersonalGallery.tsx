"use client";

import ThreeDParallaxUnfurlingGallery from "@/components/ui/3d-parallax-unfurling-gallery";
import { galleryData } from "../data/galleryData";

export default function PersonalGallery() {
  const items = galleryData.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
  }));

  return <ThreeDParallaxUnfurlingGallery items={items} />;
}
