import React from 'react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative w-24 h-24 mb-6 animate-pulse">
          <Image 
            src="/hadayogam.png" 
            alt="Hadayogam Logo" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
