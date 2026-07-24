'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Star, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Autoplay deferred by browser policy');
      });
    }

    const ctx = gsap.context(() => {
      // Function to trigger smooth Left Hero text entrance animation
      const animateHeroText = () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Top badge slides in from Left
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, x: -80, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9 }
        )
          // Main Headline slides in from Left
          .fromTo(
            titleRef.current,
            { opacity: 0, x: -90, scale: 0.95 },
            { opacity: 1, x: 0, scale: 1, duration: 1 },
            '-=0.6'
          )
          // Subtitle description slides in from Left
          .fromTo(
            subtitleRef.current,
            { opacity: 0, x: -80, filter: 'blur(8px)' },
            { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.9 },
            '-=0.6'
          )
          // CTA Buttons & Stats bar slide in from Left
          .fromTo(
            ctaRef.current,
            { opacity: 0, x: -70, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.8 },
            '-=0.5'
          );
      };

      // 1. Initial Page Load: Wait 2.2s for Preloader to count & unmount, then play animation right in view!
      const timer = setTimeout(() => {
        animateHeroText();
      }, 2200);

      // 2. Re-trigger animation whenever user scrolls back UP to the Hero section
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top 50%',
        onEnterBack: () => {
          animateHeroText();
        },
      });

      return () => clearTimeout(timer);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-40 pb-24 flex items-center justify-start overflow-hidden bg-black text-white transition-colors duration-500"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-60"
        >
          <source src="/images/herovideo.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay Gradient to guarantee 100% clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Main Full-Screen Width Layout Container */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl space-y-7 text-left">

          {/* Top Pill Badge */}
          <div ref={badgeRef} className="flex items-center gap-2 opacity-0">
            <span className="px-4 py-2 rounded-full bg-neutral-900/90 border border-white/20 text-slate-200 text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 backdrop-blur-md shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7] animate-pulse" />
              GRAPHIC &amp; BRAND DESIGNER
            </span>
          </div>

          {/* Giant Bold Headline (BRANDS DON'T GROW QUIETLY.) */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight uppercase leading-[0.92] opacity-0"
          >
            BRANDS<br />
            DON'T<br />
            <span className="text-[#a855f7]">GROW</span><br />
            <span className="text-[#a855f7]">QUIETLY.</span>
          </h1>

          {/* Subtitle Narrative & Subtext */}
          <div ref={subtitleRef} className="space-y-3 max-w-2xl opacity-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
              Creating brands that refuse to be ignored. I turn attention into authority through strategic visual identity design.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              Graphic &amp; Brand Designer helping startups &amp; established businesses scale through high-quality visual storytelling.
            </p>
          </div>

          {/* Action Buttons & Rating Bar Container */}
          <div ref={ctaRef} className="space-y-6 opacity-0">
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-8 py-4 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-extrabold text-sm sm:text-base flex items-center gap-2.5 transition-all duration-200 shadow-xl shadow-purple-600/30 hover:scale-[1.03]"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 text-white font-bold text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 backdrop-blur-md hover:scale-[1.03]"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Ratings & 3 Years Experience Bar Under Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-4 border-t border-white/10 max-w-xl text-xs sm:text-sm font-bold">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-white font-extrabold">5.0 / 5.0</span>
                <span className="text-slate-400 font-medium">(40+ Reviews)</span>
              </div>

              <div className="w-px h-5 bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2 text-white font-extrabold">
                <Award className="w-4 h-4 text-[#a855f7]" />
                <span>3 Years Experience</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}






