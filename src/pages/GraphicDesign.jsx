import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Palette, Layers, PenTool, Layout, 
  Brush, Box, Monitor, MousePointer2, 
  CheckCircle2, Shapes, Globe, Sparkles, Zap, Rocket
} from 'lucide-react';

// Footer import (Rasta check karlein apne folder structure ke hisaab se)
import Footer from '../components/Footer';

const GraphicDesign = () => {
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

  const designCapabilities = [
    {
      icon: <PenTool className="text-blue-400" size={28} />,
      title: "Brand Identity",
      desc: "Creating unique logos and visual languages that define your brand's DNA.",
      tag: "Identity"
    },
    {
      icon: <Layers className="text-cyan-400" size={28} />,
      title: "UI/UX Design",
      desc: "User-centric interfaces that blend aesthetic beauty with seamless usability.",
      tag: "Experience"
    },
    {
      icon: <Shapes className="text-indigo-400" size={28} />,
      title: "Vector Art",
      desc: "Scalable custom illustrations that add a unique personality to your assets.",
      tag: "Illustration"
    },
    {
      icon: <Monitor className="text-blue-500" size={28} />,
      title: "Motion Graphics",
      desc: "Dynamic visual storytelling that brings static designs to life with motion.",
      tag: "Motion"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-['Inter',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background Elements --- */}
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
            <span className="text-sm font-medium tracking-widest uppercase text-[10px]">Creative Studio</span>
          </Link>
        </motion.div>

        {/* --- Hero Section --- */}
        <section className="mt-20 mb-32">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[1px] w-8 bg-blue-500"></div>
               <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Aesthetic Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.0] mb-8 uppercase">
              Graphic <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Designing
              </span>
            </h1>
            <p className="max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Design is the silent ambassador of your brand. We craft <span className="text-white font-normal">Visual Narratives</span> that 
              don't just look good, but strategically communicate your core values.
            </p>
          </motion.div>
        </section>

        {/* --- Design Stats Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-12 bg-white/[0.01]"
        >
          {[
            { label: "Design Impact", val: "100%" },
            { label: "File Standards", val: "8K Res" },
            { label: "Brand Recall", val: "+85%" },
            { label: "Creatives Delivered", val: "5k+" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center md:text-left px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.val}</h3>
              <p className="text-blue-500/60 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Content Grid: Precision & Tools --- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-40">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Palette size={200} className="text-blue-500" />
            </div>
            <Sparkles className="text-blue-400 mb-6" size={32} />
            <h2 className="text-3xl font-bold mb-6 tracking-tight italic">Color Psychology</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every color tells a story. We use advanced color theory and grid-based layouts to ensure 
              visual hierarchy. Our designs are mathematically balanced and emotionally resonant.
            </p>
            <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest text-blue-400/80">
              <span className="px-3 py-1 border border-blue-500/30 rounded-full">Golden Ratio</span>
              <span className="px-3 py-1 border border-blue-500/30 rounded-full">Typography Art</span>
              <span className="px-3 py-1 border border-blue-500/30 rounded-full">SVG Scalability</span>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="flex flex-col justify-center p-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight uppercase italic underline decoration-blue-500/30 underline-offset-8">Precision <br/>Engineering</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light italic">
              From Figma prototypes to high-fidelity Adobe CC assets, we provide a full spectrum 
              of formats optimized for both print and digital dominance.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Box size={20}/></div>
                    <span className="text-sm font-semibold uppercase tracking-tight">3D Mockups</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><MousePointer2 size={20}/></div>
                    <span className="text-sm font-semibold uppercase tracking-tight">Interactive UI</span>
                </div>
            </div>
          </motion.div>
        </div>

        {/* --- Design Capabilities Grid --- */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase italic">Design Pillars</h2>
              <p className="text-blue-400/60 mt-2 font-medium tracking-widest text-xs uppercase">The art of brand building</p>
            </div>
            <div className="h-[1px] flex-grow md:mx-10 bg-white/10 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designCapabilities.map((item, i) => (
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
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Philosophy Quote --- */}
        <motion.div 
          {...fadeInUp}
          className="relative py-24 px-10 rounded-[4rem] overflow-hidden text-center border border-blue-500/20 bg-blue-500/[0.02]"
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8">
              "Design is not just what it looks like and feels like. Design is <span className="text-white font-bold italic underline decoration-blue-500/30">how it works</span>."
            </h3>
            <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-8 text-gray-500 uppercase tracking-widest text-xs font-bold tracking-widest italic">Creative Manifesto 2024</p>
          </div>
        </motion.div>

        {/* --- Final CTA --- */}
        <section className="mt-40 mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase italic">Start Designing.</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">Transform your concepts into world-class visuals. Let’s create your unique brand language today.</p>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold transition-all hover:pr-14 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <span className="text-lg uppercase tracking-tight font-black">Initiate Design</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-600" />
            </Link>
          </motion.div>
        </section>

      </div>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default GraphicDesign;