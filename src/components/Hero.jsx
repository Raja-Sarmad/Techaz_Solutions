import React, { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* 1. THE SPOTLIGHT EFFECT (Maza Factor) */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
        }}
      />

      {/* 2. BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN (Text) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center space-x-3 px-3 py-1 mt-8 mb-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Available for new projects</span>
          </div>

          {/* THE HEADING - Sleek & Impactful */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-white font-syne">
            We architect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-gradient-flow">
              Digital Frontiers.
            </span>
          </h1>

          <p className="max-w-[500px] text-lg text-slate-400 leading-relaxed font-light tracking-wide">
            A premium software studio crafting high-performance applications where 
            <span className="text-white"> engineering meets elegance.</span> We don't just code; we solve.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-5 pt-4">
            <button className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Let's Collaborate</span>
              <div className="absolute inset-0 bg-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 bg-transparent text-white border border-white/10 rounded-xl font-medium hover:bg-white/5 transition-all backdrop-blur-sm">
              Our Process
            </button>
          </div>

          {/* SOCIAL PROOF / LOGOS */}
          <div className="pt-12 flex flex-col space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Trusted by tech leaders</span>
            <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
               <div className="text-xl font-bold text-white tracking-tighter">FORBES</div>
               <div className="text-xl font-bold text-white tracking-tighter">STRIPE</div>
               <div className="text-xl font-bold text-white tracking-tighter">COINBASE</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Visual "Maza") */}
        <div className="lg:col-span-5 relative">
          <div className="relative group">
            {/* The "Glass" Terminal Window */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-3xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                </div>
                <div className="text-[10px] font-mono text-slate-600 tracking-tighter">studio.config.js</div>
              </div>

              {/* Code Content */}
              <div className="space-y-3 font-mono text-sm leading-relaxed">
                <p className="text-indigo-400">const <span className="text-white">Studio</span> = {'{'}</p>
                <p className="pl-4 text-slate-400">focus: <span className="text-emerald-400">"Scalable Architecture"</span>,</p>
                <p className="pl-4 text-slate-400">stack: [<span className="text-blue-400">"React"</span>, <span className="text-blue-400">"Node"</span>, <span className="text-blue-400">"AI"</span>],</p>
                <p className="pl-4 text-slate-400">performance: <span className="text-amber-400">99.9</span>,</p>
                <p className="pl-4 text-slate-400">delivery: <span className="text-emerald-400">"On Time"</span></p>
                <p className="text-indigo-400">{'}'}</p>
              </div>

              {/* Floating Success Card */}
              <div className="absolute -bottom-10 -left-10 bg-indigo-600 p-4 rounded-xl shadow-2xl animate-bounce [animation-duration:5s] hidden md:block">
                <div className="text-xs text-indigo-100 font-bold mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-white font-syne">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-20">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        
        .font-syne { font-family: 'Syne', sans-serif; }

        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;