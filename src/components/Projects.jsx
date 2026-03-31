import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowUpRight, Zap, Globe, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Commerce Engine',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'OpenAI', 'Tailwind'],
      size: 'large', // Yeh card bada hoga
      stats: '40% Boost in Sales'
    },
    {
      title: 'Fintech NeoBank',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter', 'Firebase'],
      size: 'small',
      stats: '100k+ Downloads'
    },
    {
      title: 'Analytics Pro',
      category: 'SaaS Dashboard',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
      tags: ['React', 'AWS', 'D3.js'],
      size: 'small',
      stats: 'Real-time Data'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#020408] relative overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND DECOR --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
              <Zap size={14} className="fill-blue-400" />
              Our Masterpieces
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 italic">Work.</span>
            </h2>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-white font-bold bg-white/5 border border-white/10 px-10 py-5 rounded-2xl hover:bg-white/10 transition-all shadow-2xl"
          >
            Explore All Projects 
            <ArrowUpRight size={20} className="text-blue-500" />
          </motion.button>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0A101E]/40 backdrop-blur-md flex flex-col
                ${project.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'}
              `}
            >
              {/* Spotlight Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                
                {/* Floating Stats Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-blue-600/90 backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest shadow-xl translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.stats}
                </div>

                {/* Categories */}
                <div className="absolute top-6 left-6 flex gap-2">
                   <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                {/* Hover Overlay with CTA */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center gap-6">
                   <div className="flex gap-4">
                      <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                        <ExternalLink size={24} />
                      </motion.a>
                      <motion.a whileHover={{ scale: 1.1 }} href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-2xl">
                        <Code size={24} />
                      </motion.a>
                   </div>
                   <p className="text-white font-bold tracking-widest text-[10px] uppercase">View Case Study</p>
                </div>
              </div>

              {/* Content Info (Glass Bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tighter group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[9px] font-black text-blue-400 uppercase tracking-widest">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TRUST FACTOR --- */}
        <div className="mt-20 py-10 border-y border-white/5 flex flex-wrap justify-center lg:justify-between items-center gap-10 grayscale opacity-40">
           <div className="flex items-center gap-2 font-bold text-white text-xl"> <Globe size={24}/> GLOBAL DELIVERY </div>
           <div className="flex items-center gap-2 font-bold text-white text-xl"> <Cpu size={24}/> AI INTEGRATED </div>
           <div className="flex items-center gap-2 font-bold text-white text-xl"> <Zap size={24}/> FASTEST EXECUTION </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;