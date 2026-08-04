import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, Globe2, Wrench, Car } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';
import { services, SERVICE_CATEGORIES } from '../data/services';

const CATEGORY_ICONS = {
  'Marketing & Growth': Layers,
  'Web Development': Globe2,
  'Business Software': Wrench,
  'Automotive': Car,
};

const ServicesHub = () => {
  return (
    <PageLayout>
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-slate-50 via-blue-50/50 to-white text-gray-900 overflow-hidden font-['Poppins'] pt-28 pb-20 px-6">
        <SectionBackdrop />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-blue-400/25 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-violet-400/25 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-cyan-400/20 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <Motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 rounded-full text-[11px] font-black tracking-[0.2em] uppercase"
            >
              Our Service Stack
            </Motion.span>
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mt-8 leading-tight tracking-tighter max-w-4xl mx-auto"
            >
              Future-Proof <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Software & Marketing</span> Solutions
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium"
            >
              27+ services engineered for the Caribbean market — from marketing engines to full software systems. Explore each one below.
            </Motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Category Sections */}
          {SERVICE_CATEGORIES.map((cat) => {
            const CatIcon = CATEGORY_ICONS[cat.key] || Layers;
            const items = services.filter((s) => s.category === cat.key);
            return (
              <div key={cat.key} className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white">
                    <CatIcon size={22} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{cat.label}</h2>
                    <p className="text-gray-500 text-sm font-medium">{items.length} services</p>
                  </div>
                  <div className="h-[1px] flex-grow bg-gray-100 ml-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="group bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-start transition-all duration-300 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-1"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                          {service.short}
                        </p>
                        <Link
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-all"
                        >
                          Learn More
                          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                      </Motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20"
            >
              Not sure what you need? Let's talk
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesHub;
