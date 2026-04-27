import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Search, BarChart3, Globe, ShieldCheck, 
  Zap, Infinity, Target, Settings, Layers, MousePointer2 
} from 'lucide-react';

const SEOStrategy = () => {
  // Animation Variants for Left Slide
  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Animation Variants for Right Slide
  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // --- UPDATED: SEO Capabilities Data Array ---
  const seoCapabilities = [
    {
      icon: <Search className="text-blue-400" size={40} />,
      title: "Keyword Research",
      lang: "Intent Analysis, LSI, Search Volume"
    },
    {
      icon: <BarChart3 className="text-cyan-400" size={40} />,
      title: "Technical SEO",
      lang: "Schema Markup, Core Web Vitals, XML"
    },
    {
      icon: <Target className="text-indigo-400" size={40} />,
      title: "On-Page Strategy",
      lang: "Meta Tags, Content Clusters, UI/UX"
    },
    {
      icon: <Globe className="text-purple-400" size={40} />,
      title: "Off-Page Authority",
      lang: "Link Building, PR, Domain Authority"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-6 font-['Poppins'] selection:bg-blue-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation & Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/#services" className="group text-gray-500 flex items-center gap-2 mb-16 hover:text-blue-400 transition-all w-fit">
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Marketing Studio</span>
          </Link>
        </motion.div>

        {/* --- SECTION 1: HERO (SEO Focus) --- */}
        <motion.div {...slideInLeft} className="mb-32">
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-none tracking-tighter uppercase italic">
            Search <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 font-black">Optimization</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">
            SEO (Search Engine Optimization) is the art and science of increasing your website's visibility on search engines. 
            We build **Data-Driven Strategies** that connect your brand with users actively searching for your expertise.
          </p>
        </motion.div>

        {/* --- SECTION 2: ALGORITHM & PERFORMANCE --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <motion.div {...slideInLeft} className="space-y-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-400"><Zap size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Core Web Vitals</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Google's latest ranking factors focus on **Page Experience**. We optimize your site's Largest Contentful Paint (LCP), 
              First Input Delay (FID), and Cumulative Layout Shift (CLS). By ensuring your technical foundation is flawless, 
              we help you outrank competitors with slower, unoptimized platforms.
            </p>
            <div className="grid grid-cols-2 gap-4 text-blue-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># Page Speed</span>
              <span className="bg-white/5 p-2 rounded"># Mobile-First</span>
              <span className="bg-white/5 p-2 rounded"># HTTPS Secure</span>
              <span className="bg-white/5 p-2 rounded"># Structured Data</span>
            </div>
          </motion.div>

          <motion.div {...slideInRight} className="space-y-6 lg:mt-24">
            <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit text-indigo-400"><MousePointer2 size={32} /></div>
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Authority Building</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We implement **E-E-A-T** (Experience, Expertise, Authoritativeness, and Trustworthiness) principles. 
              By securing high-quality backlinks and optimizing your content architecture, we signal to search engines 
              that your website is a reliable source of information, leading to sustainable organic growth.
            </p>
            <div className="grid grid-cols-2 gap-4 text-indigo-500 font-mono text-xs">
              <span className="bg-white/5 p-2 rounded"># High DA Backlinks</span>
              <span className="bg-white/5 p-2 rounded"># Content Velocity</span>
              <span className="bg-white/5 p-2 rounded"># Rank Tracking</span>
              <span className="bg-white/5 p-2 rounded"># Competitor Gap</span>
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: WIKI STYLE CONTENT --- */}
        <motion.div {...slideInLeft} className="bg-white/[0.02] p-12 md:p-20 rounded-[4rem] border border-white/5 mb-40 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-all duration-700"></div>

          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tighter uppercase italic">
            "Visibility is the new <span className="text-blue-400 italic font-black">currency</span> <br /> in the digital landscape."
          </h3>

          <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-5xl relative z-10">
            <p>
              Search engines use complex crawlers and algorithms to index billions of pages. Our role is to make your content 
              **Discoverable and Relevant**. We don't just chase traffic; we chase **Targeted Conversions** by 
              mapping content to the specific stages of the buyer's journey.
            </p>
            <p>
              Whether it's **Local SEO** for regional dominance or **Enterprise SEO** for global reach, we utilize 
              advanced tools like SEMrush, Ahrefs, and Google Search Console to monitor health and performance 
              in real-time, ensuring your ranking never drops.
            </p>
          </div>
        </motion.div>

        {/* --- SECTION 4: CAPABILITIES GRID --- */}
        <motion.div {...slideInRight} className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold tracking-tighter uppercase italic">SEO Pillars</h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {seoCapabilities.map((cap, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group cursor-default">
                <div className="mb-6 group-hover:scale-110 transition-transform">{cap.icon}</div>
                <h4 className="text-xl font-bold mb-2">{cap.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.lang}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEOStrategy;
