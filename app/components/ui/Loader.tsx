import React from 'react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center">
        {/* Hadayogam Logo with pulse and fade */}
        <div className="relative w-24 h-24 animate-pulse transition-opacity duration-300">
          <Image 
            src="/hadayogam.png" 
            alt="Hadayogam Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
