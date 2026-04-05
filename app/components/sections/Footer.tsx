import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 md:pt-24 md:pb-12 font-man relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 items-start">
          
          {/* Brand and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-marcellus text-stone-100 mb-6">
              Hadayogam
            </h3>
            <div className="w-12 h-px bg-primary/50 mb-6"></div>
            <p className="leading-relaxed text-stone-400 text-sm md:text-base mb-6">
              A sanctuary for authentic Yoga, therapeutic bodywork, and mindful living. Embark on a profound journey into discovering your most authentic, balanced self.
            </p>
            <div className="flex flex-col space-y-2 text-stone-400 text-xs md:text-sm">
              <p><span className="text-primary font-semibold">Kswift:</span> KLMSME-3669/2026</p>
              <p><span className="text-primary font-semibold">MSME:</span> UDYAM-KL-13-0012446</p>
              <p><span className="text-primary font-semibold">Charitable Trust:</span> Reg no 56/2023</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm md:text-base font-marcellus text-stone-100 mb-6 uppercase tracking-[0.2em]">
              Explore
            </h4>
            <div className="w-12 h-px bg-primary/50 mb-6 md:hidden"></div>
            <ul className="space-y-4 text-sm md:text-base">
              <li><Link href="/" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start"><span className="text-primary/50 mr-2 text-xs">~</span> Home</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start"><span className="text-primary/50 mr-2 text-xs">~</span> About Us</Link></li>
              <li><Link href="#founder" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start"><span className="text-primary/50 mr-2 text-xs">~</span> Our Founder</Link></li>
              <li><Link href="#classes" className="hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start"><span className="text-primary/50 mr-2 text-xs">~</span> Classes & Therapies</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm md:text-base font-marcellus text-stone-100 mb-6 uppercase tracking-[0.2em]">
              Visit Us
            </h4>
            <div className="w-12 h-px bg-primary/50 mb-6 md:hidden"></div>
            <ul className="space-y-5 text-sm md:text-base text-stone-400">
              <li className="flex flex-col items-center md:items-start">
                <span className="text-primary uppercase tracking-widest text-xs mb-1.5 font-semibold">Location</span>
                <span>Near Chamundeswary Temple<br/>Guruvayoor, Kerala</span>
              </li>
              <li className="flex flex-col items-center md:items-start">
                <span className="text-primary uppercase tracking-widest text-xs mb-1.5 font-semibold">Contact</span>
                <a href="tel:+918590813596" className="hover:text-primary transition-colors duration-300 mb-1">+91 85908 13596</a>
                <a href="mailto:hadayogam@gmail.com" className="hover:text-primary transition-colors duration-300">hadayogam@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Map Iframe */}
          <div className="w-full h-48 md:h-full min-h-[180px] lg:min-h-[220px] rounded-sm overflow-hidden border border-stone-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100438.48624239853!2d76.012574!3d10.598695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba79590115e47c1%3A0xc3f173b22cbba63a!2sChamundeswary%20Temple%2C%20Guruvayur!5e0!3m2!1sen!2sin!4v1712134567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 uppercase tracking-widest">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Hadayogam. All rights reserved.</p>
          <div className="space-x-6 flex items-center">
            <span className="w-1 h-1 rounded-full bg-stone-700 md:hidden"></span>
            <Link href="/privacy" className="hover:text-stone-300 transition-colors duration-300">Privacy</Link>
            <span className="w-1 h-1 rounded-full bg-stone-700"></span>
            <Link href="/terms" className="hover:text-stone-300 transition-colors duration-300">Terms</Link>
            <span className="w-1 h-1 rounded-full bg-stone-700 md:hidden"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
