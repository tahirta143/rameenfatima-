'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Sparkles, Award, Palette, Star, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const timelineItems = [
    {
      type: 'work',
      title: 'Graphic Design Practice & Freelance Work',
      institution: 'Independent & Client Projects',
      period: '2023 - Present (1.5+ Years)',
      description:
        'Practiced Canva and Adobe Illustrator to develop strong graphic design skills, creating social media posts, product images, and Shopify store visual concepts.',
      achievements: [
        'Practiced Canva & Adobe Illustrator for high-end graphic design',
        'Designed social media posts & product images for portfolio development',
        'Created visual content & basic branding concepts for businesses',
        'Learned & practiced Shopify store design & eCommerce graphics',
        'Built personal design portfolio for freelance & remote work opportunities',
      ],
      icon: Briefcase,
      badge: '1.5 Years Hands-On',
    },
    {
      type: 'education',
      title: 'Bachelor of Information Technology (BS IT)',
      institution: 'The Islamia University of Bahawalpur',
      period: '2021 - 2025 (GPA: 3.48)',
      description:
        'Academic degree in Information Technology focusing on modern digital tools, software design principles, and UI visual layout.',
      achievements: [
        'Graduated with strong academic performance (3.48 GPA)',
        'Built solid technical foundation for digital tools & graphic software',
        'Active contributor in visual design and IT projects',
      ],
      icon: GraduationCap,
      badge: 'Academic Degree',
    },
    {
      type: 'course',
      title: 'Graphic Design Certification Course',
      institution: "The Leader's Hall",
      period: 'Certified Graduate',
      description:
        'Intensive professional graphic design training focusing on commercial product infographics, brand identity, and design aesthetics.',
      achievements: [
        'Mastered Adobe Illustrator & Canva layout strategies',
        'Specialized in Amazon listing graphics & product design',
        'Graduated with honors in commercial visual design',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
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
                  <div className="absolute left-1.5 top-6 w-9 h-9 rounded-full bg-[#8b5cf6] border-4 border-slate-900 text-slate-950 flex items-center justify-center shadow-lg shadow-[#8b5cf6]/40 hidden sm:flex">
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  {/* Main Card */}
                  <div className="rounded-3xl bg-white dark:bg-[#121824] p-8 border border-slate-200 dark:border-[#8b5cf6]/20 hover:border-[#8b5cf6] transition-all duration-300 shadow-md hover:shadow-xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/15 text-[#7c3aed] dark:text-[#8b5cf6] text-[10px] font-bold border border-[#8b5cf6]/30">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[#7c3aed] dark:text-[#8b5cf6] font-bold text-sm mt-0.5">{item.institution}</p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/30 text-slate-700 dark:text-slate-200 text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#8b5cf6]" />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>

                    <div className="pt-3 border-t border-slate-100 dark:border-[#8b5cf6]/15 space-y-2">
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
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-[#8b5cf6]/30 shadow-2xl group">
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
              <div className="absolute top-5 left-5 p-3.5 rounded-2xl bg-[#8b5cf6] text-slate-950 font-extrabold shadow-xl backdrop-blur-md border border-white/20 max-w-[180px] animate-bounce-subtle">
                <p className="text-xl font-black leading-none">1.5+</p>
                <p className="text-[10px] uppercase tracking-wider font-extrabold mt-1">Years Experience</p>
              </div>

              {/* Floating Badge 2: Top Right */}
              <div className="absolute top-5 right-5 p-3.5 rounded-2xl bg-slate-900/90 text-white backdrop-blur-md border border-[#8b5cf6]/40 shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#8b5cf6]/20 text-[#8b5cf6]">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Canva &amp; Illustrator</p>
                  <p className="text-[10px] text-slate-300">Design Specialist</p>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right */}
              <div className="absolute bottom-20 right-5 p-3.5 rounded-2xl bg-slate-900/90 text-white backdrop-blur-md border border-[#8b5cf6]/40 shadow-xl text-right">
                <p className="text-xl font-black text-[#8b5cf6]">#1</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-300 font-extrabold">E-Commerce Visuals</p>
              </div>

              {/* Bottom Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/95 border border-[#8b5cf6]/40 backdrop-blur-md text-white">
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
