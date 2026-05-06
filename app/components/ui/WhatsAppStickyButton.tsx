'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppStickyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Always visible on gallery page
    if (pathname === '/gallery') {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show button after scrolling past the landing page (approx 80vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-60 lg:hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <a
        href="https://wa.me/918590813596"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
