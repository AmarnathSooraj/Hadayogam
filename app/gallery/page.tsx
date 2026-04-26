"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MainLayout from "../layout/MainLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const galleryImages = [
  { src: "/img1.jpeg", alt: "Hadayogam Yoga Session 1", category: "Yoga" },
  { src: "/img2.jpeg", alt: "Hadayogam Yoga Session 2", category: "Yoga" },
  { src: "/img3.jpeg", alt: "Hadayogam Yoga Session 3", category: "Therapy" },
  { src: "/img4.jpeg", alt: "Hadayogam Yoga Session 4", category: "Meditation" },
  { src: "/hada.jpeg", alt: "Hadayogam Wellness Centre", category: "Centre" },
  { src: "/hadayogam.jpeg", alt: "Yoga Practice", category: "Yoga" },
  { src: "/services/sun.jpeg", alt: "Outdoor Yoga", category: "Yoga" },
  { src: "/services/mind.jpeg", alt: "Meditation Practice", category: "Meditation" },
  { src: "/services/thai.jpeg", alt: "Thai Massage Therapy", category: "Therapy" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial header entrance
    gsap.from(".gallery-title", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate in all gallery items on load
    gsap.from(".gallery-item", {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "all"
    });
  }, { scope: containerRef });

  // Lightbox animation
  const lightboxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selectedImage) {
      gsap.fromTo(lightboxRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(".lightbox-content", 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.1 }
      );
    }
  }, [selectedImage]);

  const closeLightbox = () => {
    gsap.to(lightboxRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelectedImage(null)
    });
  };

  return (
    <MainLayout>
      <section ref={containerRef} className="min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-12 bg-bg">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 gallery-title">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-marcellus text-stone-800 mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-stone-600 font-man text-lg max-w-2xl mx-auto leading-relaxed">
              A visual journey through our sanctuary of wellness, capturing moments of peace, 
              balance, and transformation.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
            {galleryImages.length > 0 ? (
              galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="gallery-item relative aspect-[4/5] cursor-pointer group overflow-hidden bg-stone-100 rounded-sm"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-man uppercase tracking-[0.2em] text-xs">View Image</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                <p className="text-stone-400 font-man text-lg italic">
                  No images found
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            ref={lightboxRef}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="lightbox-content relative w-full h-full max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
