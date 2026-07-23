'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-bg border-t border-brand-500/20 py-12 body-subtext text-xs transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-500/40">
              <Image src="/images/rameen-avatar.jpg" alt="Rameen" fill className="object-cover" />
            </div>
            <div>
              <p className="font-bold heading-text text-sm">Rameen Fatima</p>
              <p className="text-[11px] text-brand-500">Graphic Designer Portfolio</p>
            </div>
          </div>

          {/* Clock */}
          {time && (
            <div className="px-4 py-1.5 rounded-full glass-panel border border-brand-500/20 body-subtext font-mono text-[11px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PK Time: {time}</span>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/rameen-fatima-869141406"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-panel border border-brand-500/20 heading-text hover:text-brand-500 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:rameenfat0808@gmail.com"
              className="p-2 rounded-full glass-panel border border-brand-500/20 heading-text hover:text-brand-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923147416969"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-panel border border-brand-500/20 heading-text hover:text-brand-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-500/10 text-center text-[11px] body-subtext">
          <p>© {new Date().getFullYear()} Rameen Fatima. All Rights Reserved. Crafted with passion &amp; GSAP animations.</p>
        </div>
      </div>
    </footer>
  );
}
