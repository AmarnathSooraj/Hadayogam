import React from 'react'
import Image from 'next/image'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/> 
    </>
  )
}
