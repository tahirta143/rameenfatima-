'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, Sparkles, Check, MessageSquare, Copy, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Product Image Design (Amazon)',
    message: '',
  });

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Rameen Fatima!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(
      formData.email
    )}%0A*Service Required:* ${encodeURIComponent(
      formData.service
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/923147416969?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 site-bg transition-colors duration-500 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#7c3aed] dark:text-[#8b5cf6] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7c3aed] dark:text-[#8b5cf6]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
            Contact Rameen Fatima
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Based in Bahawalnagar, Pakistan. Available for freelance &amp; remote graphic design opportunities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Details */}
          <div className="lg:col-span-5 space-y-6">

            {/* Location */}
            <div className="rounded-3xl bg-white dark:bg-[#121824] p-6 border border-slate-200 dark:border-[#8b5cf6]/20 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#8b5cf6]/15 text-[#7c3aed] dark:text-[#8b5cf6] border border-[#8b5cf6]/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white">Bahawalnagar, Pakistan</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="rounded-3xl bg-white dark:bg-[#121824] p-6 border border-slate-200 dark:border-[#8b5cf6]/20 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                  <a
                    href="https://wa.me/923147416969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-extrabold text-slate-900 dark:text-white hover:text-[#7c3aed] dark:hover:text-[#8b5cf6] transition-colors"
                  >
                    +92 314 7416969
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy('+923147416969', 'phone')}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/20 text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6]"
                title="Copy Phone Number"
              >
                {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email */}
            <div className="rounded-3xl bg-white dark:bg-[#121824] p-6 border border-slate-200 dark:border-[#8b5cf6]/20 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#8b5cf6]/15 text-[#7c3aed] dark:text-[#8b5cf6] border border-[#8b5cf6]/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</p>
                  <a
                    href="mailto:rameenfat0808@gmail.com"
                    className="text-base font-extrabold text-slate-900 dark:text-white hover:text-[#7c3aed] dark:hover:text-[#8b5cf6] transition-colors"
                  >
                    rameenfat0808@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy('rameenfat0808@gmail.com', 'email')}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/20 text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6]"
                title="Copy Email"
              >
                {copied === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="rounded-3xl bg-white dark:bg-[#121824] p-6 border border-slate-200 dark:border-[#8b5cf6]/20 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn Profile</p>
                  <a
                    href="https://www.linkedin.com/in/rameen-fatima-869141406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-extrabold text-slate-900 dark:text-white hover:text-[#7c3aed] dark:hover:text-[#8b5cf6] transition-colors"
                  >
                    Rameen Fatima
                  </a>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/rameen-fatima-869141406"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/20 text-slate-700 dark:text-slate-200 hover:text-[#8b5cf6]"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#121824] p-8 sm:p-10 border border-slate-200 dark:border-[#8b5cf6]/30 shadow-lg">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#7c3aed] dark:text-[#8b5cf6]" />
              Instant WhatsApp Project Inquiry
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mb-8">
              Fill out your details to generate a direct pre-formatted WhatsApp chat message with Rameen Fatima.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 dark:text-white mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-white mb-2">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#8b5cf6]"
                >
                  <option value="Product Image Design (Amazon)">Product Image Design (Amazon Listing)</option>
                  <option value="Shopify Store Design">Shopify Store Design</option>
                  <option value="Canva & Illustrator Graphics">Canva &amp; Illustrator Graphics</option>
                  <option value="Logo & Brand Identity">Logo &amp; Brand Identity Design</option>
                  <option value="WordPress Website Design">WordPress Website Design (Learning Service)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-white mb-2">Project Brief</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Rameen about your project requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-[#8b5cf6]/30 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#8b5cf6] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] py-4 rounded-xl font-extrabold text-slate-950 text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#8b5cf6]/25 transition-all"
              >
                <Send className="w-4 h-4 fill-slate-950 stroke-slate-950" />
                <span>Send WhatsApp Message to Rameen</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
