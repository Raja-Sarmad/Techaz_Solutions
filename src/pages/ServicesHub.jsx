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
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/50 to-white text-gray-900 overflow-hidden font-['Poppins'] pt-28 pb-16 px-6">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto relative z-10">
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
              className="text-3xl md:text-4xl font-bold mt-8 leading-tight tracking-tighter max-w-4xl mx-auto"
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
      </section>
    </PageLayout>
  );
};

export default ServicesHub;
