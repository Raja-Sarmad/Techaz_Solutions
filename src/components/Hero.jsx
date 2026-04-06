import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [index, setIndex] = useState(0);
  const words = ["Digital Frontiers.", "Future Systems.", "Modern Software.", "Creative Solutions."];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
        ctx.globalAlpha = 0.2; 
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
      dots.forEach(dot => dot.update());
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#121212] flex items-center justify-center overflow-hidden px-6 py-24"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />

      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <div className="inline-flex items-center space-x-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.1] text-white font-syne">
            We architect <br />
            <div className="relative h-[1.2em] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-[length:200%_auto] animate-gradient-flow whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="max-w-[500px] text-lg text-slate-400 leading-relaxed font-light">
            A premium software studio crafting high-performance applications where 
            <span className="text-white"> engineering meets elegance.</span>
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10">Let's Collaborate</span>
              <div className="absolute inset-0 bg-indigo-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (Terminal UI - Updated with more lines) */}
        <div className="lg:col-span-5 relative">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-3xl">
               <div className="space-y-3 font-mono text-sm leading-relaxed">
                <p className="text-indigo-400">const <span className="text-white">Studio</span> = {'{'}</p>
                <p className="pl-4 text-slate-400">focus: <span className="text-emerald-400">"Scalable Architecture"</span>,</p>
                <p className="pl-4 text-slate-400">stack:,</p>
                <p className="pl-4 text-slate-400">performance: <span className="text-amber-400">99.9</span>,</p>
                <p className="pl-4 text-slate-400">vibe: <span className="text-emerald-400">"Engineering & Elegance"</span>,</p>
                <p className="pl-4 text-slate-400">deployment: <span className="text-blue-400">"Edge Runtime"</span>,</p>
                <p className="pl-4 text-slate-400">status: <span className="text-emerald-400">"Ready for Scale"</span></p>
                <p className="text-indigo-400">{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://googleapis.com');
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
