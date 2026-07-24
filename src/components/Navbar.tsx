'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, Sparkles, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'experience', 'services', 'skills', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'hero' ? 'home' : section === 'services' ? 'work' : section === 'testimonials' ? 'reviews' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Work', href: '#services', id: 'work' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Reviews', href: '#testimonials', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-8 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Avatar, Name & Designation */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#a855f7] to-purple-400 shrink-0 shadow-md">
            <Image
              src="/images/rameen-avatar.jpg"
              alt="Rameen Fatima Avatar"
              width={44}
              height={44}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`font-extrabold text-sm sm:text-base tracking-tight leading-tight group-hover:text-[#a855f7] transition-colors flex items-center gap-1.5 ${
                scrolled
                  ? 'text-slate-900 dark:text-white'
                  : 'text-white drop-shadow-sm'
              }`}
            >
              Rameen Fatima
              <Sparkles className="w-3.5 h-3.5 text-[#a855f7]" />
            </span>
            <span
              className={`text-[10px] sm:text-[11px] font-semibold tracking-wide ${
                scrolled
                  ? 'text-slate-600 dark:text-slate-400'
                  : 'text-slate-200'
              }`}
            >
              Graphic &amp; Brand Designer
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links Capsule (Fully Light & Dark Responsive) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-neutral-900/80 border border-slate-200/80 dark:border-white/15 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#3b0764] via-[#7e22ce] to-[#d946ef] text-white shadow-md shadow-purple-900/40'
                    : 'text-slate-700 dark:text-slate-200 hover:text-[#d946ef] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Theme Toggle & WhatsApp CTA */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center border border-slate-300 dark:border-transparent shadow-md hover:scale-105 transition-transform shrink-0 backdrop-blur-md"
              aria-label="Toggle Theme"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 stroke-[2.5]" />
              ) : (
                <Moon className="w-5 h-5 text-white dark:text-[#d946ef] stroke-[2.5]" />
              )}
            </button>
          )}

          <a
            href="https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-4 py-2 rounded-full bg-gradient-to-r from-[#3b0764] via-[#7e22ce] to-[#d946ef] hover:brightness-110 text-white font-extrabold text-xs items-center gap-2 shadow-md shadow-purple-900/40 transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-neutral-900/80 text-slate-900 dark:text-white lg:hidden border border-slate-200 dark:border-white/20 backdrop-blur-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-4 right-4 bg-white/95 dark:bg-neutral-950/95 border border-slate-200 dark:border-white/20 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 hover:bg-[#a855f7] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-extrabold py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2 mt-3 shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}

