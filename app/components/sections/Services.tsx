import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Yoga Programs',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    items: [
      'Hatha Yoga Regular Wellness Classes',
      'Yoga Therapy',
      'Face Yoga',
      'Pregnancy Yoga',
      'Personal Yoga Therapy Sessions',
    ],
  },
  {
    title: 'Mind & Yogic Philosophy',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200&auto=format&fit=crop',
    items: [
      'Mind Management Techniques based on Yoga Sutra',
      'Classical Concentration & Meditation Techniques from traditional texts',
    ],
  },
  {
    title: 'Traditional Yogic Practices',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200&auto=format&fit=crop',
    items: [
      'Shatkarma (Yogic Cleansing Techniques)',
      'Bandhas & Mudras',
      'Classical and Powerful Pranayama Practices',
    ],
  },
  {
    title: 'Thai Bodywork Therapies',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
    items: [
      'Traditional Thai Massage Therapy',
      'Thai Head Massage',
      'Foot Marma Therapy',
      'Thai Full Body Royal Oil Massage',
      'Disease-Based Thai & Yoga Therapy Programs',
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-bg text-stone-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus text-stone-800 mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-man">
            At Hadayogam Yoga & Thai Bodywork Wellness Center, we offer traditional yogic practices 
            and therapeutic bodywork for holistic well-being.
          </p>
        </div>

        {/* Services List */}
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] shadow-2xl bg-stone-100 group overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 md:px-4 lg:px-0">
                <h3 className="text-3xl md:text-4xl font-marcellus text-stone-800">
                  {service.title}
                </h3>
                <div className="h-px w-24 bg-primary"></div>
                <ul className="space-y-2 pt-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 font-man text-base md:text-lg group">
                      <span className="mt-1 shrink-0 text-secondary text-lg leading-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
