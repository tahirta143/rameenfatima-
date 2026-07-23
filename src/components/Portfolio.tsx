'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Ruby Marina Limited Logo',
      category: 'logo',
      categoryLabel: 'Logo Design',
      image: '/images/ruby-marina-logo.png',
      description: 'Custom corporate gemstone logo design featuring elegant serif typography and dynamic gradient wave vector artwork.',
      tags: ['Logo Design', 'Brand Identity', 'Adobe Illustrator'],
    },
    {
      id: 2,
      title: 'Amazon Listing - Thigh Trainer Infographic',
      category: 'amazon',
      categoryLabel: 'Product Image Design',
      image: '/images/amazon-thigh-trainer-1.png',
      description: 'High-converting Amazon listing graphic highlighting key muscle tightening benefits, feature icons, and clean aesthetic product presentation.',
      tags: ['Product Image Design', 'Amazon Infographic', 'Canva & Illustrator'],
    },
    {
      id: 3,
      title: 'Amazon Listing - Product Structure Exploded View',
      category: 'amazon',
      categoryLabel: 'Product Image Design',
      image: '/images/amazon-thigh-trainer-2.png',
      description: 'Exploded product structure feature callout graphic explaining 360° adjustable button, triangular stability, and ergonomics.',
      tags: ['Product Exploded View', 'Feature Callouts', 'Amazon Design'],
    },
    {
      id: 4,
      title: 'Amazon Listing - Pet Hair Remover',
      category: 'amazon',
      categoryLabel: 'Product Image Design',
      image: '/images/amazon-pet-hair-remover.png',
      description: 'eCommerce product infographic showcasing static grip action, easy rinse & reuse, and safe fabric features.',
      tags: ['Pet Hair Remover', 'Amazon Infographic', 'High Conversion Visual'],
    },
    {
      id: 5,
      title: 'Shopify Store Banner & Visual Styling',
      category: 'shopify',
      categoryLabel: 'Shopify Store Design',
      image: '/images/shopify-store-design.png',
      description: 'Modern luxury eCommerce homepage hero banner designed with clean typography and sleek brand styling.',
      tags: ['Shopify Store Design', 'Banner Graphic', 'eCommerce Store'],
    },
    {
      id: 6,
      title: 'Creative Marketing & Brand Poster',
      category: 'poster',
      categoryLabel: 'Poster Design',
      image: '/images/poster-design.png',
      description: 'Vibrant promotional brand poster featuring glowing typography, geometric graphic elements, and strong visual hierarchy.',
      tags: ['Poster Design', 'Social Media Graphic', 'Canva & Illustrator'],
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Subtle Teal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
            <span>Design Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects &amp; Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Click on any card image to view high-resolution details of my Amazon product listing graphics, logo design, and Shopify store banners.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'amazon', label: 'Product Image Design (Amazon)' },
            { id: 'logo', label: 'Logo Design' },
            { id: 'shopify', label: 'Shopify Store Design' },
            { id: 'poster', label: 'Poster Design' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-[#8b5cf6] text-slate-950 shadow-md'
                  : 'bg-white dark:bg-[#121824] border border-slate-200 dark:border-[#8b5cf6]/20 text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="portfolio-card group cursor-pointer relative rounded-3xl overflow-hidden bg-white dark:bg-[#121824] border border-slate-200 dark:border-[#8b5cf6]/20 hover:border-[#8b5cf6] transition-colors duration-200 shadow-md flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-6">
                  <div className="p-3.5 rounded-full bg-[#8b5cf6] text-slate-950 shadow-md font-bold">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-[11px] font-extrabold text-[#8b5cf6] border border-[#8b5cf6]/40">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#8b5cf6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-1.5 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#8b5cf6]/15 text-[#8b5cf6] text-[10px] font-bold border border-[#8b5cf6]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative max-w-4xl w-full rounded-3xl bg-white dark:bg-[#121824] border border-[#8b5cf6]/40 p-6 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-white/20 text-white hover:text-[#8b5cf6] transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-[#8b5cf6]/20">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{selectedImage.title}</h3>
                <span className="px-3 py-1 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] text-xs font-bold border border-[#8b5cf6]/40">
                  {selectedImage.categoryLabel}
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{selectedImage.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedImage.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#8b5cf6]/15 text-[#8b5cf6] text-xs font-bold border border-[#8b5cf6]/30">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-[#8b5cf6]/20 flex justify-end">
                <a
                  href={`https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20project%20${encodeURIComponent(
                    selectedImage.title
                  )}%20and%20want%20to%20order%20similar%20graphics!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#8b5cf6] hover:opacity-90 text-slate-950 text-xs font-extrabold flex items-center gap-2 shadow-md transition-opacity"
                >
                  <span>Order Similar Design</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
