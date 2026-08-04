import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp, Zap, Users, Globe } from 'lucide-react';
import SectionBackdrop from './SectionBackdrop';

const projects = [
  {
    id: '01',
    title: 'FinTech Dashboard Ecosystem',
    description: 'A high-performance banking interface with real-time transaction tracking and AI fraud detection.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bc892d218656327.67a4c7ff7ba43.jpg',
    tags: ['React', 'Node.js', 'AI Fraud Detection', 'Real-time'],
    result: '38%',
    resultLabel: 'Faster Transactions',
  },
  {
    id: '02',
    title: 'AI-Powered CRM System',
    description: 'Custom enterprise CRM integrated with machine learning for predictive sales analytics.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    tags: ['CRM', 'ML', 'Sales Pipeline', 'Analytics'],
    result: '2.4x',
    resultLabel: 'Lead Conversion',
  },
  {
    id: '03',
    title: 'Healthcare Cloud SaaS',
    description: 'HIPAA-compliant patient management system with end-to-end encryption and cloud storage.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    tags: ['SaaS', 'Cloud', 'HIPAA', 'Encryption'],
    result: '99.9%',
    resultLabel: 'Uptime Guaranteed',
  },
  {
    id: '04',
    title: 'E-Commerce Architecture',
    description: 'Headless commerce solution built for 1M+ monthly active users with microservices.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Headless', 'Microservices', '1M+ Users'],
    result: '1M+',
    resultLabel: 'Monthly Users',
  },
  {
    id: '05',
    title: 'Car Dealer Platform — Bahamas',
    description: 'Vehicle listings, finance calculator, WhatsApp enquiries and import cost tools for a Caribbean dealer.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    tags: ['Automotive', 'WhatsApp', 'Finance', 'Listings'],
    result: '3x',
    resultLabel: 'Sales Enquiries',
  },
  {
    id: '06',
    title: 'Restaurant Delivery App',
    description: 'Full delivery ecosystem with live tracking, in-app payments and a merchant admin panel.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    tags: ['Mobile App', 'Payments', 'Live Tracking'],
    result: '60%',
    resultLabel: 'Order Growth',
  },
];

const extended = [projects[projects.length - 1], ...projects, projects[0]];

const CaseStudies = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index === extended.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 600);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extended.length - 2);
      }, 600);
    }
  }, [index]);

  return (
    <section id="CaseStudies" className="relative py-16 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white overflow-hidden font-['Poppins'] text-gray-900">
      <SectionBackdrop />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-xl text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 text-[10px] font-black tracking-widest uppercase">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 tracking-tight leading-tight">
              Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Success Stories.</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Explore our portfolio of high-impact software solutions engineered for industry leaders across the Caribbean and beyond.
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={prev} className="p-4 border border-gray-200 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <ArrowLeft size={20} />
            </button>
            <button onClick={next} className="p-4 border border-gray-200 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 py-10 border-y border-gray-200">
          {[
            { icon: <TrendingUp size={20} />, val: '150+', lbl: 'Projects Delivered' },
            { icon: <Zap size={20} />, val: '8+', lbl: 'Years Experience' },
            { icon: <Users size={20} />, val: '80+', lbl: 'Happy Clients' },
            { icon: <Globe size={20} />, val: '12+', lbl: 'Caribbean Markets' },
          ].map((s, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-gray-900">{s.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{s.lbl}</p>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* SLIDER CONTAINER */}
        <div className="overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white backdrop-blur-sm shadow-xl shadow-slate-200/60">
          <Motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={transition ? { duration: 0.6, ease: 'easeInOut' } : { duration: 0 }}
            onAnimationComplete={() => setTransition(true)}
          >
            {extended.map((item, i) => (
              <div key={i} className="min-w-full lg:p-12 p-6 flex flex-col lg:flex-row gap-10 items-center">
                {/* Image Section */}
                <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
                  <img
                    src={item.image}
                    className="w-full h-[300px] md:h-[450px] object-cover hover:scale-110 transition-transform duration-1000"
                    alt={item.title}
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 space-y-6 text-left">
                  <div className="flex items-center gap-4">
                    <p className="text-blue-600 font-black text-2xl tracking-tighter">#{item.id}</p>
                    <div className="h-[1px] flex-grow bg-gray-100"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center gap-4">
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      {item.result}
                    </span>
                    <span className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{item.resultLabel}</span>
                  </div>
                  <button className="flex items-center gap-2 text-gray-900 font-bold group border-b-2 border-blue-500 pb-1 hover:text-blue-600 transition-all">
                    Explore Case Study
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </Motion.div>
        </div>

        {/* INDUSTRY COVERAGE */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Automotive', desc: 'Car dealer platforms, rental systems and lead-generation tools built for the region.', icon: <TrendingUp size={20} /> },
            { title: 'Finance & SaaS', desc: 'FinTech dashboards, CRMs and cloud platforms engineered for scale and security.', icon: <Zap size={20} /> },
            { title: 'Healthcare & Retail', desc: 'HIPAA-ready clinic systems, e-commerce and delivery apps that run businesses.', icon: <Globe size={20} /> },
          ].map((c, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-blue-400/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-all duration-300">
                {c.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
