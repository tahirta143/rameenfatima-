'use client';

import React from 'react';
import { ShoppingBag, Store, Image as ImageIcon, Palette, Globe, Sparkles, ArrowUpRight, BookOpen } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 'amazon',
      title: 'Product Image Design (Amazon)',
      subtitle: 'High-Converting Listing Infographics',
      description:
        'Custom main images, feature callouts, dimensions infographics, product structure breakdown, and lifestyle graphics engineered to boost click-through rates and sales conversions on Amazon & e-commerce.',
      icon: ShoppingBag,
      tag: 'Core Specialization',
      isLearning: false,
    },
    {
      id: 'shopify',
      title: 'Shopify Store Designer',
      subtitle: 'E-Commerce Graphic Design',
      description:
        'Visually compelling homepage hero banners, collection headers, promotional graphics, and brand graphic design to make your Shopify store look trustworthy, premium, and sleek.',
      icon: Store,
      tag: 'Popular Service',
      isLearning: false,
    },
    {
      id: 'poster',
      title: 'Poster Designer',
      subtitle: 'Creative Marketing & Social Graphics',
      description:
        'Attention-grabbing event flyers, promotional posters, marketing campaigns, and social media creative banners designed to captivate your audience immediately.',
      icon: ImageIcon,
      tag: 'Creative Graphic',
      isLearning: false,
    },
    {
      id: 'logo',
      title: 'Logo Designer',
      subtitle: 'Brand Identity & Vector Logos',
      description:
        'Memorable logo design, typography selection, brand mark creation, and comprehensive brand identity guidelines tailored for modern businesses and startups.',
      icon: Palette,
      tag: 'Brand Identity',
      isLearning: false,
    },
    {
      id: 'wordpress',
      title: 'WordPress Website Design',
      subtitle: 'Modern Web UI & Page Layouts',
      description:
        'Designing clean, responsive WordPress page layouts, portfolio structures, and modern site UI elements to expand your online brand presence.',
      icon: Globe,
      tag: 'Learning Service',
      isLearning: true,
    },
  ];

  return (
    <section id="services" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Subtle Teal Glow Backdrop */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
            <span>My Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Design Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            High-impact graphic design solutions crafted to elevate your brand identity and convert viewers into loyal customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card group relative rounded-3xl bg-white dark:bg-[#0d0d0d] p-8 border border-slate-200 dark:border-white/15 hover:border-[#8b5cf6] transition-colors duration-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-black text-slate-900 dark:text-[#8b5cf6] border border-slate-200 dark:border-neutral-800">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full border flex items-center gap-1 bg-slate-100 dark:bg-black text-slate-800 dark:text-slate-200 border-slate-200 dark:border-neutral-800"
                    >
                      {service.isLearning && <BookOpen className="w-3 h-3 text-[#8b5cf6]" />}
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#8b5cf6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-[#7c3aed] dark:text-[#8b5cf6] mt-1">{service.subtitle}</p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">{service.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <a
                    href="https://wa.me/923147416969?text=Hi%20Rameen,%20I'm%20interested%20in%20your%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-[#8b5cf6] flex items-center gap-1 transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
