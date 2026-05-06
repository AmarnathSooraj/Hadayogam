'use client';

import React, { useState, useEffect } from 'react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import SocialSidebar from '../components/ui/SocialSidebar'
import WhatsAppStickyButton from '../components/ui/WhatsAppStickyButton'
import Loader from '../components/ui/Loader'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure loader is visible during initial render/refresh
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-[9999] transition-opacity duration-700 ease-in-out pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        <Loader />
      </div>
      <div className={`transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar/>
        <SocialSidebar />
        <WhatsAppStickyButton />
        {children}
        <Footer/> 
      </div>
    </>
  )
}
