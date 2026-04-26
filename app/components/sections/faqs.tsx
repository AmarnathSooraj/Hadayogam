"use client";

import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const faqsData = [
  {
    question: "What services does Hadayogam offer in Centre?",
    answer: "Hadayogam offers Hatha Yoga classes, Yoga Therapy, Thai Bodywork, focusing on natural healing and holistic wellness."
  },
  {
    question: "Who can benefit from Yoga Therapy in Kerala?",
    answer: "Our Yoga Therapy in Kerala is suitable for all age groups and helps manage stress, back pain, lifestyle diseases, anxiety, and chronic conditions through personalized treatment plans."
  },
  {
    question: "Are there beginner-friendly yoga classes?",
    answer: "Yes, Hadayogam provides beginner-friendly yoga classes in Guruvayur with step-by-step guidance, ensuring safety and proper practice for all levels."
  },
  {
    question: "How can I book a yoga or massage therapy session?",
    answer: "You can book your session easily through our WhatsApp chat link, phone call, or website. We also provide on-call massage and therapy services in Thrissur and nearby areas."
  },
  {
    question: "Do you provide home massage services in Guruvayur and nearby areas?",
    answer: "Yes, Hadayogam offers professional home service for massage therapy and yoga sessions in Guruvayur and nearby locations as convenience."
  },
  {
    question: "Is doctor consultation available?",
    answer: "Yes, online Ayurvedic Doctor consultation is available."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".faq-content");
    items.forEach((item, index) => {
      const isExpanded = activeIndex === index;
      gsap.to(item, {
        height: isExpanded ? "auto" : 0,
        opacity: isExpanded ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
        overwrite: true,
      });
    });
  }, { dependencies: [activeIndex], scope: containerRef });

  return (
    <section 
      id="faqs" 
      className="relative py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/faq.png')" }}
      ref={containerRef}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl relative mx-auto z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side: Header */}
          <div className="w-full lg:w-1/3 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-marcellus mb-4 leading-[1.15] text-white">
              Frequently <br className="hidden lg:block" />
              Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-white/70 font-man text-base md:text-lg leading-relaxed">
              Find answers to common questions about our yoga practices, therapies, and sessions.
            </p>
          </div>

          {/* Right Side: FAQs */}
          <div className="w-full lg:w-2/3 space-y-4">
            {faqsData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20"
              >
                <button
                  className="w-full p-4 flex items-center justify-between text-left text-white font-marcellus text-md md:text-lg hover:bg-white/5 transition-colors duration-300 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-8">{faq.question}</span>
                  <FaChevronDown 
                    className={`flex-shrink-0 transition-transform duration-300 text-primary ${activeIndex === index ? "rotate-180" : ""}`} 
                  />
                </button>
                
                <div 
                  className="faq-content overflow-hidden h-0 opacity-0"
                >
                  <div className="px-6 py-5 text-white/90 font-man text-md md:text-lg border-t border-white/10 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
