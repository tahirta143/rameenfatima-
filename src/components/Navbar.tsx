'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
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
    <header className="fixed top-5 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      
      {/* Floating Centered Pill Navbar Capsule (Fully Theme Responsive Light & Dark Mode) */}
      <div className="pointer-events-auto bg-white/90 dark:bg-[#1c1c1e]/90 border border-slate-300/80 dark:border-white/20 backdrop-blur-xl px-2 py-1.5 rounded-full shadow-2xl flex items-center gap-1 sm:gap-1.5 transition-all duration-300">
        
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#a855f7] text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#a855f7] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Vertical Divider */}
        <div className="hidden md:block h-6 w-[1px] bg-slate-300 dark:bg-white/20 mx-1.5" />

        {/* Circular Theme Toggle Button (Dark: White button with Purple Moon / Light: Dark button with Amber Sun) */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform shrink-0"
            aria-label="Toggle Theme"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 stroke-[2.5]" />
            ) : (
              <Moon className="w-5 h-5 text-white dark:text-[#a855f7] stroke-[2.5]" />
            )}
          </button>
        )}

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2 pl-2 pr-1">
          <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">Rameen</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 bg-white/95 dark:bg-[#1c1c1e]/95 border border-slate-300 dark:border-white/20 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl space-y-2 md:hidden">
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
        </div>
      )}

    </header>
  );
}

