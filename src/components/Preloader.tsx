'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Palette } from 'lucide-react';
import gsap from 'gsap';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    // Fade out animation via GSAP
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          ease: 'power2.inOut',
        });

        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          delay: 0.4,
          ease: 'power4.inOut',
          onComplete: () => setLoading(false),
        });
      }
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
    >
      {/* Background glow */}
      <div className="absolute w-[450px] h-[450px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div ref={contentRef} className="relative z-10 text-center space-y-6 px-4">

        {/* Avatar Ring */}
        <div className="relative mx-auto w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-brand-500 via-brand-400 to-purple-700 shadow-2xl shadow-brand-500/50 animate-pulse">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black">
            <Image
              src="/images/rameen-avatar.jpg"
              alt="Rameen Fatima"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <span>Rameen Fatima</span>
            <Sparkles className="w-5 h-5 text-brand-400 animate-spin" />
          </h2>
          <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Palette className="w-3.5 h-3.5" />
            Graphic Designer
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="h-1.5 w-full rounded-full bg-black overflow-hidden border border-white/20 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300 transition-all duration-100 shadow-sm shadow-brand-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>Loading Portfolio...</span>
            <span className="text-brand-400 font-bold">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
