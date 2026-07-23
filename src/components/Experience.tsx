'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Sparkles, Award, Palette, Star, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const timelineItems = [
    {
      type: 'work',
      title: 'Freelance Graphic Designer & Brand Specialist',
      institution: 'Independent & Client Projects',
      period: '2023 - Present (1.5+ Years)',
      description:
        'Delivering high-converting graphic design assets for e-commerce sellers, brands, and digital businesses across global platforms.',
      achievements: [
        'Designed 50+ commercial assets including Amazon infographics and Shopify store banners',
        'Crafted custom logo designs, brand typography guidelines, and vector assets',
        'Engineered product feature callout cards optimized for click-through rate growth',
        'Developed high-resolution promotional marketing collateral and social media graphics',
        'Maintained 100% client satisfaction through rapid turnarounds and precise design execution',
      ],
      icon: Briefcase,
      badge: '1.5+ Years Experience',
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology (BS IT)',
      institution: 'The Islamia University of Bahawalpur',
      period: '2021 - 2025',
      description:
        'Advanced degree combining digital technology, software design fundamentals, and user-centric graphic interface principles.',
      achievements: [
        'Built strong technical mastery across modern graphic design software & digital tools',
        'Applied human-computer interaction principles to commercial layout structures',
        'Executed academic and client-facing digital design and branding projects',
      ],
      icon: GraduationCap,
      badge: 'Academic Degree',
    },
    {
      type: 'course',
      title: 'Professional Graphic Design Certification',
      institution: "The Leader's Hall",
      period: 'Certified Graduate',
      description:
        'Comprehensive professional training in commercial design layout, vector illustration, e-commerce graphics, and brand identity.',
      achievements: [
        'Mastered advanced vector manipulation in Adobe Illustrator & Canva Pro',
        'Specialized in Amazon listing infographics, lifestyle callouts, and product breakdown visuals',
        'Earned distinction in commercial e-commerce graphic design',
      ],
      icon: Award,
      badge: 'Professional Training',
    },
  ];

  return (
    <section id="experience" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Anchor for Education navbar link */}
      <div id="education" className="absolute top-0 left-0" />
      {/* Ambient Backdrop */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
            <span>Education &amp; Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
            Academic Background &amp; Practice Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Combining academic excellence from The Islamia University of Bahawalpur with intensive practical graphic design experience.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#8b5cf6] via-[#7c3aed] to-transparent hidden sm:block" />

            {timelineItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="exp-card relative sm:pl-16 opacity-100">
                  
                  {/* Timeline Circle */}
                  <div className="absolute left-1.5 top-6 w-9 h-9 rounded-full bg-[#8b5cf6] border-4 border-slate-900 text-slate-950 flex items-center justify-center shadow-md hidden sm:flex">
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  {/* Main Card */}
                  <div className="rounded-3xl bg-white dark:bg-[#0d0d0d] p-8 border border-slate-200 dark:border-white/15 hover:border-[#8b5cf6] transition-all duration-300 shadow-sm hover:shadow-md space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-black text-slate-800 dark:text-slate-200 text-[10px] font-bold border border-slate-200 dark:border-neutral-800">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[#7c3aed] dark:text-[#8b5cf6] font-bold text-sm mt-0.5">{item.institution}</p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-slate-200 text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#8b5cf6]" />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>

                    <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-2">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6] shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Graphic Designer Photo with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/20 shadow-xl group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/rameen-experience.png"
                  alt="Rameen Fatima Graphic Designer Workspace"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              </div>

              {/* Floating Badge 1: Top Left */}
              <div className="absolute top-5 left-5 p-3.5 rounded-2xl bg-[#8b5cf6] text-slate-950 font-extrabold shadow-lg backdrop-blur-md border border-white/20 max-w-[180px] animate-bounce-subtle">
                <p className="text-xl font-black leading-none">1.5+</p>
                <p className="text-[10px] uppercase tracking-wider font-extrabold mt-1">Years Experience</p>
              </div>

              {/* Floating Badge 2: Top Right */}
              <div className="absolute top-5 right-5 p-3.5 rounded-2xl bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-800 text-[#8b5cf6] border border-slate-700">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Canva &amp; Illustrator</p>
                  <p className="text-[10px] text-slate-300">Design Specialist</p>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right */}
              <div className="absolute bottom-20 right-5 p-3.5 rounded-2xl bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-lg text-right">
                <p className="text-xl font-black text-[#8b5cf6]">#1</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-300 font-extrabold">E-Commerce Graphics</p>
              </div>

              {/* Bottom Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/95 border border-white/20 backdrop-blur-md text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#8b5cf6]" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white">Rameen Fatima</p>
                      <p className="text-[10px] text-slate-400">Professional Graphic Designer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#8b5cf6] text-[#8b5cf6]" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
