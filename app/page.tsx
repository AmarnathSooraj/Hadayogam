'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import MainLayout from "./layout/MainLayout";
import About from "./components/ui/About";

const heroImages = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];  

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate image transition
    imagesRef.current.forEach((img, index) => {
      if (index === currentImageIndex) {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: "sine.inOut",
        });
      } else {
        gsap.to(img, {
          opacity: 0,
          scale: 1.05,
          duration: 2.5,
          ease: "sine.inOut",
        });
      }
    });
  }, [currentImageIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");
    });

    return () => ctx.revert();
  }, []);

  return (
    <MainLayout>
      <section ref={containerRef} className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={src}
              ref={(el) => { imagesRef.current[index] = el; }}
              className="absolute inset-0 opacity-0"
              style={{ transform: 'scale(1.05)' }}
            >
              <Image
                src={src}
                alt={`Yoga Background ${index + 1}`}
                fill
                className="object-cover transition-all"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/60 z-10" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto pb-24 md:pb-32">
          <div className="max-w-2xl">
            <h1 
              ref={titleRef}
              className="text-5xl md:text-8xl font-bask text-white mb-6 tracking-tight leading-[1.1]"
            >
              Find Your <br /> 
              <span className="italic">Inner Balance</span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-stone-200 text-sm md:text-base font-man uppercase tracking-wide mb-10"
            >
              Traditional Hatha Yoga for the modern soul. Join our sanctuary in the heart of the valley.
            </p>
            
            <div className="flex">
              <Link 
                href="#classes"
                className="inline-block px-10 py-4 bg-white text-black text-xs font-man uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-500 rounded-full"
              >
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </MainLayout>
  );
}

