import React, { useState } from 'react';
import { motion as Motion, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Zap, Users, Globe, Layers, FileCode2, Filter, ExternalLink } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';

const caseStudies = [
  {
    id: '01',
    title: 'FinTech Dashboard Ecosystem',
    industry: 'FinTech',
    description: 'A high-performance banking interface with real-time transaction tracking and AI fraud detection.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bc892d218656327.67a4c7ff7ba43.jpg',
    tags: ['React', 'Node.js', 'AI Fraud Detection', 'Real-time'],
    website: '',
    result: '38%',
    resultLabel: 'Faster Transactions',
    result2: '4.9/5',
    result2Label: 'User Rating',
  },
  {
    id: '02',
    title: 'AI-Powered CRM System',
    industry: 'SaaS',
    description: 'Custom enterprise CRM integrated with machine learning for predictive sales analytics.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    tags: ['CRM', 'ML', 'Sales Pipeline', 'Analytics'],
    website: '',
    result: '2.4x',
    resultLabel: 'Lead Conversion',
    result2: '41%',
    result2Label: 'More Closed Deals',
  },
  {
    id: '03',
    title: 'Healthcare Cloud SaaS',
    industry: 'Healthcare',
    description: 'HIPAA-compliant patient management system with end-to-end encryption and cloud storage.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    tags: ['SaaS', 'Cloud', 'HIPAA', 'Encryption'],
    website: '',
    result: '99.9%',
    resultLabel: 'Uptime Guaranteed',
    result2: '5k+',
    result2Label: 'Patients Served',
  },
  {
    id: '04',
    title: 'E-Commerce Architecture',
    industry: 'E-Commerce',
    description: 'Headless commerce solution built for 1M+ monthly active users with microservices.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    tags: ['Headless', 'Microservices', '1M+ Users'],
    website: '',
    result: '1M+',
    resultLabel: 'Monthly Users',
    result2: '+62%',
    result2Label: 'Checkout Speed',
  },
  {
    id: '05',
    title: 'Car Dealer Platform — Bahamas',
    industry: 'Automotive',
    description: 'Vehicle listings, finance calculator, WhatsApp enquiries and import cost tools for a Caribbean dealer.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    tags: ['Automotive', 'WhatsApp', 'Finance', 'Listings'],
    website: '',
    result: '3x',
    resultLabel: 'Sales Enquiries',
    result2: '300+',
    result2Label: 'Cars Listed',
  },
  {
    id: '06',
    title: 'Restaurant Delivery App',
    industry: 'Mobile',
    description: 'Full delivery ecosystem with live tracking, in-app payments and a merchant admin panel.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    tags: ['Mobile App', 'Payments', 'Live Tracking'],
    website: '',
    result: '60%',
    resultLabel: 'Order Growth',
    result2: '18k+',
    result2Label: 'Active Orders / Week',
  },
];

const industries = ['All', ...new Set(caseStudies.map((c) => c.industry))];

const Counter = ({ value }) => {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    let controls;
    let started = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          controls = animate(0, value, {
            duration: 1.8,
            ease: [0.23, 1, 0.32, 1],
            onUpdate: (v) => setDisplay(Math.round(v)),
          });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      if (controls) controls.stop();
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
};

const CaseStudiesPage = () => {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-slate-50 via-blue-50/50 to-white dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 text-gray-900 dark:text-gray-100 pt-28 pb-20 px-6 overflow-hidden font-['Poppins']">
        <SectionBackdrop />
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-blue-400/20 blur-[80px] rounded-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-violet-400/20 blur-[80px] rounded-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] bg-cyan-400/15 blur-[80px] rounded-full" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <Motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 rounded-full text-[11px] font-black tracking-[0.2em] uppercase">
              <FileCode2 size={14} />
              Case Studies
            </span>
          </Motion.div>
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.02] mt-8"
          >
            Real Projects. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Real Results.</span>
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium"
          >
            A peek inside the systems we've engineered for clients across the Caribbean and beyond — and the numbers that prove they work.
          </Motion.p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative bg-white dark:bg-gray-950 py-12 px-6 border-y border-gray-100 dark:border-gray-800 font-['Poppins']">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: <TrendingUp size={20} />, val: 150, suffix: '+', lbl: 'Projects Delivered' },
            { icon: <Users size={20} />, val: 80, suffix: '+', lbl: 'Happy Clients' },
            { icon: <Zap size={20} />, val: 27, suffix: '+', lbl: 'Services Offered' },
            { icon: <Globe size={20} />, val: 12, suffix: '+', lbl: 'Caribbean Markets' },
          ].map((s, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 justify-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-gray-900 dark:text-gray-100">
                  <Counter value={s.val} />
                  {s.suffix}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{s.lbl}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 py-16 px-6 font-['Poppins']">
        <SectionBackdrop />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Work That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Speaks For Itself</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg">Filter by industry and see how we've moved the needle.</p>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 rounded-2xl shadow-lg shadow-blue-600/5">
              <Filter size={16} className="text-blue-600 mx-1" />
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setFilter(ind)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                    filter === ind
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20'
                      : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((c, i) => (
              <Motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-blue-600/5 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 transition-all duration-500"
              >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-blue-600">
                        {c.industry}
                      </span>
                      <span className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur border border-white/20 text-[10px] font-black uppercase tracking-widest text-white">
                        #{c.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 transition-colors">{c.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{c.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {c.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-gray-800 pt-5">
                      <div>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{c.result}</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{c.resultLabel}</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{c.result2}</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{c.result2Label}</p>
                      </div>
                    </div>
                    {c.website && (
                      <a
                        href={c.website}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
                      >
                        Visit Live Website
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY COVERAGE */}
      <section className="relative bg-white dark:bg-gray-950 py-16 px-6 border-t border-gray-100 dark:border-gray-800 font-['Poppins']">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Automotive', desc: 'Car dealer platforms, rental systems and lead-generation tools built for the region.', icon: <Layers size={20} /> },
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
              className="group bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:border-blue-400/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-all duration-300">
                {c.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{c.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white py-16 px-6 text-center overflow-hidden font-['Poppins']">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 blur-[80px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 blur-[80px] rounded-full" />
        <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
            Your Project Could Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Next.</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
            Want results like these? Let's scope your idea and build a plan that moves real numbers.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-12 py-5 sm:py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/30 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </Motion.div>
      </section>
    </PageLayout>
  );
};

export default CaseStudiesPage;
