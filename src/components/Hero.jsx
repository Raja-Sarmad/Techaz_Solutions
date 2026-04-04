import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Zap, Users, Code2, Rocket, Globe2, ChevronRight } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    const colors = ["#22d3ee", "#a78bfa", "#f472b6"];
    const dots = [];
    const dotCount = 80;

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
        ctx.globalAlpha = 0.2; // Optimized for consistent look
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        this.draw();
      }
    }

    for (let i = 0; i < dotCount; i++) dots.push(new Dot());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => dot.update());
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#121212] font-['Poppins']">
      
<<<<<<< HEAD
      {/* Background Dots Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>
=======
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
>>>>>>> d535538363cf9b0f3837ca870358057df324765f

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.25em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Delivering Software Excellence
            </div>
            
           <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter text-left">
  Building Innovative <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
    Software Solutions
  </span>
</h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium text-left">
              We specialize in creating scalable software products for businesses. From custom web & mobile apps to cloud solutions and AI integration, we empower companies to innovate and grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <button className="group relative w-full sm:w-auto h-[64px] px-10 bg-blue-600 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.5)]">
                <div className="relative flex items-center justify-center gap-3 text-white font-extrabold uppercase tracking-widest text-xs">
                  Start Your Project
                  <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button className="group relative w-full sm:w-auto h-[64px] px-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
                <div className="relative flex items-center justify-center gap-3 text-white font-extrabold uppercase tracking-widest text-xs">
                  Our Portfolio
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
              
              {/* Floating Stat 1 */}
              <div className="absolute -top-10 -left-10 p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl z-20 hidden xl:block shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Users size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold">CLIENT SATISFACTION</p>
                    <p className="text-white font-black">99% PROVED</p>
                  </div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                 <div className="absolute inset-0 bg-blue-600/10 group-hover:opacity-0 transition-opacity duration-700"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
                    alt="Software Engineering" 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                 />
              </div>

              {/* Floating Stat 2 */}
              <div className="absolute -bottom-6 -right-6 p-6 bg-[#1A1A1A] border border-blue-500/30 rounded-3xl z-20 shadow-2xl shadow-blue-900/40 text-left">
                  <p className="text-blue-400 font-black text-2xl">24/7</p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Expert Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
