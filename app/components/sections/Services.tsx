'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Yoga Programs',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    icon: '/icons/lotus.png',
    items: [
      {
        name: 'Hatha Yoga Regular Wellness Classes',
        description: 'A structured and traditional practice focusing on asana, breath awareness, and relaxation to improve flexibility, strength, and overall well-eight.'
      },
      {
        name: 'Yoga Therapy',
        description: 'A personalized healing approach using specific yogic techniques to address physical, mental, and lifestyle-related health conditions.'
      },
      {
        name: 'Face Yoga',
        description: 'Natural techniques combining facial exercises, breathwork, and relaxation to enhance skin tone, reduce tension, and promote inner radiance.'
      },
      {
        name: 'Pregnancy Yoga',
        description: 'Gentle and safe practices designed for expectant mothers to support physical comfort, emotional balance, and preparation for childbirth. Participants should consult their doctor and obtain permission before joining.'
      },
      {
        name: 'Personal Yoga Therapy Sessions',
        description: 'One-on-one sessions tailored to individual needs, focusing on specific health goals, recovery, and deep transformation.'
      },
    ],
  },
  {
    title: 'Mind & Yogic Philosophy',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200&auto=format&fit=crop',
    icon: '/icons/meditation.png',
    items: [
      {
        name: 'Mind Management Techniques based on Yoga Sutra',
        description: 'Practical tools derived from classical yogic psychology to manage stress, emotions, and mental clarity in daily life.'
      },
      {
        name: 'Classical Concentration & Meditation Techniques',
        description: 'Authentic practices from traditional yogic texts to develop focus, inner awareness, and meditative stability.'
      },
    ],
  },
  {
    title: 'Traditional Yogic Practices',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200&auto=format&fit=crop',
    icon: '/icons/ritual.png',
    items: [
      {
        name: 'Shatkarma (Yogic Cleansing Techniques)',
        description: 'Ancient purification methods to cleanse the body and prepare it for deeper yogic practices.'
      },
      {
        name: 'Bandhas & Mudras',
        description: 'Subtle energy control techniques that enhance pranic flow, stability, and inner awakening.'
      },
      {
        name: 'Classical Pranayama Practices',
        description: 'Powerful breath regulation techniques to balance the nervous system, increase vitality, and deepen awareness.'
      },
    ],
  },
  {
    title: 'Thai Bodywork Therapies',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
    icon: '/icons/chakra.png',
    items: [
      {
        name: 'Traditional Thai Massage Therapy',
        description: 'A dynamic healing system combining acupressure, assisted stretching, and energy line work to release tension and improve circulation.'
      },
      {
        name: 'Thai Head Massage',
        description: 'A deeply relaxing therapy focusing on the head, neck, and shoulders to relieve stress and mental fatigue.'
      },
      {
        name: 'Foot Marma Therapy',
        description: 'Stimulation of vital energy points in the feet to promote organ health and overall balance.'
      },
      {
        name: 'Thai Full Body Royal Oil Massage',
        description: 'A luxurious therapeutic treatment using warm oils to relax muscles, nourish the body, and calm the mind.'
      },
      {
        name: 'Disease-Based Thai & Yoga Therapy Programs',
        description: 'Integrated healing programs combining yoga and Thai therapy techniques tailored for specific health conditions. Participants should consult their doctor and obtain permission before joining.'
      },
    ],
  },
];

export default function Services() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const toggleItem = (name: string) => {
    setActiveItem(activeItem === name ? null : name);
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header animation
    gsap.from(containerRef.current.querySelector('.services-header'), {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current.querySelector('.services-header'),
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    // Row animations
    const rows = gsap.utils.toArray<HTMLElement>('.service-row');
    rows.forEach((row, i) => {
      const image = row.querySelector('.image-col');
      const content = row.querySelector('.content-col');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(image, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        clearProps: "all"
      })
      .from(content, {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power1.out",
        clearProps: "all"
      }, "-=0.3");
    });
  }, { scope: containerRef });

  useGSAP(() => {
    if (!containerRef.current) return;

    // Find all item descriptions in the section
    const descs = gsap.utils.toArray<HTMLElement>('.service-item-desc');

    descs.forEach((desc) => {
      const isExpanded = desc.dataset.name === activeItem;

      gsap.to(desc, {
        height: isExpanded ? 'auto' : 0,
        opacity: isExpanded ? 1 : 0,
        marginBottom: isExpanded ? 16 : 0,
        duration: 0.6,
        ease: 'expo.out',
        overwrite: 'auto',
      });
    });
  }, { dependencies: [activeItem], scope: containerRef });

  return (
    <section className="bg-bg text-stone-900 py-16 md:py-24" id="classes" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="services-header text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-stone-800 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-md md:text-lg text-stone-600 leading-relaxed font-man">
            At Hadayogam Yoga & Thai Bodywork Wellness Center, we offer authentic yogic practices
            and traditional therapeutic bodywork designed to restore balance in body, mind, and energy.
            Our approach integrates classical wisdom with practical healing methods for modern life.
          </p>
        </div>

        {/* Services List */}
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-row flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
            >
              {/* Image Side - Reduced Size to 5/12 */}
              <div className="image-col w-full lg:w-5/12 relative h-87.5 md:h-100 lg:h-112.5 shadow-2xl bg-stone-100 group overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
              </div>

              {/* Content Side - Increased Size to 7/12 */}
              <div className="content-col w-full lg:w-7/12 flex flex-col justify-center space-y-8 md:px-4 lg:px-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 relative shrink-0">
                      <Image
                        src={service.icon}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-marcellus text-stone-800">
                      {service.title}
                    </h3>
                  </div>
                  <div className="h-px w-24 bg-primary mb-2"></div>
                </div>

                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className={`border-b border-stone-200 last:border-0 pb-2 last:pb-0 transition-all duration-300 ${activeItem === item.name ? 'p-3 rounded-md bg-stone-50' : ''}`}
                    >
                      <button
                        onClick={() => toggleItem(item.name)}
                        className="w-full flex items-center justify-between text-left group focus:outline-none py-2"
                      >
                        <span className={`text-md md:text-lg font-marcellus transition-colors duration-300 ${activeItem === item.name ? 'text-primary' : 'text-stone-700 group-hover:text-primary'}`}>
                          {item.name}
                        </span>
                        <span className={`shrink-0 ml-4 transition-all duration-300 ${activeItem === item.name ? 'text-primary' : 'text-stone-400 group-hover:text-primary'}`}>
                          {activeItem === item.name ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                        </span>
                      </button>

                      <div
                        className="service-item-desc overflow-hidden h-0 opacity-0"
                        data-name={item.name}
                      >
                        <p className="text-stone-600 font-man text-base md:text-md leading-relaxed pr-8 py-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

