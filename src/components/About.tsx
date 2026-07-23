'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, GraduationCap, Sparkles, HeartHandshake, MapPin, Globe } from 'lucide-react';

export default function About() {
  const highlights = [
    'Mastery in Adobe Illustrator & Canva Pro for commercial graphic design',
    'Specialized in Amazon Listing Infographics & Product Feature Callout Cards',
    'Custom Shopify Store Banners, E-Commerce Graphics & Brand Styling',
    'BS Information Technology Graduate - Islamia University of Bahawalpur',
    'Certified Graphic Design Specialist - The Leader’s Hall',
  ];

  return (
    <section id="about" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Avatar & Image Card */}
          <div className="lg:col-span-5 about-animate opacity-100">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0d0d0d] p-3 border border-slate-200 dark:border-white/15">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/rameen-about.png"
                    alt="Rameen Fatima Graphic Designer"
                    fill
                    className="object-cover scale-x-[-1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/90 border border-white/20 backdrop-blur-md text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-[#8b5cf6] text-slate-950 font-bold">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8b5cf6] font-extrabold uppercase tracking-wider">Education &amp; Credentials</p>
                        <p className="text-sm font-extrabold text-white">The Islamia University of Bahawalpur</p>
                        <p className="text-[11px] text-slate-300">BS Information Technology • The Leader's Hall Certified</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="about-animate space-y-2 opacity-100">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Creative Graphic Designer Based in <span className="text-[#7c3aed] dark:text-[#8b5cf6]">Bahawalnagar, Pakistan</span>
              </h2>
            </div>

            {/* Bio Quote */}
            <div className="about-animate rounded-2xl bg-white dark:bg-[#0d0d0d] p-6 border border-slate-200 dark:border-white/15 shadow-sm space-y-3 opacity-100">
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
            <div className="about-animate space-y-3 pt-2 opacity-100">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="about-animate pt-4 flex flex-wrap gap-4 items-center opacity-100">
              <a
                href="#services"
                className="px-6 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-colors duration-200"
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
      </div>
    </section>
  );
}
