import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Clock3, ShieldCheck } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-slate-50 via-blue-50/50 to-white text-gray-900 pt-28 pb-20 px-6 overflow-hidden font-['Poppins']">
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
        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <Motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 rounded-full text-[11px] font-black tracking-[0.2em] uppercase">
              <MessageCircle size={14} />
              Connect With Us
            </span>
          </Motion.div>
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.02] mt-8"
          >
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Something Epic.</span>
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium"
          >
            Tell us about your project and our team will get back to you within 2 business hours — no fluff, just a clear path forward.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            {[
              { icon: <Clock3 size={16} />, text: 'Response within 2 hours' },
              { icon: <ShieldCheck size={16} />, text: 'Confidential & secure' },
              { icon: <MessageCircle size={16} />, text: 'Free consultation' },
            ].map((chip) => (
              <span
                key={chip.text}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-lg shadow-blue-600/5 text-gray-700 text-xs font-bold"
              >
                <span className="text-blue-600">{chip.icon}</span>
                {chip.text}
              </span>
            ))}
          </Motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Contact />

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white py-16 px-6 text-center overflow-hidden font-['Poppins']">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-400/20 blur-[100px] rounded-full" />
        <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
            Prefer A <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Quick Call?</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
            Skip the form and talk directly with our team — we'll help you figure out the best next step.
          </p>
          <a
            href="tel:+923262176836"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-700 hover:bg-blue-50 px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/30 hover:-translate-y-0.5"
          >
            Call +92 326 2176836
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Motion.div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
