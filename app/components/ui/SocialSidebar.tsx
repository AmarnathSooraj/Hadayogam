'use client';

import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaWhatsapp, href: 'https://wa.me/918590813596', label: 'WhatsApp' },
];

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 bg-white p-3 rounded-l-xl shadow-lg mix-blend-difference group">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-black hover:scale-110 transition-transform duration-300"
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
}
