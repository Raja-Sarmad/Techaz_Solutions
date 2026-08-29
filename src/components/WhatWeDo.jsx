import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services, SERVICE_CATEGORIES, CATEGORY_META } from '../data/services';

const featured = services.filter((s) =>
  ['digital-marketing', 'web-development', 'car-dealer-website', 'social-media-management', 'ai-chatbots', 'ecommerce-stores'].includes(s.slug)
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const WhatWeDo = () => {
  return (
    <section className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-14 sm:py-16 px-4 sm:px-6 overflow-hidden">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto font-['Poppins']">
        {/* Header */}
        <Motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
            What We Do
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold mt-5 tracking-tight leading-[1.1]">
            One Agency,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
              Every Solution.
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg leading-relaxed">
            Marketing, web development, business software and automotive solutions — everything your business needs to grow in the Caribbean.
          </p>
        </Motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {SERVICE_CATEGORIES.map((cat, i) => {
            const meta = CATEGORY_META[cat.key];
            const CatIcon = meta.icon;
            const count = services.filter((s) => s.category === cat.key).length;

            return (
              <Motion.div key={cat.key} {...fadeUp(i * 0.08)}>
                <Link
                  to="/services"
                  className={`group relative flex flex-col h-full overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-7 transition-all duration-300 ${meta.border}`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${meta.glow}`} />

                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.grad} flex items-center justify-center text-white`}>
                      <CatIcon size={22} strokeWidth={2} />
                    </div>
                    <span className="text-4xl font-black leading-none text-gray-100 dark:text-gray-800 group-hover:text-gray-200 dark:group-hover:text-gray-700 transition-colors font-syne">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="relative flex-1">
                    <h3 className="font-syne text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {meta.tagline}
                    </p>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${meta.chip}`}>
                      {count} services
                    </span>
                  </div>

                  <div className="relative mt-6 pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition-colors">
                      Explore
                    </span>
                    <span className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Motion.div>
            );
          })}
        </div>

        {/* Featured services header */}
        <Motion.div {...fadeUp()} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 mb-2">Popular Services</p>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight">
              Handpicked for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Your Growth</span>
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
            Our most-requested solutions across marketing, development and automation.
          </p>
        </Motion.div>

        {/* Featured service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {featured.map((service, i) => {
            const Icon = service.icon;
            const meta = CATEGORY_META[service.category] || CATEGORY_META['Web Development'];

            return (
              <Motion.div
                key={service.slug}
                {...fadeUp(i * 0.06)}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 ${meta.border}`}
              >
                <div className={`absolute left-0 top-5 bottom-5 w-1 rounded-full ${meta.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div className="p-6 sm:p-7 pl-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${meta.grad} flex items-center justify-center text-white`}>
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <span className={`shrink-0 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${meta.chip}`}>
                      {service.category === 'Automotive' ? 'Automotive' : service.category.split(' ')[0]}
                    </span>
                  </div>

                  <h4 className="font-syne text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 min-h-[3.5rem]">
                    {service.short}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-600 hover:text-indigo-600 transition-colors"
                  >
                    Learn More
                    <span className="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950/50 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight size={13} className="text-blue-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </span>
                  </Link>
                </div>
              </Motion.div>
            );
          })}
        </div>

        {/* CTA link */}
        <Motion.div {...fadeUp()} className="text-center mt-12">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
          >
            View All {services.length} Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
