import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const canvasRef = useRef(null);

  const posts = [
    {
      title: 'How AI is Transforming Modern Enterprise Software',
      category: 'Artificial Intelligence',
      date: '12 March 2024',
      author: 'Tech Lead',
      image: 'https://www.zoondia.com/wp-content/uploads/2025/11/How-AI-Is-Transforming-Enterprise-Software-Development-1.jpg'
    },
    {
      title: 'The Future of Scalable Cloud Architectures',
      category: 'Cloud Solutions',
      date: '08 March 2024',
      author: 'DevOps Expert',
      image: 'https://cdn.prod.website-files.com/65e6d3081f98733f1b369f14/6825e48459d541af18dc7f09_Visual-Key-Components-of-cloud-architecture.webp'
    },
    {
      title: 'Best Practices for Secure SaaS Development',
      category: 'Cyber Security',
      date: '05 March 2024',
      author: 'Security Architect',
      image: 'https://xtrasaas.com/wp-content/uploads/2025/10/SaaS-Development-in-2025-Best-Practices-for-Secure-Scalable-and-Future-Ready-Apps-1024x576.jpg'
    },
  ];

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
    <section id="Blog" className="relative py-24 bg-[#121212] overflow-hidden font-['Poppins'] text-white text-left">
      
      {/* Background Dots Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase border border-blue-400/20">
            OUR INSIGHTS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Latest Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Updates.</span>
          </h2>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.08] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-bold tracking-wide shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Content Padding */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-4 text-gray-400 text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-blue-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-blue-400" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-snug mb-6 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                {/* Action Link */}
                <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Read Article 
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
