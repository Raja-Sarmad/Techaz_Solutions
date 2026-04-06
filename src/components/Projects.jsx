import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, ArrowUpRight, Zap, Globe, Cpu } from 'lucide-react';

const ALL_PROJECTS = [
  {
    id: 1,
    title: 'AI Commerce Engine',
    category: 'Web Development',
    desc: 'An AI-powered storefront that predicts buyer intent and auto-personalises product feeds in real time.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=900&q=80',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Stripe'],
    size: 'large',
    stats: '40% Sales Boost',
    year: '2024',
  },
  {
    id: 2,
    title: 'Fintech NeoBank',
    category: 'Mobile App',
    desc: 'Full-stack mobile banking with biometric auth, instant transfers, and spend analytics.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    tags: ['Flutter', 'Firebase', 'Plaid'],
    size: 'small',
    stats: '100k+ Downloads',
    year: '2024',
  },
  {
    id: 3,
    title: 'Analytics Pro',
    category: 'SaaS Dashboard',
    desc: 'Real-time BI dashboard with D3-powered visualisations and AI-generated insights.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    tags: ['React', 'AWS', 'D3.js'],
    size: 'small',
    stats: 'Real-time Data',
    year: '2023',
  },
  {
    id: 4,
    title: 'HealthTrack AI',
    category: 'Mobile App',
    desc: 'ML-driven health companion turning wearable data into actionable wellness recommendations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    tags: ['React Native', 'TensorFlow'],
    size: 'small',
    stats: '4.9★ App Store',
    year: '2023',
  },
];

const FILTERS = ['All', 'Web Development', 'Mobile App', 'SaaS Dashboard'];

const TiltCard = ({ project, index, onClick, large }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [5, -5]);
  const rotateY = useTransform(x, [-80, 80], [-5, 5]);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={() => onClick(project)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#1a1a1a] cursor-pointer group transition-colors duration-300 hover:border-blue-500/30 ${
        large ? 'lg:col-span-2' : 'col-span-1'
      } h-full min-h-[320px] md:min-h-[380px] lg:min-h-[460px]`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale-[0.4] brightness-[0.55] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-[0.65]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212ef] via-[#12121266] to-transparent" />
      </div>

      {/* Top Content */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
        <span className="text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/70">
          {project.category}
        </span>
        <span className="text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-blue-600/90 text-white opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm">
          {project.stats}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 flex justify-between items-end z-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-white/30">#{t}</span>
            ))}
          </div>
        </div>
        <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/50 transition-all duration-300 group-hover:bg-white group-hover:text-[#121212] group-hover:border-white shrink-0 ml-4">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] overflow-hidden max-h-[88vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ duration: 0.38 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-72 w-full overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-[0.6]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-white/10 transition-all"
            onClick={onClose}
          >✕</button>
          <div className="absolute bottom-5 left-6 right-6 flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-black/50 border border-white/10 text-white/60">
              {project.category}
            </span>
            <span className="text-xs text-white/30">{project.year}</span>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="text-[11px] font-bold tracking-widest uppercase text-blue-400 mb-2">{project.stats}</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">{project.title}</h2>
          <p className="text-base leading-relaxed text-white/45 mb-8 font-light italic">"{project.desc}"</p>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map(t => (
              <span key={t} className="text-[11px] px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/45 font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex-1 min-w-[140px] h-12 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all">
              <ExternalLink size={15} /> Live Demo
            </a>
            <a href="#" className="flex-1 min-w-[140px] h-12 flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all">
              <Code size={15} /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const canvasRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const filtered = filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === filter);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const updateSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    updateSize();
    const colors = ['#22d3ee', '#a78bfa', '#f472b6'];
    const dots = [];
    class Dot {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.15;
        ctx.fill();
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        this.draw();
      }
    }
    for (let i = 0; i < 60; i++) dots.push(new Dot());
    const animate = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); dots.forEach(d => d.update()); requestAnimationFrame(animate); };
    animate();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#121212] text-white py-24 md:py-32 px-6 overflow-hidden selection:bg-blue-500/3" id="projects">
      {/* Background elements */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />
     
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]" />
            Our Masterpieces
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Selected <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Work.</span>
          </h2>
          
          <p className="max-w-md mx-auto text-white/40 text-base leading-relaxed mb-10">
            From AI-driven platforms to mobile apps — built for ambitious teams worldwide.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-wider transition-all duration-300 ${
                  filter === f ? 'bg-blue-600 text-white' : 'text-white/40 hover:text-white'
                }`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 mb-20 border-y border-white/5 items-center">
          {[
            ['150+', 'Projects'],
            ['80+', 'Clients'],
            ['8yr', 'Experience'],
            ['99%', 'Satisfaction']
          ].map(([val, lbl], i) => (
            <div key={val} className="text-center relative">
              <span className="block text-4xl font-black text-white">{val}</span>
              <span className="block text-[10px] font-bold tracking-widest uppercase text-white/25 mt-2">{lbl}</span>
              {i < 3 && <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/5 hidden md:block" />}
            </div>
          ))}
        </div>

        {/* Project Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((p, i) => (
              <TiltCard key={p.id} project={p} index={i} large={p.size === 'large'} onClick={setActive} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Explore All CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 h-14 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-blue-400 transition-all backdrop-blur-xl group"
          >
            Explore All Projects 
            <ArrowUpRight size={18} className="inline-block ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>

        {/* Trust Footer */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 grayscale opacity-20 hover:opacity-50 transition-all duration-500">
          {[
            { icon: Globe, lbl: 'Global Delivery' },
            { icon: Cpu, lbl: 'AI Integrated' },
            { icon: Zap, lbl: 'Fastest Execution' }
          ].map((item, i) => (
            <div key={item.lbl} className="flex items-center gap-4">
              <item.icon size={20} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">{item.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && <Modal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;