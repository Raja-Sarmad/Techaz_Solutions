import React from 'react';
import { motion as Motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import SectionBackdrop from '../components/SectionBackdrop';
import FAQ from '../components/faq';

const FaqsPage = () => {
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
        <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
          <Motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 rounded-full text-[11px] font-black tracking-[0.2em] uppercase">
              <HelpCircle size={14} />
              FAQ
            </span>
          </Motion.div>
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.02] mt-8"
          >
            Your Questions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Answered.</span>
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium"
          >
            Everything you need to know about how we work, what we build and how we keep your projects secure.
          </Motion.p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-blue-500 animate-bounce" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ />
    </PageLayout>
  );
};

export default FaqsPage;
