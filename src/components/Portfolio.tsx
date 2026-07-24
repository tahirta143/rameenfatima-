'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
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
      title: 'Zest Brew — Coffee Brand Identity & Packaging',
      category: 'branding',
      categoryLabel: 'Brand Identity',
      categoryTag: 'BRAND IDENTITY · 2024',
      image: '/images/zest-brew-1.png',
      galleryImages: [
        '/images/zest-brew-1.png',
        '/images/zest-brew-2.png',
        '/images/zest-brew-3.png',
        '/images/zest-brew-4.png',
        '/images/zest-brew-5.png',
      ],
      description:
        'Complete brand identity system for a specialty coffee brand including logo lockup, takeaway cups, coffee bean packaging, interior neon signage, and menu graphics.',
      tags: ['Brand Identity', 'Packaging Mockup', 'Logo Design', 'Canva & Illustrator'],
    },
    {
      id: 2,
      title: 'Amazon Listing — Organic Supplement Infographic',
      category: 'amazon',
      categoryLabel: 'Product Image Design',
      categoryTag: 'AMAZON INFOGRAPHIC · 2024',
      image: '/images/amazon-supplement-infographic.png',
      galleryImages: [
        '/images/amazon-supplement-infographic.png',
        '/images/amazon-thigh-trainer-1.png',
      ],
      description:
        'High-converting Amazon listing infographic graphic featuring exploded product view, benefit callouts, ingredient breakdown, and commercial e-commerce presentation.',
      tags: ['Amazon Listing Graphic', 'Product Infographic', 'E-Commerce Design'],
    },
    {
      id: 3,
      title: 'Ruby Marina & Co — Luxury Vector Monogram & Logo',
      category: 'logo',
      categoryLabel: 'Logo Design',
      categoryTag: 'LOGO DESIGN · 2024',
      image: '/images/vector-logo-branding.png',
      galleryImages: [
        '/images/vector-logo-branding.png',
        '/images/ruby-marina-logo.png',
      ],
      description:
        'Elegant corporate monogram logo design featuring custom vector typography, gemstone icon graphics, business card design, and brand stationery mockup.',
      tags: ['Logo Design', 'Vector Monogram', 'Stationery Mockup', 'Adobe Illustrator'],
    },
    {
      id: 4,
      title: 'Amazon Listing — Pet Hair Remover Infographic',
      category: 'amazon',
      categoryLabel: 'Product Image Design',
      categoryTag: 'PRODUCT INFOGRAPHIC · 2024',
      image: '/images/amazon-pet-hair-remover.png',
      galleryImages: [
        '/images/amazon-pet-hair-remover.png',
        '/images/amazon-thigh-trainer-2.png',
      ],
      description:
        'E-commerce product infographic highlighting dual-sided static grip action, easy rinse-cleaning benefits, and safe multi-fabric performance.',
      tags: ['Pet Care Product', 'Feature Breakdown', 'Amazon Listing Graphic'],
    },
    {
      id: 5,
      title: 'Luxe Beauty — Shopify Store Hero Banner & Graphic',
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
    {
      id: 6,
      title: 'Commercial Marketing & Social Media Creative Kit',
      category: 'poster',
      categoryLabel: 'Poster Design',
      categoryTag: 'POSTER DESIGN · 2024',
      image: '/images/modern-event-poster.png',
      galleryImages: [
        '/images/modern-event-poster.png',
        '/images/social-media-graphics-kit.png',
        '/images/poster-design.png',
      ],
      description:
        'High-impact marketing poster and social media creative campaign kit featuring neon typography, geometric graphic design shapes, and promotional flyers.',
      tags: ['Poster Design', 'Social Media Graphic', 'Canva Pro & Illustrator'],
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

      // Grid cards left/right horizontal slide reveal (matching Skills.tsx smoothness)
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
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all duration-200 ${activeFilter === filter.id
                  ? 'bg-[#8b5cf6] text-slate-950 shadow-md shadow-[#8b5cf6]/30'
                  : 'bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6]'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div ref={projectGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="portfolio-card group cursor-pointer relative rounded-3xl overflow-hidden bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/15 hover:border-[#8b5cf6] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#8b5cf6]/10 flex flex-col justify-between opacity-0"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-[2px]">
                  <div className="px-5 py-2.5 rounded-full bg-[#8b5cf6] text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Gallery ({item.galleryImages.length} images)</span>
                  </div>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/90 backdrop-blur-md text-[11px] font-extrabold text-[#8b5cf6] border border-white/20">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
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
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-black text-slate-800 dark:text-slate-200 text-[10px] font-bold border border-slate-200 dark:border-neutral-800"
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

