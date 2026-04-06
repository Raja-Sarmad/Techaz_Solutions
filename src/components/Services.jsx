import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Link import kiya
import { Layout, Settings, Cloud, Code, BarChart2, Globe2, Zap, ShoppingCart, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const canvasRef = useRef(null);

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

  // Har service ke liye 'path' add kiya jo App.jsx ke routes se match karega
  const services = [
    { title: 'Custom Software', path: '/custom-software', description: 'Tailored enterprise solutions designed to automate your unique business workflows.', icon: <Code /> },
    { title: 'Web Development', path: '/web-development', description: 'High-performance, responsive websites built with modern frameworks and clean code.', icon: <Layout /> },
    { title: 'Mobile Applications', path: '/mobile-apps', description: 'Native and cross-platform mobile apps providing seamless experiences on iOS & Android.', icon: <Globe2 /> },
    { title: 'E-Commerce Solutions', path: '/ecommerce', description: 'Scalable online stores with secure payment gateways and robust inventory management.', icon: <ShoppingCart /> },
    { title: 'AI & Automation', path: '/ai-automation', description: 'Smart AI integrations to automate repetitive tasks and maximize team productivity.', icon: <Zap /> },
    { title: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Secure cloud hosting and DevOps services for 99.9% uptime and data protection.', icon: <Cloud /> },
    { title: 'Digital Transformation', path: '/digital-transformation', description: 'Strategic IT consulting to modernize your legacy systems and business processes.', icon: <Settings /> },
    { title: 'Business Analytics', path: '/business-analytics', description: 'Data-driven insights and reporting tools to help you make smarter business decisions.', icon: <BarChart2 /> }
  ];

  return (
    <section className="relative py-24 font-['Poppins'] bg-[#121212] text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="px-5 py-2 bg-blue-500/10 text-blue-400 rounded-full text-[11px] font-black tracking-[0.2em] uppercase border border-blue-400/20"
          >
            Our Service Stack
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-bold mt-8 leading-tight tracking-tighter max-w-4xl mx-auto"
          >
            Future-Proof <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Software Solutions</span> <br />
            To Scale Your Business
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium"
          >
            We don't just build apps; we engineer scalable systems that drive real growth and digital innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              className="group bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-start transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon, { size: 22 })}
              </div>
              
              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* 'Link' tag ka sahi istemal */}
              <Link to={service.path} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-blue-500/50 group-hover:text-blue-400 transition-all cursor-pointer">
                Learn More 
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
