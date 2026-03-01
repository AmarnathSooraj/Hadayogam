'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Classes', href: '#classes' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const mobileNavRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    gsap.set(navRef.current, { y: -80, autoAlpha: 0 });
    gsap.set(linksRef.current, { y: -16, opacity: 0 });
    gsap.set(overlayRef.current, { autoAlpha: 0 });
    gsap.set(mobileNavRef.current, { x: '-100%' });

    gsap.timeline()
      .to(navRef.current, { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power4.out' })
      .to(linksRef.current, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, '-=0.4');

    tl.current = gsap.timeline({ paused: true })
      .to(line1Ref.current, { 
        y: 7, 
        rotation: 45, 
        duration: 0.35, 
        ease: 'power2.inOut' 
      }, 0)
      .to(line2Ref.current, { 
        scaleX: 0, 
        opacity: 0, 
        duration: 0.2, 
        ease: 'power2.in' 
      }, 0)
      .to(line3Ref.current, { 
        y: -9, 
        rotation: -45, 
        duration: 0.35, 
        ease: 'power2.inOut' 
      }, 0)
      .to(mobileNavRef.current, { x: '0%', duration: 0.45, ease: 'power3.out' }, 0)
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.45, ease: 'power3.out' }, 0);
  });

  const toggle = (open: boolean) => {
    setIsOpen(open);
    open ? tl.current?.play() : tl.current?.reverse();
    document.body.style.overflow = open ? 'hidden' : '';
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={() => toggle(false)}
        style={{ visibility: 'hidden', opacity: 0 }}
        className="fixed inset-0 bg-black/60 z-[40] lg:hidden backdrop-blur-sm"
      />

      <nav
        ref={navRef}
        style={{ visibility: 'hidden' }}
        className="absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-secondary/20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-auto">
            {/* Logo */}
            <Link href="/">
              <Image src="/hadayogam.png" alt="Hadayogam Logo" width={100} height={100} className="w-16 md:w-20 mix-blend-multiply" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10 text-[0.9em] font-man uppercase tracking-tigher text-white/70">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  ref={(el) => { linksRef.current[index] = el; }}
                  className="transition-colors font-medium hover:opacity-60"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            {!isOpen && (
              <button
                className="md:hidden flex items-center justify-center w-10 font-man h-10 focus:outline-none relative z-[30]"
                onClick={() => toggle(true)}
                aria-label="Open menu"
              >
                <div className="relative w-6 h-4">
                  <span
                    ref={line1Ref}
                    className="absolute top-0 left-0 block w-6 h-[2.5px] rounded-full bg-primary"
                  />
                  <span
                    ref={line2Ref}
                    className="absolute top-[7px] left-0 block w-6 h-[2.5px] rounded-full bg-primary"
                  />
                  <span
                    ref={line3Ref}
                    className="absolute bottom-0 left-0 block w-6 h-[2.5px] rounded-full bg-primary"
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar — outside <nav> to avoid inheriting visibility:hidden */}
      <div
        ref={mobileNavRef}
        style={{ transform: 'translateX(-100%)' }}
        className="fixed inset-y-0 left-0 w-[85vw] md:w-[75vw] lg:hidden bg-stone-900 z-[60] flex flex-col shadow-2xl"
      >
        {/* Sidebar Logo & Close Button */}
        <div className="h-20 flex items-center justify-between border-b border-stone-800 px-6 shrink-0 mb-10">
          <Link href="/" onClick={() => toggle(false)}>
            <Image src="/hadayogam.png" alt="Hadayogam Logo" width={80} height={80} className="w-16 brightness-0 invert" />
          </Link>
          <button 
            onClick={() => toggle(false)}
            className="text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-current rotate-45" />
              <span className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-current -rotate-45" />
            </div>
          </button>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col flex-grow font-sans uppercase overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[0.95em] font-medium tracking-tight text-white/70 hover:text-white transition-all duration-300 w-full py-5 px-8 border-b border-stone-800/60"
              onClick={() => toggle(false)}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2 inline-block">
                {item.name}
              </span>
              <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/25 transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-10 text-[10px] font-man uppercase tracking-[0.3em] text-stone-600 shrink-0">
           HadaYogam
        </div>
      </div>
    </>
  );
}


