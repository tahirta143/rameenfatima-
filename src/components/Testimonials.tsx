'use client';

import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Amazon FBA Brand Owner',
      comment:
        'Rameen redesigned our Amazon listing images for our fitness product line. Click-through rate jumped by 35% within two weeks! Outstanding graphics & fast communication.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Hamza Malik',
      role: 'Shopify Store Founder',
      comment:
        'Her Canva and Illustrator skills for Shopify store banners are top-notch. She understood our luxury brand concept immediately.',
      rating: 5,
    },
    {
      id: 3,
      name: 'David Miller',
      role: 'E-Commerce Marketing Lead',
      comment:
        'Great experience working with Rameen on poster design and Amazon exploded infographics. Reliable delivery and very professional!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Feedback from e-commerce sellers and brand owners who worked with Rameen Fatima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="testimonial-card relative rounded-3xl bg-white dark:bg-[#121824] p-8 border border-slate-200 dark:border-[#8b5cf6]/20 hover:border-[#8b5cf6] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between opacity-100"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#8b5cf6]/60" />
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic font-medium">"{rev.comment}"</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#8b5cf6]/15 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{rev.name}</h4>
                  <p className="text-xs text-[#7c3aed] dark:text-[#8b5cf6] font-bold">{rev.role}</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
