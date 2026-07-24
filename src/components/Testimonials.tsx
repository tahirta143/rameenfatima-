'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Featured Highlight Client for the Left Dark Card
  const featuredReview = {
    fullName: 'Jamie Williams',
    role: 'Professional Document Cleanup & Resume Optimization',
    category: 'BRAND DESIGN',
    date: 'June 14, 2026',
    comment:
      'Rameen didn’t touch my copy — she did something more powerful. She took complete ownership of my LinkedIn visual presence, designing a custom banner that instantly communicates authority. She is the gold standard. Full stop.',
    rating: 5,
    highlightBadge: 'FEATURED CLIENT SPOTLIGHT',
  };

  // List of Different Clients for the Right Interactive Card & Bottom Navigation Bar
  const reviewsData = [
    {
      id: 1,
      shortName: 'Farhan',
      fullName: 'Farhan Zakir',
      role: 'Credentialing Specialist | Billing Specialist | Medical',
      category: 'BRAND DESIGN',
      date: 'January 16, 2026',
      comment:
        'I was impressed by Rameen’s exceptional designs for my LinkedIn profile and banner. She skillfully integrated visual elements and the color scheme I had envisioned, delivering results that exceeded my expectations.',
      rating: 5,
    },
    {
      id: 2,
      shortName: 'Julie',
      fullName: 'Julie Anderson',
      role: 'E-Commerce Store Owner & Lifestyle Brand',
      category: 'GRAPHIC DESIGN',
      date: 'August 02, 2026',
      comment:
        'Working with Rameen was an absolute pleasure! She crafted stunning Shopify banner graphics and social media posts that elevated our brand aesthetic completely. Highly creative and incredibly fast delivery.',
      rating: 5,
    },
    {
      id: 3,
      shortName: 'Desiree’',
      fullName: 'Desiree’ Vance',
      role: 'Visual Strategist & Content Creator',
      category: 'VISUAL DESIGN',
      date: 'May 28, 2026',
      comment:
        'Rameen has an extraordinary eye for color balance, typography, and clean visual layouts. Her Canva & Adobe Illustrator assets gave our marketing campaigns a luxury, professional polish.',
      rating: 5,
    },
    {
      id: 4,
      shortName: 'Muhammad',
      fullName: 'Muhammad Ali',
      role: 'Amazon FBA Business Owner',
      category: 'GRAPHIC DESIGN',
      date: 'September 12, 2026',
      comment:
        'Her Amazon listing infographics and product lifestyle images brought a massive boost to our conversion rate. The main images stand out brilliantly against competitors. Will definitely hire again!',
      rating: 5,
    },
    {
      id: 5,
      shortName: 'Angela',
      fullName: 'Angela Blackman',
      role: 'Remote Social Media Marketer | Brand Specialist',
      category: 'BRAND DESIGN',
      date: 'August 07, 2024',
      comment:
        'Rameen delivered high-converting visual branding packages with unmatched attention to detail. She understands how to translate complex ideas into visually engaging design assets effortlessly.',
      rating: 5,
    },
  ];

  // Auto-loop right card written reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviewsData.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeReview = reviewsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d946ef]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div ref={headerRef} className="text-center space-y-4 max-w-3xl mx-auto opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#d946ef] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d946ef]" />
            <span>Client Feedback &amp; Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Read authentic reviews from e-commerce sellers, brand owners, and professionals worldwide.
          </p>
        </div>

        {/* Top Showcase Area: 2 Distinct Client Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT CARD: Featured Client Showcase (Jamie Williams - Dark Purple Theme) */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#1a042d] via-[#240038] to-[#120021] text-white p-8 sm:p-10 border border-purple-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[420px]">
            {/* Inner Glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#d946ef]/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Badge */}
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-purple-500/20 text-[#e879f9] border border-purple-500/30">
                  <Award className="w-4 h-4" />
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#d8b4fe] uppercase">
                  {featuredReview.highlightBadge}
                </span>
              </div>

              {/* Author & Role */}
              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {featuredReview.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-purple-200/90 font-medium mt-1">
                  {featuredReview.role}
                </p>
              </div>

              {/* Large Quote Icon & Text */}
              <div className="space-y-3">
                <Quote className="w-9 h-9 text-[#d946ef]/70" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  "{featuredReview.comment}"
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-xs shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-[#e879f9]" />
                <span>Verified Client Showcase</span>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(featuredReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d946ef] text-[#d946ef]" />
                  ))}
                </div>
                <span className="text-[11px] text-purple-300 font-mono font-semibold">
                  {featuredReview.date} · {featuredReview.category}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Interactive Written Reviews Card (Farhan, Julie, Desiree', Muhammad, Angela) */}
          <div className="lg:col-span-6 rounded-3xl bg-white dark:bg-[#0d0d0d] text-slate-900 dark:text-white p-8 sm:p-10 border border-slate-200 dark:border-white/15 flex flex-col justify-between shadow-lg relative min-h-[420px] transition-all duration-500">
            <div className="space-y-6">
              {/* Header Bar with Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-[#d946ef] border border-purple-200 dark:border-purple-800/40">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                    WRITTEN REVIEWS
                  </span>
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-[#d946ef] hover:text-white dark:hover:bg-[#d946ef] dark:hover:text-white transition-all shadow-sm"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-[#d946ef] hover:text-white dark:hover:bg-[#d946ef] dark:hover:text-white transition-all shadow-sm"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 pt-1">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d946ef] text-[#d946ef]" />
                ))}
              </div>

              {/* Active Client Quote Text */}
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic">
                "{activeReview.comment}"
              </p>
            </div>

            {/* Active Author Info & Progress Dots */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {activeReview.fullName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {activeReview.role}
                  </p>
                  <p className="text-[11px] text-[#d946ef] font-mono font-bold tracking-wide uppercase mt-1">
                    {activeReview.date} · {activeReview.category}
                  </p>
                </div>
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-1.5 pt-2">
                {reviewsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? 'w-8 bg-[#d946ef]'
                        : 'w-2 bg-slate-200 dark:bg-neutral-800 hover:bg-slate-300 dark:hover:bg-neutral-700'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Mini-Cards Navigation Bar (Farhan, Julie, Desiree', Muhammad, Angela) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-4">
          {reviewsData.map((rev, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={rev.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-2xl p-4 text-left transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'bg-purple-100 dark:bg-purple-950/60 border-2 border-[#d946ef] shadow-lg shadow-purple-500/20 scale-[1.03]'
                    : 'bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/15 hover:border-[#d946ef]/60 hover:bg-slate-50 dark:hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-extrabold ${
                      isActive
                        ? 'text-[#d946ef] dark:text-[#e879f9]'
                        : 'text-slate-900 dark:text-white group-hover:text-[#d946ef]'
                    }`}
                  >
                    {rev.shortName}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#d946ef] animate-ping" />
                  )}
                </div>

                <p className="text-[10px] font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase truncate mb-2">
                  {rev.category}
                </p>

                {/* 5 Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        isActive
                          ? 'fill-[#d946ef] text-[#d946ef]'
                          : 'fill-slate-300 dark:fill-neutral-700 text-slate-300 dark:text-neutral-700 group-hover:fill-[#d946ef] group-hover:text-[#d946ef]'
                      }`}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
