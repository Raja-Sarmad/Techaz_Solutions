import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Zap, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const canvasRef = useRef(null);

  // --- Theme Consistent Background Logic ---
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

  return (
    <section id="contact" className="relative py-24 bg-[#121212] overflow-hidden font-['Poppins'] text-white text-left">
      
      {/* Background Dots Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
                <Zap size={14} className="fill-blue-400" />
                Connect With Us
              </div>
              
              <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.9] tracking-tighter">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                  Something Epic.
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
                Your vision combined with our technical expertise leads to digital excellence. Let’s start the conversation.
              </p>
            </div>

            {/* Contact Tiles */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Mail size={20} />, label: 'Email Support', value: 'hello@techflow.com' },
                { icon: <Phone size={20} />, label: 'Quick Call', value: '+92 300 1234567' },
                { icon: <MapPin size={20} />, label: 'Headquarters', value: 'Tech Hub, Karachi, Pakistan' }
              ].map((item, idx) => (
                <div key={idx} className="group bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-5 hover:bg-white/[0.08] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">{item.label}</p>
                    <p className="text-white font-bold group-hover:text-blue-400 transition-colors tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <ShieldCheck className="text-blue-400" size={28} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#121212] animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-none mb-1">Secure Response</h4>
                <p className="text-gray-500 text-xs font-medium">We typically reply within 2 business hours.</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: GLASS FORM --- */}
          <div className="lg:col-span-7">
            <div className="relative bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <form className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Project Category</label>
                  <div className="relative">
                    <select className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                        <option className="bg-[#121212]">Custom Software Development</option>
                        <option className="bg-[#121212]">AI & Machine Learning</option>
                        <option className="bg-[#121212]">SaaS Solutions</option>
                        <option className="bg-[#121212]">Cloud Infrastructure</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <Globe size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.2em] ml-1">Message Details</label>
                  <textarea 
                    rows="4"
                    placeholder="Briefly describe your project goals..."
                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="group w-full py-5 bg-blue-600 rounded-2xl text-white font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 active:scale-95">
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
