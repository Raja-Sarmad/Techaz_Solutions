import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import {
  ArrowLeft, ArrowUpRight, Check, Users, Package, Target, Rocket, ShieldCheck
} from 'lucide-react';
import { getService, services } from '../data/services';
import Footer from '../components/Footer';

const PALETTES = {
  blue: {
    text: 'text-blue-600',
    soft: 'bg-blue-500/10',
    border: 'border-blue-400/30',
    ring: 'border-blue-400/30',
    gradient: 'from-blue-500 via-blue-400 to-cyan-400',
    glow: 'bg-blue-600/20',
    bar: 'bg-blue-500',
    solid: 'bg-blue-600',
    solidHover: 'hover:bg-blue-700',
  },
  cyan: {
    text: 'text-cyan-600',
    soft: 'bg-cyan-500/10',
    border: 'border-cyan-400/30',
    ring: 'border-cyan-400/30',
    gradient: 'from-cyan-400 via-cyan-500 to-blue-500',
    glow: 'bg-cyan-600/20',
    bar: 'bg-cyan-500',
    solid: 'bg-cyan-600',
    solidHover: 'hover:bg-cyan-700',
  },
  green: {
    text: 'text-emerald-600',
    soft: 'bg-emerald-500/10',
    border: 'border-emerald-400/30',
    ring: 'border-emerald-400/30',
    gradient: 'from-emerald-400 via-emerald-500 to-teal-400',
    glow: 'bg-emerald-600/20',
    bar: 'bg-emerald-500',
    solid: 'bg-emerald-600',
    solidHover: 'hover:bg-emerald-700',
  },
  amber: {
    text: 'text-amber-600',
    soft: 'bg-amber-500/10',
    border: 'border-amber-400/30',
    ring: 'border-amber-400/30',
    gradient: 'from-amber-400 via-orange-500 to-amber-400',
    glow: 'bg-amber-600/20',
    bar: 'bg-amber-500',
    solid: 'bg-amber-600',
    solidHover: 'hover:bg-amber-700',
  },
  red: {
    text: 'text-red-600',
    soft: 'bg-red-500/10',
    border: 'border-red-400/30',
    ring: 'border-red-400/30',
    gradient: 'from-red-500 via-red-400 to-orange-400',
    glow: 'bg-red-600/20',
    bar: 'bg-red-500',
    solid: 'bg-red-600',
    solidHover: 'hover:bg-red-700',
  },
  pink: {
    text: 'text-pink-600',
    soft: 'bg-pink-500/10',
    border: 'border-pink-400/30',
    ring: 'border-pink-400/30',
    gradient: 'from-pink-500 via-pink-400 to-fuchsia-400',
    glow: 'bg-pink-600/20',
    bar: 'bg-pink-500',
    solid: 'bg-pink-600',
    solidHover: 'hover:bg-pink-700',
  },
  purple: {
    text: 'text-purple-600',
    soft: 'bg-purple-500/10',
    border: 'border-purple-400/30',
    ring: 'border-purple-400/30',
    gradient: 'from-purple-500 via-purple-400 to-indigo-400',
    glow: 'bg-purple-600/20',
    bar: 'bg-purple-500',
    solid: 'bg-purple-600',
    solidHover: 'hover:bg-purple-700',
  },
  indigo: {
    text: 'text-indigo-600',
    soft: 'bg-indigo-500/10',
    border: 'border-indigo-400/30',
    ring: 'border-indigo-400/30',
    gradient: 'from-indigo-500 via-indigo-400 to-blue-400',
    glow: 'bg-indigo-600/20',
    bar: 'bg-indigo-500',
    solid: 'bg-indigo-600',
    solidHover: 'hover:bg-indigo-700',
  },
  rose: {
    text: 'text-rose-600',
    soft: 'bg-rose-500/10',
    border: 'border-rose-400/30',
    ring: 'border-rose-400/30',
    gradient: 'from-rose-500 via-rose-400 to-pink-400',
    glow: 'bg-rose-600/20',
    bar: 'bg-rose-500',
    solid: 'bg-rose-600',
    solidHover: 'hover:bg-rose-700',
  },
  orange: {
    text: 'text-orange-600',
    soft: 'bg-orange-500/10',
    border: 'border-orange-400/30',
    ring: 'border-orange-400/30',
    gradient: 'from-orange-500 via-orange-400 to-amber-400',
    glow: 'bg-orange-600/20',
    bar: 'bg-orange-500',
    solid: 'bg-orange-600',
    solidHover: 'hover:bg-orange-700',
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const p = PALETTES[service.palette] || PALETTES.blue;
  const Icon = service.icon;
  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-500/30 overflow-x-hidden dark:bg-gray-950 dark:text-gray-100">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className={`absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] ${p.glow} blur-[120px] rounded-full`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        {/* Back link */}
        <Motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/services" className="group inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all dark:text-gray-300 dark:hover:text-white">
            <div className={`p-2 rounded-full border border-gray-200 ${p.border} dark:border-gray-700`}>
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase">All Services</span>
          </Link>
        </Motion.div>

        {/* Hero */}
        <section className="mt-12 mb-12">
          <Motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${p.soft} border ${p.border} text-[10px] font-black tracking-[0.25em] uppercase ${p.text}`}>
                <Icon size={14} />
                {service.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.02] mb-8 uppercase">
              {service.name.split(' ')[0]}{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${p.gradient}`}>
                {service.name.split(' ').slice(1).join(' ') || 'Service'}
              </span>
            </h1>
            <p className="max-w-3xl text-gray-600 text-lg md:text-xl font-light leading-relaxed dark:text-gray-300">
              {service.short}
            </p>
          </Motion.div>
        </section>

        {/* Intro + Stats band */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
            <Motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Why this <span className={`text-transparent bg-clip-text bg-gradient-to-r ${p.gradient}`}>service matters</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">{service.intro}</p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full border ${p.border} ${p.text} text-[10px] font-black uppercase tracking-widest`}>
                  High Demand
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest dark:border-gray-700 dark:text-gray-300">
                  Recurring Revenue
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-[10px] font-black uppercase tracking-widest dark:border-gray-700 dark:text-gray-300">
                  Caribbean Ready
                </span>
              </div>
            </Motion.div>

            <Motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Target size={22} />, val: 'Measured', lbl: 'Every result tracked' },
                { icon: <Rocket size={22} />, val: 'Fast', lbl: 'Launch-ready delivery' },
                { icon: <Users size={22} />, val: 'Supported', lbl: 'Dedicated team' },
                { icon: <ShieldCheck size={22} />, val: 'Secure', lbl: 'Data protected' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-6 dark:bg-gray-800/50 dark:border-gray-700">
                  <div className={`w-12 h-12 rounded-xl ${p.soft} flex items-center justify-center mb-4 ${p.text}`}>{item.icon}</div>
                  <h4 className="text-gray-900 font-bold dark:text-gray-100">{item.val}</h4>
                  <p className="text-gray-500 text-sm dark:text-gray-400">{item.lbl}</p>
                </div>
              ))}
            </Motion.div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <span className={`text-[10px] uppercase tracking-[0.2em] ${p.text} font-bold mb-2 block`}>What we deliver</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core capabilities</h2>
              </div>
              <div className={`h-[1px] flex-grow bg-gray-100 hidden md:block max-w-xs dark:bg-gray-800`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((f, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="group p-7 bg-gray-50 border border-gray-100 rounded-3xl transition-all duration-500 dark:bg-gray-800/50 dark:border-gray-800"
                >
                  <span className={`block w-8 h-0.5 ${p.bar} mb-6 rounded-full`} />
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 dark:text-gray-100 dark:group-hover:text-white">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed dark:text-gray-400">{f.desc}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-12">
          <div className="relative rounded-[3rem] border border-gray-200 bg-gray-50 p-10 md:p-16 overflow-hidden dark:border-gray-700 dark:bg-gray-800/50">
            <div className={`absolute top-0 right-0 w-72 h-72 ${p.glow} blur-[120px] rounded-full pointer-events-none`} />
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div>
                <span className={`text-[10px] uppercase tracking-[0.2em] ${p.text} font-bold mb-2 block`}>Everything included</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What you get</h2>
                <p className="text-gray-600 leading-relaxed mb-8 dark:text-gray-300">
                  A complete, hand-overspaced scope of work — no surprises, no hidden costs. Every project ships with the essentials below.
                </p>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 sm:px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-blue-600/25 transition-all hover:pr-10 hover:shadow-blue-600/40"
                >
                  Start Your Project
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((d, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 dark:bg-gray-800/50 dark:border-gray-700"
                  >
                    <span className={`p-1 rounded-full ${p.soft} ${p.text}`}>
                      <Check size={14} />
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{d}</span>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Target clients */}
        <section className="mb-12">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className={`text-[10px] uppercase tracking-[0.2em] ${p.text} font-bold mb-2 block`}>Who it's for</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Perfect for</h2>
            </div>
            <div className={`h-[1px] flex-grow bg-gray-100 hidden md:block max-w-xs dark:bg-gray-800`} />
          </div>
          <div className="flex flex-wrap gap-3">
            {service.clients.map((c, i) => (
              <Motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold hover:border-blue-400/40 hover:bg-gray-100 transition-all dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <Package size={14} className={p.text} />
                {c}
              </Motion.span>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <span className={`text-[10px] uppercase tracking-[0.2em] ${p.text} font-bold mb-2 block`}>Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple, clear pricing</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto dark:text-gray-400">Every package is tailored to your goals. Talk to us and we'll scope the perfect fit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.packages.map((pkg, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-[2.5rem] p-8 border transition-all duration-500 flex flex-col ${
                  i === 1
                    ? 'bg-gradient-to-br from-blue-50 to-violet-50 border-blue-200 shadow-2xl shadow-blue-600/10 dark:from-blue-950 dark:to-violet-950 dark:border-blue-900'
                    : 'bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'
                }`}
              >
                {i === 1 && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 ${p.solid} text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full`}>
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1 dark:text-gray-100">{pkg.name}</h3>
                <p className={`text-2xl font-black ${p.text} mb-6`}>{pkg.price}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <Check size={15} className={`${p.text} mt-0.5 shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full text-center text-[11px] font-black uppercase tracking-widest transition-all ${
                    i === 1
                      ? `${p.solid} ${p.solidHover} text-white`
                      : 'bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </Link>
              </Motion.div>
            ))}
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="mb-12">
            <div className="flex items-end justify-between mb-10 gap-4">
              <div>
                <span className={`text-[10px] uppercase tracking-[0.2em] ${p.text} font-bold mb-2 block`}>Keep exploring</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Related services</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s) => {
                const RelatedIcon = s.icon;
                const rp = PALETTES[s.palette] || PALETTES.blue;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group p-7 bg-white border border-gray-200 rounded-3xl hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500 dark:bg-gray-900 dark:border-gray-700"
                  >
                    <div className={`w-12 h-12 rounded-xl ${rp.soft} flex items-center justify-center mb-5 ${rp.text}`}>
                      <RelatedIcon size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-900 mb-2 dark:text-gray-100 dark:group-hover:text-white">{s.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 dark:text-gray-400">{s.short}</p>
                    <span className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${rp.text}`}>
                      Learn More <ArrowUpRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mb-8 text-center relative">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${p.glow} blur-[100px] -z-10 animate-pulse`} />
          <Motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">Ready to start?</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg dark:text-gray-300">Let's talk about your project and build something your customers will love.</p>
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-3 sm:gap-4 ${p.solid} ${p.solidHover} text-white px-6 sm:px-12 py-5 sm:py-6 rounded-full font-bold transition-all hover:pr-14`}
            >
              <span className="text-lg uppercase tracking-tight">Get Free Consultation</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;
