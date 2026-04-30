import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Layout, Code2, Rocket, Globe, Cpu, Database, 
  Terminal, Shield, Zap, Layers, Infinity, Code, Server
} from 'lucide-react';

// Footer import (Rasta check karlein apne folder structure ke hisaab se)
import Footer from '../components/Footer';

const WebDevelopment = () => {
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

  const techStack = [
    {
      icon: <Layout className="text-blue-400" size={28} />,
      title: "Frontend Excellence",
      desc: "React, Next.js, and Tailwind CSS for lightning-fast, interactive interfaces.",
      tag: "Interface"
    },
    {
      icon: <Database className="text-cyan-400" size={28} />,
      title: "Scalable Backend",
      desc: "Node.js and Python architectures designed to handle millions of requests.",
      tag: "Logic"
    },
    {
      icon: <Shield className="text-indigo-400" size={28} />,
      title: "Security First",
      desc: "Implementing TLS 1.3, JWT, and encrypted data streams for total safety.",
      tag: "Protection"
    },
    {
      icon: <Cpu className="text-blue-500" size={28} />,
      title: "Cloud & DevOps",
      desc: "AWS & Docker deployments with CI/CD pipelines for seamless scaling.",
      tag: "Deployment"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-['Inter',sans-serif] selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- Ambient Background Orbs --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link to="/#services" className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-all">
            <div className="p-2 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium tracking-widest uppercase text-[10px]">Back to Hub</span>
          </Link>
        </motion.div>

        {/* --- Hero Section --- */}
        <section className="mt-20 mb-32">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-6">
               <div className="h-[1px] w-8 bg-cyan-500"></div>
               <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">Full-Stack Engineering</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.0] mb-8 uppercase ">
              WEB <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
                Development
              </span>
            </h1>
            <p className="max-w-3xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              We don't just build websites; we engineer <span className="text-white font-normal">digital ecosystems</span>. 
              From complex backend logic to pixel-perfect frontend experiences, we scale your vision.
            </p>
          </motion.div>
        </section>

        {/* --- Engineering Stats Section --- */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-12 bg-white/[0.01]"
        >
          {[
            { label: "Uptime Guaranteed", val: "99.9%" },
            { label: "Avg. Load Time", val: "< 1.2s" },
            { label: "Code Coverage", val: "95%+" },
            { label: "API Integrations", val: "500+" }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center md:text-left px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.val}</h3>
              <p className="text-cyan-500/60 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Core Development Grid --- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-40">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={200} className="text-cyan-500" />
            </div>
            <Zap className="text-cyan-400 mb-6" size={32} />
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Client-Side Mastery</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Utilizing **Next.js & React**, we build interfaces that are responsive, intuitive, and 
              sub-second fast. Our frontend focus is on superior UX and high SEO visibility.
            </p>
            <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 font-mono">
              <span>{">"} Tailwind CSS</span>
              <span>{">"} TypeScript</span>
              <span>{">"} Three.js</span>
              <span>{">"} Framer Motion</span>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Server size={200} className="text-blue-500" />
            </div>
            <Database className="text-blue-400 mb-6" size={32} />
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Server-Side Logic</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              The engine room. We engineer robust logic using **Node.js, PostgreSQL, and Python**. 
              We focus on scalability, data integrity, and lightning-fast API responses.
            </p>
            <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-widest text-blue-400/80 font-mono">
              <span>{">"} REST / GraphQL</span>
              <span>{">"} Docker / K8s</span>
              <span>{">"} Redis Cache</span>
              <span>{">"} PostgreSQL</span>
            </div>
          </motion.div>
        </div>

        {/* --- Bento Tech Grid --- */}
        <section className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase italic">The Tech Stack</h2>
              <p className="text-cyan-400/60 mt-2 font-medium tracking-widest text-xs uppercase">Future-proof engineering</p>
            </div>
            <div className="h-[1px] flex-grow md:mx-10 bg-white/10 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, borderColor: 'rgba(34, 211, 238, 0.5)' }}
                className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-500"
              >
                <div className="mb-8 p-3 bg-cyan-500/5 rounded-xl w-fit group-hover:bg-cyan-500/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold mb-2 block">{item.tag}</span>
                <h4 className="text-xl font-bold mb-3 text-white/90">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Wiki Style Quote Section --- */}
        <motion.div 
          {...fadeInUp}
          className="relative py-24 px-10 rounded-[4rem] overflow-hidden text-center border border-cyan-500/20 bg-cyan-500/[0.02]"
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8">
              "Code is like humor. When you have to <span className="text-white font-bold italic underline decoration-cyan-500/30">explain it</span>, it’s bad."
            </h3>
            <div className="h-1 w-12 bg-cyan-600 mx-auto rounded-full"></div>
            <p className="mt-8 text-gray-500 uppercase tracking-widest text-xs">Modern Web Standards 2024</p>
          </div>
        </motion.div>

        {/* --- CTA Section --- */}
        <section className="mt-40 mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/20 blur-[100px] -z-10 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase italic">Let's Deploy.</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-light italic">Turn your MVP into a market-ready production engine. Start the architecture today.</p>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold transition-all hover:pr-14 shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            >
              <span className="text-lg uppercase tracking-tight font-black">Initiate Project</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-cyan-600" />
            </Link>
          </motion.div>
        </section>

      </div>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default WebDevelopment;