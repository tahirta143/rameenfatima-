'use client';

import React from 'react';
import { Sparkles, Layers, MessageSquare, Clock, Globe, CheckCircle } from 'lucide-react';

export default function Skills() {
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

  return (
    <section id="skills" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
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
          <div className="lg:col-span-7 space-y-6 rounded-3xl bg-white dark:bg-[#0d0d0d] p-8 border border-slate-200 dark:border-white/15 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6]" />
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
                  <span className="font-extrabold text-[#7c3aed] dark:text-[#8b5cf6]">{skill.level}%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-black overflow-hidden p-0.5 border border-slate-200 dark:border-neutral-800">
                  <div
                    className="h-full rounded-full bg-[#8b5cf6] shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills & Languages */}
          <div className="lg:col-span-5 space-y-6">
            
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
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-black text-slate-900 dark:text-[#8b5cf6] border border-slate-200 dark:border-neutral-800 shrink-0">
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
                <Globe className="w-5 h-5 text-[#7c3aed] dark:text-[#8b5cf6]" />
                Languages
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-neutral-800 space-y-1"
                  >
                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
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
