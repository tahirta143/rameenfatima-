'use client';

import React, { useEffect, useRef } from 'react';
import { MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BrandCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const banner1Ref = useRef<HTMLDivElement>(null);
  const banner2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // First banner slides down from top smoothly
      gsap.fromTo(
        banner1Ref.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: banner1Ref.current,
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Second banner slides down from top right after the first banner
      gsap.fromTo(
        banner2Ref.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: banner2Ref.current,
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full space-y-0">
      {/* 1st Section: Dark Purple Panel - "READY TO MAKE YOUR BRAND VISIBLE?" */}
      <section
        ref={banner1Ref}
        className="w-full bg-[#20003b] dark:bg-[#18002d] text-white py-12 sm:py-16 text-center relative overflow-hidden border-t border-purple-500/20 shadow-md opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#d8b4fe] uppercase">
            READY TO MAKE YOUR BRAND
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            VISIBLE?
          </h2>
        </div>
      </section>

      {/* 2nd Section: Vibrant Purple Gradient Banner - "LET'S TURN YOUR VISION INTO A VISUAL REALITY." */}
      <section
        ref={banner2Ref}
        className="w-full bg-gradient-to-r from-[#3b0764] via-[#7e22ce] to-[#b000ff] text-white py-14 sm:py-20 text-center relative overflow-hidden shadow-xl opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Subhead */}
          <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-purple-100 uppercase">
            LET'S TURN YOUR VISION INTO A VISUAL REALITY.
          </p>

          {/* Main Statement (Decreased font size to comfortable, tasteful proportion) */}
          <p className="text-base sm:text-xl lg:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
            If you're looking to transform your brand's visual identity or need a strategic design partner to help your startup scale, let's connect. DM me <span className="underline decoration-wavy decoration-white/80">'BRANDING'</span> and let's build something impossible to ignore.
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/923147416969?text=Hi%20Rameen,%20I'm%20interested%20in%20BRANDING%20for%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#3b0764] font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-[#3b0764]" />
              <span>DM 'BRANDING' on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>

            <a
              href="mailto:rameenfat0808@gmail.com?subject=Branding%20Inquiry%20-%20Rameen%20Fatima"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/80 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 backdrop-blur-md hover:scale-105"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Send an Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
