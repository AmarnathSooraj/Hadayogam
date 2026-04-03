import React from 'react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import SocialSidebar from '../components/ui/SocialSidebar'
import WhatsAppStickyButton from '../components/ui/WhatsAppStickyButton'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar/>
      <SocialSidebar />
      <WhatsAppStickyButton />
      {children}
      <Footer/> 
    </>
  )
}
