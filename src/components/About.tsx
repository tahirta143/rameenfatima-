'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle2, GraduationCap, Sparkles, HeartHandshake, MapPin, Globe, X, Award, BookOpen, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const [showEduModal, setShowEduModal] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const statsData = [
    { label: 'Years Experience', target: 3, decimals: 0, suffix: '' },
    { label: 'Happy Clients', target: 40, decimals: 0, suffix: '+' },
    { label: 'Average Rating', target: 5.0, decimals: 1, suffix: '' },
    { label: 'Designs Delivered', target: 200, decimals: 0, suffix: '+' },
  ];

  const highlights = [
    'Mastery in Adobe Illustrator & Canva Pro for commercial graphic design',
    'Specialized in Amazon Listing Infographics & Product Feature Callout Cards',
    'Custom Shopify Store Banners, E-Commerce Graphics & Brand Styling',
    'BS Information Technology Graduate - Islamia University of Bahawalpur',
    'Certified Graphic Design Specialist - The Leader’s Hall',
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Left column reveal (Avatar & Glass card from Left)
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -100, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );

      // 2. Right column reveal (Bio, quotes, checklist, buttons from Right)
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 100, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );

      // 3. Stats cards horizontal left/right slide entrance
      if (statsGridRef.current) {
        const statCards = Array.from(statsGridRef.current.children);
        statCards.forEach((card, idx) => {
          const fromX = idx % 2 === 0 ? -80 : 80;

          gsap.fromTo(
            card,
            { opacity: 0, x: fromX, scale: 0.92 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: statsGridRef.current,
                start: 'top 85%',
                end: 'bottom top',
                toggleActions: 'restart none none reset',
              },
            }
          );
        });
      }

      // 4. Animated Counters (Counts up from 0 to target value on scroll down or up)
      counterRefs.current.forEach((el, idx) => {
        if (!el) return;
        const stat = statsData[idx];
        const obj = { value: 0 };

        gsap.to(obj, {
          value: stat.target,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsGridRef.current,
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
          onUpdate: () => {
            if (el) {
              el.innerText =
                stat.decimals > 0
                  ? obj.value.toFixed(stat.decimals) + stat.suffix
                  : Math.floor(obj.value) + stat.suffix;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Avatar & Image Card */}
          <div ref={leftColRef} className="lg:col-span-5 opacity-0">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0d0d0d] p-3 border border-slate-200 dark:border-white/15 shadow-xl">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/about.png.png"
                    alt="Rameen Fatima Graphic Designer"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Active Theme-Aware Glass Card for Education & Credentials */}
                  <button
                    onClick={() => setShowEduModal(true)}
                    type="button"
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/85 dark:bg-[#09090b]/85 border border-slate-200/90 dark:border-white/20 backdrop-blur-md text-left shadow-xl shadow-purple-500/10 dark:shadow-purple-950/40 hover:border-[#8b5cf6] dark:hover:border-[#8b5cf6] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer overflow-hidden"
                  >
                    {/* Glass glare overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                    <div className="flex items-center gap-3.5 relative z-10">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white shadow-md shadow-[#8b5cf6]/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <p className="text-[11px] text-[#7c3aed] dark:text-[#8b5cf6] font-extrabold uppercase tracking-wider">
                            Education &amp; Credentials
                          </p>
                        </div>
                        <p className="text-sm font-extrabold text-slate-900 dark:text-white truncate group-hover:text-[#7c3aed] dark:group-hover:text-[#8b5cf6] transition-colors">
                          The Islamia University of Bahawalpur
                        </p>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium truncate">
                          BS Information Technology • The Leader's Hall Certified
                        </p>
                      </div>
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div ref={rightColRef} className="lg:col-span-7 space-y-6 opacity-0">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Creative Graphic Designer Based in <span className="text-[#7c3aed] dark:text-[#8b5cf6]">Bahawalnagar, Pakistan</span>
              </h2>
            </div>

            {/* Bio Quote */}
            <div className="rounded-2xl bg-white dark:bg-[#0d0d0d] p-6 border border-slate-200 dark:border-white/15 shadow-sm space-y-3">
              <p className="text-slate-900 dark:text-white text-base sm:text-lg font-medium leading-relaxed">
                “Passionate about helping e-commerce brands and online businesses scale with high-impact visual design. I combine creative design aesthetics with strategic market positioning to deliver graphics that drive engagement, trust, and sales conversions.”
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-[#7c3aed] dark:text-[#8b5cf6] pt-2 border-t border-slate-100 dark:border-white/10">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
                  Available Worldwide (Remote)
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
                  Languages: English &amp; Urdu
                </span>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#services"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#3b0764] via-[#7e22ce] to-[#d946ef] hover:brightness-110 text-white font-extrabold text-sm flex items-center gap-2 transition-all duration-200 shadow-md shadow-purple-900/30"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Explore My Services</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rameen-fatima-869141406"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-sm font-bold hover:border-[#8b5cf6] transition-colors duration-200"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

        </div>

        {/* Key Metrics Stats Grid with Animated Counters */}
        <div ref={statsGridRef} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-[#0d0d0d] p-6 text-center border border-slate-200/80 dark:border-white/10 shadow-md transition-all duration-300 hover:scale-105"
            >
              <span
                ref={(el) => {
                  counterRefs.current[idx] = el;
                }}
                className="font-poppins font-black text-4xl sm:text-5xl text-[#7c3aed] dark:text-[#B000FF] block"
              >
                0{stat.suffix}
              </span>
              <p className="mt-2 font-poppins text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup for Education & Credentials */}
      {showEduModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowEduModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/20 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white shadow-md shadow-[#8b5cf6]/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold">Education &amp; Credentials</h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" /> Verified Academic &amp; Skill Record
                  </span>
                </div>
              </div>
              <button
                onClick={() => setShowEduModal(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Details Content */}
            <div className="space-y-4">
              {/* University Degree */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-[#7c3aed] dark:text-[#8b5cf6] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Higher Education
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Graduated</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">BS Information Technology (BS IT)</h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">The Islamia University of Bahawalpur</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Focused on digital media design, computer graphics logic, web development standards, and user experience principles.
                </p>
              </div>

              {/* Professional Certification */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-[#7c3aed] dark:text-[#8b5cf6] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" /> Professional Certification
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Certified</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">Graphic Design Specialist</h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">The Leader’s Hall</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Advanced commercial training in vector illustration, Adobe Creative Suite, e-commerce graphics, and brand strategy.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowEduModal(false)}
                className="px-5 py-2.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs shadow-md transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


