import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-stone-900 pt-20 pb-10 overflow-hidden border-t border-stone-800">
      {/* Background Large Text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none overflow-hidden whitespace-nowrap">
        <span className="text-[12vw] font-bask font-black uppercase tracking-tighter text-stone-800/30">
          Hadayogam
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="text-xs font-man uppercase tracking-[0.2em] mb-6 font-semibold text-stone-400">Address</h3>
            <p className="text-sm text-stone-300 leading-relaxed font-man">
              123 Yoga Street, Wellness District<br />
              Ancient Valley, State 56789
            </p>
          </div>

          {/* Column 2 */}
          <div className="md:text-center">
            <h3 className="text-xs font-man uppercase tracking-[0.2em] mb-6 font-semibold text-stone-400">Quick Links</h3>
            <div className="flex flex-col space-y-3 text-sm font-man text-stone-300">
              <Link href="#about" className="hover:text-white transition-colors">About</Link>
              <Link href="#classes" className="hover:text-white transition-colors">Classes</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="md:text-right">
            <h3 className="text-xs font-man uppercase tracking-[0.2em] mb-6 font-semibold text-stone-400">Contact</h3>
            <p className="text-sm text-stone-300 leading-relaxed font-man">
              hello@hadayogam.com<br />
              +1 (234) 567-890
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-man uppercase tracking-widest text-stone-500">
            © 2024 Hada Yogam. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-man uppercase tracking-widest text-stone-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
