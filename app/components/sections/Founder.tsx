import React from 'react';
import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="py-16 md:py-24 bg-bg text-stone-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Founder Portrait */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
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
        <div className="mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-marcellus text-stone-900 mb-2">
            Abhilash P.G.
          </h2>
          <p className="text-primary font-man uppercase tracking-[0.2em] text-xs font-semibold">
            Founder & Lead Therapist
          </p>
        </div>
        
        {/* Main Quote / Philosophy */}
        <div className="relative w-full max-w-4xl px-4 md:px-0">
          <p className="relative z-10 text-md md:text-lg font-marcellus text-stone-800 text-center">
            At Hadayogam, the approach focuses on authentic practice, therapeutic care, and conscious lifestyle transformation, helping individuals cultivate strength, flexibility, mental stability, and deeper awareness.
          </p>
        </div>
        
        {/* Qualifications Section */}
        {/* <div className="w-full max-w-2xl px-4 text-left">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-stone-300 w-12 md:w-24"></div>
            <h3 className="text-lg md:text-xl font-marcellus text-stone-800 px-4 uppercase tracking-widest text-center">
              Qualifications & Certifications
            </h3>
            <div className="h-px bg-stone-300 w-12 md:w-24"></div>
          </div>
          
          <ul className="space-y-3 text-stone-600 font-man text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>MSc in Yoga</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>BSc in Psychology</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>TTC 200 & ATTC 300 (Yoga Alliance &ndash; UK)</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>YWI Level 2 & YPI (Ministry of AYUSH, Government of India)</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>CYP (K Dam)</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>Diploma in Thai Massage Therapy</span>
            </li>
            <li className="flex items-start md:col-span-2">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>Thai Royal Massage Therapy &ndash; Bangkok, Thailand</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>Advanced Tantra Philosophy</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 text-lg leading-none">•</span>
              <span>Certificate in Parapsychology</span>
            </li>
          </ul>
        </div> */}
        
      </div>
    </section>
  );
}
