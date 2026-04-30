import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "FinTech Dashboard Ecosystem",
    description: "A high-performance banking interface with real-time transaction tracking and AI fraud detection.",
    // Image: Modern Financial Analytics Dashboard
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bc892d218656327.67a4c7ff7ba43.jpg"
  },
  {
    id: "02",
    title: "AI-Powered CRM System",
    description: "Custom enterprise CRM integrated with machine learning for predictive sales analytics.",
    // Image: Artificial Intelligence / Data processing
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: "03",
    title: "Healthcare Cloud SaaS",
    description: "HIPAA-compliant patient management system with end-to-end encryption and cloud storage.",
    // Image: Medical Software / Modern Lab Tech
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
  },
  {
    id: "04",
    title: "E-Commerce Architecture",
    description: "Headless commerce solution built for 1M+ monthly active users with microservices.",
    // Image: Modern Web Development / Coding
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];

const extended = [
  projects[projects.length - 1], 
  ...projects,
  projects[0], 
];

const CaseStudies = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const canvasRef = useRef(null);

  // Background Dots Logic (Synced with Services/About)
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

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index === extended.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 600);
    }
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extended.length - 2);
      }, 600);
    }
  }, [index]);

  return (
    <section id="CaseStudies" className="relative py-24 bg-[#121212] overflow-hidden font-['Poppins'] text-white">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-400/20">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight leading-tight">
              Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Success Stories.</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Explore our portfolio of high-impact software solutions engineered for industry leaders.
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={prev} className="p-4 border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <ArrowLeft size={20} />
            </button>
            <button onClick={next} className="p-4 border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={transition ? { duration: 0.6, ease: "easeInOut" } : { duration: 0 }}
            onAnimationComplete={() => setTransition(true)}
          >
            {extended.map((item, i) => (
              <div key={i} className="min-w-full lg:p-12 p-6 flex flex-col lg:flex-row gap-10 items-center">
                {/* Image Section */}
                <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <img
                    src={`${item.image}?auto=format&fit=crop&w=1000&q=80`}
                    className="w-full h-[300px] md:h-[450px] object-cover hover:scale-110 transition-transform duration-1000"
                    alt={item.title}
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 space-y-6 text-left">
                  <p className="text-blue-400 font-black text-2xl tracking-tighter">#{item.id}</p>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold group border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-all">
                    Explore Case Study
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;