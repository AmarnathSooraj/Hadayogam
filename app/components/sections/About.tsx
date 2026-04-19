'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      clearProps: "all"
    })
    .from(contentRef.current.querySelectorAll('h2, p'), {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power1.out",
      clearProps: "all"
    }, "-=0.4");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-bg text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

        {/* Content Side */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus mb-4 leading-[1.15] text-stone-800">
            About <br className="hidden md:block" />
            <span className="text-primary">Hadayogam</span>
          </h2>

          <div className="space-y-4 text-stone-600 font-man text-base md:text-lg leading-relaxed relative ">
            <p className="first-letter:text-5xl first-letter:font-marcellus first-letter:text-primary first-letter:mr-2 first-letter:float-left">
              Hadayogam Yoga &amp; Thai Bodywork Wellness Center, located near Chamundeswary Temple, Guruvayoor, is dedicated to promoting holistic health through the authentic traditions of Yoga, therapeutic bodywork, and mindful living.
            </p>
            <p>
              Founded by Abhilash P.G., Hadayogam integrates classical Hatha Yoga practices, Yoga Therapy, mindfulness techniques, and traditional Thai bodywork therapies to support physical health, mental clarity, and inner balance.
            </p>
            <p>
              Abhilash is an internationally certified and experienced Yoga Teacher and Yoga Therapist with a strong academic and traditional background. His teaching combines the wisdom of classical yogic texts with modern therapeutic understanding, offering personalized guidance for wellness, disease management, and overall well-being.
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div ref={imageRef} className="relative w-full lg:w-1/2 h-100 md:h-137.5 order-2 lg:order-1">

          {/* Main Image Container */}
          <div className="relative w-full h-full overflow-hidden shadow-2xl z-10 bg-stone-100 group">
            <Image
              src="/hada.jpeg"
              alt="Hadayogam Wellness"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
