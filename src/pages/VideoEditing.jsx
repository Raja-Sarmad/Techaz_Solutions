import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Video, Film, Scissors, Play, 
  Clapperboard, Zap, Infinity, Monitor, Activity,
  Wand2, Layers, Music, Rocket, Camera
} from 'lucide-react';

// Footer ko import karein
import Footer from '../components/Footer';

const VideoEditing = () => {
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

  const editingStack = [
    {
      icon: <Wand2 className="text-blue-400" size={28} />,
      title: "Color Grading",
      desc: "Cinematic color correction and LUT application to set the perfect mood.",
      tag: "Visuals"
    },
    {
      icon: <Scissors className="text-cyan-400" size={28} />,
      title: "Seamless Cutting",
      desc: "Frame-accurate precision editing for narrative flow and rhythmic pacing.",
      tag: "Precision"
    },
    {
      icon: <Music className="text-indigo-400" size={28} />,
      title: "Sound Design",
      desc: "Immersive audio engineering, foley, and licensed background scores.",
      tag: "Audio"
    },
    {
      icon: <Layers className="text-blue-500" size={28} />,
      title: "VFX & Motion",
      desc: "Advanced visual effects and 3D motion graphics integrated seamlessly.",
      tag: "Dynamic"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-['Inter',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background Elements --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-cyan-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/#services" className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all">
            <div className="p-2 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase text-[10px]">Back to Studio</span>
          </Link>
        </motion.div>

        {/* --- Hero Section --- */}
        <section className="mt-20 mb-32">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[1px] w-8 bg-blue-500"></div>
               <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Premium Post-Production</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.0] mb-8 uppercase ">
              Video <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Editing
              </span>
            </h1>
            <p className="max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              We don't just cut clips; we engineer stories. Using industry-standard <span className="text-white font-normal">DaVinci Resolve and Premiere Pro</span> workflows to bring your vision to life.
            </p>
          </motion.div>
        </section>

        {/* --- Video Stats Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-12 bg-white/[0.01]"
        >
          {[
            { label: "Resolution Support", val: "8K Raw" },
            { label: "Render Speed", val: "Ultra-Fast" },
            { label: "VFX Integration", val: "High-End" },
            { label: "Frame Precision", val: "100%" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center md:text-left px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.val}</h3>
              <p className="text-blue-500/60 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Post-Production Pipeline --- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-40">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Clapperboard size={200} className="text-blue-500" />
            </div>
            <Zap className="text-blue-400 mb-6" size={32} />
            <h2 className="text-3xl font-bold mb-6 tracking-tight italic">Non-Linear Mastery</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every cut serves a purpose. We focus on the "Invisible Cut"—ensuring the viewer is lost 
              in the story, not the transitions. Optimized for Cinema, TV, or Social Streaming.
            </p>
            <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest text-blue-400/80">
              <span className="px-3 py-1 border border-blue-500/30 rounded-full">Proxy Workflow</span>
              <span className="px-3 py-1 border border-blue-500/30 rounded-full">Dynamic Linking</span>
              <span className="px-3 py-1 border border-blue-500/30 rounded-full">HDR Grading</span>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="flex flex-col justify-center p-6"
          >
             <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-[10px] font-bold text-red-600 tracking-widest uppercase italic">Mastering Engine Active</span>
             </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight uppercase italic underline decoration-blue-500/30 underline-offset-8">Post-Pipeline</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light italic">
              From 8K raw ingestion to final mastering, we handle every pixel with care. 
              Our workflow includes real-time revisions and complex compositing without losing quality.
            </p>
            <div className="flex gap-8">
                <div className="flex items-center gap-3 text-blue-400">
                    <Monitor size={24} />
                    <span className="text-sm font-semibold uppercase tracking-tight text-white">Multi-Cam Ready</span>
                </div>
                <div className="flex items-center gap-3 text-indigo-400">
                    <Activity size={24} />
                    <span className="text-sm font-semibold uppercase tracking-tight text-white">Audio Foley</span>
                </div>
            </div>
          </motion.div>
        </div>

        {/* --- Editing Pillars Grid --- */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase italic">Editing Stack</h2>
              <p className="text-blue-400/60 mt-2 font-medium tracking-widest text-xs uppercase">Post-Production expertise</p>
            </div>
            <div className="h-[1px] flex-grow md:mx-10 bg-white/10 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editingStack.map((item, i) => (
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
              "Visual storytelling is about <span className="text-white font-bold italic underline decoration-blue-500/30">feeling</span>, not just seeing. We make every frame count."
            </h3>
            <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-8 text-gray-500 uppercase tracking-widest text-xs font-bold italic tracking-widest">Post-Studio 2024</p>
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
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase italic text-white">Start Production.</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-light italic">Turn your raw footage into a cinematic masterpiece. Let’s start the first cut today.</p>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold transition-all hover:pr-14 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <span className="text-lg uppercase tracking-tight font-black">Roll Camera</span>
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

export default VideoEditing;