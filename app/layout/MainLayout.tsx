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
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Navbar/>
      <SocialSidebar />
      <WhatsAppStickyButton />
      <div className={`transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        {children}
        <Footer/> 
      </div>
    </>
  )
}
