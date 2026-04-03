'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(imageRef.current, {
      scale: 0.98,
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
      clearProps: "all"
    })
    .from(contentRef.current.querySelectorAll('h2, p, .text-primary'), {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power1.out",
      clearProps: "all"
    }, "-=0.3");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="founder" className="py-16 md:py-24 bg-bg text-stone-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Founder Portrait */}
        <div ref={imageRef} className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white z-10">
            <Image 
              src="/founder.webp"
              alt="Abhilash P.G. - Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Title & Role */}
        <div ref={contentRef} className="mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-marcellus text-stone-900 mb-2">
            Abhilash P.G.
          </h2>
          <p className="text-primary font-man uppercase tracking-[0.2em] text-xs font-semibold">
            Founder & Yoga Teacher
          </p>
          
          {/* Main Quote / Philosophy */}
          <div className="relative w-full max-w-4xl px-4 md:px-0 mt-8">
            <p className="relative z-10 text-md md:text-lg font-marcellus text-stone-800 text-center">
              At Hadayogam, the approach focuses on authentic practice, therapeutic care, and conscious lifestyle transformation, helping individuals cultivate strength, flexibility, mental stability, and deeper awareness.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
