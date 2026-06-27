"use client";

import { useState, useEffect, useCallback } from "react";
import { getGalleries, type Gallery } from "@/services/galleries";
import { toDirectImageUrl } from "@/lib/toDirectImageUrl";

export default function HomeHeroGallery() {
  const [galleryImages, setGalleryImages] = useState<Gallery[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getGalleries()
      .then(setGalleryImages)
      .catch(() => {});
  }, []);

  const slides = [
    { type: "logo" as const, src: "/logo.jpg", title: "Omah Gembira", caption: "Logo Omah Gembira" },
    ...galleryImages.map((g) => ({
      type: "gallery" as const,
      src: g.url,
      title: g.title || "Foto Galeri",
      caption: g.title || "Foto Galeri",
    })),
  ];

  const next = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [slides.length, next]);

  const slide = slides[current];
  if (!slide) return null;

  return (
    <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="aspect-[4/3] rounded-2xl bg-charcoal overflow-hidden shadow-2xl card-hover relative">
        {slide.type === "logo" ? (
          <div className="w-full h-full flex items-center justify-center bg-charcoal">
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-contain p-6"
            />
          </div>
        ) : (
          <img
            src={toDirectImageUrl(slide.src)}
            alt={slide.title}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white text-sm font-medium line-clamp-1">{slide.caption}</p>
              <p className="text-white/50 text-xs mt-1">
                {current + 1} / {slides.length}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-green/10 -z-10 animate-float" />
    </div>
  );
}
