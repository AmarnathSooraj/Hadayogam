"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MainLayout from "../layout/MainLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const galleryImages = [
  "/gallery/galleryImage1.png",
  "/gallery/galleryImage2.png",
  "/gallery/galleryImage3.png",
  "/gallery/galleryImage4.png",
  "/gallery/galleryImage5.png",
  "/gallery/galleryImage6.png",
  "/gallery/galleryImage7.png",
  "/gallery/galleryImage8.png",
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
          <div className="text-center mb-10 gallery-title">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-marcellus text-stone-800 mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-stone-600 font-man text-lg max-w-2xl mx-auto leading-snug">
              A visual journey through our sanctuary of wellness, capturing moments of peace, 
              balance, and transformation.
            </p>
          </div>

          {/* New Grid layout */}
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="gallery-item group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-stone-100 shadow-md transition-all duration-300 hover:shadow-xl"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`HadaYogam Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/90 p-3 rounded-full shadow-lg">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <p className="text-stone-400 font-man text-lg italic">
                No images found
              </p>
            </div>
          )}
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
