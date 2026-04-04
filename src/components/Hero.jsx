import React from 'react';
import { ArrowUpRight, Zap, Users, Code2, Rocket, Globe2, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617] font-['Poppins']">
      
      {/* --- TECH BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep Neon Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px]"></div>
        
        
        {/* Circuit-style Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, 
               backgroundSize: '30px 30px' 
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT CONTENT: Copywriting for Tech Agency --- */}
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.25em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Engineering Digital Excellence
            </div>
            
            {/* Main Punchline */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              We Code the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
                Future of Tech
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              Transforming complex ideas into scalable software. From custom SaaS to AI-driven architectures, we build products that dominate the market.
            </p>

            {/* --- REDESIGNED TECH BUTTONS --- */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              
              {/* Primary: The "Action" Button */}
              <button className="group relative w-full sm:w-auto h-[64px] px-10 bg-blue-600 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 group-hover:translate-x-1/2 transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-3 text-white font-extrabold uppercase tracking-widest text-xs">
                  Start Your Project
                  <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </div>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </button>

              {/* Secondary: The "Expertise" Button */}
              <button className="group relative w-full sm:w-auto h-[64px] px-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
                <div className="relative flex items-center justify-center gap-3 text-white font-extrabold uppercase tracking-widest text-xs">
                  Explore Solutions
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
            </div>

            {/* Tech Stack Mini Badge */}
            <div className="flex items-center gap-4 pt-4 opacity-50">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Tech Stack:</span>
                <div className="flex gap-4 text-white/80">
                   <Code2 size={16} />
                   <Globe2 size={16} />
                   <Zap size={16} />
                </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT: Modern Visuals --- */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
              {/* Abstract Glass Card Overlay */}
              <div className="absolute -top-10 -left-10 p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl z-20 hidden xl:block animate-bounce shadow-2xl" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                     <Users size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold">ACTIVE USERS</p>
                    <p className="text-white font-black">1.2M+</p>
                  </div>
                </div>
              </div>

              {/* Main Image with Masking */}
              <div className="relative rounded-[4rem] overflow-hidden border border-white/10 group shadow-2xl">
                 <div className="absolute inset-0 bg-blue-600/20 group-hover:opacity-0 transition-opacity duration-700"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                    alt="Software Engineering Team" 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                 />
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-[#0A101E] border border-blue-500/30 rounded-3xl z-20 shadow-2xl shadow-blue-900/40">
                  <p className="text-blue-400 font-black text-2xl">99.9%</p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Uptime Guaranteed</p>
              </div>
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none italic"></div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;