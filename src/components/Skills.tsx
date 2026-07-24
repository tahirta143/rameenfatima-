'use client';

import React, { useEffect, useRef } from 'react';
import { Sparkles, Layers, MessageSquare, Clock, Globe, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainSkillsRef = useRef<HTMLDivElement>(null);
  const sideSkillsRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  const primarySkills = [
    { name: 'Adobe Illustrator', level: 92, category: 'Design Software' },
    { name: 'Product Image Design (Amazon Infographics)', level: 95, category: 'Product Graphics' },
    { name: 'Canva Pro', level: 95, category: 'Graphic Design Tool' },
    { name: 'Shopify Store Design', level: 90, category: 'eCommerce Design' },
    { name: 'WordPress Website Design', level: 75, category: 'Learning Service', isLearning: true },
  ];

  const softSkills = [
    { name: 'Client Collaboration', desc: 'Precise brief analysis & active project communication', icon: MessageSquare },
    { name: 'Project Management', desc: 'On-time delivery & strict adherence to design deadlines', icon: Clock },
  ];

  const languages = [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Urdu', level: 'Native / Fluent' },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header reveal from top
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -35, scale: 0.95 },
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

      // Main Skills card reveal from Left (-90px)
      gsap.fromTo(
        mainSkillsRef.current,
        { opacity: 0, x: -90, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainSkillsRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );

      // Animated skill progress bars fill effect
      barRefs.current.forEach((bar, idx) => {
        if (!bar) return;
        const targetWidth = primarySkills[idx].level;
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: mainSkillsRef.current,
              start: 'top 80%',
              end: 'bottom top',
              toggleActions: 'restart none none reset',
            },
          }
        );
      });

      // Side skills reveal from Right (+90px)
      gsap.fromTo(
        sideSkillsRef.current,
        { opacity: 0, x: 90, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sideSkillsRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 max-w-3xl mx-auto mb-16 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#d946ef] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d946ef]" />
            <span>Expertise Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
            Design Skills &amp; Languages
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Mastering Adobe vector software, e-commerce layout strategies, and client-focused project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Main Skills */}
          <div ref={mainSkillsRef} className="lg:col-span-7 space-y-6 rounded-3xl bg-white dark:bg-[#0d0d0d] p-8 border border-slate-200 dark:border-white/15 shadow-sm opacity-0">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-[#d946ef]" />
              Technical Design Skills
            </h3>

            {primarySkills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    {skill.name}
                    {skill.isLearning && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-bold">
                        Learning Service
                      </span>
                    )}
                  </span>
                  <span className="font-black bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#e879f9] bg-clip-text text-transparent">{skill.level}%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-black overflow-hidden p-0.5 border border-slate-200 dark:border-neutral-800">
                  <div
                    ref={(el) => {
                      barRefs.current[idx] = el;
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#3b0764] via-[#7e22ce] to-[#d946ef] shadow-md shadow-purple-500/30 w-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills & Languages */}
          <div ref={sideSkillsRef} className="lg:col-span-5 space-y-6 opacity-0">

            <div className="rounded-3xl bg-white dark:bg-[#0d0d0d] p-8 border border-slate-200 dark:border-white/15 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Professional Soft Skills
              </h3>

              <div className="space-y-3">
                {softSkills.map((sk, idx) => {
                  const Icon = sk.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-neutral-800 flex items-center gap-4"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#d946ef] border border-purple-200 dark:border-purple-800/40 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{sk.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">{sk.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl bg-white dark:bg-[#0d0d0d] p-8 border border-slate-200 dark:border-white/15 shadow-sm space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#d946ef]" />
                Languages
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-neutral-800 space-y-1"
                  >
                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#d946ef]" />
                      {lang.name}
                    </p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-300 font-medium">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

