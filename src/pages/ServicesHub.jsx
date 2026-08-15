import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, Layers, Globe2, Wrench, Car, MessageCircle, Sparkles
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';
import { services, SERVICE_CATEGORIES } from '../data/services';

const CATEGORY_ICONS = {
  'Marketing & Growth': Layers,
  'Web Development': Globe2,
  'Business Software': Wrench,
  'Automotive': Car,
};

const CATEGORY_STYLES = {
  'Marketing & Growth': {
    grad: 'from-pink-500 to-rose-500',
    chip: 'bg-pink-500/10 text-pink-600',
    dot: 'bg-pink-500',
    glow: 'bg-pink-500/20',
  },
  'Web Development': {
    grad: 'from-cyan-500 to-blue-500',
    chip: 'bg-cyan-500/10 text-cyan-600',
    dot: 'bg-cyan-500',
    glow: 'bg-cyan-500/20',
  },
  'Business Software': {
    grad: 'from-amber-500 to-orange-500',
    chip: 'bg-amber-500/10 text-amber-600',
    dot: 'bg-amber-500',
    glow: 'bg-amber-500/20',
  },
  'Automotive': {
    grad: 'from-red-500 to-orange-500',
    chip: 'bg-red-500/10 text-red-600',
    dot: 'bg-red-500',
    glow: 'bg-red-500/20',
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const ServicesHub = () => {
  const totalServices = services.length;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 text-gray-900 dark:text-gray-100 font-['Poppins']">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 rounded-full text-[11px] font-black tracking-[0.2em] uppercase"
            >
              Our Service Stack
            </Motion.span>

            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-8 leading-tight tracking-tighter"
            >
              Future-Proof{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Software & Marketing
              </span>{' '}
              Solutions
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-6 font-medium"
            >
              {totalServices}+ services engineered for the Caribbean market — from marketing
              engines to full software systems. Explore each one below.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-10"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-600/25 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 text-gray-900 dark:text-gray-100 px-9 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowUpRight size={16} className="rotate-90" />
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="services" className="relative py-20 px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-['Poppins'] scroll-mt-32">
        <div className="max-w-7xl mx-auto relative z-10">
          {SERVICE_CATEGORIES.map((cat, catIndex) => {
            const CatIcon = CATEGORY_ICONS[cat.key] || Layers;
            const styles = CATEGORY_STYLES[cat.key] || CATEGORY_STYLES['Web Development'];
            const items = services.filter((s) => s.category === cat.key);

            return (
              <div key={cat.key} className={catIndex > 0 ? 'mt-20' : ''}>
                {/* Category header */}
                <Motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-10">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${styles.grad} shadow-lg shadow-blue-600/10 flex items-center justify-center text-white`}>
                    <CatIcon size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        Category {String(catIndex + 1).padStart(2, '0')}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full ${styles.chip} text-[10px] font-black uppercase tracking-widest`}>
                        {items.length} services
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mt-1">
                      {cat.label}
                    </h2>
                  </div>
                  <div className="hidden md:flex items-center gap-3 flex-1 ml-4">
                    <div className="h-px flex-grow bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
                  </div>
                </Motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-200 dark:border-gray-700 shadow-xl shadow-blue-600/5 flex flex-col items-start transition-all duration-300 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${styles.grad} shadow-lg shadow-blue-600/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300`}>
                          <Icon size={22} />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                          {service.short}
                        </p>
                        <Link
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-all"
                        >
                          Learn More
                          <span className="w-6 h-6 rounded-full bg-blue-600/10 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                            <ArrowUpRight size={12} />
                          </span>
                        </Link>
                      </Motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white text-center font-['Poppins']">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Motion.div {...fadeInUp} className="space-y-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-[11px] font-black tracking-[0.2em] uppercase">
              <MessageCircle size={14} /> Free Consultation
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              Not sure what you need?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                Let's figure it out together.
              </span>
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              {totalServices}+ services across {SERVICE_CATEGORIES.length} categories — tell us your goal and we'll
              point you to the right solution.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-4 bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-12 py-5 sm:py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/30 hover:-translate-y-0.5"
            >
              Let's Talk
              <span className="flex items-center justify-center">
                <Sparkles size={18} className="group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </Motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesHub;
