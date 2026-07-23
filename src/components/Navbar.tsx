'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, MessageSquare, MapPin, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Work', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 glass-panel border-b border-[#8b5cf6]/20 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Avatar */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-[#8b5cf6]">
              <Image
                src="/images/rameen-avatar.jpg"
                alt="Rameen Fatima"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg heading-text tracking-tight group-hover:text-[#8b5cf6] transition-colors flex items-center gap-1.5">
                Rameen Fatima
                <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
              </span>
              <span className="text-[11px] body-subtext font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8b5cf6]" />
                Bahawalnagar, Pakistan
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 glass-panel px-4 py-1.5 rounded-full border border-[#8b5cf6]/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium body-subtext hover:text-[#8b5cf6] transition-colors rounded-full hover:bg-[#8b5cf6]/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Hire Button */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-full glass-panel border border-[#8b5cf6]/30 heading-text hover:text-[#8b5cf6] hover:border-[#8b5cf6] transition-colors flex items-center gap-2 text-xs font-semibold"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px]">Solid Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-[11px]">Solid Black</span>
                  </>
                )}
              </button>
            )}

            <a
              href="https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#8b5cf6] hover:opacity-90 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 shadow-md transition-opacity"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 stroke-slate-950" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full glass-panel border border-[#8b5cf6]/30 heading-text"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#8b5cf6]" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-panel border border-[#8b5cf6]/30 heading-text"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#8b5cf6]/20 px-4 pt-4 pb-6 space-y-3 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-medium heading-text hover:bg-[#8b5cf6]/10 hover:text-[#8b5cf6] rounded-xl"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-[#8b5cf6] hover:opacity-90 py-3 rounded-xl font-extrabold text-center text-slate-950 flex items-center justify-center gap-2 mt-4 shadow-md transition-opacity"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950 stroke-slate-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
