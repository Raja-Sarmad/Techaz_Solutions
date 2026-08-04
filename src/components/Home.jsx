import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import AboutUs from '../components/Aboutus';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/faq';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import SectionBackdrop from '../components/SectionBackdrop';
import { services, SERVICE_CATEGORIES } from '../data/services';

const featured = services.filter((s) =>
  ['digital-marketing', 'web-development', 'car-dealer-website', 'social-media-management', 'ai-chatbots', 'ecommerce-stores'].includes(s.slug)
);

const Home = () => {
  return (
    <PageLayout>
      <Hero />

      {/* What We Do - Categories */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 text-gray-900 py-16 px-6 font-['Poppins']">
        <SectionBackdrop />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight leading-tight text-gray-900">
              One Agency, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Every Solution.</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Marketing, web development, business software and automotive solutions — everything your business needs to grow in the Caribbean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {SERVICE_CATEGORIES.map((cat, i) => {
              const count = services.filter((s) => s.category === cat.key).length;
              return (
                <Motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    to="/services"
                    className="block h-full group bg-white border border-gray-200 rounded-[2rem] p-8 shadow-xl shadow-blue-600/5 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-blue-600 transition-colors">
                        {cat.label}
                      </span>
                      <span className="text-3xl font-black text-gray-200 group-hover:text-blue-300 transition-colors">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.label}</h3>
                    <p className="text-gray-500 text-sm mb-6">{count} services available</p>
                    <span className="inline-flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                      Explore <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Link>
                </Motion.div>
              );
            })}
          </div>

          {/* Featured services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((service, i) => {
              const Icon = service.icon;
              return (
                <Motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group bg-white p-8 rounded-[2rem] border border-gray-200 shadow-xl shadow-blue-600/5 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.short}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-all"
                  >
                    Learn More <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-blue-600 text-xs font-black uppercase tracking-widest hover:gap-5 transition-all"
            >
              View All 27 Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Process */}
      <Process />

      {/* Case Studies */}
      <CaseStudies />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Blog */}
      <Blog />

      {/* Contact */}
      <Contact />

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white py-16 px-6 text-center overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 blur-[120px] rounded-full animate-pulse" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Something Epic.</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
            From car dealer platforms to full marketing engines — tell us your goal and we'll build the system that reaches it.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-700 hover:bg-blue-50 px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/30 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
