'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const connectLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rameen-fatima-869141406', icon: Linkedin },
    { name: 'Email', href: 'mailto:rameenfat0808@gmail.com', icon: Mail },
    { name: 'WhatsApp', href: 'https://wa.me/923147416969', icon: MessageSquare },
  ];

  return (
    <footer className="site-bg border-t border-slate-200 dark:border-white/10 pt-16 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
          
          {/* Left Column: Avatar & Large Banner Branding */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Avatar & Giant Name Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Profile Avatar */}
              <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#a855f7] to-purple-400 shrink-0 shadow-lg">
                <Image
                  src="/images/rameen-avatar.jpg"
                  alt="Rameen Fatima"
                  width={56}
                  height={56}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>

              {/* Bold Headline Logo */}
              <div className="flex flex-col leading-none">
                <div className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-slate-900 dark:text-white">
                  RAMEEN
                </div>
                <div className="font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#e879f9] bg-clip-text text-transparent pt-1">
                  FATIMA.
                </div>
              </div>
            </div>

            {/* Subtext Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-lg leading-relaxed">
              Graphic &amp; Brand Designer · Visual Strategist. Building brand identities that are impossible to ignore.
            </p>
          </div>

          {/* Right Navigation & Social Columns Container */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12">
            
            {/* NAVIGATE Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                NAVIGATE
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                CONNECT
              </h4>
              <ul className="space-y-2.5">
                {connectLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors inline-flex items-center gap-2"
                      >
                        <Icon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Rameen Fatima · All rights reserved · Crafted with strategic design.</p>

          <button
            onClick={scrollToTop}
            className="px-5 py-2 rounded-full border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-neutral-900 text-slate-900 dark:text-white text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1.5 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
