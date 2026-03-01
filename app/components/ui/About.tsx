'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { title: 'Authentic Yoga', body: 'Classical yogic practice rooted in Indian wisdom.' },
  { title: 'Thai Bodywork', body: 'Therapeutic healing touch for deep restoration.' },
  { title: 'Inner Growth', body: 'A sacred space for mental clarity and transformation.' },
];

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });
      gsap.from(imageRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: imageRef.current, start: 'top 80%' },
      });
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%' },
      });
      pillarsRef.current.forEach((el, i) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header row */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="text-[10px] font-man uppercase tracking-[0.25em] text-stone-400 mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-6xl font-bask text-stone-900 leading-[1.1]">
              Hadayogam Yoga &amp;<br />
              <span className="italic text-stone-400">Thai Bodywork Center</span>
            </h2>
          </div>
          <p className="text-[10px] font-man text-stone-400 uppercase tracking-[0.2em] md:text-right self-end">
            Kerala, India
          </p>
        </div>

        {/* Full-width rule */}
        <div className="w-full h-px bg-stone-100 mb-14" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Image */}
          <div ref={imageRef} className="relative h-[500px] md:h-[640px] overflow-hidden">
            <Image
              src="/img2.jpg"
              alt="Yoga Practice at Hadayogam"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-block bg-white/90 backdrop-blur-sm px-5 py-3">
                <p className="text-[10px] font-man uppercase tracking-[0.22em] text-stone-600">
                  Traditional · Holistic · Authentic
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="flex flex-col justify-between gap-10 lg:pt-2 h-full">

            <div className="space-y-6">
              <h3 className="text-xl font-bask italic text-stone-500">Who We Are</h3>
              <p className="text-base md:text-[17px] text-stone-600 leading-[1.9] font-man font-light">
                Hadayogam is a traditional and holistic wellness space dedicated to authentic yogic practice, therapeutic bodywork, and inner transformation. Rooted in classical Indian wisdom and enriched with healing touch therapies, we offer a sacred environment for physical health, mental clarity, and spiritual growth.
              </p>
              <p className="text-sm text-stone-400 leading-[1.9] font-man font-light">
                Located in Kerala, we blend ancient yogic traditions with modern wellness understanding to support complete mind–body balance.
              </p>
            </div>

            {/* Rule */}
            <div className="w-full h-px bg-stone-100" />

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-6">
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => { pillarsRef.current[i] = el; }}
                  className="space-y-3"
                >
                  <div className="w-8 h-px bg-stone-300 mb-4" />
                  <h4 className="text-[10px] font-man uppercase tracking-[0.2em] text-stone-700 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-400 font-man leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="#classes"
                className="inline-block px-10 py-4 border border-stone-800 text-stone-800 text-[10px] font-man uppercase tracking-[0.2em] hover:bg-stone-800 hover:text-white transition-all duration-500 rounded-full"
              >
                Explore Our Offerings
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
