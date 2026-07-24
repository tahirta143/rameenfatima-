'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  categoryTag: string;
  image: string;
  galleryImages: string[];
  description: string;
  tags: string[];
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const projectGridRef = useRef<HTMLDivElement>(null);

  const portfolioItems: Project[] = [
    {
      id: 1,
      title: 'Branding — Zest Brew Coffee',
      category: 'branding',
      categoryLabel: 'Brand Identity',
      categoryTag: 'PRODUCT BRAND IDENTITY · 2024',
      image: '/images/zest-brew-1.png',
      galleryImages: [
        '/images/zest-brew-1.png',
        '/images/zest-brew-2.png',
        '/images/zest-brew-3.png',
        '/images/zest-brew-4.png',
        '/images/zest-brew-5.png',
      ],
      description:
        'Complete brand identity system for a specialty coffee brand. Friendly yet premium, designed for maximum brand recall.',
      tags: ['Brand Identity', 'Packaging Mockup', 'Logo Design', 'Canva & Illustrator'],
    },
    {
      id: 2,
      title: 'Infographic — Organic Supplement',
      category: 'amazon',
      categoryLabel: 'Product Image Design',
      categoryTag: 'PRODUCT INFOGRAPHIC · 2024',
      image: '/images/amazon-supplement-infographic.png',
      galleryImages: [
        '/images/amazon-supplement-infographic.png',
        '/images/amazon-thigh-trainer-1.png',
      ],
      description:
        'High-converting Amazon listing infographic graphic featuring exploded product view, benefit callouts, and commercial e-commerce presentation.',
      tags: ['Amazon Listing Graphic', 'Product Infographic', 'E-Commerce Design'],
    },
    {
      id: 3,
      title: 'Monogram — Ruby Marina',
      category: 'logo',
      categoryLabel: 'Logo Design',
      categoryTag: 'BRANDING & LOGO · 2024',
      image: '/images/vector-logo-branding.png',
      galleryImages: [
        '/images/vector-logo-branding.png',
        '/images/ruby-marina-logo.png',
      ],
      description:
        'Elegant corporate monogram logo design featuring custom vector typography, gemstone icon graphics, and brand stationery mockup.',
      tags: ['Logo Design', 'Vector Monogram', 'Stationery Mockup', 'Adobe Illustrator'],
    },
    {
      id: 4,
      title: 'Branding — Teeth Cleaner',
      category: 'branding',
      categoryLabel: 'Product Brand Identity',
      categoryTag: 'PRODUCT BRAND IDENTITY · 2024',
      image: '/images/amazon-pet-hair-remover.png',
      galleryImages: [
        '/images/amazon-pet-hair-remover.png',
        '/images/amazon-thigh-trainer-2.png',
        '/images/amazon-supplement-infographic.png',
        '/images/zest-brew-1.png',
        '/images/zest-brew-2.png',
      ],
      description:
        'Clean, fresh brand identity for a dental care product. Friendly yet clinical, designed to build trust and drive high sales.',
      tags: ['Dental Care', 'Product Branding', 'E-Commerce Graphic'],
    },
    {
      id: 5,
      title: 'Thumbnail Designs',
      category: 'poster',
      categoryLabel: 'Content Design',
      categoryTag: 'CONTENT DESIGN · 2024',
      image: '/images/modern-event-poster.png',
      galleryImages: [
        '/images/modern-event-poster.png',
        '/images/social-media-graphics-kit.png',
        '/images/poster-design.png',
        '/images/shopify-banner-graphic.png',
      ],
      description:
        'Stop-the-scroll thumbnail system for content creators. Built for click-through optimization and maximum visual impact.',
      tags: ['Thumbnail Design', 'Content Design', 'Click-Through Optimization'],
    },
    {
      id: 6,
      title: 'Store Design — Luxe Beauty',
      category: 'shopify',
      categoryLabel: 'Shopify Store Design',
      categoryTag: 'SHOPIFY STORE DESIGN · 2024',
      image: '/images/shopify-banner-graphic.png',
      galleryImages: [
        '/images/shopify-banner-graphic.png',
        '/images/shopify-store-design.png',
      ],
      description:
        'High-end e-commerce homepage hero banner designed with luxury typography, sleek beauty product presentation, and modern visual hierarchy.',
      tags: ['Shopify Store Design', 'Banner Graphic', 'eCommerce Store'],
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header reveal from top
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -35, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );

      // Filter bar reveal
      gsap.fromTo(
        filterBarRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
          },
        }
      );

      // Grid cards left/right horizontal slide reveal
      if (projectGridRef.current) {
        const projectCards = Array.from(projectGridRef.current.children);
        projectCards.forEach((card, index) => {
          const fromX = index % 2 === 0 ? -90 : 90;

          gsap.fromTo(
            card,
            { opacity: 0, x: fromX, scale: 0.94 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              delay: index * 0.08,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                end: 'bottom top',
                toggleActions: 'restart none none reset',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate grid cards on filter change
  useEffect(() => {
    if (projectGridRef.current) {
      gsap.fromTo(
        projectGridRef.current.children,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
      );
    }
  }, [activeFilter]);

  const openModal = (proj: Project) => {
    setSelectedProject(proj);
    setActiveImageIdx(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIdx((prev) => (prev + 1) % selectedProject.galleryImages.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIdx(
      (prev) => (prev - 1 + selectedProject.galleryImages.length) % selectedProject.galleryImages.length
    );
  };

  // Keyboard controls for modal navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Subtle Purple Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center space-y-4 max-w-3xl mx-auto mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-black border border-slate-200 dark:border-neutral-800 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
            <span>Design Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
            Featured Projects &amp; Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Click on any project to open the interactive multi-image showcase gallery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div ref={filterBarRef} className="flex flex-wrap items-center justify-center gap-3 mb-12 opacity-0">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'branding', label: 'Brand Identity' },
            { id: 'amazon', label: 'Product Image Design (Amazon)' },
            { id: 'logo', label: 'Logo Design' },
            { id: 'shopify', label: 'Shopify Store Design' },
            { id: 'poster', label: 'Poster Design' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#3b0764] via-[#7e22ce] to-[#d946ef] text-white shadow-md shadow-purple-900/40'
                  : 'bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-slate-200 hover:text-[#d946ef]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid of Projects (Matching User Reference Image Design) */}
        <div ref={projectGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="portfolio-card group cursor-pointer relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-neutral-950 border border-slate-200 dark:border-white/15 hover:border-[#a855f7] transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 opacity-0"
            >
              {/* Full Height Cover Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Floating Glass Badges */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                {/* Top Left Circle Number ID Badge */}
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs font-black text-white shadow-lg">
                  {item.id < 10 ? `0${item.id}` : item.id}
                </div>

                {/* Top Right View Count / Gallery Pill Badge */}
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 shadow-lg">
                  <Eye className="w-3.5 h-3.5 text-white" />
                  <span>{item.galleryImages.length}</span>
                </div>
              </div>

              {/* Bottom Dark Gradient Overlay & Info Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-transparent flex flex-col justify-end p-6 sm:p-7 space-y-2 z-10">
                {/* Category & Year Tag */}
                <span className="text-[#a855f7] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest">
                  {item.categoryTag}
                </span>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight group-hover:text-[#a855f7] transition-colors">
                  {item.title}
                </h3>

                {/* Preview Description */}
                <p className="text-slate-300 text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed opacity-90">
                  {item.description}
                </p>

                {/* View Project Arrow Button */}
                <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-white group-hover:text-[#a855f7] transition-colors">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Upgraded Project Details Modal UI */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">

          {/* Close Button Top Right */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#8b5cf6] text-white hover:text-slate-950 border border-white/20 transition-all duration-200 z-30"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl flex flex-col items-center justify-between space-y-6 max-h-[95vh] overflow-y-auto px-2 py-4">

            {/* Header Tagline & Title */}
            <div className="text-center space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#8b5cf6]">
                {selectedProject.categoryTag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h2>
            </div>

            {/* Main Image Stage Viewport with Floating Navigation Arrows */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[55vh] rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/15 shadow-2xl flex items-center justify-center group">
              <Image
                src={selectedProject.galleryImages[activeImageIdx]}
                alt={`${selectedProject.title} preview ${activeImageIdx + 1}`}
                fill
                className="object-contain p-2 sm:p-4"
                priority
              />

              {/* Left Circular Arrow Button */}
              {selectedProject.galleryImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 p-3 rounded-full bg-black/80 hover:bg-[#8b5cf6] text-white hover:text-slate-950 border border-white/20 transition-all duration-200 backdrop-blur-md shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Right Circular Arrow Button */}
              {selectedProject.galleryImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 p-3 rounded-full bg-black/80 hover:bg-[#8b5cf6] text-white hover:text-slate-950 border border-white/20 transition-all duration-200 backdrop-blur-md shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Project Description Text */}
            <p className="text-center text-sm sm:text-base text-slate-300 font-medium max-w-2xl leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Interactive Thumbnail Carousel Bar */}
            {selectedProject.galleryImages.length > 1 && (
              <div className="flex items-center justify-center gap-3 overflow-x-auto max-w-full py-2 px-4">
                {selectedProject.galleryImages.map((thumbUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${activeImageIdx === idx
                        ? 'border-[#8b5cf6] ring-2 ring-[#8b5cf6]/50 scale-105 opacity-100'
                        : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                      }`}
                  >
                    <Image
                      src={thumbUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Bottom Status & Key Guide */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl pt-2 border-t border-white/10 text-xs text-slate-400 gap-3">
              <span className="font-mono uppercase tracking-widest text-[#8b5cf6]">
                {activeImageIdx + 1} / {selectedProject.galleryImages.length} — USE ARROW KEYS OR SWIPE
              </span>

              <a
                href={`https://wa.me/923147416969?text=Hi%20Rameen,%20I%20saw%20your%20project%20${encodeURIComponent(
                  selectedProject.title
                )}%20and%20want%20to%20order%20similar%20graphics!`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-slate-950 font-extrabold flex items-center gap-2 transition-colors duration-200"
              >
                <span>Order Similar Design</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

