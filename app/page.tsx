'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import MainLayout from "./layout/MainLayout";
import About from "./components/sections/About";
import Founder from "./components/sections/Founder";
import Services from "./components/sections/Services";
import FAQs from "./components/sections/faqs";
import Contact from "./components/sections/Contact";

gsap.registerPlugin(useGSAP);

const heroImages = [
  "/img1.jpeg",
  "/img2.jpeg", 
  "/img3.jpeg",
  "/img4.jpeg",
];  

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hadayogamRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Initial animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });
    
    tl.from(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
      force3D: true,
      clearProps: "all"
    })
    .from(hadayogamRef.current, {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      force3D: true,
      clearProps: "all"
    }, "-=0.2")
    .from(titleRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
      force3D: true,
      clearProps: "all"
    }, "-=0.2")
    .from(subtitleRef.current, {
      y: 8,
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      force3D: true,
      clearProps: "all"
    }, "-=0.15");
  }, { scope: containerRef });

  // Slider animations
  useGSAP(() => {
    imagesRef.current.forEach((img, index) => {
      if (!img) return;
      
      if (index === currentImageIndex) {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut",
          force3D: true,
          overwrite: "auto"
        });
      } else {
        gsap.to(img, {
          opacity: 0,
          scale: 1.02,
          duration: 1.5,
          ease: "power2.inOut",
          force3D: true,
          overwrite: "auto"
        });
      }
    });
  }, { dependencies: [currentImageIndex], scope: containerRef });

  return (
    <MainLayout>
      <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={src}
              ref={(el) => { imagesRef.current[index] = el; }}
              className="absolute inset-0 opacity-0 pointer-events-none"
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
          <div ref={logoRef} className="absolute -top-8 md:-top-10 -z-20">
            <Image src="/landingLogo.png" alt="Hadayogam Logo" width={100} height={100} className="w-20 md:w-38" />
          </div>
          <div className="mb-2"
            ref={hadayogamRef}>
            <p className="font-dr text-[5rem] md:text-[9rem] text-white">Hadayogam</p>
            <p className="text-stone-300 font-man text-sm md:text-lg lg:text-xl mb-8 -top-2 relative tracking-wide opacity-90">A sanctuary for yoga, meditation, and holistic wellness.</p>
          </div>
          <h1 
            ref={titleRef}
            className="text-xl relative -top-4 md:text-3xl lg:text-4xl font-marcellus text-white mb-2"
          >
           Transform your lifestyle through mindful movement for a healthier, more balanced life.
          </h1>
          <div ref={subtitleRef}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-6 py-4 border rounded-full border-white/50 text-white font-man uppercase tracking-widest text-xs font-extrabold md:text-md hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explore Classes
            </button>
          </div>
        </div>
      </section>
      <About/>
      <Founder/>
      <Services/>
      <FAQs />
      <Contact/>
    </MainLayout>
  );
}

