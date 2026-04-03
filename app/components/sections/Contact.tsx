'use client';

import React, { useRef } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!infoRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(infoRef.current.querySelectorAll('h2, p, .group'), {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power1.out",
      clearProps: "all"
    })
    .from(formRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      clearProps: "all"
    }, "-=0.3");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 bg-bg text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Contact Information */}
          <div ref={infoRef} className="w-full lg:w-5/12 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-stone-800 mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-md md:text-lg text-stone-600 font-man leading-relaxed">
                Whether you're a beginner or an experienced practitioner, we're here to support your path to wellness. Reach out to start your journey.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-marcellus text-stone-800 text-md mb-1 uppercase tracking-widest">Location</h4>
                  <p className="font-man text-stone-600">Near Chamundeswary Temple, <br />Guruvayoor, Kerala</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-marcellus text-stone-800 text-md mb-1 uppercase tracking-widest">Call Us</h4>
                  <p className="font-man text-stone-600 hover:text-primary transition-colors">
                    <a href="tel:+918590813596">+91 85908 13596</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-marcellus text-stone-800 text-md mb-1 uppercase tracking-widest">Email</h4>
                  <p className="font-man text-stone-600 hover:text-primary transition-colors">
                    <a href="mailto:hadayogam@gmail.com">hadayogam@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <FiClock size={20} />
                </div>
                <div>
                  <h4 className="font-marcellus text-stone-800 text-md mb-1 uppercase tracking-widest">Hours</h4>
                  <p className="font-man text-stone-600">Mon - Sat: 6:00 AM - 8:00 PM <br />Sun: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="w-full lg:w-7/12 bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-stone-200 shadow-xl relative overflow-hidden">
            {/* Design Element */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-man uppercase tracking-widest text-stone-500 font-semibold">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-stone-300 py-3 font-man text-stone-800 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-man uppercase tracking-widest text-stone-500 font-semibold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@mail.com"
                    className="w-full bg-transparent border-b border-stone-300 py-3 font-man text-stone-800 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-man uppercase tracking-widest text-stone-500 font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry about..."
                  className="w-full bg-transparent border-b border-stone-300 py-3 font-man text-stone-800 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-man uppercase tracking-widest text-stone-500 font-semibold">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-transparent border-b border-stone-300 py-3 font-man text-stone-800 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="relative overflow-hidden group px-10 py-4 bg-stone-900 text-white font-man uppercase tracking-widest text-xs transition-colors duration-500 w-full md:w-auto"
                >
                  <span className="relative z-10 group-hover:text-stone-900 transition-colors duration-500">Send Message</span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></div>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
