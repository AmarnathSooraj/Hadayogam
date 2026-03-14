'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import MainLayout from "./layout/MainLayout";
import About from "./components/sections/About";
import Founder from "./components/sections/Founder";
import Services from "./components/sections/Services";

const heroImages = [
  "/img1.jpeg",
  "/img2.jpeg", 
  "/img3.jpeg",
  "/img4.jpeg",
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-6xl font-marcellus text-white mb-4"
          >
           Transform your lifestyle through mindful movement.
          </h1>
          <div ref={subtitleRef}>
            <Link 
              href="#classes"
              className="inline-block px-6 py-3 border rounded-full border-white/50 text-white font-man uppercase tracking-widest text-xs md:text-md hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explore Classes
            </Link>
          </div>
        </div>
      </section>
      <About/>
      <Founder/>
      <Services/>
    </MainLayout>
  );
}

