import React, { useEffect, useRef } from 'react';
import { Search, PenTool, BarChart3, Rocket, ChevronRight } from 'lucide-react';

const Process = () => {
  const canvasRef = useRef(null);

  // --- Background Dots Logic (Synced with your theme) ---
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
    const dotCount = 60;

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

  const steps = [
    {
      id: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business needs, challenges, & goals through in-depth.',
      icon: <Search className="w-8 h-8 text-blue-400" />,
    },
    {
      id: '02',
      title: 'Design & Development',
      description: 'With a clear plan in place, our experts move into the design and development phase.',
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
    },
    {
      id: '03',
      title: 'Continuous Improvement',
      description: 'In a fast-changing digital world, staying ahead is essential. That’s why we continuously monitor.',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    },
    {
      id: '04',
      title: 'Launch & Support',
      description: 'Once everything is in place, we the solution with comprehensive support but our work doesn’t.',
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden font-['Poppins']">
      
      {/* Background Dots Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 space-y-4">
          <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-400/20">
            Work Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How We Get Things Done
          </h2>
        </div>

        {/* --- PROCESS STEPS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connecting Arrows (Desktop Only) - Color adjusted for dark theme */}
          <div className="hidden lg:block absolute top-16 left-0 w-full pointer-events-none">
            <div className="flex justify-around items-center px-32">
               <ChevronRight className="text-white/5 w-10 h-10 ml-10" strokeWidth={1} />
               <ChevronRight className="text-white/5 w-10 h-10 ml-10" strokeWidth={1} />
               <ChevronRight className="text-white/5 w-10 h-10 ml-10" strokeWidth={1} />
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              
              {/* Concentric Circles & Icon */}
              <div className="relative mb-8">
                {/* Outer Ring */}
                <div className="w-32 h-32 rounded-full border border-white/5 bg-white/5 flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 shadow-inner">
                  {/* Inner Ring */}
                  <div className="w-full h-full rounded-full border border-white/5 bg-[#1A1A1A] flex items-center justify-center shadow-sm group-hover:border-blue-500/50">
                    {step.icon}
                  </div>
                </div>

                {/* Number Badge (Top Right) */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-4 border-[#121212] z-10 transition-transform group-hover:rotate-[360deg] duration-700">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto font-medium opacity-80">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
