'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Building2,
  Sparkles,
} from 'lucide-react';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineItems = [
    {
      id: '01',
      title: 'Professional Graphic Designer',
      institution: 'Graphic Design Practice',
      period: '2023 — Present (3 Years Experience)',
      location: 'Bahawalnagar, Pakistan',
      milestonesCount: '5 key milestones',
      description:
        '3 Years Experienced Professional Graphic & Brand Designer specializing in Canva, Adobe Illustrator, Amazon listing images, Shopify store design, product infographics, and branding concepts.',
      achievements: [
        'Practiced Canva and Adobe Illustrator to develop strong graphic design skills',
        'Designed social media posts and product images for portfolio development',
        'Created visual content and basic branding concepts',
        'Learned and practiced Shopify store design and eCommerce graphics',
        'Built a personal design portfolio to prepare for freelance and remote work opportunities',
      ],
      tags: ['Canva', 'Adobe Illustrator', 'Shopify Design', 'eCommerce Graphics', 'Branding'],
      icon: Briefcase,
    },
    {
      id: '02',
      title: 'Brand Designer & Visual Strategist',
      institution: 'Multi-Industry Client Roster',
      period: '2022 — Present',
      location: 'Worldwide Remote',
      milestonesCount: '4 key milestones',
      description:
        'Crafting bespoke visual identities for clients ranging from Amazon sellers to e-commerce brands. Each engagement focused on transforming how the brand is perceived at first glance.',
      achievements: [
        'Designed Amazon product infographics that drove click-through rate growth',
        'Built complete brand systems for e-commerce store owners',
        'Created thumb-stopping content for Realtors & digital founders',
        'Delivered high-converting promotional graphics + visual storytelling packages',
      ],
      tags: ['Visual Strategy', 'Content Design', 'E-Commerce Branding'],
      icon: GraduationCap,
    },
    {
      id: '03',
      title: 'Graphic Designer & Content Creator',
      institution: 'Studio Collaborations',
      period: '2021 — 2022',
      location: 'Bahawalnagar, Pakistan',
      milestonesCount: '3 key milestones',
      description:
        'Started with foundational design work — flyers, thumbnails, social graphics — and rapidly expanded into full brand identity systems. Built a reputation for natural aesthetic eye and on-time delivery.',
      achievements: [
        'Produced 200+ marketing collateral pieces',
        'Developed thumbnail design system for content creators',
        'Expanded into pitch deck and presentation design',
      ],
      tags: ['Flyers', 'Thumbnails', 'Social Graphics', 'Marketing Collateral'],
      icon: Award,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const current = -rect.top;
      const progress = Math.max(0, Math.min(1, current / totalScrollable));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-[300vh] site-bg py-20 md:py-32 transition-colors duration-500"
    >
      {/* Anchor for Education navbar link */}
      <div id="education" className="absolute top-0 left-0" />

      {/* Sticky Viewport Container - Centered on screen during scroll */}
      <div className="sticky top-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-8">

        <div className="relative mx-auto w-full max-w-5xl">

          {/* Header */}
          <div className="mb-8 text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-[#0d0d0d] border border-slate-200 dark:border-neutral-800 text-[#d946ef] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#d946ef]" />
              <span>02 / Experience &amp; Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase heading-text">
              THE <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#e879f9] bg-clip-text text-transparent">JOURNEY</span>
            </h2>
            <p className="text-xs sm:text-sm body-subtext font-medium max-w-xl mx-auto">
              Scroll down to reveal my experience milestones one by one in the centered stack deck.
            </p>
          </div>

          {/* Centered Clean Flat Scroll Stacking Viewport */}
          <div className="relative min-h-[460px] sm:min-h-[440px] w-full flex items-center justify-center">
            {timelineItems.map((item, idx) => {
              let translateYPercent = 0;
              let scaleVal = 1;
              let opacityVal = 1;
              const zIndexVal = (idx + 1) * 10;

              if (idx === 0) {
                if (scrollProgress > 0.35) {
                  scaleVal = Math.max(0.90, 1 - (scrollProgress - 0.35) * 0.3);
                  opacityVal = Math.max(0.4, 1 - (scrollProgress - 0.35) * 1.2);
                }
              } else if (idx === 1) {
                if (scrollProgress < 0.20) {
                  translateYPercent = 120;
                  opacityVal = 0;
                } else if (scrollProgress >= 0.20 && scrollProgress < 0.45) {
                  const factor = (scrollProgress - 0.20) / 0.25;
                  translateYPercent = (1 - factor) * 120;
                  opacityVal = factor;
                } else if (scrollProgress >= 0.45 && scrollProgress <= 0.68) {
                  translateYPercent = 0;
                  scaleVal = 1;
                  opacityVal = 1;
                } else {
                  translateYPercent = 0;
                  scaleVal = Math.max(0.90, 1 - (scrollProgress - 0.68) * 0.3);
                  opacityVal = Math.max(0.4, 1 - (scrollProgress - 0.68) * 1.2);
                }
              } else if (idx === 2) {
                if (scrollProgress < 0.55) {
                  translateYPercent = 120;
                  opacityVal = 0;
                } else if (scrollProgress >= 0.55 && scrollProgress < 0.80) {
                  const factor = (scrollProgress - 0.55) / 0.25;
                  translateYPercent = (1 - factor) * 120;
                  opacityVal = factor;
                } else {
                  translateYPercent = 0;
                  scaleVal = 1;
                  opacityVal = 1;
                }
              }

              return (
                <div
                  key={item.id}
                  style={{
                    transform: `translateY(${translateYPercent}%) scale(${scaleVal})`,
                    opacity: opacityVal,
                    zIndex: zIndexVal,
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s linear',
                  }}
                  className="absolute inset-0 w-full max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-[#B000FF]/30 bg-white dark:bg-[#000000] p-6 sm:p-8 md:p-10 flex flex-col justify-between"
                >
                  <div className="relative grid gap-6 md:grid-cols-12 items-start">

                    {/* Left Column */}
                    <div className="md:col-span-5 space-y-3">
                      <div className="flex items-center gap-3 text-[#7c3aed] dark:text-[#B000FF]">
                        <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[#7c3aed] dark:text-[#B000FF]">
                          {item.id}
                        </span>
                        <Sparkles className="h-5 w-5 text-[#7c3aed] dark:text-[#B000FF]" />
                      </div>

                      <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight leading-tight">
                        {item.title}
                      </h3>

                      <p className="font-poppins text-base font-semibold text-[#7c3aed] dark:text-[#B000FF]">
                        {item.institution}
                      </p>

                      <div className="mt-4 space-y-2 font-poppins text-xs body-subtext">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#7c3aed] dark:text-[#B000FF]" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#7c3aed] dark:text-[#B000FF]" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-[#7c3aed] dark:text-[#B000FF]" />
                          <span>{item.milestonesCount}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-7 flex flex-col justify-between space-y-5">
                      <p className="font-poppins text-sm sm:text-base font-medium leading-relaxed text-slate-700 dark:text-white/90">
                        {item.description}
                      </p>

                      <ul className="space-y-2.5 font-poppins text-xs sm:text-sm text-slate-700 dark:text-white/80">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-[#7c3aed] dark:bg-[#B000FF]" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-200 dark:border-white/10">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-full border border-slate-300 dark:border-[#B000FF]/30 bg-slate-100 dark:bg-[#B000FF]/10 px-3 py-1 font-poppins text-xs font-semibold text-[#7c3aed] dark:text-[#B000FF]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Clean Flat Progress Indicators */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {timelineItems.map((_, idx) => {
              let isActive = false;
              if (idx === 0 && scrollProgress < 0.35) isActive = true;
              if (idx === 1 && scrollProgress >= 0.35 && scrollProgress < 0.68) isActive = true;
              if (idx === 2 && scrollProgress >= 0.68) isActive = true;

              return (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${isActive
                      ? 'w-10 bg-[#7c3aed] dark:bg-[#B000FF]'
                      : 'w-2.5 bg-slate-300 dark:bg-white/20'
                    }`}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
