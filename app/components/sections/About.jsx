import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="pt-16 md:pt-24 px-4 md:px-8 lg:px-12 bg-bg text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">
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
          </div>
          
          <div className="mt-4">
            <button className="relative overflow-hidden group px-8 py-4 border border-primary text-primary font-man uppercase tracking-widest text-xs transition-colors duration-500">
              <span className="relative z-10 group-hover:text-bg transition-colors duration-500">Read Our Full Story</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></div>
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[550px] order-2 lg:order-1">
          
          {/* Main Image Container */}
          <div className="relative w-full h-full overflow-hidden shadow-2xl z-10 bg-stone-100 group">
            <Image 
              src="/img1.jpeg"
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
