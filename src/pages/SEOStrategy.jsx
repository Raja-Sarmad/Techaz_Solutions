import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Search, BarChart3, Globe, ShieldCheck, 
  Zap, Target, MousePointer2, ExternalLink, Activity, 
  LineChart, Rocket
} from 'lucide-react';

// Footer ko import karein (Rasta check karlein apne folder structure ke hisaab se)
import Footer from '../components/Footer';

const SEOStrategy = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  const seoCapabilities = [
    {
      icon: <Search className="text-blue-400" size={28} />,
      title: "Keyword Intelligence",
      desc: "Intent-based research to capture users at the exact moment of need.",
      tag: "Discovery"
    },
    {
      icon: <BarChart3 className="text-cyan-400" size={28} />,
      title: "Technical SEO",
      desc: "Optimizing Core Web Vitals, schema markup, and site architecture.",
      tag: "Foundation"
    },
    {
      icon: <Target className="text-indigo-400" size={28} />,
      title: "On-Page Strategy",
      desc: "Deep content optimization and semantic structure for maximum relevance.",
      tag: "Optimization"
    },
    {
      icon: <Globe className="text-blue-500" size={28} />,
      title: "Authority Building",
      desc: "High-tier link building and digital PR to boost domain authority.",
      tag: "Trust"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-['Inter',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background Orbs --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/#services" className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all">
            <div className="p-2 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase text-[10px]">Back to Growth Hub</span>
          </Link>
        </motion.div>

        {/* --- Hero Section --- */}
        <section className="mt-20 mb-32">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[1px] w-8 bg-blue-500"></div>
               <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Search Dominance</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.0] mb-8 uppercase ">
              SEO <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                STRATEGY
              </span>
            </h1>
            <p className="max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              We don't just chase rankings; we dominate the digital landscape. Our data-led SEO 
              frameworks transform search engines into your <span className="text-white font-normal">strongest acquisition channel</span>.
            </p>
          </motion.div>
        </section>

        {/* --- Stats Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-12 bg-white/[0.01]"
        >
          {[
            { label: "Traffic Growth", val: "240%+" },
            { label: "Top 3 Rankings", val: "1.2k+" },
            { label: "Indexing Speed", val: "3x Faster" },
            { label: "Revenue Impact", val: "$1M+" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center md:text-left px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.val}</h3>
              <p className="text-blue-500/60 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Feature Grid --- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-40">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 p-8 opacity-5">
                <Activity size={200} className="text-blue-500" />
            </div>
            <Zap className="text-blue-400 mb-6" size={32} />
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Technical Mastery</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              The algorithm rewards experience. We deep-dive into your code to optimize Core Web Vitals, 
              ensuring your platform is lightning-fast, mobile-perfect, and easily crawlable by search bots.
            </p>
            <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest text-blue-400/80">
               <span># LCP Optimization</span>
               <span className="w-1 h-1 bg-white/20 rounded-full my-auto"></span>
               <span># Schema Markup</span>
               <span className="w-1 h-1 bg-white/20 rounded-full my-auto"></span>
               <span># XML Sitemaps</span>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="flex flex-col justify-center p-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight uppercase italic">Authority <br/><span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Architects</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              We implement **E-E-A-T** principles to signal absolute trust to Google. 
              By securing high-quality backlinks and optimizing your content architecture, 
              we build a fortress of domain authority.
            </p>
            <div className="flex gap-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><LineChart size={20}/></div>
                    <span className="text-sm font-medium uppercase tracking-tighter">ROI Focused</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><ShieldCheck size={20}/></div>
                    <span className="text-sm font-medium uppercase tracking-tighter">Algorithm Safe</span>
                </div>
            </div>
          </motion.div>
        </div>

        {/* --- Bento Pillars Grid --- */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase italic">The SEO Pillars</h2>
              <p className="text-blue-400/60 mt-2 font-medium tracking-widest text-xs uppercase">Comprehensive organic growth</p>
            </div>
            <div className="h-[1px] flex-grow md:mx-10 bg-white/10 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoCapabilities.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-500"
              >
                <div className="mb-8 p-3 bg-blue-500/5 rounded-xl w-fit group-hover:bg-blue-500/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-2 block">{item.tag}</span>
                <h4 className="text-xl font-bold mb-3 text-white/90">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Quote / Philosophy Section --- */}
        <motion.div 
          {...fadeInUp}
          className="relative py-24 px-10 rounded-[4rem] overflow-hidden text-center border border-indigo-500/20 bg-indigo-500/[0.02]"
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8 italic">
              "Visibility is not an option, it's a <span className="text-white font-bold">competitive requirement</span>. If you aren't on page one, you're invisible."
            </h3>
            <div className="h-1 w-12 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* --- CTA Section --- */}
        <section className="mt-40 mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase">Climb the Rank?</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">Audit your current performance and build a roadmap to search engine dominance.</p>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold transition-all hover:pr-14 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <span className="text-lg uppercase tracking-tight">Claim Your Audit</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-600" />
            </Link>
          </motion.div>
        </section>
      </div>

      {/* --- Footer (Full Width) --- */}
      <Footer />
    </div>
  );
};

export default SEOStrategy;