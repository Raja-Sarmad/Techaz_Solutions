import React, { useEffect, useRef } from "react";
import { CheckCircle2, ArrowUpRight, PhoneCall, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const canvasRef = useRef(null);

  const services = [
    "Custom Web & Mobile Applications",
    "Cloud & DevOps Solutions",
    "AI & Automation Integration",
    "SaaS Product Development",
  ];

  // Services wala same Canvas Logic
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
        ctx.globalAlpha = 0.15; // Services wala subtle look
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

  return (
    <section className="relative py-24 overflow-hidden bg-[#121212] font-['Poppins']">
      
      {/* Background Dots Canvas (Same as Services) */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: Visuals */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-0 ml-auto w-[90%]"
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" 
                alt="Our Team" 
                className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full border border-white/10"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-[-30px] left-0 z-10 w-[55%] border-[8px] border-[#121212] rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Development Process" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-[-30px] right-4 z-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-[2rem] shadow-2xl w-[45%]"
            >
               <h4 className="text-4xl font-black mb-1">10+</h4>
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                 Years of Excellence
               </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Business Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[11px] font-black tracking-widest uppercase border border-blue-400/20">
                Partner with Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight tracking-tight">
                Transforming Your Ideas <br />
                Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Reality</span>
              </h2>
              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                We are a full-service software house dedicated to helping businesses scale. We combine modern technology and business strategy to create solutions that deliver real results.
              </p>
            </motion.div>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-blue-500/20 p-1 rounded-full">
                    <CheckCircle2 className="text-blue-400 h-4 w-4" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="h-[1px] bg-white/5 w-full"></div>

            <div className="flex flex-wrap items-center gap-8">
              <button className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                Build Your Project
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <PhoneCall className="text-blue-400 h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1 text-nowrap">Direct Line</p>
                  <p className="text-lg font-bold text-white tracking-tight text-nowrap">+92 300 1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
