'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Sparkles, MapPin, TrendingUp } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Autoplay deferred by browser policy');
      });
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          metricsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen pt-36 pb-20 flex items-center justify-start overflow-hidden bg-[#0b0f19] text-white transition-colors duration-500"
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/95 via-[#0b0f19]/80 to-[#0b0f19]/40 backdrop-blur-[1px]" />
      </div>

      {/* Top Right Floating Badge */}
      <div className="absolute top-28 right-8 lg:right-16 z-10 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#121824]/90 border border-[#8b5cf6]/30 text-xs text-white backdrop-blur-md">
        <TrendingUp className="w-4 h-4 text-[#8b5cf6]" />
        <span className="font-semibold">Shopify &amp; Canva Skilled</span>
      </div>

      {/* Main Left-Aligned Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Top Pill Badge */}
          <div ref={badgeRef} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/40 text-[#8b5cf6] text-xs font-bold tracking-wide backdrop-blur-md uppercase">
              <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
              <span>Graphic Designer &amp; Visual Artist</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/60 border border-white/15 text-slate-200 text-xs font-medium backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span>Bahawalnagar, Pakistan</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Hi, I'm <span className="text-white">Rameen Fatima.</span>
            <br />
            Graphic Designer &amp;{' '}
            <span className="text-[#8b5cf6]">Visual Artist.</span>
          </h1>

          {/* Subtitle & Description */}
          <div ref={subtitleRef} className="space-y-3 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Creating brands that convert, captivate, and last.
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Graphic Designer with 1.5+ years of experience in Canva, Adobe Illustrator,
              Product Image Design (Amazon), and Shopify Store Design that elevate your business visual identity.
            </p>
          </div>

          {/* Action Buttons */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#portfolio"
              className="px-7 py-3.5 rounded-full bg-[#8b5cf6] hover:opacity-90 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-opacity duration-200"
            >
              <span>View Design Projects</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#121824]/90 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm transition-colors duration-200 flex items-center gap-2 backdrop-blur-md"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Let's Talk Project</span>
            </a>
          </div>

          {/* Key Metrics Cards */}
          <div ref={metricsRef} className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 max-w-xl">
            <div className="bg-[#121824]/90 border border-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col justify-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#8b5cf6]">3.48</span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">GPA (BS IT)</span>
            </div>

            <div className="bg-[#121824]/90 border border-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col justify-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#8b5cf6]">1.5+</span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Years Exp.</span>
            </div>

            <div className="bg-[#121824]/90 border border-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col justify-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#8b5cf6]">100%</span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider">Client Focus</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
